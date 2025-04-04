// components/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Erfarenhet</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-lg font-semibold">Verified (LIA)</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2024 – Jan 2025</p>
          <p>Byggde ett dokumentverifieringssystem med MetaMask och IPFS i React & Solidity.</p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">Freelance Web3 Developer</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023 – nuvarande</p>
          <p>Skapade smarta kontrakt, NFT-gateade appar och interaktiva frontends.</p>
        </li>
      </ul>
    </section>
  );
}