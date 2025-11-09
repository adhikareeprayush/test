const CallToAction = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Let's collaborate and turn your vision into a stunning digital
          experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-10 py-4 font-bold rounded-lg hover:bg-opacity-90 transition-all">
            Start Your Project
          </button>
          <button className="border-2 border-white text-white px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-primary transition-all">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
