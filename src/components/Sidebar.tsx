'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 100 <= scrollY) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`transition-colors text-sm font-medium ${activeSection === section.id
              ? 'text-blue-600 font-bold'
              : 'text-gray-500 hover:text-black'
            }`}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
