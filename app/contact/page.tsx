"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  const tc = t?.contact;

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", mcu: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    border: "1px solid var(--border)",
    fontSize: 14,
    color: "var(--text)",
    background: "var(--surface)",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>{tc?.pageTitle}</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.7 }}>{tc?.pageDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 28 }}>{tc?.detailsTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { icon: <Mail size={18} color="var(--accent)" />, label: tc?.emailLabel, value: "info@taembedded.com", href: "mailto:info@taembedded.com" },
                { icon: <Linkedin size={18} color="var(--accent)" />, label: tc?.linkedinLabel, value: "TA Embedded", href: "https://www.linkedin.com/company/ta-embedded/" },
                { icon: <MapPin size={18} color="var(--accent)" />, label: tc?.locationLabel, value: tc?.locationValue, href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 0, background: "rgba(255,176,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,176,0,0.2)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                    ) : (
                      <span style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "24px", background: "var(--surface)", borderRadius: 12, border: "1px solid var(--border)" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{tc?.responseTitle}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{tc?.responseText}</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--surface)", borderRadius: 14, padding: "36px", border: "1px solid var(--border)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <CheckCircle size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{tc?.sentTitle}</h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)" }}>{tc?.sentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 24 }}>{tc?.formTitle}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>{tc?.labelName}</label>
                    <input required style={inputStyle} placeholder="Ada Lovelace" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>{tc?.labelEmail}</label>
                    <input required type="email" style={inputStyle} placeholder="ada@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>{tc?.labelCompany}</label>
                    <input style={inputStyle} placeholder="Acme Corp" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>{tc?.labelMcu}</label>
                    <input style={inputStyle} placeholder={tc?.placeholderMcu} value={form.mcu} onChange={(e) => setForm({ ...form, mcu: e.target.value })} />
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>{tc?.labelMessage}</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} placeholder={tc?.placeholderMessage} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center", padding: "13px 24px", borderRadius: 8, color: "#ffffff", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
                  {tc?.submit} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
