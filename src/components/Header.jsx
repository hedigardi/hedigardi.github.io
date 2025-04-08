import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Hedi Gardi</h1>
        <nav>
          <ul className="flex gap-4 text-sm">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;