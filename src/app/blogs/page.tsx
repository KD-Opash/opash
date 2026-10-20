import React from 'react';
import { Metadata } from 'next';
import BlogsPageClient from '@/components/BlogsPageClient';

export const metadata: Metadata = {
  title: 'Engineering Insights & Architectural Telemetry | Opash Software',
  description:
    'Peer-reviewed architectural deep-dives on microservices resilience, multi-tenant databases, agentic AI systems, and modern full-stack performance authored by Opash senior engineers.',
  keywords: [
    'software architecture blog',
    'microservices architecture',
    'multi-tenant database',
    'agentic AI',
    'Next.js enterprise',
    'DevOps best practices',
    'cloud engineering insights',
  ],
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
