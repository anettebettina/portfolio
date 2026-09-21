import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import "./VideoPlayer.scss";
import StyleContext from "../../contexts/StyleContext";

const YOUTUBE_API_SRC = "https://www.youtube.com/iframe_api";

// The IFrame API is loaded once for the whole page, no matter how many
// players mount. Later callers reuse the same promise.
let youtubeApiPromise = null;

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) {
    return Promise.resolve(window.YT);
  }
  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousReady) previousReady();
        resolve(window.YT);
      };
      if (!document.querySelector(`script[src="${YOUTUBE_API_SRC}"]`)) {
        const tag = document.createElement("script");
        tag.src = YOUTUBE_API_SRC;
        tag.async = true;
        tag.onerror = () => {
          youtubeApiPromise = null;
          reject(new Error("YouTube IFrame API failed to load"));
        };
        document.head.appendChild(tag);
      }
    });
  }
  return youtubeApiPromise;
}

// requestFullscreen is unprefixed everywhere except older Safari.
function getFullscreenRequester(element) {
  return element.requestFullscreen || element.webkitRequestFullscreen || null;
}

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function exitFullscreen() {
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  if (exit) return exit.call(document);
}

export default function VideoPlayer({videoId, title}) {
  const {isDark} = useContext(StyleContext);
  const cardRef = useRef(null);
  const hostRef = useRef(null);
  const playerRef = useRef(null);
  const isReadyRef = useRef(false);
  const isInViewRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [canFullscreen] = useState(
    () =>
      document.fullscreenEnabled !== false &&
      !!getFullscreenRequester(document.documentElement)
  );

  // Play only while the card is on screen. Called whenever the player becomes
  // ready or the card's visibility changes.
  const syncPlayback = useCallback(() => {
    const player = playerRef.current;
    if (!player || !isReadyRef.current) return;
    if (isInViewRef.current) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi()
      .then(YT => {
        if (cancelled || !hostRef.current) return;
        // The API replaces its target element with an iframe, so give it a
        // throwaway child instead of a node React manages.
        const target = document.createElement("div");
        hostRef.current.appendChild(target);
        playerRef.current = new YT.Player(target, {
          width: "100%",
          height: "100%",
          videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1
          },
          events: {
            onReady: () => {
              isReadyRef.current = true;
              syncPlayback();
            }
          }
        });
      })
      .catch(() => {
        if (!cancelled) setHasFailed(true);
      });

    return () => {
      cancelled = true;
      isReadyRef.current = false;
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
      playerRef.current = null;
    };
  }, [videoId, syncPlayback]);

  useEffect(() => {
    const card = cardRef.current;
    if (typeof IntersectionObserver === "undefined") {
      // No observer support: behave like an always-visible card.
      isInViewRef.current = true;
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        isInViewRef.current = entries[entries.length - 1].isIntersecting;
        syncPlayback();
      },
      {threshold: 0.5}
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [syncPlayback]);

  useEffect(() => {
    function onFullscreenChange() {
      const inFullscreen =
        !!cardRef.current && getFullscreenElement() === cardRef.current;
      setIsFullscreen(inFullscreen);
      const player = playerRef.current;
      if (player && isReadyRef.current) setIsMuted(player.isMuted());
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullscreenChange
      );
    };
  }, []);

  function toggleMute() {
    const player = playerRef.current;
    if (!player || !isReadyRef.current) return;
    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }

  function toggleFullscreen() {
    if (getFullscreenElement() === cardRef.current) {
      exitFullscreen();
      return;
    }
    const request = getFullscreenRequester(cardRef.current);
    if (!request) return;
    // Unmute inside the click handler so the browser still counts it as
    // part of the user's gesture.
    const player = playerRef.current;
    if (player && isReadyRef.current) {
      player.unMute();
      setIsMuted(false);
    }
    const result = request.call(cardRef.current);
    if (result && result.catch) result.catch(() => {});
  }

  if (hasFailed) {
    return (
      <a
        className="video-player-fallback"
        href={`https://youtu.be/${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    );
  }

  return (
    <div
      ref={cardRef}
      className={
        isDark ? "dark-video-card video-player-card" : "video-player-card"
      }
    >
      <div
        ref={hostRef}
        className="video-player-frame"
        role="region"
        aria-label={title || "Talk video"}
      ></div>
      <div className="video-player-controls">
        <button
          type="button"
          className="video-player-button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          <i
            className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}
          ></i>
        </button>
        {canFullscreen && (
          <button
            type="button"
            className="video-player-button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
            title={isFullscreen ? "Exit full screen" : "Full screen"}
          >
            <i
              className={isFullscreen ? "fas fa-compress" : "fas fa-expand"}
            ></i>
          </button>
        )}
      </div>
    </div>
  );
}
