
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-space-100">
      <div className="absolute inset-0 opacity-5 bg-cyber-grid bg-[length:50px_50px]"></div>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-neon-magenta/20 text-neon-magenta text-sm font-medium border border-neon-magenta/30">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on a structured journey through infinite dimensions with our ancient cosmic guide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 transition-all duration-300 hover:bg-space-200/50 group"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-2xl font-bold text-white mx-auto">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center group-hover:text-neon-cyan transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">
            The Dimensional Travel Process
          </h3>
          <ol className="space-y-6">
            {travelSteps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-blue/20 border border-neon-blue/30 flex items-center justify-center text-neon-cyan font-medium">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  {step.highlight && (
                    <div className="mt-3 p-3 bg-neon-blue/10 border border-neon-blue/20 rounded-md text-sm italic text-gray-300">
                      "{step.highlight}"
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
          
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <a 
              href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300"
            >
              Begin Your Interdimensional Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Start Your Journey",
    description: "Meet the ancient cosmic traveler who will guide you through the multiversal gateway and ask where you wish to journey."
  },
  {
    title: "Choose Your Dimension",
    description: "Select from Alternate Histories, Possible Futures, or Realities Beyond Comprehension to set your destination."
  },
  {
    title: "Experience Reality Unfolding",
    description: "Immerse yourself in vivid, detailed accounts of the new dimension with photorealistic images of your surroundings."
  }
];

const travelSteps = [
  {
    title: "Initial Connection",
    description: "The Eternal Observer greets you and presents the interdimensional options available for exploration.",
    highlight: "Wanderer, the fabric of reality is yours to unravel. Where shall we journey?"
  },
  {
    title: "Dimensional Shift Sequence",
    description: "Once you choose your destination, the system initializes a cosmic shift, simulating the thinning of the veil between realities.",
    highlight: "Initializing dimensional shift sequence! Brace yourself, Wanderer—the veil between realities is thinning!"
  },
  {
    title: "Gateway Unlocking",
    description: "The multiversal gateway opens, allowing access to your chosen dimension with cosmic approval.",
    highlight: "Multiversal gateway unlocking... Celestial approval granted: ACCESS OPEN!"
  },
  {
    title: "Arrival Confirmation",
    description: "Upon arrival, you receive a photorealistic image of your new surroundings and an immersive description of the dimension.",
    highlight: "The rift is now open... Loading simulation... Quantum signature accepted."
  },
  {
    title: "Immersive Exploration",
    description: "Experience a deeply engaging 5000-word narrative describing what you see, feel, and touch in this new reality."
  }
];

export default HowItWorksSection;
