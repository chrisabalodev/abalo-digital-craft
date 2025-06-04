
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des commandes, paiements en ligne et tableau de bord administrateur.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      ],
      technologies: ["Vue.js", "Django", "Redis", "WebSockets"],
      category: "Éducation",
      date: "2022",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["Tous", "E-commerce", "Finance", "Éducation", "Portfolio", "Analytics"];

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
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
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
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

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft size={20} />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextImage}
                      >
                        <ChevronRight size={20} />
                      </Button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                      <Tag size={14} className="mr-1" />
                      {selectedProject.category}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {selectedProject.date}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={18} />
                      Voir le site
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-all"
                    >
                      <Github size={18} />
                      Code source
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
