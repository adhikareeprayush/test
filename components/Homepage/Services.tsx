import { Wind, Box, Wrench, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Wind,
      title: "CFD Analysis",
      description:
        "Advanced computational fluid dynamics for flow, thermal management, and aerodynamic optimization.",
    },
    {
      id: 2,
      icon: Box,
      title: "FEA & Structures",
      description:
        "Finite element analysis for stress, vibration, fatigue, and structural validation.",
    },
    {
      id: 3,
      icon: Wrench,
      title: "Manufacturing Sim",
      description:
        "Mold flow analysis and process optimization for injection molding and manufacturing.",
    },
    {
      id: 4,
      icon: Zap,
      title: "Product Engineering",
      description:
        "Complete design development support from concept through virtual validation.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Engineering Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Advanced CAE, simulation, and engineering analysis services to
            accelerate your product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-6 bg-gray-50 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <ServiceIcon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
