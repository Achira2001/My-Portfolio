import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl lg:my-20"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((projects, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap gap-8 lg:justify-center"
          >

            <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
  className="w-full lg:w-2/5"
>
  <a
    href={projects.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={projects.image}
      alt={projects.title}
      className="mb-6 h-72 w-full rounded-lg object-cover"
    />
  </a>
</motion.div>


            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >

              <h6 className="mb-2 font-semibold">
                {projects.title}
              </h6>

              <p className="mb-4 text-justify text-neutral-400">
                {projects.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;