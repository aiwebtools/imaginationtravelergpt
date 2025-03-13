
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-space text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-cyan">404</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              This dimension cannot be found
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto">
              The cosmic coordinates you're searching for don't exist in this reality. Perhaps it's in another dimension?
            </p>
            <a 
              href="/" 
              className="cyber-button inline-block px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
            >
              Return to Home Portal
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 star-field-dense opacity-40"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:60px_60px] opacity-10"></div>
      </div>
    </div>
  );
};

export default NotFound;
