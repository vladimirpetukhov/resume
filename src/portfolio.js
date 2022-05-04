/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Vladimir Petukhov",
  title: "Hi all, I'm Vladimir",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Angular / Nodejs / .NET and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NIrFgdNM8-JgoFzP9yv2gKCvyZhAQFLe/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vladimirpetukhov",
  gitlab: "https://gitlab.com/vladimirpetukhov1",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "vpetukhov.dev@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  linkedin: "https://linkedin.com/in/vvp1984",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Angular, React and Blazor"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Azure / Digital Ocean"
    ),
    emoji(
      "⚡ Deep Back-End with .Net and NodeJs microservices"
    ),
    emoji(
      "⚡ Just start and love Ruby and Micro Front end"
    ),
    emoji(
      "⚡ I love mix technologies like MVC + ReactJs, WebApi + Blazor + ReactJs and etc..."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
    },
    {
      skillName: "nestjs",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
    },
    {
      skillName: "apache",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-plain.svg"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
    },
    {
      skillName: "mongo",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Burgas Free University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Software Engineering",
      duration: "September 2017 - April 2022",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Software University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Full Stack .Net Developer",
      duration: "May 2017 - September 2019",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: ".Net", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "70%"
    },
    {
      Stack: "NodeJs",
      progressPercentage: "70%"
    },
    {
      Stack: "ReactJs",
      progressPercentage: "60%"
    },
    {
      Stack: "VueJs",
      progressPercentage: "40%"
    },

  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const hobbies = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ESP32",
      progressPercentage: "70%"
    },
    {
      Stack: "Linux Servers",
      progressPercentage: "60%"
    },

  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Angular Developer",
      company: "eLando",
      companylogo: require("./assets/images/elando.png"),
      date: "September 2021 – Present",
      desc:
        "Create, support, mentoring",
      descBullets: [
        "Custom building applications",
        "Develop new features",
        "Bug fixing"
      ]
    },
    {
      role: "Full Stack .Net Developer",
      company: "Semansys",
      companylogo: require("./assets/images/Semansys.png"),
      date: "December 2020 – September 2021",
      desc:
        "We build the Blazor Client, API, Azure Functions for the XBRL integration and validation requirements."
    },
    {
      role: "Full Stack Web Developer",
      company: "Nexgis",
      companylogo: require("./assets/images/GISExplorerLogo_200x65.jpg"),
      date: "August 2019 – December 2020",
      desc:
        "Migrating old Delphi Desktop GIS Software to cloud"
    },
    {
      role: ".Net Technologies",
      company: "Bisoft Ltd",
      companylogo: require("./assets/images/Bisoft_New.png"),
      date: "January 2018 – August 2019",
      desc:
        "Migrating old web apps, develop new applications, support"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "vladimirpetukhov", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/maaltijdDeal.png"),
      projectName: "Maaltijddeal",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.maaltijddeal.nl/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Semansys.png"),
      projectName: "Semansys next",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://semansys.com/semansys-developer-portal/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_infocape300.png"),
      projectName: "NetMed.360",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cloud.netmed360.com/"
        }
      ]
    },
    {
      image: require("./assets/images/allianz.png"),
      projectName: "Allianz",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portal.allianz.bg/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(359) 894 345 591",
  email_address: "vpetukhov.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  hobbies
};
