import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "AI/ML Solution Dev | Opash Software",
  description:
    "We provide end-to-end AI & Machine Learning development services that empower businesses to unlock insights, automate decisions, and drive innovation.",
  alternates: {
    canonical: "https://www.opashsoftware.com/ai-ml-solutions/",
  },
  openGraph: {
    title: "AI/ML Solution Dev | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software AI/ML Development Services",
    url: "https://www.opashsoftware.com/ai-ml-solutions/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "AI/ML solutions",
    "artificial intelligence",
    "machine learning development",
    "data science",
    "NLP",
    "predictive analytics",
    "computer vision",
    "Opash Software",
  ],
};

export default function AiMlSolutionsPage() {
  const service = servicesData.find((s) => s.slug === "ai-ml-solutions")!;
  return <ServiceDetailTemplate service={service} />;
}
