import React from "react";
import type { Metadata } from "next";
import PortfolioPageClient from "@/components/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | Proven Enterprise Architectures | Opash Software",
  description:
    "Explore Opash Software's production deliverables across HealthTech, FinTech, Industrial Tech, and SaaS platforms with verified metrics, uptime SLAs, and architecture schematics.",
  openGraph: {
    title: "Portfolio & Case Studies | Opash Software",
    description:
      "75+ production platforms shipped with 99.99% uptime. Inspect our verified case studies, client testimonials, and production deliverables.",
    url: "https://opashsoftware.com/portfolio",
    siteName: "Opash Software",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
