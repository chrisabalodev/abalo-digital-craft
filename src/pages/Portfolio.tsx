
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des commandes, paiements en ligne et tableau de bord administrateur.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      date: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Application Mobile Banking",
      description: "Application web progressive pour services bancaires mobiles avec authentification sécurisée et transactions en temps réel.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "PostgreSQL", "PWA"],
      category: "Finance",
      date: "2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Système de Gestion Scolaire",
      description: "Plateforme complète pour la gestion d'établissements scolaires incluant notes, présences et communication parents-professeurs.",
      image: "/placeholder.svg",
      technologies: ["React", "Laravel", "MySQL", "WebRTC"],
      category: "Éducation",
      date: "2023",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Artiste",
      description: "Site portfolio interactif pour artiste avec galerie dynamique, blog intégré et système de commandes d'œuvres.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
      category: "Portfolio",
      date: "2023",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique en temps réel pour suivi des performances business avec visualisations interactives.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Firebase", "Chart.js"],
      category: "Analytics",
      date: "2023",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Plateforme de Formation",
      description: "LMS (Learning Management System) pour formations en ligne avec suivi de progression et certificats.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Django", "Redis", "WebSockets"],
      category: "Éducation",
      date: "2022",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["Tous", "E-commerce", "Finance", "Éducation", "Portfolio", "Analytics"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              abalo.dev
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent animate-fade-in">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
            Découvrez notre portfolio de projets web innovants et solutions numériques 
            développées pour nos clients au Togo et en Afrique.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                      <Tag size={12} className="mr-1" />
                      {project.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Prêt à lancer votre projet ?</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Rejoignez nos clients satisfaits et transformons ensemble votre vision en réalité numérique.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 group"
              >
                Commencer mon projet
                <ArrowLeft size={20} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
