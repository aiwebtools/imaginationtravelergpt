
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  return (
    <section id="comparison-section" className="py-24 relative overflow-hidden bg-space-100">
      <div className="absolute inset-0 opacity-5 bg-cyber-grid bg-[length:50px_50px]"></div>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-medium border border-neon-purple/30">
            Choose Your Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
            Select Your Simulated Time Travel Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore different dimensions of reality with our specialized AI companions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagination Traveler GPT Card */}
          <Card className="bg-space-200/90 border-neon-cyan/30 border-2 hover:border-neon-cyan transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-2xl font-bold text-white mx-auto">
                <span className="text-2xl">🌀</span>
              </div>
              <CardTitle className="text-2xl text-center text-white">Imagination Traveler GPT</CardTitle>
              <CardDescription className="text-gray-400 text-center">Infinite Dimensions Explorer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-2">
                <h4 className="font-medium text-neon-cyan">What If...?</h4>
                <p>Explore alternate histories like "What if Rome never fell?" or "What if dinosaurs never went extinct?"</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-neon-cyan">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan shrink-0">✓</span> 
                    <span>Travel to infinite possible dimensions and realities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan shrink-0">✓</span> 
                    <span>Explore alternate histories, possible futures, and realities beyond comprehension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan shrink-0">✓</span> 
                    <span>Meet civilizations that never existed in our timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan shrink-0">✓</span> 
                    <span>Witness the multiverse through photorealistic imagery</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-neon-blue/10 rounded-md border border-neon-blue/20">
                <p className="italic text-gray-300">
                  "The fabric of reality is yours to unravel. Where shall we journey? Will we step into an Alternate History, glimpse a Possible Future, or venture into a Reality Beyond Comprehension?"
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex justify-center">
              <a 
                href="https://chatgpt.com/g/g-67d2f00c50dc81919f3c9e4447cf705c-imagination-traveler-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button w-full px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium shadow-neon-blue hover:shadow-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 text-center"
              >
                Begin Interdimensional Travel
              </a>
            </CardFooter>
          </Card>

          {/* Time Machine GPT Card */}
          <Card className="bg-space-200/90 border-neon-orange/30 border-2 hover:border-neon-orange transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-neon-orange to-neon-magenta flex items-center justify-center text-2xl font-bold text-white mx-auto">
                <span className="text-2xl">⏳</span>
              </div>
              <CardTitle className="text-2xl text-center text-white">Time Machine GPT</CardTitle>
              <CardDescription className="text-gray-400 text-center">Accurate Historical Time Travel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-2">
                <h4 className="font-medium text-neon-orange">As It Was</h4>
                <p>Experience factually accurate historical events exactly as they happened in our timeline</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-neon-orange">Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-orange shrink-0">✓</span> 
                    <span>Travel to specific historical dates with 100% factual accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-orange shrink-0">✓</span> 
                    <span>Meet authentic historical figures and civilizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-orange shrink-0">✓</span> 
                    <span>Experience potential futures based on present-day choices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-orange shrink-0">✓</span> 
                    <span>Explore historical events through photorealistic imagery</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-neon-orange/10 rounded-md border border-neon-orange/20">
                <p className="italic text-gray-300">
                  "Great Scott! User, what date would you like to teleport to, & where do you want to go?"
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex justify-center">
              <a 
                href="https://time-machine-gpt.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button w-full px-6 py-3 rounded-full bg-gradient-to-r from-neon-orange to-neon-magenta text-white font-medium shadow-neon-magenta hover:shadow-lg hover:from-neon-magenta hover:to-neon-orange transition-all duration-300 text-center"
              >
                Begin Historical Time Travel
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
