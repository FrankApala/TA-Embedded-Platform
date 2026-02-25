"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const tf = t?.footer;

  return (
    <footer style={{ background: "var(--dark)", color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 16, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", textShadow: "0 0 10px rgba(0,229,255,0.5)" }}>
                TA<span style={{ color: "var(--text-muted)", margin: "0 3px" }}>_</span>EMBEDDED
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 260 }}>{tf?.brand}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[
                { href: "https://www.linkedin.com/company/ta-embedded/", icon: <Linkedin size={17} />, target: "_blank" as const },
                { href: "mailto:info@taembedded.com", icon: <Mail size={17} />, target: undefined },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.target} rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: 8, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20, fontFamily: "var(--font-geist-mono)" }}>
              {tf?.servicesHeading}
            </h3>
            {tf?.services.map((s) => (
              <Link key={s} href="/services"
                style={{ display: "block", fontSize: 14, color: "var(--text-muted)", textDecoration: "none", marginBottom: 10 }}>
                {s}
              </Link>
            ))}
          </div>

          {/* Pages */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20, fontFamily: "var(--font-geist-mono)" }}>
              {tf?.companyHeading}
            </h3>
            {tf?.pages.map((p) => (
              <Link key={p.href} href={p.href}
                style={{ display: "block", fontSize: 14, color: "var(--text-muted)", textDecoration: "none", marginBottom: 10 }}>
                {p.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20, fontFamily: "var(--font-geist-mono)" }}>
              {tf?.contactHeading}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:info@taembedded.com" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-muted)", textDecoration: "none", fontSize: 14 }}>
                <Mail size={15} color="var(--accent)" /> info@taembedded.com
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-muted)", fontSize: 14 }}>
                <MapPin size={15} color="var(--accent)" /> {tf?.location}
              </div>
              <a href="https://www.linkedin.com/company/ta-embedded/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-muted)", textDecoration: "none", fontSize: 14 }}>
                <Linkedin size={15} color="var(--accent)" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} TA Embedded. {tf?.rights}
          </p>
          <p style={{ fontSize: 13, color: "var(--text-light)", fontStyle: "italic" }}>{tf?.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
