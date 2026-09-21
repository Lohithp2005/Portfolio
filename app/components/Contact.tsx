import Link from "next/link";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#121212] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
          I'm currently looking for internships and exciting opportunities.
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://linkedin.com/in/lohith-p-715899291"
            target="_blank"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#181818]"
          >
            <FaLinkedinIn size={32} className="text-[#0A66C2]" />
          </a>

          <a
            href="https://github.com/Lohithp2005"
            target="_blank"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#181818]"
          >
            <SiGithub size={32} className="text-white" />
          </a>

          <a
            href="mailto:Lohithcseng@gmail.com"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#181818]"
          >
            <SiGmail size={32} className="text-red-500" />
          </a>
        </div>

        <p className="mt-12 text-zinc-500">
          © 2026 Lohith. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}