import Nav from "@/components/reusable/Nav";
import {
  Zap,
  Wind,
  Box,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "CFD Analysis",
      description:
        "Advanced computational fluid dynamics simulations for flow analysis, thermal management, and aerodynamic optimization across aerospace, automotive, and industrial applications.",
      highlights: [
        "ANSYS Fluent & CFX expertise",
        "Turbulence modeling and multiphase flow",
        "Thermal and conjugate heat transfer",
        "Aerodynamic optimization",
      ],
      icon: Wind,
    },
    {
      id: 2,
      title: "FEA & Structural Analysis",
      description:
        "Finite element analysis for stress analysis, vibration, fatigue, and durability assessment. We validate designs for safety and performance.",
      highlights: [
        "Static & dynamic analysis",
        "Fatigue and fracture mechanics",
        "Material nonlinearity",
        "Optimization & topology design",
      ],
      icon: Box,
    },
    {
      id: 3,
      title: "Manufacturing Simulations",
      description:
        "Process simulation including mold flow analysis, injection molding, and manufacturing process optimization to reduce defects and improve efficiency.",
      highlights: [
        "Mold flow analysis",
        "Gate location optimization",
        "Cooling analysis",
        "Process parameter optimization",
      ],
      icon: Wrench,
    },
    {
      id: 4,
      title: "Product Engineering",
      description:
        "Complete product development support from concept to validation including design optimization, prototyping support, and testing coordination.",
      highlights: [
        "Design feasibility studies",
        "Value engineering",
        "Virtual validation",
        "Design documentation",
      ],
      icon: Zap,
    },
  ];

  const process = [
    {
      title: "Requirements Analysis",
      description:
        "Detailed understanding of project scope, technical specifications, constraints, and deliverables.",
    },
    {
      title: "Pre-Processing",
      description:
        "Geometry preparation, mesh generation, material data input, and boundary condition definition.",
    },
    {
      title: "Simulation & Analysis",
      description:
        "Running simulations with appropriate solvers and monitoring convergence and solution accuracy.",
    },
    {
      title: "Post-Processing",
      description:
        "Results visualization, validation against theory, and extraction of actionable insights.",
    },
    {
      title: "Reporting & Documentation",
      description:
        "Comprehensive technical reports with findings, recommendations, and design implications.",
    },
    {
      title: "Support & Optimization",
      description:
        "Iterative design refinement and parametric studies to optimize performance.",
    },
  ];

  const packages = [
    {
      name: "Standard Analysis",
      price: "$3,500",
      desc: "Single simulation project with standard complexity",
      features: [
        "Single physics analysis",
        "Standard mesh quality",
        "Basic post-processing",
        "Technical report",
        "2 weeks turnaround",
      ],
    },
    {
      name: "Advanced Solutions",
      price: "$9,999",
      desc: "Multi-physics or optimization studies",
      features: [
        "Coupled physics simulations",
        "Advanced mesh optimization",
        "Parametric studies",
        "Detailed documentation",
        "3-4 weeks turnaround",
        "Design iteration support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Engagement",
      price: "Custom",
      desc: "Long-term partnership and retainer models",
      features: [
        "Unlimited simulation projects",
        "Dedicated resource allocation",
        "Priority support",
        "Technical training",
        "Flexible timeline",
        "Ongoing optimization",
      ],
    },
  ];

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-linear-to-br from-primary to-orange-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Engineering Solutions Across Industries
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-95 leading-relaxed">
            Advanced simulation, analysis, and virtual validation services to accelerate your product development and optimize performance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`p-8 rounded-xl border transition-all hover:shadow-lg ${
                    idx % 2 === 0 ? "border-gray-200 bg-gray-50" : "border-primary border-opacity-20 bg-white"
                  }`}
                >
                  <ServiceIcon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
            Our Engineering Process
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl">
            A structured methodology ensuring accurate results and actionable insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                  Step {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
              Service Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible engagement models tailored to your project scope and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl border-2 overflow-hidden transition-all ${
                  pkg.highlighted
                    ? "border-primary shadow-xl md:scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-primary text-white text-center py-2 font-bold text-sm">
                    RECOMMENDED
                  </div>
                )}
                <div className={`p-8 ${pkg.highlighted ? "bg-gray-50" : "bg-white"}`}>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{pkg.desc}</p>
                  <div className="mb-8">
                    <div className="text-4xl font-black text-dark">
                      {pkg.price}
                    </div>
                    {pkg.price !== "Custom" && (
                      <p className="text-gray-600 text-sm mt-1">per project</p>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 font-bold rounded-lg transition-all ${
                      pkg.highlighted
                        ? "bg-primary text-white hover:shadow-lg"
                        : "bg-gray-100 text-dark hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Technical Expertise",
                desc: "16+ years of specialized experience in CAE, CFD, and FEA with proven capabilities across industries.",
              },
              {
                title: "Advanced Tools",
                desc: "Industry-standard software including ANSYS, ABAQUS, and COMSOL with continuous training and certification.",
              },
              {
                title: "Quality Results",
                desc: "Rigorous validation and verification procedures ensuring accuracy and reliability of all simulations.",
              },
              {
                title: "Cost Efficiency",
                desc: "Optimized workflows and streamlined processes deliver exceptional value without compromising quality.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-700 pb-8">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready for Advanced Engineering Solutions?
          </h2>
          <p className="text-xl opacity-95 mb-8">
            Let's discuss your technical challenges and find the right solution.
          </p>
          <button className="bg-white text-primary px-10 py-4 font-bold text-lg rounded-lg hover:shadow-lg transition-all">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
