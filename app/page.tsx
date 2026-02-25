"use client";

import Link from "next/link";
import { Cpu, Radio, Terminal, ShieldCheck, Layers, Wrench, ArrowRight, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const serviceIcons = [
  <Cpu size={24} color="var(--accent)" key={0} />,
  <Radio size={24} color="var(--accent)" key={1} />,
  <Layers size={24} color="var(--accent)" key={2} />,
  <Terminal size={24} color="var(--accent)" key={3} />,
  <ShieldCheck size={24} color="var(--accent)" key={4} />,
  <Wrench size={24} color="var(--accent)" key={5} />,
];

export default function Home() {
  const { t } = useI18n();
  const th = t?.home;

  const stats = [
    { value: "200+", label: th?.statsStudents },
    { value: "6", label: th?.statsCourses },
    { value: "10+", label: th?.statsYears },
    { value: "100%", label: th?.statsDelivery },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="circuit-bg" style={{ padding: "100px 24px 96px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="badge-pill animate-fade-up" style={{ marginBottom: 32 }}>
            <div className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
            <span>{th?.badge}</span>
          </div>
          <h1 className="animate-fade-up-1" style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 24, maxWidth: 780 }}>
            {th?.h1a}{" "}<span className="hero-accent">{th?.h1accent}</span>{" "}{th?.h1b}
          </h1>
          <p className="animate-fade-up-2" style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 560, marginBottom: 44 }}>{th?.hero}</p>
          <div className="animate-fade-up-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/services" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", color: "#000000", fontWeight: 700, fontSize: 15, textDecoration: "none", border: "none" }}>
              {th?.seeServices} <ArrowRight size={16} />
            </Link>
            <Link href="/courses" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 8, background: "var(--surface)", color: "var(--text)", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid var(--border)" }}>
              {th?.viewCourses} <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-cell" style={{ textAlign: "center", padding: "36px 16px", borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section style={{ padding: "88px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div className="section-line" style={{ marginBottom: 16 }} />
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 14 }}>{th?.whatWeDo}</h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 500 }}>{th?.whatWeDoDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {th?.services.map((s, i) => (
              <div key={i} className="card-3d" style={{ background: "var(--surface)", borderRadius: 12, padding: "28px 28px 24px", border: "1px solid var(--border)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 0, background: "rgba(255,176,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, border: "1px solid rgba(255,176,0,0.2)" }}>
                  {serviceIcons[i]}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 8, border: "1.5px solid var(--accent)", color: "var(--accent)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              {th?.allServices} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why TA Embedded */}
      <section style={{ padding: "88px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-line" style={{ marginBottom: 16 }} />
              <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 20 }}>{th?.whyTitle}</h2>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>{th?.whyP1}</p>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>{th?.whyP2}</p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8, background: "var(--bg)", color: "var(--text)", fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid var(--border)" }}>
                {th?.aboutCta} <ChevronRight size={15} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {th?.strengths.map((item, i) => (
                <div key={i} style={{ padding: "24px", background: "var(--bg)", borderRadius: 12, border: "1px solid var(--border)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", marginBottom: 12 }} />
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
