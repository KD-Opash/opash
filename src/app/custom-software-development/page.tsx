import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import CustomSoftwarePageClient from "@/components/CustomSoftwarePageClient";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Bespoke Architecture | Opash Software",
  description:
    "Scalable, secure, and bespoke software systems engineered around your exact enterprise workflows, eliminating off-the-shelf limitations and vendor lock-in.",
  keywords: [
    "custom software development",
    "enterprise software development",
    "microservices architecture",
    "bespoke software",
    "legacy modernization",
    "cloud native software engineering",
  ],
};

export default function CustomSoftwarePage() {
  const service = servicesData.find((s) => s.slug === "custom-software-development")!;
  return <CustomSoftwarePageClient service={service} />;
}
