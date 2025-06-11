
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock } from 'lucide-react';
import { useAppointmentForm } from '@/hooks/useAppointmentForm';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Développement web',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const { submitAppointment, isSubmitting } = useAppointmentForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service || !formData.preferredDate || !formData.preferredTime) {
      return;
    }

    const success = await submitAppointment(formData);
    
    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Développement web',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Prendre rendez-vous
        </h3>
        <p className="text-gray-600">
          Planifions ensemble votre projet. Choisissez un créneau qui vous convient.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <Input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input 
              type="email" 
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <Input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+228 XX XX XX XX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service *
            </label>
            <select 
              value={formData.service}
              onChange={(e) => handleChange('service', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            >
              <option value="Développement web">Développement web</option>
              <option value="Design & UX/UI">Design & UX/UI</option>
              <option value="Conseil numérique">Conseil numérique</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Formation">Formation</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Date préférée *
            </label>
            <Input 
              type="date" 
              value={formData.preferredDate}
              onChange={(e) => handleChange('preferredDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-2" />
              Heure préférée *
            </label>
            <select 
              value={formData.preferredTime}
              onChange={(e) => handleChange('preferredTime', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Sélectionner une heure</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message additionnel
          </label>
          <Textarea 
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Décrivez brièvement votre projet ou vos besoins..."
          />
        </div>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Demander le rendez-vous'}
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
