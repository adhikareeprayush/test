const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, Digital Ventures",
      image: "SM",
      content:
        "The team exceeded our expectations in every way. Their attention to detail and creative approach transformed our brand completely. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rizki Prabowo",
      role: "Founder, TechStart Indonesia",
      image: "RP",
      content:
        "Working with this agency was a game-changer for our startup. They delivered a stunning website that perfectly captures our vision and mission.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "Marketing Director, Global Co.",
      image: "EJ",
      content:
        "Professional, responsive, and incredibly talented. They understood our needs and delivered solutions that drove real results for our business.",
      rating: 5,
    },
    {
      id: 4,
      name: "Budi Santoso",
      role: "Product Manager, InnovateTech",
      image: "BS",
      content:
        "The design work was exceptional. Our users loved the new interface and our conversion rates increased significantly. Great investment!",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have
            to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all flex flex-col h-full justify-between"
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
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <svg
                    key={i + testimonial.rating}
                    className="w-5 h-5 fill-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-[#fd5c01] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
