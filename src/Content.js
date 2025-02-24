// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import js from "./assets/images/Skills/js.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import reactjs from "./assets/images/Skills/react.png";
import java from "./assets/images/Skills/Java.png";
import sql from "./assets/images/Skills/sql.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/image1.jpg";
import project2 from "./assets/images/Projects/Screenshot 2025-02-22 214042.png";
import project3 from "./assets/images/Projects/image2.jpg";
import project4 from "./assets/images/Projects/Screenshot 2025-02-22 220948.png";
import project5 from "./assets/images/Projects/image3.jpeg";
// import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Certificate/avtar1.png";
import avatar2 from "./assets/images/Certificate/avatar2.png";
import avatar3 from "./assets/images/Certificate/avatar3.png";
import avatar4 from "./assets/images/Certificate/avatar4.png";

import Hireme_person from "./assets/images/Hero/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
// import { MdArrowForward, MdArrowUpward, MdCall } from "react-icons/md";
import { MdOutlineCastForEducation, MdCall } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import Certificate from "./components/Certificate";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#education",
      icon: MdOutlineCastForEducation,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
   
    firstName: "BHASKAR",
    LastName: "SINGH",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Months of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "A cloud-based design tool.",
        logo: figma,
        li1:"Cloud-based tool for real-time UI/UX design collaboration.",
        li2:"Supports prototyping with interactive transitions and animations.",
        li3:"Uses components and variants for reusable design elements.",
        li4:"Works on all platforms without installation or updates.",
        li5:"Integrates plugins for icons, images, and animations easily."
      },
      {
        name: "Java",
        para: "Java follows OOPs features.",
        logo: java,
        li1:"Object-Oriented – Uses classes and objects for programming.",
        li2:"Platform-Independent – Runs anywhere via JVM (Write Once).",
        li3:"Memory Management – Uses garbage collection for optimization.",
        li4:"Multi-threading – Supports concurrent execution for efficiency.",
        li5:"Secure – Provides runtime security and strong encapsulation."
      },
      {
        name: "Tailwind CSS",
        para: "The utility-first CSS framework.",
        logo: tailwind,
        li1:"Utility-First – Uses utility classes for quick styling.",
        li2:"Responsive Design – Built-in breakpoints for adaptive layouts.",
        li3:"Customizable – Extend styles via configuration file easily.",
        li4:"No Extra CSS – Avoid writing custom CSS files.",
        li5:"Flexbox & Grid – Simplifies layout design with utilities."
      },
      {
        name: "React js",
        para: "A JS library used for building UI.",
        logo: reactjs,
        li1:"Component-Based – Builds UI using reusable, independent components.",
        li2:"Virtual DOM – Optimizes rendering for better performance updates.",
        li3:"Hooks Support – Manages state without using class components.",
        li4:"One-Way Data Flow – Ensures predictable and manageable state updates.",
        li5:"Fast Rendering – Uses reconciliation to update UI efficiently."
      },
      {
        name: "JavaScript",
        para: "Dynamic, asynchronous, fuctional.",
        logo: js,
        li1:"Lightweight – JavaScript is fast and efficient for web.",
        li2:"Dynamic Typing – Variables adapt to different data types.",
        li3:"Event-Driven – Responds to user interactions and events",
        li4:"Asynchronous – Uses callbacks, promises, and async/await handling.",
        li5:"Prototype-Based – Inherits properties via prototype object mechanism."
      },
      {
        name: "MySQL",
        para: "The RDBMS store data in table.",
        logo: sql,
        li1:"Relational Database – Stores data in structured table format.",
        li2:"SQL-Based – Uses structured queries for data manipulation tasks.",
        li3:"ACID-Compliant – Ensures reliability with transaction management support.",
        li4:"Scalable – Handles large databases efficiently with indexing.",
        li5:"Open-Source – Freely available with strong community support."
      },
      {
        name: "HTML-5",
        para: "HyperText Markup Language",
        logo: html,
        li1:"Semantic Elements – Improves readability and SEO optimization.",
        li2:"Audio & Video – Supports multimedia without additional plugins.",
        li3:"Canvas & SVG – Enables graphics and animations in browsers.",
        li4:"Responsive Design – Works well on different screen sizes.",
        li5:"Local Storage – Stores data without needing cookies."
      },
      {
        name: "CSS-3",
        para: "Styling, responsive, animations.",
        logo: css,
        li1:"Responsive Design – Media queries adjust layouts for devices.",
        li2:"Flexbox – Aligns and distributes elements efficiently in containers.",
        li3:"Grid Layout – Creates complex, responsive web page structures easily.",
        li4:"Animations – Enables smooth transitions and keyframe-based effects.",
        li5:"Custom Properties – Variables store reusable CSS values dynamically."
      },
    ],
    icon:  FiArrowUpRight,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development involves creating websites and web applications using frontend (HTML, CSS, JavaScript) and backend (databases, servers, APIs). It ensures functionality, responsiveness, security, and performance for seamless user experiences across devices.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "UI/UX designing focuses on creating intuitive, user-friendly digital experiences. UI (User Interface) enhances visual appeal, while UX (User Experience) ensures seamless interaction, accessibility, and usability for better engagement and satisfaction.",
        logo: services_logo2,
      },
      {
        title: "Java Full Stack Developer",
        para: "Java Full Stack development involves building both frontend and backend applications using Java, Spring Boot, Hibernate, React/Angular, and databases like MySQL. It ensures scalable, secure, and efficient web application development.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    
    project_content: [
      {
        title: "Weather App",
        image: project1,
        link:"https://gregarious-biscotti-795321.netlify.app/",
        git:"https://github.com/BhaskarSingh2312/Weather-App",
      },
      {
        title: "Apple Website",
        image: project2,
        link:"https://apple-website-lake-seven.vercel.app/",
        git:"https://github.com/BhaskarSingh2312/Apple_Website",
      },
      {
        title: "Calculator Website",
        image: project3,
        link:"https://mellow-elf-a17031.netlify.app/",
        git:"https://github.com/BhaskarSingh2312/Calculator",
      },
      {
        title: "Study Smart",
        image: project4,
        link:"https://peppy-biscochitos-54007a.netlify.app/",
        git:"https://github.com/BhaskarSingh2312/StudySmart",
      },
      {
        title: "Salesforce Website-Clone",
        image: project5,
        link:"https://salesforce-clone-bootstrap.netlify.app/",
        git:"https://github.com/BhaskarSingh2312/salesforce-clone",
      },
    ],
  },

Education:{
  title:"Education"
 
},

  Certificate: {
    title: "Certificates",
    subtitle: "MY ACHIVEMENTS",
    certificates_content: [
      {
        review:
          "“Developer and Technology Job Simulation”",
        img: avatar1,
        name: "ACCENTURE",
        link: "/certificates/Accenture Certificate.pdf",
      },
      {
        review:
          "“Technology Software Development Job Simulation”",
        img: avatar2,
        name: "CITI",
        link: "/certificates/Citi-Bhaskar.pdf",
      },
      {
        review:
          "“Certificate of Completion in Success Mindset”",
        img: avatar3,
        name: "HP LIFE",
        link: "/certificates/certificate.pdf",
      },
      {
        review:
          "“Certificate of Participation in Codium Intern Quiz Round-1”",
        img: avatar4,
        name: "UNSTOP",
        link: "/certificates/b6ea3ddb-2053-4cfe-8c78-794c992207ad (1).pdf",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    // image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  ContactUs: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "bhaskar23.bs@gmail.com",
        icon: GrMail,
        link: "mailto:bhaskar23.bs@gmail.com",
      },
      {
        text: "+91 9305582891",
        icon: MdCall,
        link: "tel:+91-9305582891",
      },
      {
        text: "BhaskarSingh/LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/bhaskar-singh-133305261/",
      },
      {
        text: "BhaskarSingh/Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/thakur._0412/",
      },

      
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};