import Nav from "@/components/reusable/Nav";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Jakarta, Indonesia",
      subtitle: "Visit our studio",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@creativeagency.com",
      subtitle: "24 hour response",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+62 812-3456-7890",
      subtitle: "Monday-Friday 9-6",
    },
    {
      icon: MessageSquare,
      title: "Chat",
      details: "Live Chat Support",
      subtitle: "Business hours",
    },
  ];

  const socialLinks = [
    { platform: "Instagram", handle: "@creativeagency", icon: Instagram },
    { platform: "LinkedIn", handle: "Creative Agency", icon: Linkedin },
    { platform: "Twitter", handle: "@creative_co", icon: Twitter },
  ];

  return (
    <div>
      <Nav />

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-linear-to-br from-primary to-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Have a project? We'd love to hear from you. Let's create amazing
            solutions together.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary transition-all text-center"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">{info.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-dark mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Project Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Select a project type</option>
                    <option value="web">Web Design & Development</option>
                    <option value="branding">Branding</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 font-bold rounded-lg hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-gray-100 rounded-xl overflow-hidden h-96 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322735!2d106.8196!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0e9a8c1b1b1%3A0x8c0c0e9a8c1b1b1!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-dark">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-dark">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-dark">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-lg hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold text-dark text-sm">
                            {social.platform}
                          </p>
                          <p className="text-gray-600 text-xs">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-16 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What's the typical project timeline?",
                a: "Most projects take 2-8 weeks based on scope and complexity. We provide detailed timelines during discovery.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide post-launch support and maintenance packages to ensure optimal performance.",
              },
              {
                q: "What's your payment structure?",
                a: "We typically use 50% deposit and 50% on completion. Custom arrangements available for larger projects.",
              },
              {
                q: "Can you work with existing projects?",
                a: "Absolutely! We can audit, improve, or take over maintenance of existing projects.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes, we're happy to sign confidentiality agreements to protect your information.",
              },
              {
                q: "How do we communicate during the project?",
                a: "We use project management tools with regular check-ins and a dedicated point of contact.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-dark hover:bg-gray-50">
                  {faq.q}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's collaborate and create digital solutions that drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-4 font-bold rounded hover:bg-opacity-90">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold rounded hover:bg-white hover:text-dark">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
