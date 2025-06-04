
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: "50+", label: "Clients satisfaits" },
    { icon: <Target size={24} />, number: "100+", label: "Projets livrés" },
    { icon: <Clock size={24} />, number: "5", label: "Années d'expérience" },
    { icon: <Award size={24} />, number: "24/7", label: "Support client" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              À propos d'abalo.dev
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nous sommes une équipe passionnée de développeurs et designers, 
              spécialisés dans la création de solutions numériques innovantes et sur mesure.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre mission est de transformer vos idées en réalité digitale, 
              en alliant expertise technique, créativité et accompagnement personnalisé 
              pour faire de votre projet un succès.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Expertise technique reconnue</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Approche agile et collaborative</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Support et maintenance continue</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h4>
              <p className="text-gray-600">Nous visons l'excellence dans chaque projet, en apportant le plus haut niveau de qualité et d'attention aux détails.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Collaboration</h4>
              <p className="text-gray-600">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h4>
              <p className="text-gray-600">Nous restons à la pointe des technologies pour proposer des solutions innovantes et performantes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
