import Image from "next/image";
import { IconType } from "react-icons";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";


type Technology = {
  name: string;
  icon?: IconType;
  image?: string;
  color?: string;
};


type TechCategory = {
  title: string;
  technologies: Technology[];
};


const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Backend",
    technologies: [
      {
        name: "Next.js API Routes",
        icon: SiNextdotjs,
        color: "#ffffff",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
    ],
  },

  {
    title: "Database",
    technologies: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E",
      },
    ],
  },

  {
    title: "AI Tools",
    technologies: [
      {
        name: "Gemini API",
        image: "/google.svg",
      },
      {
        name: "Ollama",
        image: "/ollama.svg",
      },
    ],
  },
];


export default function TechStack() {
  return (
    <section className="py-20" id="techstack">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center">
          Tech Stack
        </h2>

        <p className="text-zinc-400 text-center mt-4 mb-14">
          Technologies I use to build modern web applications.
        </p>


        <div className="space-y-12">

          {techCategories.map((category) => (
            <div key={category.title}>

              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.technologies.map((tech) => {

                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="
                        group
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#181818]
                        p-8
                        h-44
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:scale-105
                        hover:border-white/20
                        hover:bg-[#202020]
                        hover:shadow-xl
                      "
                    >

                      <div className="h-14 flex items-center justify-center">

                        {tech.image ? (
                          <Image
                            src={tech.image}
                            width={52}
                            height={52}
                            alt={tech.name}
                            className="object-contain"
                          />
                        ) : (
                          Icon && (
                            <Icon
                              size={52}
                              style={{ color: tech.color }}
                              className="
                                transition-all
                                duration-300
                                group-hover:scale-110
                              "
                            />
                          )
                        )}

                      </div>


                      <span className="
                        text-lg
                        font-semibold
                        text-white
                        text-center
                      ">
                        {tech.name}
                      </span>


                    </div>
                  );

                })}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}