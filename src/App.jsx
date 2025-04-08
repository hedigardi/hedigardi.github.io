import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const ProtectedRoute = () => {
  return (
    <main className="scroll-smooth">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleCloseError = () => {
    setShowError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === process.env.VITE_PASSWORD) {
      setIsUnlocked(true);
    } else {
      setShowError(true);
    }
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  useEffect(() => {
  }, [password, isUnlocked]);
  
    return (
        <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
                <Header
                    toggleDarkMode={() => setDarkMode(!darkMode)}
                    darkMode={darkMode}
                />
                <Hero/>
                {!isUnlocked ? (
                    <>
                        {showError && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="bg-white p-4 rounded relative">
                                    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowError(false)}>X</button>
                                  <p>Wrong Password</p>
                                </div>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="mt-8" >
                            <div className="flex flex-col items-center">
                                <label htmlFor="password" className="mb-2">
                                    
                                    Enter Password:
                                </label>
                                <input type="password" id="password" value={password} className="border border-gray-300 rounded px-4 py-2 mb-4 w-full max-w-sm" onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
                            </div>
                        </form>
                    </>): (<ProtectedRoute/>)}
                <Footer />
            </div>
        </div>
    );

}

export default App;
