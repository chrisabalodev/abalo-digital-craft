
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Développement web',
    message: ''
  });

  const { submitContactForm, isSubmitting } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const success = await submitContactForm(formData);
    
    if (success) {
      setFormData({
        name: '',
        email: '',
        subject: 'Développement web',
        message: ''
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="transform hover:scale-105 transition-all duration-300">
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
        <div className="transform hover:scale-105 transition-all duration-300">
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
      
      <div className="transform hover:scale-105 transition-all duration-300">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sujet *
        </label>
        <select 
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="Développement web">Développement web</option>
          <option value="Design & UX/UI">Design & UX/UI</option>
          <option value="Conseil numérique">Conseil numérique</option>
          <option value="Abonnement">Abonnement</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      
      <div className="transform hover:scale-105 transition-all duration-300">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <Textarea 
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Décrivez votre projet en détail..."
          required
        />
      </div>
      
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
      >
        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
};

export default ContactForm;
