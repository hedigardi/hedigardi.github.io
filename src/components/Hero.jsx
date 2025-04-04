import React from "react";

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Hej, jag är Hedi Gardi</h2>
        <p className="text-lg mb-6">Web3-utvecklare, frontend-nörd & designentusiast</p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Se mina projekt
        </a>
      </div>
    </section>
  );
}