import project1 from "../assets/projects/saraya.png";
import project2 from "../assets/projects/food.png";
import project3 from "../assets/projects/CINEMA.png";
import project4 from "../assets/projects/ims.png";
import project5 from "../assets/projects/ss.png";
import project6 from "../assets/projects/fyp.png";
import project7 from "../assets/projects/sp.jpg";
import project8 from "../assets/projects/gp.jpg";

export const HERO_CONTENT = `Full Stack Developer specializing in MERN and Next.js, with 1 year of professional software engineering experience at SLT-Mobitel and hands-on development experience since 2022. BEng (Hons) Software Engineering graduate from the University of Westminster, experienced in building scalable, responsive web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB.`;

export const ABOUT_TEXT = `I am a Full Stack Developer and BEng (Hons) Software Engineering graduate from the University of Westminster, with 1 year of professional software engineering experience at SLT-Mobitel and hands-on software development experience since 2022.

My core expertise is in the MERN stack and Next.js, with a strong focus on React.js, TypeScript, Node.js, Express.js, MongoDB, RESTful APIs, authentication, role-based access control, responsive UI development, and Git/GitHub.

During my Software Engineering Internship at SLT-MOBITEL, I contributed to production-oriented applications including a Cinema Seat Reservation System and an enterprise Internship Management System. I worked on frontend and backend development, REST APIs, database management, authentication, testing, debugging, and collaborative development.

My Final Year Project was an AI-Powered Smart Health Assistant, where I integrated a MERN web application with Python-based XGBoost machine learning models and a rule-based recommendation engine.

I enjoy solving software engineering problems, learning modern technologies, and building reliable, user-focused applications. I am currently seeking opportunities as a Full Stack Developer, Software Engineer, or Associate Software Engineer.`;

export const PROJECTS = [
  {
    title: "Shopstore E-Commerce Platform",
    image: project5,
    description:
      "A full-stack e-commerce platform designed for online retail, featuring product management, authentication, shopping cart functionality, dynamic filtering, colour variants, checkout workflows, and responsive UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS"
    ],
    liveLink: "https://ah-stores-lovat.vercel.app/",
    githubLink: ""
  },

  {
    title: "AI-Powered Smart Health Assistant",
    image: project6,
    description:
      "A full-stack AI-powered health assistant developed as a Final Year Project. It provides personalized dietary recommendations, health tracking, medical report processing, and medication scheduling by integrating a MERN application with Python-based XGBoost machine learning models.",
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
    liveLink: "https://fyp-five-lime.vercel.app/",
    githubLink: ""
  },

  {
    title: "Cinema Seat Reservation System",
    image: project3,
    description:
      "A full-stack cinema reservation system developed during my Software Engineering Internship at SLT-MOBITEL. The system supports cinema management, screening management, seat selection, availability tracking, and reservation workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git/GitHub"
    ],
    liveLink: "",
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
    liveLink: "https://talenttrail.slt.lk/",
    githubLink: ""
  },

  {
    title: "Saraya Product & Agent Management System",
    image: project1,
    description:
      "A MERN-stack application combining an online shopping platform with an agent management system. Features include JWT authentication, product management, shopping cart functionality, agent roles, and CRUD operations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap"
    ],
    liveLink: "",
    githubLink:
      "https://github.com/Achira2001/SDGP-Project-Implementation-Saraya-Products-using-Mern-Stack.git"
  },

  {
    title: "Food Delivery Application",
    image: project2,
    description:
      "A full-stack food ordering application that allows users to browse food items, place orders, and manage orders through an interactive responsive web interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Bootstrap"
    ],
    liveLink: "",
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
