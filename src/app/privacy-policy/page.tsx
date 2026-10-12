import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Opash Software",
  description: "Learn how Opash Software protects your data, intellectual property, and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      <section style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container-custom" style={{ maxWidth: "840px" }}>
          <Link
            href="/"
            className="flex items-center gap-2"
            style={{
              color: "var(--color-cyan)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginBottom: "2rem",
              display: "inline-flex",
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            Legal & Compliance
          </span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            Privacy Policy
          </h1>

          <div
            className="glass-panel"
            style={{
              padding: "3rem",
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <p>
              Last Updated: January 2026. At <strong>{companyData.name}</strong>, accessible from https://www.opashsoftware.com, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document describes the types of information collected and how we use and safeguard it.
            </p>

            <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700 }}>1. Information We Collect</h3>
            <p>
              We collect information that you voluntarily provide to us when expressing an interest in obtaining information about our custom software development, web development, mobile apps, SaaS, or AI services, including:
            </p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>Name, email address, phone number, and company name.</li>
              <li>Project requirements, architectural specifications, and estimated budget ranges.</li>
              <li>Job applications, resumes, and portfolios submitted through our careers portal.</li>
            </ul>

            <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700 }}>2. How We Use Your Information</h3>
            <p>
              We use the collected information solely to:
            </p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>Prepare and deliver technical project estimations, architectural roadmaps, and quotes.</li>
              <li>Communicate regarding ongoing development sprints, demos, and support.</li>
              <li>Protect against unauthorized access and maintain strict client NDA confidentiality.</li>
              <li>Evaluate career applications for open engineering positions.</li>
            </ul>

            <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700 }}>3. Intellectual Property & Confidentiality</h3>
            <p>
              We understand the sensitive nature of custom software systems. Opash Software enforces strict Non-Disclosure Agreements (NDAs). We never sell, rent, or disclose proprietary client concepts, database models, or codebase assets to any third party.
            </p>

            <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700 }}>4. Contact Us</h3>
            <p>
              If you have additional questions or require more information about our Privacy Policy, contact us at: <br />
              <strong>Email:</strong> {companyData.contact.email} <br />
              <strong>Address:</strong> {companyData.contact.address} <br />
              <strong>Phone:</strong> {companyData.contact.phone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
