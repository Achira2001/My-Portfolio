import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-16" id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience <span className="text-neutral-500">&</span> Education
      </motion.h2>

      <div className="mx-auto max-w-4xl">

        {/* Experience */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 pl-8 sm:pl-10"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-2 h-full w-px bg-neutral-800" />

          {/* Timeline dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white" />

          <p className="mb-2 text-sm text-neutral-500">
            Sep 2024 – Sep 2025
          </p>

          <h3 className="text-2xl font-semibold">
            Software Engineer Intern
          </h3>

          <p className="mt-1 text-lg text-neutral-400">
            SLT-MOBITEL
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
            Completed a one-year Software Engineering Internship at
            SLT-MOBITEL, contributing to production-oriented full-stack
            applications using the MERN stack. Worked on React.js,
            Node.js, Express.js, MongoDB, RESTful APIs, authentication,
            role-based access control, testing, debugging, Git/GitHub,
            and collaborative software development.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "JWT",
              "Git/GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 sm:pl-10"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-2 h-full w-px bg-neutral-800" />

          {/* Timeline dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white" />

          <p className="mb-2 text-sm text-neutral-500">
            2022 – 2026
          </p>

          <h3 className="text-2xl font-semibold">
            BEng (Hons) Software Engineering
          </h3>

          <p className="mt-1 text-lg text-neutral-400">
            University of Westminster
          </p>

          <p className="mt-4 text-neutral-400">
            BEng (Hons) Software Engineering with Industrial Placement
          </p>

          <div className="mt-5 inline-block rounded-lg border border-neutral-800 px-4 py-3">
            <p className="text-sm text-neutral-500">
              Degree Classification
            </p>
            <p className="mt-1 font-medium text-neutral-200">
              Lower Second Class Honours
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;