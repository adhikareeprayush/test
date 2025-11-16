"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="w-full bg-black relative overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/video.webm" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-left">
          <h1 className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Engineering Excellence, Validated by Simulation
          </h1>

          <p className="font-poppins text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            AESS provides Engineering Excellence, Validated by Simulation.
            Powering the Next Generation Products.​
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/services"
              className="px-8 py-3 md:py-4 bg-[#fd5c01] text-white font-bold rounded-lg hover:bg-[#e64c00] transition-all inline-block text-center"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 md:py-4 bg-white text-dark font-bold rounded-lg hover:bg-opacity-90 transition-all inline-block text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
