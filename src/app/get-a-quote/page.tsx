import React from "react";
import { Metadata } from "next";
import GetAQuotePageClient from "@/components/GetAQuotePageClient";

export const metadata: Metadata = {
  title: "Get a Project Estimate & Quote | Transparent Sprint Scoping | Opash Software",
  description:
    "Calculate instant, transparent project budgets and delivery timelines for custom web apps, mobile apps, SaaS platforms, and AI systems. 100% IP ownership and 2-week risk-free trial.",
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
