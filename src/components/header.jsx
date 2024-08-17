import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-10">
      {!isScrolled && (
        <div className="bg-[#6366f1] text-white py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center py-3">
            Book Generator API
          </h1>
        </div>
      )}

      <nav className="bg-[#1e1f2e] text-gray-300 py-7 flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 items-center">
        <button onClick={() => scrollToSection('overview')} className="text-sm hover:text-white transition-colors duration-200">
          OVERVIEW
        </button>
        <button onClick={() => scrollToSection('authentication')} className="text-sm hover:text-white transition-colors duration-200">
          AUTHENTICATION
        </button>
        <button onClick={() => scrollToSection('endpoints')} className="text-sm hover:text-white transition-colors duration-200">
          ENDPOINTS
        </button>
        <button onClick={() => scrollToSection('tutorial')} className="text-sm hover:text-white transition-colors duration-200">
          TUTORIAL
        </button>
        <button onClick={() => scrollToSection('code-examples')} className="text-sm hover:text-white transition-colors duration-200">
          CODE EXAMPLES
        </button>
        <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-white transition-colors duration-200">
          PRICING
        </button>
      </nav>


    </header>
  );
};