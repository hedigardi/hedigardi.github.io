import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 w-full bg-white dark:bg-gray-900 shadow z-50 p-4 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-xl font-bold">Hedi Gardi</h1>
            <nav className='flex items-center'>
                <button className="sm:hidden" onClick={toggleMenu}>
                    {/* Placeholder for hamburger button */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
                <ul className={`sm:flex sm:gap-4 text-sm ${isMenuOpen ? 'flex flex-col bg-white w-full absolute left-0 top-full' : 'hidden'}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;