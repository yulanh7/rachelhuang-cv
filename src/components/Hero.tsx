// components/Hero.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row gap-8 mb-20 bg-green-50"
    >
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left bg-gray-100 px-10 py-12">
        <Image
          src="/profile.jpeg"
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold mt-4">Rachel Huang</h1>
        <p className="text-base text-gray-500 mb-4">Frontend Developer</p>
        <div className="flex gap-4 mt-4 text-xl text-gray-600">
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 py-14">
        <h1 className="text-3xl font-bold my-4">About Us</h1>
        <p className="text-base leading-relaxed">
          I am a passionate frontend developer with experience building modern web applications using React,
          Next.js, and TypeScript. I love crafting clean UI and intuitive user experiences with solid frontend
          architecture and responsive design.
        </p>
        <button>Resume</button>
      </div>
    </section>
  );
}
