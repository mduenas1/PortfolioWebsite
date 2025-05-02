import React from 'react';

export default function Skills() {
  const programmingLanguages = [
    'JavaScript',
    'Python',
    'C++',
    'Java',
    'SQL (MySQL)',
  ];
  const frameworks = [
    'React',
    'Tailwind CSS',
    'Node.js',
  ];
  const toolsAndMethods = [
    'Git',
    'Agile Methodologies',
    'Visual Studio',
    'Linux',
  ];
  const interests = [
    'Cybersecurity',
    'Data Analysis',
    'Machine Learning',
  ];

  const renderChips = (items) =>
    items.map((item) => (
      <span
        key={item}
        className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
      >
        {item}
      </span>
    ));

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#000300] px-4 py-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderChips(programmingLanguages)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderChips(frameworks)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
              Tools & Methodologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderChips(toolsAndMethods)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap gap-3">
              {renderChips(interests)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
