import React from 'react';
import resumePDF from '../assets/Duenas.pdf';

export default function About() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#000300] px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-6">
          About Me
        </h2>

        <p className="text-gray-200 mb-8">
          I’m a computer science student who enjoys taking on challenges and solving complex problems.
          I have a keen interest in cybersecurity and artificial intelligence.
        </p>

        <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
          Education
        </h3>
        <ul className="list-disc list-inside text-gray-200 mb-8 space-y-2">
          <li>B.S. in Computer Science, Cal State Fullerton (2022 – Present)</li>
          <li>Associate's Degree in Computer Science</li>
        </ul>

<h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
  Skills & Interests
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div>
    <h4 className="text-xl font-semibold text-[#00df9a] mb-2">
      Technical Skills
    </h4>
    <ul className="list-disc list-inside text-gray-200 space-y-1">
      <li>React</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>C++</li>
      <li>Java</li>
      <li>SQL (MySQL)</li>
      <li>Git</li>
      <li>Agile Methodologies</li>
    </ul>
  </div>

  <div>
    <h4 className="text-xl font-semibold text-[#00df9a] mb-2">
      Areas of Interest
    </h4>
    <ul className="list-disc list-inside text-gray-200 space-y-1">
      <li>Cybersecurity</li>
      <li>Data Analysis</li>
      <li>Machine Learning</li>
    </ul>
  </div>
</div>

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00df9a] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00e89e] transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
