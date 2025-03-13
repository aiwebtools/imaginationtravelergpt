
import React, { useState, useEffect } from 'react';

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('imagination-traveler-consent');
    
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('imagination-traveler-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass-panel rounded-xl max-w-lg w-full p-6 animate-scale-up">
        <h3 className="text-2xl font-bold mb-4 text-white">
          Welcome, Interdimensional Traveler
        </h3>
        <div className="text-gray-300 space-y-4 mb-6">
          <p>
            Before you embark on your journey through infinite dimensions, please acknowledge the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Imagination Traveler GPT creates fictional content for entertainment and speculative exploration.
            </li>
            <li>
              All dimensions, narratives, and images are works of fiction and do not represent real events, predictions, or factual information.
            </li>
            <li>
              This experience is designed for creative and philosophical exploration, not as a source of professional advice.
            </li>
            <li>
              By proceeding, you agree to use this tool responsibly and in accordance with our terms of service.
            </li>
          </ul>
          <p>
            Are you ready to traverse the cosmic pathways of infinite possibility?
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="cyber-button w-full px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
        >
          I Agree - Begin My Journey
        </button>
      </div>
    </div>
  );
};

export default ConsentPopup;
