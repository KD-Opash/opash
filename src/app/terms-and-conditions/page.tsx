import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Opash Software",
  description: "Terms and conditions governing engineering services provided by Opash Software.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      <section style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
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
            Terms of Service
          </span>
          <h1 style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--text-primary)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            Terms & Conditions
          </h1>

          <div
            className="glass-panel"
            style={{
              padding: "3rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <p>
              Welcome to <strong>{companyData.name}</strong>. By accessing our website or engaging our software engineering services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", fontWeight: 700 }}>1. Scope of Engagement</h3>
            <p>
              Opash Software provides custom software engineering, web application development, mobile app development, AI/ML integrations, and dedicated talent augmentation services. All specific project scopes, timelines, deliverables, and payment milestones are governed by Master Services Agreements (MSA) and Statements of Work (SOW) executed between Opash Software and the client.
            </p>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", fontWeight: 700 }}>2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise agreed in a customized SOW, upon receipt of full milestone payments, all bespoke code, architecture documentation, design files, and intellectual property developed exclusively for the client shall belong 100% to the client.
            </p>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", fontWeight: 700 }}>3. Warranty & Defect Remediation</h3>
            <p>
              Opash Software provides a standard 30-day post-launch warranty period during which any defects or bugs not conforming to the agreed specification will be remediated at zero additional cost.
            </p>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", fontWeight: 700 }}>4. Governing Law</h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Surat, Gujarat, without regard to conflict of law principles.
            </p>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", fontWeight: 700 }}>5. Inquiries</h3>
            <p>
              For legal inquiries regarding terms or service agreements: <br />
              <strong>Email:</strong> {companyData.contact.email} <br />
              <strong>Phone:</strong> {companyData.contact.phone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
