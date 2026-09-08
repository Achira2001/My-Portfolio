import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold lg:my-20"
      >
        Projects
      </motion.h1>

      {/* Projects */}
      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center"
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-[42%]"
            >
              {project.liveLink || project.githubLink ? (
                <a
                  href={project.liveLink || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-72"
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full rounded-xl object-cover shadow-lg sm:h-72"
                />
              )}
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-[48%]"
            >
              {/* Title */}
              <h2 className="mb-3 text-xl font-semibold">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mb-5 text-justify leading-7 text-neutral-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-md bg-neutral-800 px-3 py-1.5 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
