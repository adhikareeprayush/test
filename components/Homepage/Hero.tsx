import { ArrowRight, Wind, Box, Wrench } from "lucide-react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 z-0 w-full min-h-screen xl:h-full">
      <div className="col-span-1 xl:col-span-3 w-full flex flex-col">
        {/* Main Content Section */}
        <div className="w-full bg-primary py-20 md:py-24 xl:py-0 xl:flex-1 flex flex-col justify-center">
          <div className="px-6 md:px-12 xl:px-20 flex flex-col gap-4 md:gap-6 text-white max-w-full xl:max-w-[700px]">
            <div className="flex flex-col gap-2">
              <span className="text-sm md:text-base">Hi there!</span>
              <h2 className="font-black text-3xl md:text-4xl xl:text-5xl leading-tight">
                Advanced CAE & Engineering Solutions
              </h2>
            </div>
            <p className="font-regular text-sm md:text-base xl:text-base leading-relaxed">
              We provide comprehensive computational fluid dynamics, FEA
              analysis, and virtual validation services to accelerate your
              product development.
            </p>
            <button className="bg-white px-4 py-2 md:py-3 border border-gray-200 text-dark text-sm md:text-base font-medium w-fit flex items-center gap-2 rounded hover:bg-gray-100 transition-colors">
              <span>Let's Collaborate</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full py-8 md:py-12 xl:py-0 xl:flex-1 px-6 md:px-12 xl:px-20 bg-gray-50 md:bg-white">
          <div className="hidden md:flex items-center gap-1 opacity-70 shrink-0">
            <span className="text-xs md:text-sm">Scroll</span>
            <ArrowRight size={16} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6 md:gap-8">
            <div className="flex flex-col gap-3">
              <Wind size={40} className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base">CFD Analysis</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-snug">
                  Advanced fluid dynamics simulations and thermal analysis
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Box size={40} className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base">
                  FEA & Structures
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-snug">
                  Stress analysis, vibration, and structural validation
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2 xl:col-span-1">
              <Wrench size={40} className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm md:text-base">
                  Manufacturing Sim
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-snug">
                  Process optimization and mold flow analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Desktop Only */}
      <div className="hidden xl:block col-span-1 xl:col-span-2 w-full relative overflow-hidden bg-gray-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        >
          <source
            src="https://media-files.vidyard.com/videos/upload/a6ed3e18-9030-43d9-832c-0efc1bf287d0/mp4/1080p-0efc1bf287d0.mp4"
            type="video/mp4"
          />
        </video>
        <img
          src="https://via.placeholder.com/800x600?text=Engineering+Solutions"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover brightness-75 pointer-events-none"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Hero;
