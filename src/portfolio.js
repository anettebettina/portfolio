/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/LoaderCat.json"; // Rename to your file name for custom animation

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
    "I am IT professional with hint of nerdiness and sense of humor. As a service manager with passion for problem solving I thrive under pressure. I am capable of quick decision making when needed. I don't hesitate to demand nor take necessary action in order to accomplish the target I am working for.",
    "The last six years have taught me a lot about building and running an IAM service, from IGA migration and implementation to M&A's, vendor and company structure changes, and carve-out planning. I've learned to prioritize and see the big picture: where a decision leads, and what the benefits and risks are for the company. I'm growing into an architect or leader in IAM, someone who isn't afraid of challenges and looks for solutions that benefit the business, while creating value through security and compliance."
  ],
  resumeLink:
    "https://drive.google.com/file/d/1CX_RzzcSThBuaJS7syr5j8PjdS1yt7wi/view",
  displayGreeting: true
};


// Skills Section

const skillsSection = {
  title: "Core Skills & Tools",
  subTitle:
    "I have strong professional experience from identity and access management mainly on Saviynt SaaS Platform as a project manager and as a service manager. I have been part of ramping up IAM service as well as migration project.",
  skills: [
    emoji(
      "I work with key users like application owners, suppliers and other IT stakeholders in close co-operation understanding organizations needs and molding them into practical solutions. I have been designing, building and running training sessions, materials and even aligning companies IAM policies."
    ),
    emoji(
      "Identity and Access Management (IAM) is my passion and I am fully committed to ensure security through risk management, access reviews, reconciliation as well as following least-privileged principle."
    ),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Tools
    { skillName: "Saviynt", fontAwesomeClassname: "fas fa-user-shield" },
    { skillName: "ServiceNow", fontAwesomeClassname: "fas fa-headset" },
    { skillName: "Microsoft Entra ID & AD", fontAwesomeClassname: "fas fa-id-badge" },
    { skillName: "Confluence & Jira", fontAwesomeClassname: "fas fa-comments" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "AI tools and soft scripting", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Happy Signals", fontAwesomeClassname: "fas fa-smile" },
  
    // Skills
    { skillName: "Service Management", fontAwesomeClassname: "fas fa-concierge-bell" },
    { skillName: "Project Management", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Vendor Management", fontAwesomeClassname: "fas fa-handshake" },
  ],
  display: true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Identity Governance & Administration (Saviynt IGA, RBAC, Access Certification)",
      progressPercentage: "90%"
    },
    {
      Stack: "Service & Vendor Management (ServiceNow, multi-vendor delivery)",
      progressPercentage: "88%"
    },
    {
      Stack: "Compliance & Risk (ISO 27001, GDPR, Access Reviews)",
      progressPercentage: "85%"
    },
    {
      Stack: "Stakeholder Communication & Training",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "IAM Service Manager",
      company: "Valmet",
      companylogo: require("./assets/images/valmetLogo.png"),
      date: "2021 - Present",
      desc: "I own the strategy, roadmap, and day-to-day development of Valmet's Saviynt IGA platform, across our full identity estate of 20,000 employees and 10,000 external users, 300+ applications, and over a million access rights.",
      descBullets: [
        "Own service delivery as a managed service in a multi-vendor environment: a 5-person ServiceNow team plus ~10 additional subcontractors, handling around 200 incident tickets and 60 service requests a month. I shape how the process works and refine it until it's fully optimized, stepping in personally on the toughest issues.",
        "Designed and rolled out company-wide access review campaigns, business by business, recovering 10%+ of standing access and an estimated €500K in savings.",
        "Hold full accountability for an annual IAM budget of €600-700K.",
        "Raised end-user satisfaction from 60 to 80 in HappySignals over three years.",
        "Train application owners and stakeholders directly, speak publicly on IAM including a talk at a Whitehall Media conference in the Netherlands to 200+ attendees, and run our internal IAM news site on SharePoint plus the ServiceNow knowledge base.",
        "Led IAM through multiple M&A integrations, onboarding up to 4,000 identities within hours, and supported HR and the business through major organizational change, shaping what data and process changes were needed to protect continuity.",
        "Built the disaster recovery plan for the entire IGA platform.",
        "Negotiate pricing and lead partner renewals, including planning and leading a full vendor transition, from selection through team handover.",
        "Currently planning carve-out scenarios for the IGA platform in case of an organizational split."
      ]
    },
    {
      role: "IAM Project Specialist",
      company: "Valmet",
      companylogo: require("./assets/images/valmetLogo.png"),
      date: "2020 - 2021",
      desc: "Hired to lead migration of every application off Valmet's legacy IGA platform onto Saviynt, taking ownership of the initiative within three months.",
      descBullets: [
        "Built the migration framework that let me move 150+ applications in a year and a half without losing pace.",
        "Laid the groundwork the current 300-application platform still runs on."
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
      subHeader: "M.Sc. Mathematical Information Technology",
      duration: "Graduated 2019",
      desc: "Completed my Master's degree in Mathematical Information Technology at the University of Jyväskylä.",
      descBullets: []
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
      projectName: "Legacy IGA to Saviynt Migration",
      projectDesc:
        "Hired at Valmet to lead the migration of every application off our legacy IGA system onto Saviynt. I took ownership of the initiative within three months and built the migration framework that carried it through.",
      projectHighlights: [
        "Migrated 150+ applications in a year and a half without losing pace.",
        "Built the framework the current 300-application platform still runs on today."
      ],
      techStack: ["Saviynt (IGA)", "RBAC Design", "Access Certification"],
      footerLink: []
    },
    {
      projectName: "Company-Wide Access Review Campaign Program",
      projectDesc:
        "Designed and rolled out company-wide access review campaigns at Valmet, business by business, to bring standing access back under control.",
      projectHighlights: [
        "Recovered 10%+ of standing access across the organization.",
        "Delivered an estimated €500K in annual savings."
      ],
      techStack: ["Saviynt (IGA)", "Access Reviews", "ISO 27001", "GDPR"],
      footerLink: []
    },
    {
      projectName: "ServiceNow Support & Process Optimization",
      projectDesc:
        "Own service delivery as a managed service in a multi-vendor environment at Valmet, leading a 5-person ServiceNow team plus around 10 additional subcontractors.",
      projectHighlights: [
        "Handle around 200 incident tickets and 60 service requests a month.",
        "Raised end-user satisfaction from 60 to 80 in HappySignals over three years.",
        "Shape how the process works and refine it until it's fully optimized, stepping in personally on the toughest issues."
      ],
      techStack: ["ServiceNow", "Jira", "Confluence", "Vendor Management"],
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognitions and Accomplishments"),
  subtitle: "A few of my key certifications and milestones.",

  achievementsCards: [
    {
      title: "Saviynt L100 Certification",
      subtitle: "Platform Certification, Saviynt",
      image: require("./assets/images/saviyntLogo.png"),
      imageAlt: "Saviynt Logo",
      footerLink: [],
      desc: "Certified on Saviynt, the IGA platform I've built and run Valmet's IAM function on since 2020."
    },
    {
      title: "ITIL 4 Foundation",
      subtitle: "Service Management Certification",
      image: require("./assets/images/itilLogo.png"),
      imageAlt: "ITIL Logo",
      footerLink: [],
      desc: "Certified in ITIL 4, which shapes how I run IAM as a managed service, from incident handling to continual process improvement."
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "Sharing what I've learned about running IAM as a real, working service.",
  talks: [
    {
      title: "Whitehall Media Conference Talk",
      subtitle: "Netherlands, 200+ attendees",
      slides_url: "",
      event_url: "",
      video_id: "TvcboQR8A6o"
    }
  ],
  display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle:
    "I am currently curious about opportunities to grow and ready to take new challenges. I am open for IAM architect, owner or team lead positions.",
  email_address: "anette.lavu@live.fi"
};

// Social Media Links

const socialMediaLinks = {
  gmail: "anette.lavu@live.fi",
  linkedin: "https://www.linkedin.com/in/anette-lavu/",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "",
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