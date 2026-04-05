import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-20 px-4 max-w-5xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-10"
    >
      Contact Me
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-lg text-gray-600 dark:text-gray-300 mb-6"
    >
      Have a project or idea? Let's work together!
    </motion.p>
    <motion.a
      whileHover={{ scale: 1.05 }}
      href="mailto:akhilkoundal53@gmail.com"
      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Email Me
    </motion.a>
  </section>
);

export default Contact;