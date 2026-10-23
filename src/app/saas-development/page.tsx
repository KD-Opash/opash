import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "SaaS Development Services | Opash Software",
  description:
    "We specialize in end-to-end SaaS product development, helping you build cloud-based software that is scalable, secure, and ready to serve thousands of users.",
  alternates: {
    canonical: "https://www.opashsoftware.com/saas-development/",
  },
  openGraph: {
    title: "SaaS Development Services | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software SaaS Development Services",
    url: "https://www.opashsoftware.com/saas-development/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "SaaS development",
    "cloud software",
    "multi-tenant architecture",
    "subscription billing",
    "MVP development",
    "SaaS platform",
    "Opash Software",
  ],
};

export default function SaasDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "saas-development")!;
  return <ServiceDetailTemplate service={service} />;
}
