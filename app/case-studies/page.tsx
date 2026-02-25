"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";



export default function CaseStudiesPage() {
  const { t } = useI18n();
  const tc = t?.caseStudies;

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>
            {tc?.pageTitle}
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.7 }}>{tc?.pageDesc}</p>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {tc?.items.map((cs, i) => (
              <div key={i} className="card-3d" style={{ background: "var(--surface)", borderRadius: 14, padding: "36px 40px", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 0, background: "rgba(255,176,0,0.06)", color: "var(--accent)", border: "1px solid rgba(255,176,0,0.28)", fontFamily: "var(--font-geist-mono)" }}>
                    {cs.tag}
                  </span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 28, letterSpacing: "-0.02em" }}>{cs.title}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginBottom: 28 }}>
                  {([
                    { label: tc?.problem ?? "Problem", text: cs.problem },
                    { label: tc?.approach ?? "Approach", text: cs.approach },
                    { label: tc?.result ?? "Result", text: cs.result },
                  ] as { label: string; text: string }[]).map((section) => (
                    <div key={section.label}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8, fontFamily: "var(--font-geist-mono)" }}>
                        {section.label}
                      </div>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75 }}>{section.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                  {cs.stack.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "var(--dark)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "var(--text)", marginBottom: 14 }}>{tc?.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>{tc?.ctaDesc}</p>
          <Link href="/contact" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 8, color: "#ffffff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            {tc?.ctaCta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
