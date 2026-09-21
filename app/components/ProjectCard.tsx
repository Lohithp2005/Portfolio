import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  liveUrl,
  videoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:max-w-xl lg:justify-self-center">
      <div className="relative aspect-4/3 w-full sm:aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain bg-black/20"
        />
      </div>
      <div className="w-full p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-white/10
                bg-white/5
                px-3 py-1
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-10">
          {liveUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={liveUrl}
              className="
              mt-8 flex items-center gap-2
              text-purple-400
              hover:text-purple-300
            "
            >
              View Project
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>)}
          {videoUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={videoUrl}
              className="
              mt-8 flex items-center gap-2
              text-purple-400
              hover:text-purple-300
            "
            >
              Video Demo
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          )
          }

          {githubUrl && (
            <a
              target="_blank"
              href={githubUrl}
              rel="noopener noreferrer"
              className="
              mt-8 flex items-center gap-2
              text-purple-400
              hover:text-purple-300
            "
            >
              Github
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}