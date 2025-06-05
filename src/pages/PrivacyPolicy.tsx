
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-blue-700">
                Chez abalo.dev, nous nous engageons à protéger votre vie privée et vos données personnelles.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des données</h2>
              <p>Nous collectons les types de données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
                <li><strong>Données de contact :</strong> numéro de téléphone, adresse postale</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Données de projets :</strong> informations relatives à vos demandes et projets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des données</h2>
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Fournir nos services de développement et conseil</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous informer de nos nouveaux services (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base légale du traitement</h2>
              <p>Nous traitons vos données personnelles sur la base de :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Consentement :</strong> pour l'envoi de communications marketing</li>
                <li><strong>Exécution contractuelle :</strong> pour la fourniture de nos services</li>
                <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services</li>
                <li><strong>Obligation légale :</strong> pour le respect des réglementations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partage des données</h2>
              <p>
                Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                sauf dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (hébergement, email) sous contrat de confidentialité</li>
                <li>En cas de fusion, acquisition ou vente d'actifs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservation des données</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>Nous conservons vos données personnelles pendant :</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de projets :</strong> 5 ans après la fin du projet</li>
                  <li><strong>Données comptables :</strong> 10 ans conformément à la loi</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit de portabilité :</strong> récupérer vos données dans un format standard</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, 
                la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez 
                configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                le fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p>Pour exercer vos droits ou pour toute question concernant cette politique :</p>
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

export default PrivacyPolicy;
