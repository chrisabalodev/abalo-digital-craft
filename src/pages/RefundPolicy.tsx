
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
                Cette politique décrit les conditions de remboursement pour les services d'abalo.dev.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Principe général</h2>
              <p>
                Chez abalo.dev, nous nous efforçons de fournir des services de qualité supérieure. 
                Cependant, nous comprenons que certaines situations peuvent nécessiter un remboursement. 
                Cette politique détaille les conditions dans lesquelles un remboursement peut être accordé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services concernés</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Développement Web</h3>
                  <p>Projets de création de sites web et applications</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Design & UX/UI</h3>
                  <p>Services de conception graphique et d'expérience utilisateur</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Conseil Numérique</h3>
                  <p>Prestations de conseil et accompagnement</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Abonnements</h3>
                  <p>Services récurrents de maintenance et support</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Conditions de remboursement</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">Remboursement total possible :</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Annulation avant le début des travaux (dans les 48h suivant la signature)</li>
                    <li>Non-livraison du projet dans les délais convenus (retard > 30 jours)</li>
                    <li>Non-conformité majeure aux spécifications convenues</li>
                    <li>Défaut technique empêchant l'utilisation du livrable</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-2">Remboursement partiel possible :</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Livraison partielle du projet selon l'avancement</li>
                    <li>Annulation en cours de projet à l'initiative du client</li>
                    <li>Modification majeure du cahier des charges en cours de projet</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Aucun remboursement :</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Projet livré conforme aux spécifications</li>
                    <li>Changement d'avis du client après livraison</li>
                    <li>Demandes de modifications non prévues au contrat</li>
                    <li>Services de conseil déjà fournis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Délais de remboursement</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li><strong>Demande de remboursement :</strong> À formuler dans les 30 jours suivant la livraison</li>
                  <li><strong>Traitement de la demande :</strong> Réponse sous 7 jours ouvrés</li>
                  <li><strong>Remboursement effectif :</strong> 14 jours ouvrés après acceptation</li>
                  <li><strong>Mode de remboursement :</strong> Même moyen de paiement que l'achat initial</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Procédure de demande</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Contactez-nous</h4>
                    <p>Envoyez un email à contact@abalo.dev avec votre demande détaillée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Fournissez les justificatifs</h4>
                    <p>Joignez tous les documents relatifs au projet (contrat, échanges, livrables)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Étude de votre dossier</h4>
                    <p>Nous analysons votre demande et vous répondons sous 7 jours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Remboursement</h4>
                    <p>Si accepté, le remboursement est effectué sous 14 jours</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cas particuliers</h2>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Abonnements mensuels :</h4>
                  <p className="text-yellow-700">
                    Possibilité d'annulation à tout moment avec effet au prochain cycle de facturation. 
                    Aucun remboursement pour la période en cours déjà facturée.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Projets en plusieurs phases :</h4>
                  <p className="text-green-700">
                    Le remboursement s'applique uniquement aux phases non commencées. 
                    Les phases livrées et validées restent facturées.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Médiation</h2>
              <p>
                En cas de désaccord sur une demande de remboursement, nous privilégions la recherche 
                d'une solution amiable. Si aucun accord n'est trouvé, vous pouvez saisir le médiateur 
                de la consommation compétent ou les tribunaux de Lomé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p>Pour toute demande de remboursement ou question :</p>
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

export default RefundPolicy;
