import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">React</span>
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">JavaScript</span>
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Node.js</span>
          <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;