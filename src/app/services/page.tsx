import React from "react";
import { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, Web, Mobile & AI Solutions | Opash Software",
  description:
    "Explore Opash Software's full-spectrum engineering capabilities: Custom Software, Web Development, Mobile Apps, Generative AI & ML, Multi-Tenant SaaS, API Integrations, and Dedicated Squads.",
  keywords: [
    "Opash Software services",
    "custom software development services",
    "web development services",
    "mobile app development services",
    "AI ML engineering solutions",
    "SaaS engineering services",
    "hire dedicated developers India",
    "software company Surat",
  ],
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
