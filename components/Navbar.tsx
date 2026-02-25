"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, lang, setLang, theme, setTheme } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t?.nav?.home ?? "Home" },
    { href: "/services", label: t?.nav?.services ?? "Services" },
    { href: "/courses", label: t?.nav?.courses ?? "Courses" },
    { href: "/about", label: t?.nav?.about ?? "About" },
    { href: "/case-studies", label: t?.nav?.caseStudies ?? "Case Studies" },
    { href: "/blog", label: t?.nav?.blog ?? "Blog" },
  ];

  const activeStyle = {
    color: "var(--accent)",
    background: "rgba(0,229,255,0.08)",
    textShadow: "0 0 10px rgba(0,229,255,0.6)",
    borderRadius: 0,
  };
  const inactiveStyle = {
    color: "var(--text-muted)",
    background: "transparent",
    borderRadius: 0,
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 18, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", textShadow: "0 0 12px rgba(0,229,255,0.6)" }}>
            TA<span style={{ color: "var(--text-muted)", margin: "0 4px" }}>_</span>EMBEDDED
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: "7px 13px",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.01em",
                textDecoration: "none",
                ...(pathname === l.href ? activeStyle : inactiveStyle),
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
            {/* Lang toggle */}
            <div style={{ display: "flex", borderRadius: 6, border: "1px solid rgba(0,229,255,0.45)", overflow: "hidden" }}>
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "6px 11px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono)",
                    background: lang === l ? "var(--accent)" : "rgba(0,229,255,0.07)",
                    color: lang === l ? "#000" : "var(--accent)",
                    border: "none",
                    cursor: "pointer",
                    textShadow: lang === l ? "none" : "0 0 8px rgba(0,229,255,0.5)",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                width: 34, height: 34, borderRadius: 6,
                border: "1px solid rgba(0,229,255,0.45)",
                background: "rgba(0,229,255,0.07)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                color: "var(--accent)",
                boxShadow: "0 0 8px rgba(0,229,255,0.2)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          <Link
            href="/contact"
            style={{
              marginLeft: 6,
              padding: "9px 18px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#000000",
              background: "var(--accent)",
              textDecoration: "none",
            }}
          >
            {t?.nav?.getInTouch ?? "Get in Touch"}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, color: "var(--text)" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px" }}
          className="show-mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 500,
                color: pathname === l.href ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile controls */}
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <div style={{ display: "flex", borderRadius: 8, border: "1px solid var(--border)", overflow: "hidden", flex: 1 }}>
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    flex: 1, padding: "8px",
                    fontSize: 12, fontWeight: 700,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono)",
                    background: lang === l ? "var(--accent)" : "transparent",
                    color: lang === l ? "#fff" : "var(--text-muted)",
                    border: "none", cursor: "pointer",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                width: 42, borderRadius: 8,
                border: "1px solid var(--border)",
                background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--text-muted)",
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block", marginTop: 12,
              padding: "12px 0", textAlign: "center",
              borderRadius: 8, fontSize: 15, fontWeight: 600,
              color: "#ffffff", background: "var(--accent)",
              textDecoration: "none",
            }}
          >
            {t?.nav?.getInTouch ?? "Get in Touch"}
          </Link>
        </div>
      )}
    </header>
  );
}
