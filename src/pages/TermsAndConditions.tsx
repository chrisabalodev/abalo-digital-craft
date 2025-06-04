
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-blue-700">
                En utilisant les services d'abalo.dev, vous acceptez d'être lié par ces conditions générales d'utilisation.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations sur l'entreprise</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Nom de l'entreprise :</strong> abalo.dev</p>
                <p><strong>Adresse :</strong> Lomé, Togo</p>
                <p><strong>Téléphone :</strong> +228 96 95 50 44</p>
                <p><strong>Email :</strong> contact@abalo.dev</p>
                <p><strong>Site web :</strong> https://abalo.dev</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services proposés</h2>
              <p>abalo.dev propose les services suivants :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Développement web :</strong> Création d'applications web modernes et performantes</li>
                <li><strong>Design & UX/UI :</strong> Conception d'interfaces utilisateur intuitives et designs visuels</li>
                <li><strong>Conseil numérique :</strong> Accompagnement stratégique pour la transformation digitale</li>
                <li><strong>Abonnements :</strong> Solutions d'accompagnement continu et maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptation des conditions</h2>
              <p>
                En accédant et en utilisant ce site web, vous acceptez d'être lié par les termes et conditions 
                énoncés ci-dessous. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Utilisation du site</h2>
              <p>Vous vous engagez à :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Utiliser le site conformément aux lois en vigueur au Togo</li>
                <li>Ne pas transmettre de contenu illégal, nuisible ou offensant</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas tenter de compromettre la sécurité du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur ce site (textes, images, logos, designs) sont protégés par 
                les droits d'auteur et appartiennent à abalo.dev ou à ses partenaires. Toute reproduction 
                non autorisée est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protection des données</h2>
              <p>
                Nous nous engageons à protéger vos données personnelles conformément aux lois en vigueur. 
                Les informations collectées via notre formulaire de contact sont utilisées uniquement pour 
                vous répondre et ne sont jamais transmises à des tiers sans votre consentement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prestations de services</h2>
              <div className="space-y-4">
                <p>
                  <strong>Devis et commandes :</strong> Tout projet commence par un devis détaillé. 
                  L'acceptation du devis vaut commande ferme.
                </p>
                <p>
                  <strong>Délais :</strong> Les délais indiqués sont donnés à titre indicatif et peuvent 
                  varier selon la complexité du projet.
                </p>
                <p>
                  <strong>Révisions :</strong> Un nombre limité de révisions est inclus dans chaque projet, 
                  selon les termes du devis accepté.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modalités de paiement</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un acompte de 50% est demandé avant le début des travaux</li>
                <li>Le solde est dû à la livraison du projet</li>
                <li>Les paiements peuvent être effectués par virement bancaire ou mobile money</li>
                <li>Tout retard de paiement peut entraîner la suspension des services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilité</h2>
              <p>
                abalo.dev s'engage à fournir des services de qualité professionnelle. Cependant, 
                notre responsabilité est limitée au montant des services fournis. Nous ne pourrons 
                être tenus responsables des dommages indirects ou de la perte de données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit applicable</h2>
              <p>
                Ces conditions générales sont régies par le droit togolais. En cas de litige, 
                les tribunaux de Lomé seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p>Pour toute question concernant ces conditions générales, contactez-nous :</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email :</strong> contact@abalo.dev</p>
                  <p><strong>Téléphone :</strong> +228 96 95 50 44</p>
                  <p><strong>Adresse :</strong> Lomé, Togo</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
