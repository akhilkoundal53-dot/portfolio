import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-bold mb-4"
    >
      Hi, I’m Akhil Koundal
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
    >
      <Typewriter
        words={['Frontend Developer', 'React & Tailwind CSS', 'Building Responsive UIs']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-8 flex gap-4"
    >
      <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
        View Projects
      </a>
      <a href="/resume.pdf" download className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
        Download Resume
      </a>
    </motion.div>
  </section>
);

export default Hero;