// components/Projects.jsx
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projekt</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-lg font-semibold">Dokumentsignering med QR + MetaMask</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">React, IPFS, Solidity</p>
          <p>Ett system för att signera och verifiera dokument på blockchain med QR-kod och MetaMask.</p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">Movie Voting DApp</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">React, Ethers.js, Sepolia Testnet</p>
          <p>Användare kan rösta på filmer i realtid med ett smart kontrakt.</p>
        </li>
      </ul>
    </section>
  );
}