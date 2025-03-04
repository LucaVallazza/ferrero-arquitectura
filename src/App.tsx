import React, { useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const testimonials = [
    {
      text: "Profesionales en cada detalle, hicieron realidad nuestra casa soñada.",
      author: "Carolina G.",
    },
    {
      text: "El diseño del local comercial superó nuestras expectativas, moderno y funcional.",
      author: "Martín R.",
    },
    {
      text: "Desde el primer boceto hasta la entrega, un servicio impecable.",
      author: "Laura S.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="w-40">
              {/* Logo placeholder */}
              <div className="h-12 w-full bg-gray-200"></div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-800 hover:text-blue-900">
                Sobre Nosotros
              </a>
              <a href="#services" className="text-gray-800 hover:text-blue-900">
                Servicios
              </a>
              <a
                href="#portfolio"
                className="text-gray-800 hover:text-blue-900"
              >
                Proyectos
              </a>
              <a href="#contact" className="text-gray-800 hover:text-blue-900">
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
            <a href="#about" className="block py-2 text-gray-800">
              Sobre Nosotros
            </a>
            <a href="#services" className="block py-2 text-gray-800">
              Servicios
            </a>
            <a href="#portfolio" className="block py-2 text-gray-800">
              Proyectos
            </a>
            <a href="#contact" className="block py-2 text-gray-800">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gray-900/50">
          {/* Hero background image placeholder */}
          <div className="h-full w-full bg-gray-800"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="w-48 mb-8">
            {/* Logo placeholder */}
            <div className="h-16 w-full bg-gray-200 rounded"></div>
          </div>
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Transformamos ideas en espacios extraordinarios
            </h1>
            <p className="text-xl mb-8">
              Diseño arquitectónico y construcción con innovación y excelencia
            </p>
            <div className="space-x-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800">
                Ver proyectos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900">
                Solicitar consulta
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Sobre Nosotros
          </h2>
          <div className="flex flex-col xl:flex-row gap-12">
            <div className="w-full">
              <p className="text-gray-700 mb-6">
                Somos Ferrero Arquitectura, un estudio con sede en Córdoba,
                Argentina, especializado en el diseño y construcción de
                proyectos arquitectónicos que combinan funcionalidad, estética y
                sustentabilidad.
              </p>
              <div className="flex flex-row gap-6">
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">Diseño inteligente</h3>
                  <p className="text-sm text-gray-600">
                    Espacios cómodos, versátiles y eficientes
                  </p>
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">Sustentabilidad</h3>
                  <p className="text-sm text-gray-600">
                    Materiales y técnicas eco-amigables
                  </p>
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">Personalización</h3>
                  <p className="text-sm text-gray-600">
                    Soluciones arquitectónicas únicas
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg">
              {/* Team image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Diseño Arquitectónico",
                description: "Planificación y desarrollo de proyectos a medida",
                image: "bg-gray-200", // Placeholder para imagen
              },
              {
                title: "Construcción y Dirección",
                description:
                  "Gestión integral desde el inicio hasta la entrega",
              },
              {
                title: "Remodelaciones",
                description: "Transformación de espacios con diseño moderno",
              },
              {
                title: "Consultoría",
                description: "Asesoramiento en optimización y materiales",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`h-48 ${service.image} rounded-lg mb-6`}></div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Casa Mirador",
                description:
                  "Arquitectura contemporánea en armonía con el paisaje",
              },
              {
                title: "Edificio Urban Loft",
                description: "Minimalismo y funcionalidad en la ciudad",
              },
              {
                title: "Centro Cultural La Cúpula",
                description: "Un espacio de encuentro y arte",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Ver más proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Opiniones de Clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col h-full"
              >
                <p className="text-gray-600 mb-auto">⭐ "{testimonial.text}"</p>
                <p className="font-bold mt-4">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            ¿Listo para construir tu próximo proyecto?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800"
              >
                Agendar una consulta gratuita
              </button>
            </form>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">
                  Información de Contacto
                </h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex justify-center">
                      <FaMapMarkerAlt className="text-blue-900" />
                    </div>
                    <p>Av. Colón 1450, Nueva Córdoba, Córdoba, Argentina</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex justify-center">
                      <FaPhone className="text-blue-900" />
                    </div>
                    <p>+54 9 351 456-7890</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex justify-center">
                      <FaEnvelope className="text-blue-900" />
                    </div>
                    <p>contacto@ferreroarquitectura.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Ferrero Arquitectura. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
