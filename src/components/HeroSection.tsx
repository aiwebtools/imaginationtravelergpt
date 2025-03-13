
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const portalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Create a subtle movement effect for the portal
    const handleMouseMove = (e: MouseEvent) => {
      if (!portalRef.current || isMobile) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
      
      portalRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 star-field-dense"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-neon-blue/20 text-neon-cyan text-sm font-medium border border-neon-blue/30">
              Powered by GPT-4o
            </span>
            <h1 data-text="Imagination Traveler GPT" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow text-white text-3d">
              Explore Infinite Dimensions of Reality
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Step through the portal with the ancient cosmic traveler and journey to alternate histories, possible futures, and realities beyond comprehension.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
              >
                Begin Your Journey
              </a>
              <a 
                href="#comparison-section" 
                className="cyber-button px-6 py-3 rounded-full bg-transparent border border-neon-magenta/50 text-neon-magenta font-medium hover:bg-neon-magenta/10 transition-all duration-300"
              >
                Select Your Experience
              </a>
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              "Wanderer, the fabric of reality is yours to unravel..."
            </p>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Portal Effect */}
              <div 
                ref={portalRef} 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full relative"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan blur-xl opacity-30 animate-pulse-glow"></div>
                
                {/* Portal Background */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-space via-neon-blue/20 to-neon-magenta/20 overflow-hidden">
                  {/* Swirl Effect */}
                  <div className="absolute inset-0 portal-swirl">
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00FFFF33,#FF00FF33,#0080FF33,#00FFFF33)] opacity-60"></div>
                  </div>
                  
                  {/* Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-white animate-twinkle"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          opacity: Math.random() * 0.8 + 0.2
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Portal Edge */}
                <div className="absolute inset-4 rounded-full border-4 border-neon-blue animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-4 rounded-full border border-neon-magenta animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
                
                {/* Hooded Figure Silhouette */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 sm:w-40 sm:h-64">
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-40 sm:h-48 bg-black rounded-t-full"></div>
                    <div className="absolute bottom-30 sm:bottom-36 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 bg-space-300 rounded-full"></div>
                    <div className="absolute bottom-30 sm:bottom-36 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-8 sm:h-10 bg-black rounded-t-full"></div>
                    <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 rotate-45 w-12 sm:w-16 h-4 sm:h-6 bg-neon-cyan/30 filter blur-sm"></div>
                  </div>
                </div>
              </div>
              
              {/* Quote Bubble - Adjusted positioning for mobile */}
              <div className="absolute -bottom-20 sm:-bottom-16 right-0 sm:right-4 md:right-8 max-w-xs glass-panel rounded-lg p-4 animate-float">
                <div className="absolute -top-2 right-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white/10"></div>
                <p className="text-white text-xs sm:text-sm italic">
                  "Where shall we journey? Will we step into an Alternate History, glimpse a Possible Future, or venture into a Reality Beyond Comprehension?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
