
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
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
            Politique de Remboursement
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-blue-700">
                Chez abalo.dev, nous nous efforçons de fournir des services de qualité exceptionnelle. 
                Cette politique de remboursement définit les conditions dans lesquelles nous pouvons offrir 
                des remboursements pour nos services de développement web, design et abonnements.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Conditions Générales de Remboursement</h2>
              <p>
                Chez abalo.dev, nous nous efforçons de fournir des services de qualité exceptionnelle. 
                Cette politique de remboursement définit les conditions dans lesquelles nous pouvons offrir 
                des remboursements pour nos services de développement web, design et abonnements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services de Développement Web et Design</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Projets sur Mesure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remboursement possible dans les 7 jours suivant le début du projet</li>
                  <li>Aucun travail de développement ne doit avoir commencé</li>
                  <li>Les frais de consultation initiale peuvent être retenus</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Projets en Cours</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remboursement proportionnel basé sur le travail non réalisé</li>
                  <li>Évaluation au cas par cas selon l'avancement du projet</li>
                  <li>Livraison des éléments déjà développés</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Abonnements et Services Récurrents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Abonnements Mensuels</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Annulation possible à tout moment</li>
                    <li>Pas de remboursement pour le mois en cours</li>
                    <li>Accès maintenu jusqu'à la fin de la période payée</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Abonnements Annuels</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remboursement possible dans les 30 premiers jours</li>
                    <li>Remboursement proportionnel après 30 jours</li>
                    <li>Frais administratifs de 50€ peuvent s'appliquer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processus de Demande de Remboursement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Contactez-nous à abalo.dev.w@proton.me avec votre demande</li>
                  <li>Fournissez le numéro de commande et la raison du remboursement</li>
                  <li>Notre équipe examinera votre demande dans les 48 heures</li>
                  <li>Une réponse vous sera communiquée dans les 5 jours ouvrables</li>
                  <li>Si approuvé, le remboursement sera traité dans les 7-14 jours ouvrables</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Exceptions et Limitations</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-red-800 mb-3">
                  <strong>Aucun remboursement ne sera accordé dans les cas suivants :</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projets terminés et livrés selon les spécifications convenues</li>
                  <li>Changement d'avis du client après approbation du projet</li>
                  <li>Demandes de fonctionnalités non incluses dans le devis initial</li>
                  <li>Problèmes techniques dus à des modifications non autorisées</li>
                  <li>Services de conseil et de formation déjà dispensés</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modes de Remboursement</h2>
              <p>
                Les remboursements seront effectués selon le mode de paiement original :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Carte bancaire :</strong> Remboursement sur la carte utilisée (3-7 jours ouvrables)</li>
                <li><strong>Virement bancaire :</strong> Retour sur le compte d'origine (5-10 jours ouvrables)</li>
                <li><strong>PayPal :</strong> Remboursement sur le compte PayPal (1-3 jours ouvrables)</li>
                <li><strong>Mobile Money :</strong> Retour sur le numéro utilisé (24-48 heures)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garanties et Maintenance</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="mb-3">
                  Nous offrons une garantie de 30 jours sur tous nos développements web incluant :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Correction des bugs et dysfonctionnements</li>
                  <li>Ajustements mineurs de design</li>
                  <li>Optimisations de performance</li>
                  <li>Support technique gratuit</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact et Réclamations</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p className="mb-4">
                  Pour toute question concernant notre politique de remboursement ou pour 
                  soumettre une demande, contactez-nous :
                </p>
                <div className="space-y-2">
                  <p><strong>Email :</strong> abalo.dev.w@proton.me</p>
                  <p><strong>Téléphone :</strong> +228 96 95 50 44</p>
                  <p><strong>Adresse :</strong> Lomé, Togo</p>
                  <p><strong>Heures :</strong> Lundi - Vendredi, 9h - 18h (GMT)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications de la Politique</h2>
              <p>
                Cette politique de remboursement peut être modifiée à tout moment. 
                Les modifications entrent en vigueur immédiatement après publication 
                sur notre site web. Nous recommandons de consulter régulièrement 
                cette page pour rester informé des éventuels changements.
              </p>
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

export default RefundPolicy;
