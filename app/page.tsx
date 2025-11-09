import Hero from "@/components/Homepage/Hero";
import Nav from "@/components/reusable/Nav";
import Services from "@/components/Homepage/Services";
import AboutUs from "@/components/Homepage/AboutUs";
import FeaturedWork from "@/components/Homepage/FeaturedWork";
import HowWeWork from "@/components/Homepage/HowWeWork";
import Testimonials from "@/components/Homepage/Testimonials";
import OurClients from "@/components/Homepage/OurClients";
import CallToAction from "@/components/Homepage/CallToAction";

const page = () => {
  return (
    <div className="relative">
      <div className="relative w-full xl:h-screen">
        <Hero />
        <div className="absolute top-0 left-0 w-full z-50">
          <Nav variant="light" />
        </div>
      </div>
      <Services />
      <AboutUs />
      <FeaturedWork />
      <HowWeWork />
      <Testimonials />
      <OurClients />
      <CallToAction />
    </div>
  );
};

export default page;
