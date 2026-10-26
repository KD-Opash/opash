import React from "react";
import type { Metadata } from "next";
import CompanyPageClient from "@/components/CompanyPageClient";

export const metadata: Metadata = {
  title: "About Opash Software | Engineering Scalable Digital Platforms & AI Solutions",
  description:
    "Learn about Opash Software, Surat's premier engineering studio delivering enterprise web, mobile, SaaS, and cloud architectures to partners globally.",
  openGraph: {
    title: "About Opash Software | Engineering Excellence Built For Enduring Scale",
    description:
      "Dedicated in-house engineers, 75+ delivered platforms, 96% client retention. Discover our engineering philosophy, leadership, and global delivery standards.",
    url: "https://opashsoftware.com/company",
    siteName: "Opash Software",
  },
};

export default function CompanyPage() {
  return <CompanyPageClient />;
}
