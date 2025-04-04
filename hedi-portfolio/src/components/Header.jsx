import React, { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="p-6 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Hedi Gardi</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#about" className="hover:underline">Om mig</a>
          <a href="#projects" className="hover:underline">Projekt</a>
          <a href="#contact" className="hover:underline">Kontakt</a>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 px-3 py-1 border rounded text-sm"
        >
          {dark ? "☀️ Ljust" : "🌙 Mörkt"}
        </button>
      </div>
    </header>
  );
}
