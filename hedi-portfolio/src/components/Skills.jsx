// components/Skills.jsx
import React from "react";

export default function Skills() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Färdigheter</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">Tailwind CSS</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">Solidity</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">Hardhat</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">Ethers.js</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">GitHub</span>
      </div>
    </section>
  );
}