import { CheckCircle2, Zap, Award, Target } from "lucide-react";

const AboutPage = () => {
  const expertise = [
    "Founded in 2020: Delivering innovative engineering solutions worldwide.",
    "Core Services: CAE for stress and vibration analysis, CFD for fluid dynamics, and more.",
    "Customer Focus: Efficient, cost-effective solutions tailored to your needs.",
    "Partnerships: Collaborating with innovators to accelerate product development.",
  ];

  const testimonials = [
    {
      quote:
        "AESS delivered precise simulations on time, exceeding our expectations.",
      company: "DRDO",
      rating: 5,
    },
    {
      quote:
        "Their expertise in CFD analysis transformed our product development process.",
      company: "TrailParts",
      rating: 5,
    },
    {
      quote:
        "Cost-effective solutions without compromising on quality. Highly recommended!",
      company: "Active Cure",
      rating: 5,
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
          <h1 className="text-4xl md:text-6xl font-black mb-4">About AESS</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Leading the way in Computer-Aided Engineering and Simulation
            Technologies
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              <span className="font-bold text-dark">AESS founded in 2020</span>{" "}
              is a one-stop solution for all your engineering needs. We provide{" "}
              <span className="font-bold text-dark">
                Computer Aided Engineering (CAE)
              </span>{" "}
              and{" "}
              <span className="font-bold text-dark">
                Computational Fluid Dynamics (CFD)
              </span>{" "}
              services, including Manufacturing Simulation such as{" "}
              <span className="font-bold text-dark">Moldflow</span>, Forming &
              Casting simulations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We have high expertise in providing{" "}
              <span className="font-bold text-dark">
                efficient and cost-effective solutions
              </span>{" "}
              to our customers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              AESS partners with innovators to optimize designs, predict
              performance, and reduce time-to-market using cutting-edge
              simulation technologies.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-[#fd5c01]" />
                </div>
                <h3 className="font-bold text-dark mb-1 text-sm">
                  CFD Analysis
                </h3>
                <p className="text-xs text-gray-600">Fluid dynamics</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-[#fd5c01]" />
                </div>
                <h3 className="font-bold text-dark mb-1 text-sm">
                  Structural FEA
                </h3>
                <p className="text-xs text-gray-600">Stress & vibration</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-[#fd5c01]" />
                </div>
                <h3 className="font-bold text-dark mb-1 text-sm">
                  Manufacturing
                </h3>
                <p className="text-xs text-gray-600">Process simulation</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-[#fd5c01]" />
                </div>
                <h3 className="font-bold text-dark mb-1 text-sm">Validation</h3>
                <p className="text-xs text-gray-600">Quality assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 text-center">
            Our Expertise and Commitment
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Built on a foundation of innovation, expertise, and customer success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {expertise.map((item, idx) => {
              const icons = [
                <Zap key="zap" className="w-8 h-8" />,
                <Award key="award" className="w-8 h-8" />,
                <Target key="target" className="w-8 h-8" />,
                <CheckCircle2 key="check" className="w-8 h-8" />,
              ];

              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-[#fd5c01] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#fd5c01] group-hover:text-white transition-all">
                    <span className="text-[#fd5c01] group-hover:text-white">
                      {icons[idx]}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-linear-to-r from-orange-50 to-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-dark mb-12 text-center">
              Our Journey
            </h3>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#fd5c01] to-gray-300"></div>

              <div className="space-y-12">
                {[
                  {
                    year: "2020",
                    title: "Founded",
                    desc: "Started with innovative vision in engineering simulation",
                  },
                  {
                    year: "2021-2022",
                    title: "Expansion",
                    desc: "Expanded service portfolio and market reach",
                  },
                  {
                    year: "2023-Today",
                    title: "Leadership",
                    desc: "Leading in advanced simulation technologies",
                  },
                ].map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-6 ${
                      idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        idx % 2 === 0 ? "text-right pr-6" : "text-left pl-6"
                      }`}
                    >
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="font-bold text-[#fd5c01] text-sm">
                          {milestone.year}
                        </p>
                        <p className="font-bold text-dark text-lg">
                          {milestone.title}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#fd5c01] rounded-full border-4 border-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16 text-center">
            Don't just take our word for it. Here's what our happy clients have
            to say about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-[#fd5c01]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <p className="font-bold text-dark text-sm">
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default AboutPage;
