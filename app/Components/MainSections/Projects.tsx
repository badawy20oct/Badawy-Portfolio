"use client";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "",
    url: "https://your-portfolio-link.com",
  },
  {
    id: 2,
    name: "Ecommerce",
    description: "An e-commerce store built with Next.js and Stripe.",
    image: "",
    url: "https://your-ecommerce-demo.com",
  },
  {
    id: 3,
    name: "DailyNews",
    description: "Admin dashboard with role-based access and analytics.",
    image: "",
    url: "https://your-dashboard-demo.com",
  },
  {
    id: 4,
    name: "Dashboard",
    description: "Admin dashboard with role-based access and analytics.",
    image: "",
    url: "https://dashboard-v1-demo.com",
  },
  {
    id: 5,
    name: "Dashboard V2",
    description: "Second version of the dashboard project.",
    image: "",
    url: "https://dashboard-v2-demo.com",
  },
  {
    id: 6,
    name: "Dashboard V3",
    description: "Third iteration of dashboard project.",
    image: "",
    url: "https://dashboard-v3-demo.com",
  },
];

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

export default function Projects() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <section
      id="projects"
      className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-primary mb-8 sm:mb-12 md:mb-14 px-4">
        Projects
      </h1>

      {/* Scrollable Projects */}
      <motion.ul
        ref={ref}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="flex overflow-x-scroll gap-4 sm:gap-6 md:gap-7 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10 lg:pb-10 no-scrollbar"
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-[360px] sm:h-[420px] md:h-[450px] lg:h-[480px] bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-[65%] bg-gradient-to-br from-blue-100 to-purple-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center p-4 sm:p-6 h-[35%] bg-white">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 line-clamp-1">
                  {project.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-sm text-gray-600 mt-2 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <style>{`
  .no-scrollbar {
    /* For Firefox */
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;   /* For Chrome, Safari, Edge */
  }
`}</style>
      {/* Scroll Hint (Optional) */}
      <p className="text-center text-sm text-gray-500 mt-4 md:hidden">
        ← Swipe to see more →
      </p>
    </section>
  );
}
