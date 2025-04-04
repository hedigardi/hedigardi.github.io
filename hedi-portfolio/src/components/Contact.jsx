// components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
      <p>Vill du samarbeta, anlita mig eller bara snacka kod? Hör gärna av dig!</p>
      <ul className="mt-4 space-y-2">
        <li><strong>Email:</strong> hedi@example.com</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/hedigardi" className="underline">hedigardi</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/hedigardi" className="underline">hedigardi</a></li>
      </ul>
    </section>
  );
}