
import { Check, Code, Palette, Users, Zap, Monitor, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Développement Web",
      description: "Applications web modernes et performantes avec les dernières technologies",
      features: ["React / Vue.js", "Node.js / Express", "Bases de données", "API REST"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Palette size={40} />,
      title: "Design & UX/UI",
      description: "Interfaces utilisateur intuitives et designs visuels impactants",
      features: ["Design système", "Prototypage", "Interface mobile", "Branding"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Users size={40} />,
      title: "Conseil Numérique",
      description: "Accompagnement stratégique pour votre transformation digitale",
      features: ["Audit technique", "Stratégie digitale", "Architecture", "Formation"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: <Zap size={40} />,
      title: "Abonnements",
      description: "Solutions d'abonnement pour un accompagnement continu",
      features: ["Maintenance", "Support 24/7", "Mises à jour", "Monitoring"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins numériques, 
            de la conception à la maintenance de vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 transform group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                    <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white transform hover:scale-105 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Solutions Complètes</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Nous proposons des solutions end-to-end pour votre présence digitale, 
                  de la stratégie à la mise en œuvre.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
                  Discuter de votre projet
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Monitor size={32} className="mx-auto mb-2" />
                  <span className="text-sm">Web Apps</span>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Smartphone size={32} className="mx-auto mb-2" />
                  <span className="text-sm">Mobile</span>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Globe size={32} className="mx-auto mb-2" />
                  <span className="text-sm">E-commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
