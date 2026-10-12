import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Opash Software",
  description: "Scalable, secure, and bespoke software systems engineered around your exact workflows, eliminating off-the-shelf limitations.",
};

export default function CustomSoftwarePage() {
  const service = servicesData.find((s) => s.slug === "custom-software-development")!;
  return <ServiceDetailTemplate service={service} />;
}
