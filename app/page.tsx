import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col  bg-[#121212] container max-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AboutMe/>
        <Projects />
        <Contact />
      </main>
  );
}
