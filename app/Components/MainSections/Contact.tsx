"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/abdelrahman-badawy-469789204/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-9 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaLinkedin className="text-blue-700 text-5xl sm:text-6xl md:text-7xl mb-4" />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            LinkedIn
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-500 text-center mt-1">
            Abdelrahman Badawy
          </span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/badawy20oct"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-9 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGithub className="text-gray-900 text-5xl sm:text-6xl md:text-7xl mb-4" />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            GitHub
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-500 text-center mt-1">
            badawy20oct
          </span>
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:badawy20oct@gmail.com?subject=Hello&body=I want to contact with you"
          className="flex flex-col items-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-9 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaEnvelope className="text-red-600 text-5xl sm:text-6xl md:text-7xl mb-4" />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Gmail
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-500 text-center mt-1 break-all px-2">
            badawy20oct@gmail.com
          </span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/201156449473"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-9 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaWhatsapp className="text-green-600 text-5xl sm:text-6xl md:text-7xl mb-4" />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            WhatsApp
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-500 text-center mt-1">
            +20 115 644 9473
          </span>
        </motion.a>
      </motion.div>

      {/* Optional: Call to Action */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-gray-600 text-center mt-8 sm:mt-12 md:mt-14 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Let's connect! Feel free to reach out through any platform above.
      </motion.p>
    </section>
  );
}

export default Contact;
