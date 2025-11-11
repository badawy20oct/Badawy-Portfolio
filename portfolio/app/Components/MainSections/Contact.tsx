"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-90vh bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center px-6 md:px-20 py-16"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/abdelrahman-badawy-469789204/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-blue-700 text-4xl mb-4" />
          <span className="text-lg font-medium text-gray-800">LinkedIn</span>
          <span className="text-sm text-gray-500">Abdelrahman Badawy</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/badawy20oct"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="text-black text-4xl mb-4" />
          <span className="text-lg font-medium text-gray-800">GitHub</span>
          <span className="text-sm text-gray-500">badawy20oct</span>
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:your-email@gmail.com"
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-red-600 text-4xl mb-4" />
          <span className="text-lg font-medium text-gray-800">Email</span>
          <span className="text-sm text-gray-500">your-email@gmail.com</span>
        </motion.a>

        {/* Phone */}
        <motion.div
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6"
        >
          <FaPhone className="text-green-600 text-4xl mb-4" />
          <span className="text-lg font-medium text-gray-800">Phone</span>
          <span className="text-sm text-gray-500">+20 115 644 9473</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
