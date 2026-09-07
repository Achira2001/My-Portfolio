import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  {
    name: "React.js",
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    duration: 2.5,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-7xl text-white" />,
    duration: 3,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-7xl text-blue-500" />,
    duration: 2,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-7xl text-yellow-400" />,
    duration: 3.5,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    duration: 2.5,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-7xl text-gray-300" />,
    duration: 4,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-7xl text-green-500" />,
    duration: 3,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-7xl text-orange-500" />,
    duration: 2.5,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-7xl text-blue-500" />,
    duration: 3,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
    duration: 4,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-7xl text-orange-600" />,
    duration: 3,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-7xl text-white" />,
    duration: 2.5,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-7xl text-orange-500" />,
    duration: 3.5,
  },
  {
    name: "Python",
    icon: <SiPython className="text-7xl text-yellow-400" />,
    duration: 4,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-7xl text-blue-500" />,
    duration: 3,
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator className="text-7xl text-orange-500" />,
    duration: 3.5,
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            variants={iconVariants(technology.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="group relative rounded-2xl border-4 border-neutral-800 p-4"
          >
            {technology.icon}

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

