"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

// HeroPage Component
const HeroPage: React.FC = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  // const [animateKey, setAnimateKey] = useState(0);

  //Emoji rewaves
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmoji(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // //image reanimated
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimateKey((prev) => prev + 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  const slowScrollTo = (
    elementId: string,
    duration: number = 1200,
    offset: number = 0
  ) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    // Add custom offset here (negative to scroll further up)
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
      className="relative w-full min-h-screen flex flex-col lg:flex-row justify-evenly items-center bg-white overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-[45%] h-[500px] flex flex-col justify-center items-start p-6 lg:ml-16 rounded-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-gray-700 mb-2 text-xl sm:text-2xl flex items-center gap-2">
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
              className="text-2xl sm:text-3xl inline-block"
            >
              👋
            </motion.span>
          )}
        </h3>
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary">
          Abdelrhman Badawy
        </h1>
        <h1 className="text-3xl sm:text-4xl w-[200px] font-extrabold text-primary mt-2 leading-tight">
          Front End <br />
          <span className="pl-20 sm:pl-28 w-full">Developer</span>
        </h1>
        <p className="text-gray-700 text-base sm:text-xl mt-4 leading-relaxed">
          Passionate about creating modern, responsive, and user-friendly web
          applications. Specialized in React, Next.js, and UI/UX best practices.
        </p>
        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            title="Hire Me"
            className="text-end !text-primary text-lg font-extrabold !bg-white !border-2 !border-primary hover:!text-white hover:!bg-secondary hover:!border-transparent transition"
            onClick={() => slowScrollTo("contact", 2000, 100)}
          />
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full lg:w-[45%] h-[500px] lg:h-[500px] ml-0 lg:ml-8 flex justify-center items-center mt-8 lg:mt-0"
        initial={{ opacity: 1, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="absolute w-[250px] sm:w-[300px] lg:w-[335px] h-[350px] sm:h-[390px] lg:h-[390px] rounded-2xl bg-gradient-to-l from-white to-primary transform translate-x-3 translate-y-3"></div>
        <img
          src="/badawy.png"
          alt="profile"
          className="relative w-[240px] sm:w-[280px] lg:w-[310px] h-[350px] sm:h-[390px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroPage;
