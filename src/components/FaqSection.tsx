
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <svg
          className={cn(
            "w-6 h-6 text-neon-cyan transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-space-100">
      <div className="absolute inset-0 opacity-5 bg-cyber-grid bg-[length:50px_50px]"></div>
      <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-medium border border-neon-purple/30">
            Questions & Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about your interdimensional journeys
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "What is Imagination Traveler GPT?",
    answer: "Imagination Traveler GPT is an AI-powered experience that functions as a gateway to countless parallel universes. It allows you to explore alternate histories, possible futures, and realities beyond comprehension through immersive storytelling and vivid imagery. The experience is guided by an ancient cosmic traveler who narrates your journey through these infinite dimensions."
  },
  {
    question: "How realistic are the dimensions I can explore?",
    answer: "All dimensions are crafted based on logical scientific possibilities or imaginative multiversal theory—never random fantasy. The alternate histories are historically plausible, the futures are extrapolated from possible technological and social developments, and even the most exotic realities maintain internal scientific consistency. Each dimension is detailed with 10+ specific facts that make it coherent and believable."
  },
  {
    question: "What kind of images will I see during my journey?",
    answer: "You'll receive photorealistic 4K images of your surroundings after every response. These images provide visual context for the dimension you're exploring, showing landscapes, civilizations, technology, or natural phenomena unique to that reality. The images are carefully generated to avoid copyrighted elements while maximizing the immersive experience."
  },
  {
    question: "Can I choose where to go in these alternate dimensions?",
    answer: "Absolutely! You can direct your exploration by specifying the type of dimension you want to visit (Alternate History, Possible Future, Reality Beyond Comprehension) and then making choices during your journey. Each response ends with an opportunity to suggest what you'd like to explore next, allowing you to shape your interdimensional experience."
  },
  {
    question: "How does the 'Test of Infinite Possibilities' work?",
    answer: "When exploring future dimensions, you'll face three pivotal choices that shape the universe ahead. Your choices determine whether you encounter a thriving complex universe, a reality where intelligent life never formed, or something completely unexpected. These choices may include energy sustainability, interaction with AI, ethical development of intelligence, and more."
  },
  {
    question: "Is there a limit to how many dimensions I can explore?",
    answer: "There is no limit! The process loops indefinitely, allowing you to continue exploring new dimensions or different aspects of the same dimension for as long as you wish. Each journey provides new insights, scenarios, and possibilities to discover."
  },
  {
    question: "Is this experience appropriate for all ages?",
    answer: "The Imagination Traveler GPT is designed to be educational, thought-provoking, and suitable for most age groups with basic reading comprehension. Content remains appropriate while exploring complex themes in scientific, historical, and futuristic contexts. However, parental guidance is recommended for younger users to help with complex concepts."
  },
  {
    question: "Do I need any special knowledge to use Imagination Traveler GPT?",
    answer: "No special knowledge is required! The cosmic guide provides all the context you need to understand each dimension. Whether you're a science fiction enthusiast or just curious about alternative realities, the experience is designed to be accessible and engaging for everyone."
  }
];

export default FaqSection;
