import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -100 }}
  transition={{ duration: 0.5 }}
  className="my-10 text-center text-4xl lg:my-20"
>
  About
  <span className="text-neutral-500"> Me</span>
</motion.h1>

<motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 100 }}
  transition={{ duration: 0.5 }}
  className="flex w-full justify-center"
>
  <div className="w-full px-2 sm:px-4 lg:px-8">
    <p className="mx-auto max-w-6xl py-4 text-justify leading-7 text-neutral-300 lg:py-6 lg:leading-8">
      {ABOUT_TEXT}
    </p>
  </div>
</motion.div>
    </div>
  );
};

export default About;

