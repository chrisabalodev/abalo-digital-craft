
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'contact' | 'appointment';
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log('Received email request:', data);

    const sendGridApiKey = Deno.env.get('SENDGRID_API_KEY');
    if (!sendGridApiKey) {
      throw new Error('SendGrid API key not found');
    }

    let emailContent = '';
    let emailSubject = '';

    if (data.type === 'contact') {
      emailSubject = `Nouveau message de contact - ${data.subject}`;
      emailContent = `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Sujet:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (data.type === 'appointment') {
      emailSubject = `Nouvelle demande de rendez-vous - ${data.service}`;
      emailContent = `
        <h2>Nouvelle demande de rendez-vous</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Date préférée:</strong> ${data.preferredDate}</p>
        <p><strong>Heure préférée:</strong> ${data.preferredTime}</p>
        ${data.message ? `<p><strong>Message additionnel:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
      `;
    }

    const emailData = {
      personalizations: [
        {
          to: [
            {
              email: "abalo.dev.w@proton.me",
              name: "Abalo Dev"
            }
          ],
          subject: emailSubject
        }
      ],
      from: {
        email: "noreply@lovable.app",
        name: "Site Web Abalo Dev"
      },
      content: [
        {
          type: "text/html",
          value: emailContent
        }
      ]
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      throw new Error(`SendGrid API error: ${response.status} - ${errorText}`);
    }

    console.log('Email sent successfully');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
