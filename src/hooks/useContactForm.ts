
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          type: 'contact'
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw here - the form submission was successful even if email failed
      }

      toast.success('Message envoyé avec succès !', {
        description: 'Nous vous répondrons dans les plus brefs délais.'
      });
      
      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Erreur lors de l\'envoi', {
        description: 'Veuillez réessayer plus tard.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContactForm,
    isSubmitting
  };
};
