'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row gap-8 mb-20 bg-green-50"
    >
      {/* 左侧内容：头像、名字、社交链接 */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left bg-gray-100 px-10 py-12"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      {/* 右侧内容：summary */}
      <motion.div
        className="w-full md:w-1/2 px-10 py-14"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold my-4">About Me</h1>
        <p className="text-base leading-relaxed">
          I am a passionate frontend developer with experience building modern web applications using React,
          Next.js, and TypeScript. I love crafting clean UI and intuitive user experiences with solid frontend
          architecture and responsive design.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Resume
        </button>
      </motion.div>
    </section>
  );
}
