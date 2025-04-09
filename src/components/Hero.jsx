import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center p-6">
        <h2 className="text-4xl md:text-6xl font-extrabold">Hi, I'm Hedi</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Fullstack Developer | Blockchain Developer | Tech Enthusiast</p>
      </div>
    </section>
  );
};

export default Hero;