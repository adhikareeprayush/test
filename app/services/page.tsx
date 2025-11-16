import {
  Plane,
  Train,
  Zap,
  Droplet,
  Stethoscope,
  Settings,
  Wind,
  Box,
  Wrench,
  Gauge,
  Beaker,
  Shield,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "cfd",
      title: "CFD",
      shortTitle: "Computational Fluid Dynamics",
      icon: Wind,
      details: [
        "Multiphase Flows",
        "Compressible Flows",
        "Transient VOF & MRF",
        "Heat Transfer Analysis",
        "FSI (Fluid Structure Interaction)",
      ],
    },
    {
      id: "cae",
      title: "CAE",
      shortTitle: "Computer Aided Engineering",
      icon: Box,
      details: [
        "Stress & Vibration Analysis",
        "Thermal & Impact Analysis",
        "Fatigue & Damage Tolerance",
        "NVH (Noise Vibration & Harshness)",
      ],
    },
    {
      id: "electro",
      title: "Electro Mechanical",
      shortTitle: "Electro-Mechanical",
      icon: Zap,
      details: [
        "PCB Design & Thermal Analysis",
        "Power Electronics Simulation",
        "Current Flow Analysis",
        "Component Reliability",
      ],
    },
    {
      id: "cadcam",
      title: "CAD/CAM",
      shortTitle: "Manufacturing Simulation",
      icon: Wrench,
      details: [
        "Moldflow Analysis",
        "Forming Simulation",
        "Casting Simulation",
        "Process Optimization",
      ],
    },
    {
      id: "test",
      title: "Test Support",
      shortTitle: "Testing & Validation",
      icon: Beaker,
      details: [
        "Qualification Tests Planning",
        "Acceptance Tests",
        "Test Correlation",
        "Report Generation",
      ],
    },
    {
      id: "reliability",
      title: "Reliability",
      shortTitle: "Reliability Engineering",
      icon: Shield,
      details: [
        "DFSS (Design for Six Sigma)",
        "DMAIC Methodology",
        "Reliability Prediction",
        "Risk Assessment",
      ],
    },
  ];

  const industries = [
    {
      id: "aerospace",
      name: "Aerospace & Defence",
      icon: Plane,
      details: [
        "FAA compliance & standards",
        "Material Review Board support",
        "Structural analysis & validation",
        "Environmental testing",
      ],
    },
    {
      id: "rail",
      name: "Rail & Automobile",
      icon: Train,
      details: [
        "Vehicle structural analysis",
        "Performance optimization",
        "Safety compliance testing",
        "Thermal management",
      ],
    },
    {
      id: "industrial",
      name: "Industrial & Appliances",
      icon: Settings,
      details: [
        "ASME standards compliance",
        "Performance analysis",
        "Thermal management",
        "Durability & reliability",
      ],
    },
    {
      id: "oilgas",
      name: "Oil & Gas",
      icon: Droplet,
      details: [
        "HVAC system design",
        "Thermal analysis",
        "Safety systems",
        "Pipeline integrity",
      ],
    },
    {
      id: "medical",
      name: "Medical Devices",
      icon: Stethoscope,
      details: [
        "Device safety analysis",
        "Performance validation",
        "Regulatory compliance",
        "Reliability assessment",
      ],
    },
    {
      id: "electromech",
      name: "Electro Mechanical",
      icon: Gauge,
      details: [
        "PCB thermal analysis",
        "Power electronics simulation",
        "EMI/EMC compliance",
        "Component reliability",
      ],
    },
  ];

  const products = [
    {
      category: "Aerospace & Defence",
      icon: Plane,
      items: [
        "Wing & Fuselage components",
        "Engine & Turbine parts",
        "Interior systems",
        "Landing gear assemblies",
      ],
    },
    {
      category: "Rail & Automobile",
      icon: Train,
      items: [
        "Vehicle chassis & structures",
        "Engine components",
        "Braking systems",
        "Battery packs",
      ],
    },
    {
      category: "Industrial Equipment",
      icon: Settings,
      items: [
        "Valves & pumps",
        "Hydraulic systems",
        "Motors & generators",
        "Thermal systems",
      ],
    },
    {
      category: "Oil & Gas",
      icon: Droplet,
      items: [
        "HVAC systems",
        "Heat exchangers",
        "Cooling systems",
        "Pipeline systems",
      ],
    },
    {
      category: "Medical Devices",
      icon: Stethoscope,
      items: [
        "Diagnostic scanners",
        "Surgical instruments",
        "Monitoring devices",
        "Therapeutic equipment",
      ],
    },
    {
      category: "Electronics",
      icon: Zap,
      items: [
        "PCB assemblies",
        "Power modules",
        "Control systems",
        "Sensor units",
      ],
    },
  ];

  return (
    <div className="pt-16">
      
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-linear-to-br from-[#fd5c01] to-[#cc4800] text-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <defs>
              <pattern
                id="dots"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="15" cy="15" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Our Engineering Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Comprehensive CAE, CFD, and manufacturing simulation solutions to
            accelerate your product development
          </p>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 text-center">
            Core Services
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Specialized engineering solutions tailored to your needs
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group p-8 bg-gray-50 border border-gray-200 hover:border-[#fd5c01] hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <ServiceIcon className="w-12 h-12 text-[#fd5c01] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 font-medium">
                    {service.shortTitle}
                  </p>

                  
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-[#fd5c01] font-bold">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Specialized solutions across multiple sectors
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="bg-white rounded-lg border border-gray-200 hover:border-[#fd5c01] hover:shadow-lg transition-all p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#fd5c01]" />
                    </div>
                    <h3 className="font-bold text-dark text-lg">
                      {industry.name}
                    </h3>
                  </div>

                  
                  <ul className="space-y-3">
                    {industry.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex gap-2"
                      >
                        <span className="text-[#fd5c01]">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 text-center">
            Products & Applications
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Solutions across diverse industries and product categories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((productGroup, idx) => {
              const IconComponent = productGroup.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-linear-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-[#fd5c01] hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#fd5c01] to-[#ff7a33] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#fd5c01] group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-dark group-hover:text-[#fd5c01] transition-colors">
                      {productGroup.category}
                    </h3>
                  </div>

                  <ul className="space-y-2 ml-1">
                    {productGroup.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex gap-2 text-gray-600 text-sm group-hover:text-gray-700 transition-colors"
                      >
                        <span className="text-[#fd5c01] font-semibold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss how our engineering solutions can accelerate your
            product development
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#fd5c01] text-white px-10 py-4 font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
