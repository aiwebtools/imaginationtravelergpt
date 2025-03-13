
import React from 'react';
import { Telescope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-200 pt-16 pb-8 relative overflow-hidden">
      <div className="star-field-dense absolute inset-0 opacity-20 z-0"></div>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Telescope className="h-6 w-6 text-neon-cyan" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Imagination Traveler GPT
                </h3>
                <p className="text-xs text-gray-400">
                  Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-magenta transition-colors">AiWebTools.Ai</a>
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Embark on an epic journey through infinite dimensions and explore realities beyond your imagination.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  USE Imagination Traveler GPT NOW
                </a>
              </li>
              <li>
                <a 
                  href="https://time-machine-gpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Try Time Machine GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-cyan transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-neon-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-neon-cyan transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Oval More AI Tools Button */}
        <div className="fixed bottom-4 right-4 z-20">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-neon-magenta hover:shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
