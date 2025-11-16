"use client";

import Image from "next/image";

const ClientsMarquee = () => {
  const clients = [
    { id: 1, src: "/clients/1.jpg", alt: "Client 1" },
    { id: 2, src: "/clients/2.jpg", alt: "Client 2" },
    { id: 3, src: "/clients/3.png", alt: "Client 3" },
    { id: 4, src: "/clients/4.png", alt: "Client 4" },
    { id: 5, src: "/clients/5.png", alt: "Client 5" },
    { id: 6, src: "/clients/6.jpg", alt: "Client 6" },
    { id: 7, src: "/clients/7.png", alt: "Client 7" },
    { id: 8, src: "/clients/8.jpg", alt: "Client 8" },
    { id: 9, src: "/clients/9.jpg", alt: "Client 9" },
    { id: 10, src: "/clients/10.jpg", alt: "Client 10" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-3">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Engineering teams worldwide partner with us for simulation
            excellence
          </p>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .marquee {
              display: flex;
              animation: marquee 15s linear infinite;
            }
            
            .marquee:hover {
              animation-play-state: paused;
            }
            
            .marquee-item {
              flex-shrink: 0;
              width: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>

          <div className="marquee">
            {/* Original items */}
            {clients.map((client) => (
              <div key={`${client.id}-1`} className="marquee-item">
                <div className="w-48 h-20 relative bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
            ))}

            {/* Duplicated items for seamless loop */}
            {clients.map((client) => (
              <div key={`${client.id}-2`} className="marquee-item">
                <div className="w-48 h-20 relative bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-base mb-4">
            Ready to join our growing family of successful clients?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#fd5c01] text-white px-8 py-3 font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
