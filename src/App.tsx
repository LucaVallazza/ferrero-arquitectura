import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaBrain,
  FaTree,
  FaPalette,
} from "react-icons/fa";
import {
  FaDraftingCompass,
  FaHardHat,
  FaTools,
  FaLightbulb
} from "react-icons/fa";
import logo from './assets/logo_ferrero.jpg'
import workerPhoto from './assets/worker.png'
import casaMiradorPhoto from './assets/casa_mirador.jpg'
import urbanLoftPhoto from './assets/urban_loft.jpg'
import culturalCenterPhoto from './assets/centro_cultural.jpg'
import sustainableHomePhoto from './assets/residencia_sustentable.jpg'
import heroBackground from './assets/planos-compressed.jpg'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("default"); // Add this line to track toast type

  // Services data
  const services = [
    {
      title: "Diseño Arquitectónico",
      description: "Planificación y desarrollo de proyectos a medida",
      icon: <FaDraftingCompass className="text-5xl text-blue-900 mb-4" />
    },
    {
      title: "Construcción y Dirección",
      description: "Gestión integral desde el inicio hasta la entrega",
      icon: <FaHardHat className="text-5xl text-blue-900 mb-4" />
    },
    {
      title: "Remodelaciones y Reformas",
      description: "Transformación de espacios con diseño moderno",
      icon: <FaTools className="text-5xl text-blue-900 mb-4" />
    },
    {
      title: "Consultoría en Diseño",
      description: "Asesoramiento en optimización y materiales",
      icon: <FaLightbulb className="text-5xl text-blue-900 mb-4" />
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Casa Mirador",
      description: "Arquitectura contemporánea en armonía con el paisaje",
      image: casaMiradorPhoto, // Placeholder for image
    },
    {
      title: "Edificio Urban Loft",
      description: "Minimalismo y funcionalidad en la ciudad",
      image: urbanLoftPhoto, // Placeholder for image
    },
    {
      title: "Centro Cultural La Cúpula",
      description: "Un espacio de encuentro y arte",
      image: culturalCenterPhoto, // Placeholder for image
    },
    {
      title: "Residencia Sustentable",
      description: "Vivienda ecológica con sistemas de energía renovable",
      image: sustainableHomePhoto, // Placeholder for image
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "El equipo de Ferrero Arquitectura captó exactamente lo que queríamos. Nuestra casa no solo es hermosa, sino que se siente cómoda y funcional.",
      author: "María G.",
    },
    {
      text: "Nos ayudaron a transformar un espacio antiguo en un centro cultural increíble. Supieron respetar la historia del lugar y modernizarlo sin perder su esencia.",
      author: "Lucas P.",
    },
    {
      text: "Un estudio con gran profesionalismo. Desde el primer boceto hasta la construcción, el proceso fue impecable.",
      author: "Sofía R.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    
    // Show success toast
    showToast("¡Enviado! Su mensaje será respondido en las próximas 48 horas.", "success");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Funciones para controlar el carrusel
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = 300; // Cantidad de desplazamiento

    if (direction === "left") {
      setScrollPosition(Math.max(scrollPosition - scrollAmount, 0));
      container.scrollTo({
        left: Math.max(scrollPosition - scrollAmount, 0),
        behavior: "smooth",
      });
    } else {
      const newPosition = Math.min(
        scrollPosition + scrollAmount,
        container.scrollWidth - container.clientWidth
      );
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const showToast = (message: string, type: string = "default") => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="w-40">
              {/* Logo placeholder */}
              <img
                src={logo}
                alt="Ferrero Arquitectura Logo"
                className="h-12 w-auto object-fill mr-3"
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-900 transition-colors"
              >
                Sobre Nosotros
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-900 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#portfolio"
                className="text-gray-800 hover:text-blue-900 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#testimonials"
                className="text-gray-800 hover:text-blue-900 transition-colors"
              >
                Testimonios
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-900 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
            <a
              href="#about"
              className="block py-2 text-gray-800 hover:text-blue-900"
            >
              Sobre Nosotros
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-800 hover:text-blue-900"
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-gray-800 hover:text-blue-900"
            >
              Proyectos
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-800 hover:text-blue-900"
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-800 hover:text-blue-900"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Blurred Background */}
      <header className="relative h-screen overflow-hidden">
        {/* Background image with blur effect */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            filter: 'blur(8px) brightness(0.6)',
            transform: 'scale(1.1)', // Prevents blur edges from showing
          }}
        ></div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="w-48 mb-8">
            {/* If you want to show the logo here */}
            {/* <img src={logo} className="h-auto w-full object-contain" alt="Ferrero Arquitectura" /> */}
          </div>
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transformamos ideas en espacios extraordinarios
            </h1>
            <p className="text-xl mb-8">
              Diseño arquitectónico y construcción con innovación y excelencia
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} 
                className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Ver proyectos
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors"
              >
                Solicitar consulta gratuita
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
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <p className="text-gray-700 mb-6 max-w-4xl mx-auto">
                Somos Ferrero Arquitectura, un estudio con sede en Córdoba,
                Argentina, especializado en el diseño y construcción de
                proyectos arquitectónicos que combinan funcionalidad, estética y
                sustentabilidad. Creemos en la arquitectura como un medio para
                mejorar la calidad de vida, por lo que cada uno de nuestros
                proyectos busca un equilibrio entre innovación, eficiencia
                espacial y materiales de alta calidad.
              </p>
              <div className="flex flex-row flex-wrap md:flex-nowrap  md:text-center w-full lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-white w-full rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center mb-4">
                    <FaBrain className="text-5xl text-blue-900 mb-3" />
                    <h3 className="font-bold text-lg">Diseño inteligente</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Pensamos en cada detalle para que los espacios sean cómodos,
                    versátiles y eficientes.
                  </p>
                </div>
                
                <div className="p-6 bg-white w-full rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center mb-4">
                    <FaTree className="text-5xl text-blue-900 mb-3" />
                    <h3 className="font-bold text-lg">Sustentabilidad</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Priorizamos materiales y técnicas constructivas que reduzcan
                    el impacto ambiental.
                  </p>
                </div>
                
                <div className="p-6 bg-white w-full rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center mb-4">
                    <FaPalette className="text-5xl text-blue-900 mb-3" />
                    <h3 className="font-bold text-lg">Personalización</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Trabajamos en conjunto con nuestros clientes para
                    materializar su visión con soluciones arquitectónicas
                    únicas.
                  </p>
                </div>
              </div>
            </div>
            <img src={workerPhoto} className="w-full h-96 bg-gray-200 rounded-lg max-w-4xl mx-auto object-cover">
              {/* Team image placeholder */}
            </img>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:pb-40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 lg:pb-40 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Proyectos Destacados
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 flex items-center z-10">
              <button
                onClick={() => handleScroll("left")}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                disabled={scrollPosition <= 0}
                aria-label="Desplazar a la izquierda"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth hide-scrollbar py-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 mx-2"
                  style={{ minWidth: "300px", width: "calc(33.333% - 1rem)" }}
                >
                  <img src={project.image} className={`h-64`}></img>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button 
                      onClick={() => showToast("Esta característica no está disponible ya que esta pagina es una versión demo")} 
                      className="text-blue-900 border border-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-0 bottom-0 right-0 flex items-center z-10">
              <button
                onClick={() => handleScroll("right")}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Desplazar a la derecha"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => showToast("Esta característica no está disponible en la versión demo")}
              className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Ver más proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:pb-40">
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
                <p className="mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-600 mb-auto">"{testimonial.text}"</p>
                <p className="font-bold mt-4">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:pb-40 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            ¿Listo para construir tu próximo proyecto?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Enviar
              </button>

              {/* WhatsApp Consultation Button */}
              <a
                href="https://wa.me/5491141406819?text=Hola%20buenos%20dias!%20Me%20gustaria%20consultar%20disponibilidad%20para%20agendar%20una%20consulta%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={20} />
                Agendar consulta gratuita
              </a>
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

              <div className="h-64 bg-gray-200 rounded-lg mb-8">
                <div className="h-64 mb-8 rounded-lg overflow-hidden">
                  <iframe
                    title="Ubicación de Ferrero Arquitectura"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0817899426294!2d-64.19121648485098!3d-31.415932981403787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28a30da21c5%3A0xb78e830ccad98d93!2sAv.%20Col%C3%B3n%201450%2C%20X5000EPP%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1651767692334!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  aria-label="Pinterest"
                >
                  <FaPinterest size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ferrero Arquitectura. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
      
      {/* Toast notification */}
      <div 
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
          toastType === "success" ? "bg-green-600" : "bg-gray-800"
        } text-white px-6 py-3 rounded-md shadow-lg transition-opacity duration-300 z-50 ${
          toastVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {toastMessage}
      </div>
    </div>
  );
};

export default App;
