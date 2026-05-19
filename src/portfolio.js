/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anette Lavu",
  title: "Hi, I'm Anette",
  subTitle: [
    "I am a service manager with passion for problem solving and I thrive under pressure.",
    "...",
    "..."
  ],
  resumeLink:
    "https://drive.google.com/file/d/1cEe_pp0G07tnOVEU622JAqqqSYrPkL-t/view?usp=sharing",
  displayGreeting: true
};




// Skills Section

const skillsSection = {
  title: "What I Build",
  subTitle:
    "My core stack spans ML model development and deployment, computer vision pipelines, and backend engineering. I work across the full lifecycle from raw data to production.",
  skills: [
    emoji(
      "I train and deploy computer vision models for real production environments. Object detection, image classification, OCR pipelines. I have shipped all of these into live products."
    ),
    emoji(
      "I build backend APIs and services in Python using FastAPI and Flask. Clean, documented, production-ready."
    ),
    emoji(
      "I design data pipelines and manage SQL databases to support ML workflows, multi-tenant platforms, and analytics."
    ),
    emoji(
      "When the project needs it, I contribute across the full stack using React, TypeScript, and Node.js."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // AI / ML / CV
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "YOLO", fontAwesomeClassname: "fas fa-crosshairs" },
    { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "HuggingFace", fontAwesomeClassname: "fas fa-smile" },
    { skillName: "Ollama", fontAwesomeClassname: "fas fa-server" },

    // Backend
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },

    // Full Stack / Frontend
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },

    // Tools & Environments
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux / Bash", fontAwesomeClassname: "fas fa-terminal" }
  ],
  display: true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "AI, Machine Learning & Deep Learning (PyTorch, TensorFlow, scikit-learn)",
      progressPercentage: "82%"
    },
    {
      Stack: "Computer Vision (YOLO, OpenCV, OCR)",
      progressPercentage: "88%"
    },
    {
      Stack: "Backend Development (Python, FastAPI, Flask)",
      progressPercentage: "78%"
    },
    {
      Stack: "Full-Stack Development (Node.js, TypeScript, React)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Engineer Trainee – Helsinki, Finland",
      company: "Rightware Oy",
      companylogo: require("./assets/images/rightwareLogo.png"),
      date: "April 2025 – August 2025",
      desc: "Rightware builds Kanzi, one of the world's leading automotive HMI platforms, used by major car manufacturers globally. I spent the summer shipping production AI features directly into that product.",
      descBullets: [
        "Object Detection: Improved object detection accuracy from 64% to 83% by migrating from YOLOv7-small to YOLOX-medium with custom dataset augmentation, while keeping real-time inference at ~30fps. The migration also resolved a licensing conflict, making the feature commercially viable for Rightware's clients.",
        "LLM Interface: Built a locally hosted LLM feature via Ollama that let designers make project changes in plain English, removing the need to manually navigate Kanzi's UI for common tasks.",
        "Font Recognition: Built a font classification pipeline trained on 30,000 synthetic images from Google's top 500 font library. Used a modified ResNet50 to achieve 68% accuracy on real-world gauge cluster images, the first automated font recognition feature at Rightware. Combined with EasyOCR for full text extraction.",
        "Layout Adaptation: Designed a resolution adaptation tool using KiwiSolver that recursively parsed and adjusted all UI elements in Kanzi project files, reducing a full day of manual redesign work to approximately 3 seconds.",
        "Collaboration: Worked with 2 senior engineers to deliver these core commercial features I developed. Presented production-ready features to client stakeholders alongside the CEO."
      ]
    },
    {
      role: "Backend & AI Engineer – Remote, Ukraine",
      company: "Ri Software (Startup)",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "Ri-Software was an early-stage startup building an AI-driven business management platform for small businesses, covering sales forecasting, inventory management, HR automation, and ROI tracking.",
      descBullets: [
        "Platform Development: Built backend architecture and REST APIs in Python and Flask, serving 50 beta clients across sales, inventory, HR automation, and ROI tracking.",
        "ML Integration: Trained and integrated ML models for monthly and seasonal sales forecasting, inventory demand planning, and employee productivity scoring.",
        "Data Pipelines: Built data processing pipelines using Pandas, NumPy, and SciPy. Designed and maintained PostgreSQL schemas to support multi-tenant business data across beta clients.",
        "Frontend Collaboration: Integrated backend features into the React and TypeScript frontend, including new sales analytics dashboards and real-time messaging sections."
      ]
    }
  ]
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jyväskylä",
      logo: require("./assets/images/jyuLogo.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "September 2024 – July 2026",
      desc: "Completed my MSc in Artificial Intelligence on a merit-based JYU scholarship. My thesis was part of the AI4Hope project in collaboration with the University of Turku, and received funding from the Shanghai Sci-tech Co-research Program.",
      descBullets: [
        "Thesis: Evaluated ML model performance across clinical PSG and wearable sleep data using TSFEL feature extraction and SHAP interpretability analysis.",
        "Studied advanced Machine Learning, Deep Learning, Computer Vision, and NLP.",
        "Collaborated with researchers at the University of Turku on a funded international research project."
      ]
    },
    {
      schoolName: "IQRA National University",
      logo: require("./assets/images/inuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 – February 2023",
      desc: "Graduated as the top student in my batch with a CGPA of 3.78/4.0 and was awarded a Gold Medal for it.",
      descBullets: [
        "Studied core CS fundamentals including algorithms, data structures, AI, data mining, and software engineering.",
        "Built a real-time driver drowsiness and lane deviation detection system as my thesis, using YOLO and OpenCV.",
        "Developed a strong foundation in image processing, system design, and human-computer interaction."
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Things I built that I am proud of.",
  projects: [
    {
      projectName: "MSc Thesis, Sleep Staging Research (AI4Hope Project)",
      projectDesc:
        "My MSc thesis was part of the AI4Hope project, running in collaboration with the University of Turku and funded by the Shanghai Sci-tech Co-research Program. The goal was to evaluate how well ML models perform when trained on clinical sleep data and tested on wearable device data, and whether feature reduction and harmonization could bridge that gap.",
      projectHighlights: [
        "Built a four-class sleep staging pipeline (AWAKE, LIGHT, DEEP, REM) using MESA and TIHM datasets.",
        "Used TSFEL for time-series feature extraction across multiple physiological signal channels.",
        "Applied SHAP interpretability analysis to identify which features actually drove model decisions across datasets.",
        "Evaluated model generalization across clinical PSG and wearable IoT data, two very different data environments."
      ],
      techStack: ["Python", "TSFEL", "scikit-learn", "SHAP", "Pandas", "NumPy", "Matplotlib"],
      footerLink: []
    },
    {
      projectName: "ImageUpLift, AI Image Enhancer and Converter",
      projectDesc:
        "A personal project I built to solve a real problem, turning low-quality sketches and images into clean, high-resolution or vector outputs. Users can upload an image, pick a mode (enhance, vectorize, or outline), preview the result, and track their conversion history.",
      techStack: ["FastAPI", "ESRGAN", "OpenCV", "CLIP", "React", "Docker"],
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/DevHassanMehdi/ImageUpLift"
        }
      ]
    },
    {
      projectName: "Driving Negligence Dissuader System (DNDS)",
      projectDesc:
        "My Bachelor's thesis project, which received a 4/4 grade. A real-time computer vision system that monitors driver drowsiness through facial landmark tracking, detects lane deviation, and identifies nearby vehicles, animals, and pedestrians using YOLO. When risk is detected, the system alerts the driver immediately.",
      techStack: ["Python", "YOLO", "OpenCV", "TensorFlow", "DLib", "Haar Cascades", "Raspberry Pi"],
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/DevHassanMehdi/Driving_Negligence_Dissuader_System"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognitions and Accomplishments"),
  subtitle: "A curated collection of my key awards, publications, and certifications.",

  achievementsCards: [
    {
      title: "Research Publication, IEEE PIC 2024",
      subtitle: "Fuzzy-Based Atrous Convolution for Brain Tumor Detection Using MRI",
      image: require("./assets/images/ieeeLogo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/10892686"
        }
      ],
      desc: "I co-authored this paper with researchers from the University of Turku the University of Sydney. We proposed a custom neural architecture combining fuzzy logic with dilated convolutions to extract features from MRI scans. The model achieved 98.8 to 99.7% classification accuracy while reducing trainable parameters. Published at IEEE PIC 2024."
    },
    {
      title: "International Research Funding",
      subtitle: "Shanghai Sci-tech Co-research Program, Project No. 25HB2703300",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [],
      desc: "My MSc thesis received external funding from the Shanghai Sci-tech Co-research Program as part of the AI4Hope project. The funding supported my research on ML model evaluation across clinical and wearable sleep data, in collaboration with the University of Turku."
    },
    {
      title: "JYU Scholarship Award",
      subtitle: "Merit-based Scholarship, University of Jyväskylä, Finland",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Scholarship Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1pdotUcegOjTFgrutM_838y84hTkvPJsD/view?usp=sharing"
        }
      ],
      desc: "I received a scholarship from the University of Jyväskylä for strong academic performance and demonstrated potential in the MSc Artificial Intelligence program. Competitive award granted to a small number of incoming students each year."
    },
    {
      title: "Gold Medal, Top Graduate",
      subtitle: "Highest CGPA in the Bachelor's Program, Iqra National University",
      image: require("./assets/images/goldmedalLogo.png"),
      imageAlt: "Gold Medal Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1IZjJ9BccqxCm_dp_mNp8mLxok8LDVL3W/view?usp=sharing"
        }
      ],
      desc: "I was awarded a Gold Medal for securing the highest CGPA of 3.78/4.0 across my entire Computer Science graduating cohort. Four years of consistent academic performance across every subject in the program."
    },
    {
      title: "Microsoft Azure Developer Associate",
      subtitle: "Cloud Certification, Microsoft",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Azure Certification Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1gH1zb16ms7QoS4glPHcJ24xLV8L5Rhy0/view?usp=sharing"
        }
      ],
      desc: "I am also certified in Azure cloud services covering app development, deployment workflows, and CI/CD pipelines. Relevant to ML model deployment and cloud-based backend development, which I have applied in production projects."
    },
    {
      title: "Degree Tutor, University of Jyväskylä",
      subtitle: "Mentor for International Students",
      image: require("./assets/images/jyyLogo.png"),
      imageAlt: "University of Jyväskylä Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1yuB4AV57TvEVZmWnvMf4oCDZ-vxqWIPK/view?usp=sharing"
        }
      ],
      desc: "I was selected to serve as a degree tutor for incoming international students at JYU, to support their academic and social integration. This experience gave me training on group leadership and intercultural communication."
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle:
    "I am currently looking for AI and ML engineering roles in Finland. If you have an opportunity or just want to connect, my inbox is open.",
  email_address: "itshmehdi@gmail.com"
};

// Social Media Links

const socialMediaLinks = {
  gmail: "itshmehdi@gmail.com",
  github: "https://github.com/DevHassanMehdi",
  linkedin: "https://www.linkedin.com/in/devhassanmehdi/",
  kaggle: "https://www.kaggle.com/devhassan",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "devhassanmehdi",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
