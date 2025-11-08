"use client";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
  MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import ProjectsCard from "../Components/ProjectsCard";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/images/portfolio.png",
  },
  {
    id: 10,
    name: "Portfolio",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/images/portfolio.png",
  },
  {
    id: 11,
    name: "Portfolio",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    name: "Ecommerce",
    description: "An e-commerce store built with Next.js and Stripe.",
    image: "/images/ecommerce.png",
  },
  {
    id: 3,
    name: "DailyNews",
    description: "Admin dashboard with role-based access and analytics.",
    image: "/images/dashboard.png",
  },
  {
    id: 4,
    name: "Dashboard",
    description: "Admin dashboard with role-based access and analytics.",
    image: "/images/dashboard.png",
  },
  {
    id: 5,
    name: "Dashboard V2",
    description: "Second version of the dashboard project.",
    image: "/images/dashboard.png",
  },
  {
    id: 6,
    name: "Dashboard V3",
    description: "Third iteration of dashboard project.",
    image: "/images/dashboard.png",
  },
];

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`
      );
    }
  });

  return maskImage;
}

function ProjectsPage() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <section id="projects" className="w-full min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
Projects
      </h1>

      <motion.div
        ref={containerRef}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="flex space-x-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-700 p-4 pb-10"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[400px] flex-shrink-0"
          >
            <ProjectsCard project={project} />
          </div>
        ))}
      </motion.div>

      {/* Style override for scrollbars */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thumb-primary::-webkit-scrollbar-thumb {
          background: #3498db;
          border-radius: 10px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background: #f0f0f0;
        }
      `}</style>
    </section>
  );
}

export default ProjectsPage;
