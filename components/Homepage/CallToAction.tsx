const CallToAction = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#fd5c01] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Accelerate Your Product Development?
        </h2>
        <p className="text-lg md:text-xl opacity-95 mb-8">
          Partner with AESS to leverage advanced simulation and engineering
          excellence. Let's discuss how we can optimize your designs and reduce
          time-to-market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-white text-[#fd5c01] px-10 py-4 font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Get a Consultation
          </a>
          <a
            href="/services"
            className="inline-block border-2 border-white text-white px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-[#fd5c01] transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
