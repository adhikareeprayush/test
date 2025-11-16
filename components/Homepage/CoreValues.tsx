"use client";

import { Users, Zap, Lightbulb, Target, Wrench } from "lucide-react";

const CoreValues = () => {
  const coreValues = [
    {
      letter: "C",
      title: "Customer-Centricity",
      description:
        "Understanding and meeting the unique needs of every client with personalized solutions and dedicated support.",
      icon: Users,
      angle: 0,
    },
    {
      letter: "E",
      title: "Empowerment",
      description:
        "Enabling teams and partners through knowledge sharing, tools, and collaborative approaches.",
      icon: Zap,
      angle: 72,
    },
    {
      letter: "I",
      title: "Innovation",
      description:
        "Continuously advancing technology and methodologies to deliver cutting-edge engineering solutions.",
      icon: Lightbulb,
      angle: 144,
    },
    {
      letter: "P",
      title: "Precision & Accuracy",
      description:
        "Maintaining highest standards of accuracy in simulations and delivering reliable, validated results.",
      icon: Target,
      angle: 216,
    },
    {
      letter: "T",
      title: "Technical Excellence",
      description:
        "Leveraging deep expertise and industry knowledge to solve complex engineering challenges.",
      icon: Wrench,
      angle: 288,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-[#fd5c01] font-space-mono font-bold text-sm md:text-base tracking-widest uppercase">
              Our Foundation
            </span>
          </div>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-dark mb-4 md:mb-6 leading-tight">
            Our Core Values <span className="text-[#fd5c01]">CEIPT</span>
          </h2>
          <p className="font-poppins text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            These five core values guide every decision we make and shape our
            commitment to excellence in engineering solutions.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#fd5c01]/30 rounded-xl p-6 md:p-5 hover:shadow-lg hover:border-[#fd5c01] transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              {/* Letter Circle */}
              <div className="bg-[#fd5c01] text-white rounded-lg w-16 h-16 md:w-14 md:h-14 flex items-center justify-center mb-4 shrink-0">
                <span className="font-space-mono font-bold text-3xl md:text-2xl">
                  {value.letter}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-bold text-dark text-sm md:text-base mb-3 leading-tight">
                {value.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-gray-600 text-xs md:text-sm leading-relaxed grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
