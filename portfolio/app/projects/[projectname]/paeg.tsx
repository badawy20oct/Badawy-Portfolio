// app/projects/[projectname]/page.tsx
import { notFound } from "next/navigation";

type ProjectType = {
  title: string;
  description: string;
  image: string;
  tech: string[];
};

const projectDetails: Record<string, ProjectType> = {
  portfolio: {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Next.js.",
    image: "/images/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  ecommerce: {
    title: "E-commerce App",
    description:
      "A modern store built with Next.js and integrated with Stripe.",
    image: "/images/ecommerce.png",
    tech: ["Next.js", "Stripe", "Redux Toolkit"],
  },
  dashboard: {
    title: "Admin Dashboard",
    description:
      "A dashboard for managing users and analytics with role-based access.",
    image: "/images/dashboard.png",
    tech: ["Next.js", "TypeScript", "Chart.js"],
  },
};

type PageProps = {
  params: { projectname: string };
};

export default function ProjectDetailsPage({ params }: PageProps) {
  const key = params.projectname.toLowerCase();
  const project = projectDetails[key];

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full min-h-screen p-10 bg-white">
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-primary mb-4 text-center">
        {project.title}
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        {project.description}
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-center">Built With:</h3>
      <ul className="flex justify-center gap-4">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="px-4 py-2 bg-primary text-white rounded-full font-medium"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
