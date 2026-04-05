import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-primary cursor-pointer">
          Akhil Koundal
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(link => (
            <li key={link}>
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                className="capitalize text-gray-700 dark:text-gray-200 hover:text-primary transition font-medium cursor-pointer"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDark(!dark)}
              className="ml-4 px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-200"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 text-center">
          {links.map(link => (
            <li key={link}>
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="capitalize text-gray-700 dark:text-gray-200 hover:text-primary transition font-medium cursor-pointer"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;