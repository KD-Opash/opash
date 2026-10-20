import React from "react";
import type { Metadata } from "next";
import CompanyPageClient from "@/components/CompanyPageClient";

export const metadata: Metadata = {
  title: "About Opash Software | Engineering Scalable Digital Platforms & AI Solutions",
  description:
    "Learn about Opash Software, Surat's premier engineering studio of 50+ in-house full-stack & AI developers delivering enterprise web, mobile, SaaS, and cloud architectures globally.",
  openGraph: {
    title: "About Opash Software | Engineering Excellence Built For Enduring Scale",
    description:
      "50+ in-house senior engineers, 75+ delivered platforms, 96% client retention. Discover our architectural philosophy, leadership, and global delivery corridors.",
    url: "https://opashsoftware.com/company",
    siteName: "Opash Software",
  },
};

export default function CompanyPage() {
  return <CompanyPageClient />;
}
