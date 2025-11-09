import Nav from "@/components/reusable/Nav";
import { Target, Zap, Handshake, Award } from "lucide-react";

const AboutPage = () => {
  const teamDisciplines = [
    {
      id: 1,
      discipline: "Computational Experts",
      description: "Specialists in CFD and advanced fluid mechanics",
      count: "25+",
    },
    {
      id: 2,
      discipline: "Structural Engineers",
      description: "FEA and structural analysis experts",
      count: "20+",
    },
    {
      id: 3,
      discipline: "Manufacturing Engineers",
      description: "Process simulation and optimization specialists",
      count: "15+",
    },
    {
      id: 4,
      discipline: "Project Managers",
      description: "Client coordination and delivery management",
      count: "10+",
    },
  ];

  const milestones = [
    { year: "2008", title: "Founded", desc: "CAE consulting started" },
    { year: "2012", title: "Expansion", desc: "Multi-industry reach" },
    { year: "2018", title: "Growth", desc: "1000+ projects milestone" },
    { year: "2024", title: "Leadership", desc: "Industry recognition" },
  ];

  const strengths = [
    {
      title: "Technical Excellence",
      description: "Expert knowledge in CFD, FEA, and manufacturing simulations",
      icon: Zap,
    },
    {
      title: "Industry Focus",
      description: "Specialized expertise in automotive, aerospace, and industrial sectors",
      icon: Target,
    },
    {
      title: "Client Partnership",
      description: "Transparent communication and collaborative approach throughout projects",
      icon: Handshake,
    },
    {
      title: "Quality Standards",
      description: "Rigorous validation and verification of all simulation results",
      icon: Award,
    },
  ];

  return (
    <div>
      <Nav />
      
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-linear-to-br from-primary to-orange-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Leading CAE & Engineering Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            16+ years of expertise delivering advanced simulation and engineering analysis services globally
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded in 2008, we've grown into a trusted partner for companies seeking advanced engineering solutions. What started as a small team of CFD specialists has evolved into a comprehensive CAE services provider serving clients across 12+ countries.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over 1000 successfully completed projects and a team of 70+ technical experts, we deliver precise simulations, virtual validation, and engineering insights that accelerate product development and optimize performance.
            </p>
            <button className="bg-primary text-white px-8 py-3 font-semibold hover:bg-opacity-90 rounded">
              Explore Our Services
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-4xl font-black text-primary mb-2">1000+</p>
                <p className="text-gray-700 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-primary mb-2">16+</p>
                <p className="text-gray-700 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-primary mb-2">70+</p>
                <p className="text-gray-700 text-sm">Technical Staff</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-primary mb-2">95%</p>
                <p className="text-gray-700 text-sm">Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-16 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white border-2 border-primary border-opacity-30 rounded-lg p-8 text-center hover:shadow-lg"
              >
                <div className="text-4xl font-black text-primary mb-3">
                  {m.year}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{m.title}</h3>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
            Our Team Structure
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Diverse expertise organized for maximum project impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamDisciplines.map((team) => (
              <div
                key={team.id}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-black text-primary mb-3">
                  {team.count}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {team.discipline}
                </h3>
                <p className="text-gray-600 text-sm">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
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
      </section>

      {/* Industries */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Automotive & Mobility",
              "Aerospace & Defense",
              "Industrial Equipment",
              "Consumer Durables",
              "Oil & Gas",
              "Power & Energy",
              "HVAC & Thermal",
              "Medical Devices",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-200 rounded-lg text-center hover:shadow-md transition-all"
              >
                <p className="text-gray-700 font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl opacity-95 mb-8">
            Let's discuss how we can accelerate your engineering and product development
          </p>
          <button className="bg-white text-primary px-10 py-4 font-bold text-lg rounded-lg hover:shadow-lg transition-all">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
