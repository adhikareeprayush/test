import Hero from "@/components/Homepage/Hero";
import Services from "@/components/Homepage/Services";
import AboutUs from "@/components/Homepage/AboutUs";
import HowWeWork from "@/components/Homepage/HowWeWork";
import ClientsMarquee from "@/components/Homepage/ClientsMarquee";
import CallToAction from "@/components/Homepage/CallToAction";
import CoreValues from "@/components/Homepage/CoreValues";
import IntroductionSection from "@/components/Homepage/IntroductionSection";

const page = () => {
  return (
    <div className="w-full">
      <div className="relative pt-16">
        <Hero />
      </div>
      <IntroductionSection />
      <CoreValues />
      <Services />
      <AboutUs />
      <HowWeWork />
      <ClientsMarquee />
      <CallToAction />
    </div>
  );
};

export default page;
