import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "QA & Automated Testing Services | Zero-Defect Standards | Opash Software",
  description: "Comprehensive automated and manual QA services to guarantee zero critical bugs, peak performance, and airtight security.",
};

export default function QaTestingPage() {
  const service = servicesData.find((s) => s.slug === "qa-testing")!;
  return <ServiceDetailTemplate service={service} />;
}
