import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Hire a Dedicated Developer / Team | Opash Software",
  description:
    "Need reliable tech talent to accelerate your project? At Opash Software, we offer flexible engagement models to help you hire dedicated developers or entire teams that work exclusively on your project—just like an in-house team, but without the overhead.",
  alternates: {
    canonical: "https://www.opashsoftware.com/hire-developers/",
  },
  openGraph: {
    title: "Hire a Dedicated Developer / Team | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software Dedicated Developer Hiring",
    url: "https://www.opashsoftware.com/hire-developers/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "hire developers",
    "dedicated developers",
    "hire frontend developers",
    "hire backend developers",
    "hire full stack developers",
    "hire mobile app developers",
    "hire QA engineers",
    "hire DevOps engineers",
    "Opash Software",
  ],
};

export default function HireDevelopersPage() {
  const service = servicesData.find((s) => s.slug === "hire-developers")!;
  return <ServiceDetailTemplate service={service} />;
}
