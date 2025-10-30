import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, ArrowRight } from 'lucide-react';

function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Rileva sezione attiva per effetti dinamici
      const sections = ['home', 'progetti', 'skills', 'contatti'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Piattaforma di e-commerce completa con React, Node.js e PostgreSQL",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "AI Chat Assistant",
      description: "Assistente conversazionale intelligente con integrazione GPT-4",
      tags: ["Python", "OpenAI", "FastAPI"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Applicazione di gestione progetti con team collaboration",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 70 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cursor Follower migliorato */}
      <div
        className="fixed w-6 h-6 bg-black/10 rounded-full pointer-events-none z-50 transition-all duration-100 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%) scale(1)',
        }}
      />
      <div
        className="fixed w-2 h-2 bg-black rounded-full pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Fixed Navigation con bordi arrotondati */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md border border-black/20 rounded-full py-3 px-6 shadow-sm">
        <div className="flex space-x-8">
          {['Home', 'Progetti', 'Skills', 'Contatti'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm uppercase tracking-wider transition-all duration-300 hover:opacity-100 ${
                activeSection === item.toLowerCase() 
                  ? 'opacity-100 font-bold scale-105' 
                  : 'opacity-60'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section con effetti fluidi */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="space-y-8">
            <div className="inline-block border border-black/30 px-4 py-2 text-xs uppercase tracking-widest rounded-full bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white transition-all duration-500">
              Disponibile per progetti
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
              Luca Neviani
            </h1>
            
            <div className="w-20 h-1 bg-black rounded-full transform origin-left hover:scale-x-125 transition-transform duration-500"></div>
            
            <p className="text-2xl font-medium opacity-80 hover:opacity-100 transition-opacity duration-300">
              Data Analyst e Full Stack Developer
            </p>
            
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed hover:leading-loose transition-all duration-500">
              Unisco Data Analysis BI ed il Full Stack Developement per progetti data-driven.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#contatti"
                className="group px-8 py-4 bg-black text-white hover:bg-white hover:text-black border border-black rounded-full transition-all duration-500 flex items-center space-x-2 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Contattami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              <a 
                href="#"
                className="group px-8 py-4 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all duration-500 flex items-center space-x-2 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Scarica CV</span>
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex space-x-6 pt-8">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 border border-black/30 rounded-full flex items-center justify-center hover:bg-black transition-all duration-500 group transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="w-5 h-5 text-black group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section con card arrotondate */}
      <section id="progetti" className="py-32 bg-gray-50/30">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-6xl font-bold mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300">Progetti</h2>
            <div className="w-20 h-1 bg-black rounded-full transform origin-left hover:scale-x-125 transition-transform duration-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-black/20 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className="aspect-square border-b border-black/10 relative bg-gradient-to-br from-white to-gray-50 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 flex items-center justify-center rounded-t-2xl">
                    <ExternalLink className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-transparent to-white/10 rounded-t-2xl">
                    <span className="text-8xl font-bold text-black/10 group-hover:scale-110 group-hover:opacity-0 transition-all duration-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed group-hover:leading-loose transition-all duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 border border-black/30 rounded-full text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section con barre arrotondate */}
      <section id="skills" className="py-32 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="mb-20">
            <h2 className="text-6xl font-bold mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300">Competenze</h2>
            <div className="w-20 h-1 bg-black rounded-full transform origin-left hover:scale-x-125 transition-transform duration-500"></div>
          </div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div key={index} className="group transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-2xl font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                  <span className="text-xl font-medium text-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 border border-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-black to-gray-800 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-y-110"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section con bordi arrotondati */}
      <section id="contatti" className="py-32 bg-gradient-to-br from-black to-gray-900 text-white rounded-t-3xl">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="mb-20">
            <h2 className="text-6xl font-bold mb-4">Contatti</h2>
            <div className="w-20 h-1 bg-white rounded-full transform origin-left hover:scale-x-125 transition-transform duration-500"></div>
            <p className="text-xl text-gray-400 mt-8 hover:text-gray-300 transition-colors duration-300">Hai un progetto in mente? Parliamone.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Mail, title: "Email", info: "tuo@email.com", href: "mailto:tuo@email.com" },
              { Icon: Phone, title: "Telefono", info: "+39 123 456 789", href: "tel:+39123456789" },
              { Icon: Linkedin, title: "LinkedIn", info: "/nomecognome", href: "#" }
            ].map((contact, index) => (
              <a 
                key={index}
                href={contact.href}
                className="group border border-white/20 rounded-2xl p-8 hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm bg-white/5"
              >
                <contact.Icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg uppercase tracking-wider font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{contact.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                  {contact.info}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-8 text-center">
          <p className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
            © 2024 Nome Cognome. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;