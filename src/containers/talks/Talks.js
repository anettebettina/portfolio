import React, {useContext} from "react";
import "./Talks.scss";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          {talkSection.talks.map((talk, i) => {
            return (
              <div key={i} className="talk-entry">
                {talk.video_id && (
                  <VideoPlayer videoId={talk.video_id} title={talk.title} />
                )}
                <h2 className="talk-entry-title">{talk.title}</h2>
                <p
                  className={
                    isDark
                      ? "dark-mode talk-entry-subtitle"
                      : "subTitle talk-entry-subtitle"
                  }
                >
                  {talk.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
