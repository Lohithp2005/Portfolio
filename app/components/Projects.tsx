import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MaaCare",
    image: "/maacare.jpg",
    description:
      "AI-powered maternal healthcare platform built with Next.js, FastAPI and PostgreSQL. Features secure authentication, AI chatbot, diet recommendation and pregnancy exercise assistant.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/Lohithp2005/MaaCare_V2"
  },
  {
    title: "EduNext",
    image: "/edunext.png",
    description:
      "AI powered Educational platform built to support student with neurological disorders",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#121212] w-full py-28"
    >
      <div className="mx-auto w-full px-3 sm:px-6">
        <div className="mb-16 text-center">

          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Some of the projects I&apos;ve built using modern
            technologies, focusing on solving real-world
            problems with clean design and scalable architecture.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}