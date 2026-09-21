"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import TechStack from './Techstack';



const HeroSection = () => {
    return (
        <section className="min-h-dvh">
            <div className="grid  grid-cols-1 md:grid-cols-12  ">
                <div className="col-span-7 md:pt-30">
                    <h1 className="text-white mb-2 text-4xl lg:text-6xl font-extrabold "><span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Hello, I'm Lohith</span></h1>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'problem solver',
                            1000,
                            'Adaptive learner',
                            1000,
                            'Aspiring Software Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-white text-xl lg:text-6xl font-semibold"
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className="text-[#adb7b4]  mt-1 text-lg lg:text-xl">I'm a passionate developer interested in creating solutions for real-world problems.</p>
                    <div className="flex items-center flex-col lg:flex-row lg:justify-start ">
                        <a href="#contact" className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3">Hire Me</a>
                        <a href="/Lohith_resume.pdf" download="Lohith_Resume.pdf" className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3 border-white">Download Resume</a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 md:mt-10 md:ml-30">
                    <div className="rounded-full bg-[#181818]  w-62.5  h-62.5 lg:w-85 lg:h-85 relative ">
                        <Image src="/portfolio-avatar.png"
                            alt="Portfolio Avatar"
                            fill
                            priority
                            sizes="(max-width: 1024px) 250px, 340px"
                            className="absolute object-contain ml-1 p-5 " />
                    </div>
                </div>
                <a href="#about" className="col-span-full md:flex justify-center  mt-30 hidden  ">
                    <ArrowDownIcon className="text-white h-10  " />
                </a>
                <div className="col-span-full mt-25">
                    <TechStack />
                </div>

            </div>
        </section>
    )
}

export default HeroSection
