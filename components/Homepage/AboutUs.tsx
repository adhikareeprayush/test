const AboutUs = () => {
  const stats = [
    { number: "1000+", label: "Engineering Projects" },
    { number: "150+", label: "Global Clients" },
    { number: "16+", label: "Years Expertise" },
    { number: "95%", label: "Client Retention" },
  ];

  const strengths = [
    {
      title: "Technical Excellence",
      description:
        "Advanced CAE, CFD, FEA expertise with cutting-edge simulation tools and methodologies.",
    },
    {
      title: "Engineering Expertise",
      description:
        "Specialized team with deep knowledge in automotive, aerospace, and manufacturing sectors.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize designs and processes to deliver maximum value at reasonable costs.",
    },
    {
      title: "Timely Delivery",
      description:
        "Proven track record of delivering complex projects on schedule without compromising quality.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Engineering Solutions Provider
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are a leading CAE & engineering services company specializing
              in computational fluid dynamics (CFD), finite element analysis
              (FEA), and design validation. Since our founding, we've partnered
              with global leaders in automotive, aerospace, manufacturing, and
              industrial sectors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With 1000+ successfully completed projects and a team of
              experienced engineers, we deliver precise simulations, virtual
              validation, and engineering solutions that accelerate product
              development and optimize performance. Our 95% client retention
              rate reflects our commitment to technical excellence and
              partnership.
            </p>
            <button className="bg-primary text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-all rounded">
              Explore Our Services
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div>
          <h3 className="text-3xl font-bold text-dark mb-12">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-primary rounded-full mb-4"></div>
                <h4 className="text-lg font-bold text-dark mb-2">
                  {strength.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
