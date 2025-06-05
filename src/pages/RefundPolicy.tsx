
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Remboursement</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Conditions Générales de Remboursement</h2>
              <p className="text-gray-600 mb-4">
                Chez abalo.dev, nous nous efforçons de fournir des services de qualité exceptionnelle. 
                Cette politique de remboursement définit les conditions dans lesquelles nous pouvons offrir 
                des remboursements pour nos services de développement web, design et abonnements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services de Développement Web et Design</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Projets sur Mesure</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Remboursement possible dans les 7 jours suivant le début du projet</li>
                  <li>Aucun travail de développement ne doit avoir commencé</li>
                  <li>Les frais de consultation initiale peuvent être retenus</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Projets en Cours</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Remboursement proportionnel basé sur le travail non réalisé</li>
                  <li>Évaluation au cas par cas selon l'avancement du projet</li>
                  <li>Livraison des éléments déjà développés</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Abonnements et Services Récurrents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Abonnements Mensuels</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Annulation possible à tout moment</li>
                    <li>Pas de remboursement pour le mois en cours</li>
                    <li>Accès maintenu jusqu'à la fin de la période payée</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Abonnements Annuels</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Remboursement possible dans les 30 premiers jours</li>
                    <li>Remboursement proportionnel après 30 jours</li>
                    <li>Frais administratifs de 50€ peuvent s'appliquer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Processus de Demande de Remboursement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside text-gray-600 space-y-3">
                  <li>Contactez-nous à contact@abalo.dev avec votre demande</li>
                  <li>Fournissez le numéro de commande et la raison du remboursement</li>
                  <li>Notre équipe examinera votre demande dans les 48 heures</li>
                  <li>Une réponse vous sera communiquée dans les 5 jours ouvrables</li>
                  <li>Si approuvé, le remboursement sera traité dans les 7-14 jours ouvrables</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Exceptions et Limitations</h2>
              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-gray-600 mb-3">
                  <strong>Aucun remboursement ne sera accordé dans les cas suivants :</strong>
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Projets terminés et livrés selon les spécifications convenues</li>
                  <li>Changement d'avis du client après approbation du projet</li>
                  <li>Demandes de fonctionnalités non incluses dans le devis initial</li>
                  <li>Problèmes techniques dus à des modifications non autorisées</li>
                  <li>Services de conseil et de formation déjà dispensés</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modes de Remboursement</h2>
              <p className="text-gray-600 mb-4">
                Les remboursements seront effectués selon le mode de paiement original :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Carte bancaire :</strong> Remboursement sur la carte utilisée (3-7 jours ouvrables)</li>
                <li><strong>Virement bancaire :</strong> Retour sur le compte d'origine (5-10 jours ouvrables)</li>
                <li><strong>PayPal :</strong> Remboursement sur le compte PayPal (1-3 jours ouvrables)</li>
                <li><strong>Mobile Money :</strong> Retour sur le numéro utilisé (24-48 heures)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Garanties et Maintenance</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-3">
                  Nous offrons une garantie de 30 jours sur tous nos développements web incluant :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Correction des bugs et dysfonctionnements</li>
                  <li>Ajustements mineurs de design</li>
                  <li>Optimisations de performance</li>
                  <li>Support technique gratuit</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact et Réclamations</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Pour toute question concernant notre politique de remboursement ou pour 
                  soumettre une demande, contactez-nous :
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email :</strong> contact@abalo.dev</p>
                  <p><strong>Téléphone :</strong> +228 96 95 50 44</p>
                  <p><strong>Adresse :</strong> Lomé, Togo</p>
                  <p><strong>Heures :</strong> Lundi - Vendredi, 9h - 18h (GMT)</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modifications de la Politique</h2>
              <p className="text-gray-600">
                Cette politique de remboursement peut être modifiée à tout moment. 
                Les modifications entrent en vigueur immédiatement après publication 
                sur notre site web. Nous recommandons de consulter régulièrement 
                cette page pour rester informé des éventuels changements.
              </p>
            </section>

            <div className="bg-gray-800 text-white p-6 rounded-lg mt-8">
              <p className="text-center">
                <strong>Dernière mise à jour :</strong> 5 juin 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
