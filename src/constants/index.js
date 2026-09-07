import project1 from "../assets/projects/saraya.png";
import project2 from "../assets/projects/food.png";
import project3 from "../assets/projects/CINEMA.png";
import project4 from "../assets/projects/ims.png";
import project5 from "../assets/projects/ceytour.png";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/sp.jpg";
import project8 from "../assets/projects/gp.jpg";

export const HERO_CONTENT = `Full Stack Developer specializing in MERN and Next.js, with hands-on experience building web applications since 2022. I have completed a BEng (Hons) in Software Engineering from the University of Westminster and gained professional software engineering experience at SLT-MOBITEL. I build responsive, scalable, and user-focused applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB.`;

export const ABOUT_TEXT = `I am a Full Stack Developer with a BEng (Hons) in Software Engineering from the University of Westminster and one year of professional software engineering experience at SLT-MOBITEL. I have been developing software and working with modern web technologies since 2022, building academic, personal, and production-oriented applications.

My core expertise includes the MERN stack and Next.js, with a strong focus on React.js, TypeScript, Node.js, Express.js, MongoDB, RESTful APIs, authentication, role-based access control, responsive UI development, and Git/GitHub workflows.

During my industry placement at SLT-MOBITEL, I contributed to full-stack software projects including a Cinema Seat Reservation System and an enterprise Internship Management System. I also developed an AI-powered Smart Health Assistant as my Final Year Project, integrating a MERN web application with Python-based machine learning models.

I enjoy solving software engineering problems, learning modern technologies, and building reliable applications that provide meaningful user experiences. I am currently seeking opportunities as a Full Stack Developer, Software Engineer, or Associate Software Engineer.`;

export const PROJECTS = [
  {
    title: "Shopstore E-Commerce Platform",
    image: project5,
    description:
      "A modern full-stack e-commerce platform designed for online retail, featuring product management, shopping cart functionality, authentication, dynamic filtering, and responsive user interfaces.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS"
    ],
    githubLink: ""
  },
  {
    title: "AI-Powered Smart Health Assistant",
    image: project6,
    description:
      "A full-stack AI-powered health assistant developed as a Final Year Project. The application provides personalized dietary recommendations, health tracking, medical report processing, and medication scheduling by integrating a MERN application with Python-based machine learning models.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "XGBoost",
      "REST APIs",
      "Material UI"
    ],
    githubLink: "https://fyp-five-lime.vercel.app/"
  },
  {
    title: "Cinema Seat Reservation System",
    image: project3,
    description:
      "A full-stack cinema reservation application developed during my Software Engineering Internship at SLT-MOBITEL. The system supports cinema and screening management, seat selection, availability tracking, and reservation workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git/GitHub"
    ],
    githubLink: "https://github.com/SAwandya/Reservation-system"
  },
  {
    title: "SLT Internship Management System",
    image: project4,
    description:
      "An enterprise-level Internship Management System developed during my Software Engineering Internship at SLT-MOBITEL. The platform supports intern onboarding, task management, performance-related workflows, authentication, and role-based access control.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Git/GitHub"
    ],
    githubLink: "https://talenttrail.slt.lk/"
  },
  {
    title: "Saraya Product & Agent Management System",
    image: project1,
    description:
      "A MERN-stack web application combining an online shopping experience with an agent management system. The application includes authentication, product management, shopping cart functionality, agent roles, and CRUD operations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap"
    ],
    githubLink:
      "https://github.com/Achira2001/SDGP-Project-Implementation-Saraya-Products-using-Mern-Stack.git"
  },
  {
    title: "Food Delivery Application",
    image: project2,
    description:
      "A full-stack food ordering application that allows users to browse food items, place orders, and manage their ordered food through an interactive web interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Bootstrap"
    ],
    githubLink:
      "https://github.com/Achira2001/Food-Delivery-App.git"
  }
];

export const EXTRA = [
  {
    title: "Sports",
    image: project7,
    description:
      "I enjoy staying active and maintaining a healthy balance outside of software development."
  },
  {
    title: "Graphic Designing",
    image: project8,
    description:
      "I have experience exploring graphic and visual design, including creative digital work and logo design."
  }
];

export const CONTACT = {
  address: "Colombo, Sri Lanka",
  phoneNo: "+94 76 493 7117",
  email: "achirashashik1@gmail.com"
};
