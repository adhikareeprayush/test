"use client";

import { Lightbulb, Zap } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="shrink-0 hidden md:flex">
            <Lightbulb className="w-16 h-16 md:w-20 md:h-20 text-[#f77a40] opacity-70" />
          </div>

          <div className="flex-1 text-center">
            <p className="font-poppins text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              AESS is{" "}
              <span className="font-bold text-[#5f2507]">
                one stop solution
              </span>{" "}
              for all your engineering needs. We provide{" "}
              <span className="font-bold text-[#5f2507]">
                variety of services and solutions
              </span>{" "}
              in{" "}
              <span className="font-bold text-[#5f2507]">
                different domains
              </span>
              .
            </p>
          </div>

          <div className="shrink-0 hidden md:flex">
            <Zap className="w-16 h-16 md:w-20 md:h-20 text-[#f77a40] opacity-70" />
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center gap-8 mt-8">
          <Lightbulb className="w-12 h-12 text-[#f77a40] opacity-70" />
          <Zap className="w-12 h-12 text-[#f77a40] opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
