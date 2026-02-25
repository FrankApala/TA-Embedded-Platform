"use client";

import Link from "next/link";
import { Cpu, Terminal, Layers, Radio, ShieldCheck, Wifi, Clock, BarChart2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [
  <Cpu size={28} color="var(--accent)" key={0} />,
  <Terminal size={28} color="var(--accent)" key={1} />,
  <Radio size={28} color="var(--accent)" key={2} />,
  <Layers size={28} color="var(--accent)" key={3} />,
  <ShieldCheck size={28} color="var(--accent)" key={4} />,
  <Wifi size={28} color="var(--accent)" key={5} />,
];

const levelStyles: Record<string, { color: string; bg: string }> = {
  Beginner:     { color: "#ffb000", bg: "rgba(255,176,0,0.07)" },
  Intermediate: { color: "#ff9922", bg: "rgba(255,153,34,0.08)" },
  Advanced:     { color: "#ff5555", bg: "rgba(255,85,85,0.08)" },
};

export default function CoursesPage() {
  const { t } = useI18n();
  const tc = t?.courses;

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>{tc?.pageTitle}</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.7 }}>{tc?.pageDesc}</p>
        </div>
      </section>

      {/* Courses grid */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {tc?.items.map((c, i) => {
              const lvl = levelStyles[c.level] ?? levelStyles.Intermediate;
              return (
                <div key={i} className="card-3d" style={{ background: "var(--surface)", borderRadius: 14, padding: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 0, background: "rgba(255,176,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: "1px solid rgba(255,176,0,0.2)" }}>
                    {icons[i]}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 100, background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.color}44` }}>
                      {tc.levels[c.level] ?? c.level}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--text-muted)" }}>
                      <Clock size={13} />{c.duration}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{c.title}</h2>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 20, flexGrow: 1 }}>{c.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {c.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
                  </div>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                    {tc.enquire} <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Level legend */}
      <section style={{ padding: "48px 24px", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <BarChart2 size={18} color="var(--text-muted)" />
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{tc?.levelLegend}</span>
            </div>
            {(["Beginner","Intermediate","Advanced"] as const).map((key) => {
              const lvl = levelStyles[key];
              return (
                <span key={key} style={{ fontSize: 13, fontWeight: 600, padding: "4px 14px", borderRadius: 100, background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.color}44` }}>
                  {tc?.levels[key] ?? key}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", marginBottom: 48, letterSpacing: "-0.02em" }}>{tc?.faqTitle}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {tc?.faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--surface)", borderRadius: 12, padding: "28px 32px", border: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "var(--dark)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>{tc?.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>{tc?.ctaDesc}</p>
          <Link href="/contact" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 8, color: "#ffffff", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
            {tc?.ctaCta} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
