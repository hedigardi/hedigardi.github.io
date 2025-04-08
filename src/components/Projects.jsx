import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-600 dark:text-gray-300">Description of your awesome project.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;