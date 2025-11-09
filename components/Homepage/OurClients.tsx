const OurClients = () => {
  const clients = [
    { id: 1, name: "TechCorp Global", initials: "TCG" },
    { id: 2, name: "Digital Innovate", initials: "DI" },
    { id: 3, name: "Creative Solutions", initials: "CS" },
    { id: 4, name: "Future Systems", initials: "FS" },
    { id: 5, name: "Smart Analytics", initials: "SA" },
    { id: 6, name: "Velocity Labs", initials: "VL" },
    { id: 7, name: "Nexus Digital", initials: "ND" },
    { id: 8, name: "Quantum Tech", initials: "QT" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We've had the privilege of working with leading companies across
            various industries worldwide.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group bg-white border border-gray-200 rounded-lg p-8 flex items-center justify-center min-h-[150px] hover:shadow-md hover:border-primary transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                  <span className="font-bold text-lg text-white">
                    {client.initials}
                  </span>
                </div>
                <p className="text-dark font-semibold text-sm text-center leading-tight">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Want to join our growing list of successful clients?
          </p>
          <button className="bg-primary text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-all">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
