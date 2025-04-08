import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Frontend Developer at ExampleCorp</h3>
            <p className="text-gray-600 dark:text-gray-400">Jan 2022 - Present</p>
            <p className="text-gray-700 dark:text-gray-300">Worked on modern React applications and improved performance and user experience.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;