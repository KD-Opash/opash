import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import WebDevelopmentPageClient from "@/components/WebDevelopmentPageClient";

export const metadata: Metadata = {
  title: "Web app Development | Opash Software",
  description:
    "We offer end-to-end web development services that turn your ideas into high-performing, secure, and scalable web solutions.",
  alternates: {
    canonical: "https://www.opashsoftware.com/web-development/",
  },
  openGraph: {
    title: "Web app Development | Opash Software",
    description:
      "Empowering You With Innovation & Technology - Opash Software Web Development Services",
    url: "https://www.opashsoftware.com/web-development/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "web development",
    "web app development",
    "frontend development",
    "backend development",
    "full-stack development",
    "CMS development",
    "headless CMS",
    "React",
    "Next.js",
    "Opash Software",
  ],
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development")!;
  return <WebDevelopmentPageClient service={service} />;
}
