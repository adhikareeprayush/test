import { Zap, Brain, DollarSign, Clock } from "lucide-react";

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
      icon: "Zap",
    },
    {
      title: "Engineering Expertise",
      description:
        "Specialized team with deep knowledge in automotive, aerospace, and manufacturing sectors.",
      icon: "Brain",
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize designs and processes to deliver maximum value at reasonable costs.",
      icon: "DollarSign",
    },
    {
      title: "Timely Delivery",
      description:
        "Proven track record of delivering complex projects on schedule without compromising quality.",
      icon: "Clock",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Engineering Solutions Provider
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              AESS founded in Year 2020 is a stop solution for all our customers
              engineering needs. We Provide Computer Aided Engineering (CAE) and
              Computational fluid dynamics (CFD) Manufacturing Simulation like
              Moldflow, Forming & Casting. We have high expertise in providing
              efficient and cost-effective solutions to our customers. AESS
              partner with innovators to optimize designs, predict performance,
              and reduce time-to-market using cutting-edge simulation
              technologies.
            </p>
            <button className="bg-[#fd5c01] text-white px-8 py-3 font-semibold hover:bg-[#e64c00] transition-all rounded">
              Explore Our Services
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[#fd5c01] mb-2">
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

        <div>
          <h3 className="text-3xl font-bold text-dark mb-12">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case "Zap":
                    return <Zap className="w-6 h-6" />;
                  case "Brain":
                    return <Brain className="w-6 h-6" />;
                  case "DollarSign":
                    return <DollarSign className="w-6 h-6" />;
                  case "Clock":
                    return <Clock className="w-6 h-6" />;
                  default:
                    return null;
                }
              };

              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-[#fd5c01]">
                    {getIcon(strength.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
