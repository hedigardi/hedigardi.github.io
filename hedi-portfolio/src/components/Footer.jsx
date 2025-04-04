// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t dark:border-gray-700 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Hedi Gardi. Alla rättigheter förbehållna.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/hedigardi" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/hedigardi" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
