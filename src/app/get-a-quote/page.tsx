import React from "react";
import { Metadata } from "next";
import GetAQuotePageClient from "@/components/GetAQuotePageClient";

export const metadata: Metadata = {
  title: "Quote | Opash Software",
  description:
    "We are a team of talented IT Experts. We Analyzed your requirements; Part them into phase and tasks; give you an hourly or fixed price estimation of each phase and task.",
  alternates: {
    canonical: "https://www.opashsoftware.com/get-a-quote/",
  },
  openGraph: {
    title: "Quote | Opash Software",
    description:
      "We are a team of talented IT Experts. We Analyzed your requirements; Part them into phase and tasks; give you an hourly or fixed price estimation of each phase and task.",
    url: "https://www.opashsoftware.com/get-a-quote/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "software development quote",
    "project cost estimator",
    "hire software developers pricing",
    "custom software pricing",
    "SaaS development cost",
    "mobile app development estimate",
    "Opash Software quote",
  ],
};

export default function GetAQuotePage() {
  return <GetAQuotePageClient />;
}
