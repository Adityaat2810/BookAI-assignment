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
            <Route path="/"element={<Pricing/>} />
           
          </Routes>
        </main>
      </div>
    
  );
}