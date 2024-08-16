import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import Pricing from "./pages/pricing";

export default function App() {
  return (
      <div className="min-h-screen bg-gray-900"> {/* Adjusted background color */}
        <Header />
        <main className="container mx-auto px-4 w-full ">
          <Routes>
            <Route path="/" element={<div className="text-white">Home</div>} />
            <Route path="/overview" element={<div className="text-white">Overview</div>} />
            <Route path="/authentication" element={<div className="text-white">Authentication</div>} />
            <Route path="/endpoints" element={<div className="text-white">Endpoints</div>} />
            <Route path="/tutorial" element={<div className="text-white">Tutorial</div>} />
            <Route path="/code-examples" element={<div className="text-white">Code Examples</div>} />
            <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        </main>
      </div>
    
  );
}