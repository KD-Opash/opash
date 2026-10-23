import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "API Integration Services | Opash Software",
  description:
    "We offer robust and secure API Integration services that help you connect different software systems, automate workflows, and enhance operational efficiency.",
  alternates: {
    canonical: "https://www.opashsoftware.com/api-integration/",
  },
  openGraph: {
    title: "API Integration Services | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software API Integration Services",
    url: "https://www.opashsoftware.com/api-integration/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "API integration",
    "third-party APIs",
    "custom API development",
    "RESTful API",
    "GraphQL",
    "webhooks",
    "CRM ERP integration",
    "Opash Software",
  ],
};

export default function ApiIntegrationPage() {
  const service = servicesData.find((s) => s.slug === "api-integration")!;
  return <ServiceDetailTemplate service={service} />;
}
