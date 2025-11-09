const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Automotive Engine Thermal Analysis",
      category: "CFD Analysis",
      description:
        "Comprehensive thermal and flow analysis for high-performance engine cooling system optimization.",
      challenge: "Complex fluid dynamics in confined spaces",
      result: "15% improvement in cooling efficiency",
      client: "Automotive OEM",
    },
    {
      id: 2,
      title: "Turbomachinery Compressor Design",
      category: "CFD & FEA",
      description:
        "Blade design optimization and aerodynamic performance validation using advanced simulation.",
      challenge: "Pressure distribution and stress concentration",
      result: "20% increase in compressor efficiency",
      client: "Industrial Equipment Manufacturer",
    },
    {
      id: 3,
      title: "Aircraft Wing Structural Analysis",
      category: "FEA Analysis",
      description: "Comprehensive structural analysis and fatigue assessment for composite wing components.",
      challenge: "Multi-material composite behavior under load",
      result: "Validated design for 100,000 flight hours",
      client: "Aerospace Company",
    },
    {
      id: 4,
      title: "Injection Molding Process Optimization",
      category: "Manufacturing Simulation",
      description:
        "Mold flow analysis and gate location optimization to reduce defects and cycle time.",
      challenge: "Material flow prediction and warping",
      result: "30% reduction in defect rate",
      client: "Plastics Manufacturing",
    },
    {
      id: 5,
      title: "Pressure Vessel Design & Validation",
      category: "FEA & Compliance",
      description: "Complete stress analysis and code compliance verification for industrial pressure vessels.",
      challenge: "Complex loading conditions and material behavior",
      result: "Code-compliant design with optimized weight",
      client: "Process Equipment Manufacturer",
    },
    {
      id: 6,
      title: "Heat Exchanger CFD Optimization",
      category: "CFD Analysis",
      description: "Thermal performance optimization and flow distribution analysis for compact heat exchangers.",
      challenge: "Balancing pressure drop and heat transfer",
      result: "25% improvement in thermal efficiency",
      client: "HVAC Systems Provider",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Featured Case Studies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Representative projects showcasing our expertise in CFD, FEA, and engineering analysis across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary transition-all p-6"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block text-primary text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Challenge & Result */}
              <div className="bg-white border border-gray-200 rounded p-4 mb-4">
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  Challenge
                </p>
                <p className="text-sm text-dark mb-3">{project.challenge}</p>
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  Result
                </p>
                <p className="text-sm text-primary font-semibold">
                  {project.result}
                </p>
              </div>

              {/* Client */}
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {project.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Want to explore more of our engineering projects?
          </p>
          <button className="bg-primary text-white px-10 py-4 font-bold rounded-lg hover:bg-opacity-90 transition-all">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
