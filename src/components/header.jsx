import React from 'react';

export const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-[#6366f1] text-white py-10">
        <h1 className="text-4xl font-bold text-center">Book Generator API</h1>
      </div>
      <nav className="bg-[#1e1f2e] text-gray-300 py-5 flex flex-wrap justify-center space-x-8">
        <a href="#overview" className="text-sm hover:text-white transition-colors duration-200">OVERVIEW</a>
        <a href="#authentication" className="text-sm hover:text-white transition-colors duration-200">AUTHENTICATION</a>
        <a href="#endpoints" className="text-sm hover:text-white transition-colors duration-200">ENDPOINTS</a>
        <a href="#tutorial" className="text-sm hover:text-white transition-colors duration-200">TUTORIAL</a>
        <a href="#code-examples" className="text-sm hover:text-white transition-colors duration-200">CODE EXAMPLES</a>
        <a href="#pricing" className="text-sm hover:text-white transition-colors duration-200">PRICING</a>
      </nav>
    </header>
  );
};