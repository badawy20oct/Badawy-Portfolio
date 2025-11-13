"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmoji(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const slowScrollTo = (
    elementId: string,
    duration: number = 1200,
    offset: number = 0
  ) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <section
      id="Hero"
      className="relative w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-8 flex flex-col lg:flex-row justify-center items-center bg-white"
    >
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-[45%] flex flex-col justify-center items-center md:items-start px-6 md:px-8 lg:px-8 lg:ml-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-gray-700 mb-2 text-xl sm:text-2xl md:text-2xl flex items-center gap-2">
          Hi I'm
          {showEmoji && (
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
              className="text-2xl sm:text-3xl md:text-3xl inline-block"
            >
              👋
            </motion.span>
          )}
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-primary">
          Abdelrhman Badawy
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary mt-2">
          Front End Developer
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed max-w-xl text-center md:text-left">
          Passionate about building modern, responsive, and user-friendly web
          applications. Specialized in{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>, and UI/UX best
          practices. Eager to learn, grow, and contribute to innovative
          projects.
        </p>
        {/* Animated Button */}
        <motion.div className="w-full flex justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-6 px-6 py-3 bg-white text-primary border-2 border-primary font-extrabold cursor-pointer rounded-lg shadow-md hover:bg-primary hover:text-white transition"
            onClick={() => slowScrollTo("contact", 2000, 100)}
          >
            Hire Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full lg:w-[45%] h-[400px] sm:h-[440px] md:h-[480px] lg:h-[500px] flex justify-center items-center mt-12 lg:mt-0"
        initial={{ opacity: 1, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="absolute w-[260px] h-[360px] sm:w-[322px] sm:h-[400px] md:w-[350px] md:h-[430px] lg:w-[380px] lg:h-[450px] rounded-2xl bg-gradient-to-l from-white to-primary translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
        <img
          src="badawy.png"
          alt="profile"
          className="relative z-10 w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[330px] md:h-[450px] lg:w-[360px] lg:h-[470px] object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
