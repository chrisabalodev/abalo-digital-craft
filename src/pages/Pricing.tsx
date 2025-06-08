
import { ArrowLeft, Check, Star, Zap, Shield, Clock, Globe, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  const subscriptionPlans = [
    {
      name: "Starter",
      monthlyPrice: "29€",
      annualPrice: "290€",
      period: "/mois",
      annualPeriod: "/an",
      description: "Parfait pour les petites entreprises qui démarrent",
      features: [
        "Site web responsive jusqu'à 5 pages",
        "Design personnalisé",
        "Optimisation SEO de base",
        "Hébergement inclus",
        "Support par email",
        "1 révision par mois",
        "Certificat SSL"
      ],
      popular: false,
      buttonText: "Commencer"
    },
    {
      name: "Professional",
      monthlyPrice: "79€",
      annualPrice: "790€",
      period: "/mois",
      annualPeriod: "/an",
      description: "Idéal pour les entreprises en croissance",
      features: [
        "Site web responsive jusqu'à 15 pages",
        "Design sur mesure avancé",
        "Optimisation SEO complète",
        "Hébergement premium",
        "Support prioritaire",
        "3 révisions par mois",
        "Intégration e-commerce",
        "Analytics avancés",
        "Formulaires personnalisés"
      ],
      popular: true,
      buttonText: "Choisir Professional"
    },
    {
      name: "Enterprise",
      monthlyPrice: "149€",
      annualPrice: "1490€",
      period: "/mois",
      annualPeriod: "/an",
      description: "Pour les grandes entreprises avec des besoins complexes",
      features: [
        "Site web illimité",
        "Design et développement sur mesure",
        "SEO avancé et consultation",
        "Hébergement dédié",
        "Support 24/7",
        "Révisions illimitées",
        "E-commerce avancé",
        "Intégrations API personnalisées",
        "Formation équipe",
        "Consultation stratégique mensuelle"
      ],
      popular: false,
      buttonText: "Contactez-nous"
    }
  ];

  const maintenancePlans = [
    {
      name: "Maintenance Basic",
      price: "49€",
      period: "/mois",
      description: "Maintenance essentielle pour votre site web",
      features: [
        "Mises à jour de sécurité",
        "Sauvegardes hebdomadaires",
        "Monitoring de base",
        "Support par email",
        "Corrections de bugs mineurs",
        "Rapport mensuel"
      ],
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Maintenance Pro",
      price: "99€",
      period: "/mois",
      description: "Maintenance complète avec optimisations",
      features: [
        "Toutes les fonctionnalités Basic",
        "Sauvegardes quotidiennes",
        "Monitoring avancé 24/7",
        "Support prioritaire",
        "Optimisations de performance",
        "Mises à jour de contenu (2h/mois)",
        "Analyses de sécurité",
        "Rapport détaillé bi-mensuel"
      ],
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "Maintenance Premium",
      price: "199€",
      period: "/mois",
      description: "Service complet avec développement continu",
      features: [
        "Toutes les fonctionnalités Pro",
        "Développement continu (5h/mois)",
        "Support téléphonique",
        "Consultation stratégique",
        "Audits de performance trimestriels",
        "Nouvelles fonctionnalités",
        "Formation utilisateur",
        "Rapport exécutif mensuel"
      ],
      icon: <Star className="h-6 w-6" />
    }
  ];

  const completePacks = [
    {
      name: "Pack Essentiel",
      price: "1 200€",
      period: "forfait unique",
      description: "Solution complète pour démarrer votre présence en ligne",
      features: [
        "Recherche et achat de nom de domaine",
        "Site web responsive jusqu'à 5 pages",
        "Design personnalisé",
        "Configuration hébergement",
        "Certificat SSL inclus",
        "Mise en ligne complète",
        "Formation à la gestion de base",
        "1 mois de support inclus"
      ],
      icon: <Globe className="h-6 w-6" />,
      popular: false
    },
    {
      name: "Pack Business",
      price: "2 500€",
      period: "forfait unique",
      description: "Solution professionnelle avec suivi complet",
      features: [
        "Tout du Pack Essentiel",
        "Site web jusqu'à 15 pages",
        "Design avancé et sur mesure",
        "Optimisation SEO complète",
        "Intégration e-commerce (si besoin)",
        "Analytics et outils de suivi",
        "Formation approfondie",
        "3 mois de support inclus",
        "1 révision majeure incluse"
      ],
      icon: <Package className="h-6 w-6" />,
      popular: true
    },
    {
      name: "Pack Premium",
      price: "4 500€",
      period: "forfait unique",
      description: "Solution haut de gamme avec accompagnement personnalisé",
      features: [
        "Tout du Pack Business",
        "Site web complexe (pages illimitées)",
        "Développement sur mesure",
        "Intégrations API personnalisées",
        "E-commerce avancé",
        "Formation équipe complète",
        "Stratégie digitale incluse",
        "6 mois de support premium",
        "Révisions illimitées pendant 3 mois"
      ],
      icon: <Star className="h-6 w-6" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tarifs & Abonnements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choisissez la solution qui correspond à vos besoins. Des abonnements flexibles, 
            des services de maintenance professionnels ou des packs complets clés en main.
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="subscriptions" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-2xl mx-auto">
              <TabsTrigger value="subscriptions" className="flex items-center gap-2">
                <Clock size={16} />
                Abonnements
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="flex items-center gap-2">
                <Shield size={16} />
                Maintenance
              </TabsTrigger>
              <TabsTrigger value="packs" className="flex items-center gap-2">
                <Package size={16} />
                Packs Complets
              </TabsTrigger>
            </TabsList>

            {/* Subscription Plans */}
            <TabsContent value="subscriptions">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
                  <button className="px-4 py-2 rounded-md bg-white shadow-sm text-gray-900 font-medium">
                    Mensuel
                  </button>
                  <button className="px-4 py-2 text-gray-600">
                    Annuel <span className="text-green-600 font-semibold">(-20%)</span>
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {subscriptionPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Le plus populaire
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-blue-600">{plan.monthlyPrice}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        ou {plan.annualPrice}{plan.annualPeriod}
                      </div>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Maintenance Plans */}
            <TabsContent value="maintenance">
              <div className="grid md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                          {plan.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full hover:bg-blue-50">
                        Choisir ce plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Complete Packs */}
            <TabsContent value="packs">
              <div className="grid md:grid-cols-3 gap-8">
                {completePacks.map((pack, index) => (
                  <Card key={index} className={`relative hover:shadow-lg transition-shadow ${pack.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
                    {pack.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Le plus choisi
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center pb-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                          {pack.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold">{pack.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-blue-600">{pack.price}</span>
                      </div>
                      <div className="text-sm text-gray-500">{pack.period}</div>
                      <CardDescription className="text-base">{pack.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {pack.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${pack.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg' : ''}`}
                        variant={pack.popular ? 'default' : 'outline'}
                      >
                        Choisir ce pack
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Puis-je changer de plan à tout moment ?
                </h3>
                <p className="text-gray-600">
                  Oui, vous pouvez modifier votre abonnement à tout moment. 
                  Les changements prennent effet lors du prochain cycle de facturation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Y a-t-il un engagement de durée ?
                </h3>
                <p className="text-gray-600">
                  Nos abonnements sont sans engagement. Vous pouvez annuler à tout moment 
                  avec un préavis de 30 jours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Que comprend le suivi complet des packs ?
                </h3>
                <p className="text-gray-600">
                  Nous nous occupons de tout : de la recherche du nom de domaine parfait 
                  jusqu'à la mise en ligne de votre site, avec formation incluse.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Proposez-vous des tarifs personnalisés ?
                </h3>
                <p className="text-gray-600">
                  Oui, pour les projets complexes ou les grandes entreprises, 
                  nous proposons des devis personnalisés adaptés à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à commencer votre projet ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
                Démarrer un projet
              </Button>
              <Button size="lg" variant="outline">
                Planifier un appel
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
