import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-6 text-center"
    >
      About Me
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto"
    >
      I’m Akhil Koundal, a Frontend Developer specializing in building responsive, interactive web applications with React and Tailwind CSS. I have completed the Webliquids Frontend Development course and I’m passionate about creating clean and user-friendly interfaces.
    </motion.p>
  </section>
);

export default About;