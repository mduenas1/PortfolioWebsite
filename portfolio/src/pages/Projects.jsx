import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: 'Personal Portfolio',
      repo: 'https://github.com/mduenas1/PortfolioWebsite',
    },

  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#000300] px-4 py-16 text-white">
      <h2 className="text-4xl font-bold text-[#00df9a] mb-8 text-center">
        My Projects
      </h2>
      <ul className="list-disc pl-6 space-y-6 max-w-xl mx-auto text-gray-200">
        {projects.map((p) => (
          <li key={p.name}>
            <span className="font-semibold text-white">{p.name}</span><br/>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              View Code
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
