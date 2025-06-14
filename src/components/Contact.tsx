
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import AppointmentForm from './AppointmentForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons ensemble de vos besoins 
            et découvrons comment nous pouvons vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Parlons de votre projet</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">abalo.dev.w@proton.me</div>
                </div>
              </div>
              
              <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-gray-600">+228 96 95 50 44</div>
                </div>
              </div>
              
              <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localisation</div>
                  <div className="text-gray-600">Lomé, Togo</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">Temps de réponse</h4>
              <p className="text-gray-600 mb-2">Nous nous engageons à vous répondre dans les plus brefs délais :</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email : 2-4 heures ouvrées</li>
                <li>• Téléphone : Immédiat pendant les heures d'ouverture</li>
                <li>• Devis : 24-48 heures</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <ContactForm />
          </div>
        </div>

        {/* Appointment Section */}
        <div className="animate-fade-in">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
