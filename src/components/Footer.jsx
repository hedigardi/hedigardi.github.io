import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Hedi Gardi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;