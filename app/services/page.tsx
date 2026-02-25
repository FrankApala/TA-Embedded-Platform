"use client";

import Link from "next/link";
import { Cpu, Radio, Terminal, ShieldCheck, Layers, Wrench, CircuitBoard, Wifi, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [
  <Cpu size={28} color="var(--accent)" key={0} />,
  <Radio size={28} color="var(--accent)" key={1} />,
  <Layers size={28} color="var(--accent)" key={2} />,
  <Terminal size={28} color="var(--accent)" key={3} />,
  <ShieldCheck size={28} color="var(--accent)" key={4} />,
  <Wrench size={28} color="var(--accent)" key={5} />,
  <CircuitBoard size={28} color="var(--accent)" key={6} />,
  <Wifi size={28} color="var(--accent)" key={7} />,
];

export default function ServicesPage() {
  const { t } = useI18n();
  const ts = t?.services;

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>{ts?.pageTitle}</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.7 }}>{ts?.pageDesc}</p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {ts?.items.map((s, i) => (
              <div key={i} className="card-3d" style={{ background: "var(--surface)", borderRadius: 14, padding: "32px", border: "1px solid var(--border)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 0, background: "rgba(255,176,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: "1px solid rgba(255,176,0,0.2)" }}>
                  {icons[i]}
                </div>
                <h2 style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "var(--dark)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>{ts?.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>{ts?.ctaDesc}</p>
          <Link href="/contact" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 8, color: "#ffffff", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
            {ts?.ctaCta} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
