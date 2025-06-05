
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              abalo.dev
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous transformons vos idées en solutions numériques innovantes. 
              Développement web, design, conseil et abonnements personnalisés.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3" />
                contact@abalo.dev
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3" />
                +228 96 95 50 44
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3" />
                Lomé, Togo
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Développement Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Design & UX/UI</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conseil Numérique</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Abonnements</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#apropos" className="hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Conditions Générales</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Politique de Confidentialité</a></li>
              <li><a href="/refund-policy" className="hover:text-blue-400 transition-colors">Politique de Remboursement</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 abalo.dev. Tous droits réservés.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Fait avec <Heart size={16} className="mx-2 text-red-500" /> au Togo
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <strong>Conditions Générales d'Utilisation :</strong> En utilisant notre site abalo.dev, 
                vous acceptez les présentes conditions générales. Nos services incluent le développement web, 
                le design, le conseil numérique et des abonnements personnalisés.
              </p>
              <p>
                Nous nous engageons à fournir des services professionnels de qualité tout en respectant 
                la confidentialité de vos données et projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
