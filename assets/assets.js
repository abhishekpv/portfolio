import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import react_logo from "./react.png";
import jira from "./Jira.png";
import postman from "./postman.png";
import storyBook from "./storybook.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import open_link_black from "./open-link-black.png";
import open_link_white from "./open-link-white.png";
import qburst from "./qburst.png";
import nextjs from "./nextjs.png";
import html_logo from "./html.png";
import css_logo from "./css_logo.png";
import javascript_logo from "./javascript_logo.png";
import typescript_logo from "./typescript_logo.png";
import express_logo from "./express_logo.png";
import node_logo from "./nodejs_logo.png";
import taliwind_logo from "./tailwind_logo.png";
import redux_logo from "./redux_logo.png";
import python_logo from "./python.png";
import langchain_logo from "./langchain-color.svg";
import myFitApp_logo from "./myFitApp.png";

export const assets = {
  myFitApp_logo,
  user_image,
  langchain_logo,
  python_logo,
  javascript_logo,
  typescript_logo,
  express_logo,
  node_logo,
  taliwind_logo,
  redux_logo,
  nextjs,
  css_logo,
  html_logo,
  qburst,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  open_link_black,
  open_link_white,
  git,
  jira,
  postman,
  storyBook,
  mongodb,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  react_logo,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    id: 1001,
    title: "KIF Products",
    link: "https://kifproducts.com/",
    tag: "Web app",
    description:
      "Live Product Listing Website built using ReactJS for the frontend and Node.js/Express.js for the backend, with MySQL as the database. It is designed to display product listings for various companies under the KIF umbrella, ensuring a seamless and high-performance user experience",
    techs: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MySQL"],
    bgImage: "/kifproducts.png",
  },
  {
    id: 1002,
    title: "TripCast",
    link: "https://github.com/abhishekpv/tripcast",
    description:
      "AI-powered travel app, built with React Native, Gemini API, Redux Toolkit, and Tailwind CSS, generates personalized itineraries, adapts plans based on real-time weather, and highlights key attractions. It offers a seamless, responsive, and intelligent travel experience with dynamic updates and a modern UI.",
    tag: "Mobile App",
    techs: ["React Native", "Redux Toolkit", "Tailwind CSS", "Gemini API"],
    bgImage: "/tripcast.png",
  },
  {
    id: 1003,
    title: "Lucky Check",
    link: "https://github.com/abhishekpv/luckycheck",
    description:
      "React Native application utilizes Cheerio, Node.js, and Express.js to scrape and display real-time Kerala lottery results. It fetches winner details directly from the official lottery website, allowing users to check their ticket status and prize amounts instantly. Designed for efficiency and ease of use, the app ensures a seamless experience with quick data retrieval and a user-friendly interface. ",
    tag: "Mobile App",
    techs: ["React Native", "Node Js", "Express Js", "Cheerio"],
    bgImage: "/luckyCheck.png",
  },
  {
    id: 1004,
    title: "InterVox",
    link: "https://github.com/abhishekpv/interview-platform",
    description:
      "An AI-driven voice interview platform using Next.js, Vapi for voice-assisted AI workflows, and Firebase for authentication. The platform allows users to create and attend AI-powered voice interviews, providing real-time conversational interaction and generating personalized feedback with key improvement areas after each session.",
    tag: "Web app",
    demo: "https://intervox.vercel.app/",
    demoTitle: "intervox.vercel.app",
    techs: ["Next Js", "Tailwind CSS", "Firebase", "Vapi workflow"],
    bgImage: "/intervox.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const experienceData = [
  {
    companyId: 1002,
    companyName: "myFitApp",
    CompanyLogo: assets.myFitApp_logo,
    startDate: "June 2025",
    companyLink: "https://www.myfitapp.com/",
    endDate: "Present",
    positions: [
      {
        position: "Software Engineer",
        startDate: "Aug 2023",
        endDate: "Present",
        duration: "less than a year",
        location: "Remote (India)",
        locationHref: "https://maps.app.goo.gl/9FisnzDiT8Hrd1Ac8",
        responsobilities: [
          "Yet to be updated"
        ],
      },
    ],
  },
  {
    companyId: 1001,
    companyName: "QBurst",
    CompanyLogo: assets.qburst,
    startDate: "Aug 2023",
    companyLink: "https://www.qburst.com/",
    endDate: "Jun 2025",
    positions: [
      {
        position: "Software Engineer",
        startDate: "Aug 2023",
        endDate: "Jun 2025",
        duration: "2 years",
        location: "Thrissur, Kerala",
        locationHref: "https://maps.app.goo.gl/VDedLTtuXk19HucU9",
        responsobilities: [
          "Developed scalable frontend solutions, reducing load times by 25% and enhancing maintainability by 20%",
          "Implemented Formik for form handling, boosting form accuracy by 30% and improving reusability",
          "Authored 100+ Jest unit tests to ensure component reliability and functionality",
          "Introduced role-based access control, enhancing security and boosting performance and user satisfaction",
          "Deployed a local Large Language Model (LLM) to ensure data privacy and enable secure internal usage",
          "Developed an AI assistant for an internal resource planner application using the locally deployed LLM, improving resource allocation efficiency and decision-making"
        ],
      },
    ],
  },
];

export const navItems = [
  {
    label: "Home",
    href: "#top",
    class: "",
  },
  {
    label: "About",
    href: "#about",
    class: "",
  },
  {
    label: "Experience",
    href: "#experience",
    class: "",
  },
  {
    label: "Skills",
    href: "#skills",
    class: "",
  },
  {
    label: "Works",
    href: "#works",
    class: "",
  },
  {
    label: "Contact",
    href: "#contact",
    class: "",
  },
];

export const skills = [
  {
    title: "React Js",
    icon: assets.react_logo,
    percentage: "95%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "Next Js",
    icon: assets.nextjs,
    blackIcon: true,
    percentage: "90%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "HTML",
    icon: assets.html_logo,
    percentage: "95%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "CSS",
    icon: assets.css_logo,
    percentage: "95%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "JavaScript",
    icon: assets.javascript_logo,
    percentage: "95%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "TypeScript",
    icon: assets.typescript_logo,
    percentage: "90%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "Redux Tool Kit",
    icon: assets.redux_logo,
    color: "#61DAFB",
    percentage: "85%",
    offsetColor: "61DAFG",
  },
  {
    title: "Tailwind CSS",
    icon: assets.taliwind_logo,
    color: "#61DAFB",
    percentage: "95%",
    offsetColor: "61DAFG",
  },
  {
    title: "React Native",
    icon: assets.react_logo,
    color: "#61DAFB",
    percentage: "70%",
    offsetColor: "61DAFG",
  },
  {
    title: "Node Js",
    icon: assets.node_logo,
    color: "#61DAFB",
    percentage: "70%",
    offsetColor: "61DAFG",
  },
  {
    title: "Express Js",
    icon: assets.express_logo,
    blackIcon: true,
    color: "#61DAFB",
    percentage: "70%",
    offsetColor: "61DAFG",
  },
  {
    title: "Python",
    icon: assets.python_logo,
    color: "#61DAFB",
    percentage: "70%",
    offsetColor: "61DAFG",
  },
  {
    title: "LangChain",
    icon: assets.langchain_logo,
    color: "#61DAFB",
    percentage: "70%",
    offsetColor: "61DAFG",
  },
  {
    title: "Storybook",
    icon: assets.storyBook,
    percentage: "70%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "MongoDB",
    icon: assets.mongodb,
    percentage: "70%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "Git",
    icon: assets.git,
    percentage: "90%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "Jira",
    icon: assets.jira,
    percentage: "85%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
  {
    title: "Postman",
    icon: assets.postman,
    percentage: "85%",
    color: "#61DAFB",
    offsetColor: "61DAFG",
  },
];

export const toolsData = [
  {
    title: "VSCode",
    icon: assets.vscode,
  },
  {
    title: "Git",
    icon: assets.git,
  },
  {
    title: "Jira",
    icon: assets.jira,
  },
  {
    title: "Postman",
    icon: assets.postman,
  },
  {
    title: "MongoDB",
    icon: assets.mongodb,
  },
];
