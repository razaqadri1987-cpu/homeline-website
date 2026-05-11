export default function HomeLineWebsite() {
  const services = [
    'Modular Kitchen',
    'Wardrobe Design',
    'PVC Flooring',
    'Wall Panel',
    'False Ceiling',
    'Artificial Grass'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/80x80/png"
            alt="Homeline Logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-red-600">Homeline</h1>
            <p className="text-sm text-gray-500">Interior & Decorative</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Premium Interior Design For Modern Homes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide Modular Kitchen, Wardrobe, PVC Flooring, Wall Panel,
              Ceiling and complete home interior solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
                Book Free Consultation
              </button>

              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-2xl">
                View Projects
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/700x500/png"
              alt="Interior Design"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-3">Our Services</h3>
          <p className="text-gray-500">
            Complete interior solutions for your dream home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="w-14 h-14 bg-red-100 rounded-2xl mb-5"></div>
              <h4 className="text-2xl font-semibold mb-3">{service}</h4>
              <p className="text-gray-500">
                High-quality design and installation with premium finishing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3">Recent Projects</h3>
            <p className="text-gray-500">
              Explore our latest interior works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src="https://placehold.co/600x400/png"
                  alt="Project"
                  className="w-full"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">
                    Luxury Interior {item}
                  </h4>
                  <p className="text-gray-500">
                    Modern design with premium finishing and elegant style.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-red-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">
            Start Your Dream Interior Today
          </h3>

          <p className="mb-8 text-lg text-red-100">
            Contact HOME LINE TEAM for free consultation and quotation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-red-600 px-6 py-3 rounded-2xl font-semibold">
              Call Now
            </button>

            <button className="border border-white px-6 py-3 rounded-2xl font-semibold">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-4">Homeline</h4>
            <p className="text-gray-400">
              Premium interior and decorative services in Bangalore.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Contact</h5>
            <p className="text-gray-400">
              Bangalore, Karnataka
            </p>
            <p className="text-gray-400">info@homelineteam.com</p>
            <p className="text-gray-400">www.homelineteam.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
