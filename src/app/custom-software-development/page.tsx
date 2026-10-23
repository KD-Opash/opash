import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import CustomSoftwarePageClient from "@/components/CustomSoftwarePageClient";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Opash Software",
  description:
    "We offer custom software development services tailored precisely to your business needs, industry workflows, and growth goals. Enterprise-grade, scalable, and secure solutions.",
  alternates: {
    canonical: "https://www.opashsoftware.com/custom-software-development/",
  },
  openGraph: {
    title: "Custom Software Development Services | Opash Software",
    description:
      "Tailored custom software development services built from the ground up for Insurance, Fintech, eCommerce, Education, Real Estate, and Healthcare.",
    url: "https://www.opashsoftware.com/custom-software-development/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "custom software development",
    "custom web and mobile applications",
    "legacy system modernization",
    "third-party integrations",
    "enterprise software development",
    "bespoke software",
    "Opash Software",
  ],
};

export default function CustomSoftwarePage() {
  const service = servicesData.find((s) => s.slug === "custom-software-development")!;
  return <CustomSoftwarePageClient service={service} />;
}
