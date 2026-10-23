import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Quality Assurance (QA) & Testing Services | Opash Software",
  description:
    "At Opash Software, we provide comprehensive Quality Assurance (QA) and software testing services to ensure your application works exactly as intended—securely, smoothly, and at scale.",
  alternates: {
    canonical: "https://www.opashsoftware.com/qa-testing/",
  },
  openGraph: {
    title: "Quality Assurance (QA) & Testing Services | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software QA & Testing Services",
    url: "https://www.opashsoftware.com/qa-testing/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "QA testing",
    "software testing services",
    "manual testing",
    "automated testing",
    "Cypress",
    "Selenium",
    "performance testing",
    "security testing",
    "Opash Software",
  ],
};

export default function QaTestingPage() {
  const service = servicesData.find((s) => s.slug === "qa-testing")!;
  return <ServiceDetailTemplate service={service} />;
}
