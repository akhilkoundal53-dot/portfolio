import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git'];

const Skills = () => (
  <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-10 text-center"
    >
      Skills
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-lg font-medium">{skill}</motion.div>
      ))}
    </div>
  </section>
);

export default Skills;