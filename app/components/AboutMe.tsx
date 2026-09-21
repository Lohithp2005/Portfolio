import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const AboutMe = () => {
  return (
    <section className="min-h-dvh scroll-mt-25" id="about">
      <div className="text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>

        <h3 className="text-xl md:max-w-5xl text-center leading-loose">
          I'm a Final year student pursuing B.Tech in Computer Science and
          System Engineering at Reva University.
          <br />
          I have a genuine passion for coding and bringing ideas to life
          through functional web projects. For me, development isn’t just
          about writing clean code—it's about building meaningful digital tools
          that solve real-world problems. Technology moves fast, which is why I
          pride myself on being an adaptable developer who thrives when
          learning new frameworks and tech stacks. I am constantly seeking
          opportunities to expand my skill set, tackle unfamiliar technical
          challenges, and continuously evolve alongside modern industry
          standards.
        </h3>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Leadership & Activities
          </h2>

          <p className="text-lg text-zinc-300">
            <span className="font-semibold text-white">
              Program Committee Member
            </span>{" "}
            — HACC Club, Reva University
            <br />
            Organized and coordinated college hackathons.
          </p>
        </div>

   
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">Achievements</h2>

          <p className="text-lg text-zinc-300">
            <span className="font-semibold text-white">
              3rd Place — IEEE Technovate 2026
            </span>
            <br />
            National-Level IEEE Technical Symposium — Mini Project Expo
            <br />
            HKBK College of Engineering
          </p>

          <p className="mt-6 text-lg text-zinc-300">
            <span className="font-semibold text-white">
              Computer Science Centum — 2nd PUC
            </span>
            <br />
            Scored 100/100 in Computer Science.
          </p>
        </div>

        <a
          href="#projects"
          className="col-span-full md:flex justify-center mb-15 mt-20 hidden"
        >
          <ArrowDownIcon className="text-white h-10" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;