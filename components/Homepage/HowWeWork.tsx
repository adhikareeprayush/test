import {
  Search,
  Pencil,
  Wrench,
  CheckCircle2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into understanding your business, goals, market, and audience. Through research and consultation, we create a solid foundation for success.",
      icon: Search,
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our creative team develops detailed wireframes, prototypes, and design concepts that align with your vision and business objectives.",
      icon: Pencil,
    },
    {
      number: "03",
      title: "Development & Build",
      description:
        "Our developers bring designs to life using cutting-edge technologies, ensuring performance, security, and scalability.",
      icon: Wrench,
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description:
        "Rigorous testing across all devices and scenarios ensures quality. We refine based on feedback and performance metrics.",
      icon: CheckCircle2,
    },
    {
      number: "05",
      title: "Launch & Optimization",
      description:
        "We deploy your project and monitor performance closely, making optimizations to ensure maximum impact and user satisfaction.",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Support & Growth",
      description:
        "Our relationship doesn't end at launch. We provide ongoing support, updates, and strategic guidance for continued growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven process ensures you're involved at every step and get
            exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div key={idx} className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full hover:shadow-lg hover:border-primary transition-all">
                  <StepIcon className="w-10 h-10 text-primary mb-4" />
                  <div className="text-5xl font-black text-primary opacity-20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Curious about how this works for your specific project?
          </p>
          <button className="bg-primary text-white px-10 py-4 font-bold rounded-lg hover:bg-opacity-90 transition-all">
            Let's Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
