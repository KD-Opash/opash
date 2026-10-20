import React from 'react';
import { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Engineering & Headquarters | Opash Software',
  description:
    'Initiate your software project directly with Opash Software technical leadership. Request an architecture estimate, schedule a technical consultation, or visit our Surat, India headquarters.',
  keywords: [
    'contact Opash Software',
    'hire software developers India',
    'custom software consultation',
    'Opash Software address Surat',
    'software engineering company contact',
  ],
};

export default function ContactPage() {
  return <ContactPageClient />;
}
