import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Hire Dedicated Software Developers | Top 3% Engineers | Opash Software",
  description: "Vetted top 3% senior software engineers, full-stack architects, and UI/UX designers ready to integrate with your squad in 48 hours.",
};

export default function HireDevelopersPage() {
  const service = servicesData.find((s) => s.slug === "hire-developers")!;
  return <ServiceDetailTemplate service={service} />;
}
