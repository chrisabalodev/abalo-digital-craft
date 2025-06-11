
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useAppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitAppointment = async (formData: {
    name: string;
    email: string;
    phone?: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    message?: string;
  }) => {
    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            message: formData.message,
            status: 'pending'
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          message: formData.message,
          type: 'appointment'
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw here - the appointment submission was successful even if email failed
      }

      toast.success('Rendez-vous demandé avec succès !', {
        description: 'Nous vous contacterons pour confirmer votre rendez-vous.'
      });
      
      return true;
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast.error('Erreur lors de la demande', {
        description: 'Veuillez réessayer plus tard.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitAppointment,
    isSubmitting
  };
};
