'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // If no API key, return error message suggesting fallback
    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        message: 'Email service not configured. Please use the mailto link instead.',
      };
    }

    const result = await resend.emails.send({
      from: 'noreply@yuval728.vercel.app',
      to: 'yuvalmehta.728@gmail.com',
      replyTo: formData.email,
      subject: `Portfolio Inquiry from ${formData.name}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>From:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
