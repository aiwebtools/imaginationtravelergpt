
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 star-field opacity-30"></div>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-neon-orange/20 text-neon-orange text-sm font-medium border border-neon-orange/30">
            User Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
            Interdimensional Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from fellow travelers who have journeyed through the cosmic pathways
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-neon-cyan mr-1">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-magenta to-neon-blue flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "I explored a world where dinosaurs never went extinct and evolved into an intelligent civilization. The imagery was so vivid I could almost feel the humid prehistoric air on my skin. A truly mind-bending experience!",
    name: "Alex Chen",
    location: "Alternate History Explorer"
  },
  {
    quote: "Journeying to a future where humans merged with AI gave me philosophical insights I never considered before. The detailed narrative made it feel like I was actually living in that reality for a moment.",
    name: "Samantha Rodriguez",
    location: "Future Reality Traveler"
  },
  {
    quote: "The cosmic traveler guided me through a dimension where the laws of physics operate differently. Gravity flows sideways and time spirals instead of moving linearly. The visuals were breathtaking and scientifically fascinating.",
    name: "Marcus Johnson",
    location: "Quantum Reality Enthusiast"
  },
  {
    quote: "I visited a parallel Earth where the Renaissance never ended, and society evolved with both artistic and scientific advancement in harmony. The architectural imagery was stunning and the storyline completely captivating.",
    name: "Emma Patel",
    location: "Cultural Studies Researcher"
  },
  {
    quote: "My journey to a water world inhabited by bioluminescent intelligent creatures was profound. The storytelling was so immersive I could almost feel the gentle ocean currents. An unforgettable experience!",
    name: "Jamal Williams",
    location: "Xenobiology Enthusiast"
  },
  {
    quote: "Exploring a dimension where plant consciousness dominates was eye-opening. The narrative helped me understand what a collective hive-mind might actually be like, and the imagery was hauntingly beautiful.",
    name: "Olivia Zhang",
    location: "Consciousness Explorer"
  }
];

export default TestimonialsSection;
