import React from 'react';
import { Metadata } from 'next';
import CareerPageClient from '@/components/CareerPageClient';

export const metadata: Metadata = {
  title: 'Careers & Engineering Culture | Opash Software',
  description:
    'Join Opash Software: Explore elite software engineering, AI, and cloud development opportunities in Surat, India. Build world-class digital platforms with high agency and autonomy.',
  keywords: [
    'software engineer jobs Surat',
    'full stack developer careers',
    'AI engineer jobs India',
    'Flutter developer careers',
    'Opash Software jobs',
    'tech jobs Gujarat',
  ],
};

export default function CareerPage() {
  return <CareerPageClient />;
}
