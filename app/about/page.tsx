"use client";

import Link from "next/link";
import { Target, Users, Zap, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";


export default function AboutPage() {
  const { t } = useI18n();
  const ta = t?.about;
  const valueIcons = [<Target size={22} color="var(--accent)" key={0} />, <Users size={22} color="var(--accent)" key={1} />, <Zap size={22} color="var(--accent)" key={2} />];

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>{ta?.pageTitle}</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.7 }}>{ta?.pageDesc}</p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "80px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 20 }}>{ta?.whoTitle}</h2>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>{ta?.whoP1}</p>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>{ta?.whoP2}</p>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>{ta?.whoP3}</p>
            </div>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 24 }}>{ta?.valuesTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {ta?.values.map((v, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, padding: "20px 24px", background: "var(--bg)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 0, background: "rgba(255,176,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,176,0,0.2)" }}>
                      {valueIcons[i]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{v.title}</h3>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="section-line" style={{ marginBottom: 16 }} />
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 12 }}>{ta?.teamTitle}</h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)" }}>{ta?.teamDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {ta?.team.map((member, i) => (
              <div key={i} className="card-3d" style={{ background: "var(--surface)", borderRadius: 14, padding: "32px", border: "1px solid var(--border)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 20, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", fontFamily: "var(--font-geist-mono)" }}>
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{member.name}</h3>
                <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 14 }}>{member.role}</p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{member.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {member.skills.map((skill) => <span key={skill} className="tech-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "var(--text)", marginBottom: 14 }}>{ta?.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>{ta?.ctaDesc}</p>
          <Link href="/contact" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 8, color: "#ffffff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            {ta?.ctaCta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

