import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    tech: 'React, Tailwind CSS',
    github: 'https://github.com/akhilkoundal/portfolio',
    demo: '#',
  },
  {
    name: 'E-commerce Site',
    description: 'Responsive e-commerce site with shopping cart functionality.',
    tech: 'React, Tailwind CSS, Firebase',
    github: '#',
    demo: '#',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="border rounded-lg p-6 shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
          <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" className="text-primary hover:underline">GitHub</a>
            <a href={project.demo} target="_blank" className="text-primary hover:underline">Live Demo</a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;