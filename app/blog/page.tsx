"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const posts = [
  {
    tag: "CAN Bus",
    date: "January 2026",
    readTime: "7 min read",
    title: "CAN Bus from Scratch on STM32",
    excerpt:
      "A practical walkthrough of implementing a raw CAN 2.0B driver on STM32 without HAL â€” covering baud rate configuration, filter banks, TX mailboxes, and RX interrupt handling.",
    href: "#",
  },
  {
    tag: "RTOS",
    date: "December 2025",
    readTime: "9 min read",
    title: "FreeRTOS Task Design Patterns for Embedded Systems",
    excerpt:
      "Common FreeRTOS task architectures: event-driven vs. polling, deferred interrupt processing with task notifications, and avoiding priority inversion in shared peripheral access.",
    href: "#",
  },
  {
    tag: "Embedded Linux",
    date: "November 2025",
    readTime: "12 min read",
    title: "Writing a Linux Kernel Driver for a Custom SPI Sensor",
    excerpt:
      "Step-by-step guide to writing a character device driver for a custom SPI sensor â€” covering device tree binding, probe/remove lifecycle, SPI transfer API, and userspace testing.",
    href: "#",
  },
  {
    tag: "Protocols",
    date: "October 2025",
    readTime: "8 min read",
    title: "UDS (ISO 14229) Demystified: Services You Actually Use",
    excerpt:
      "A practical breakdown of the UDS services that matter in real ECU development: 0x10 session control, 0x27 security access, 0x2E write data, 0x34â€“0x37 flash reprogramming.",
    href: "#",
  },
  {
    tag: "Safety",
    date: "September 2025",
    readTime: "11 min read",
    title: "ISO 26262 ASIL Decomposition in Practice",
    excerpt:
      "How to implement ASIL-D via decomposition into two ASIL-B channels. Architectural constraints, independent monitoring patterns, and what auditors actually check.",
    href: "#",
  },
  {
    tag: "Tooling",
    date: "August 2025",
    readTime: "6 min read",
    title: "Setting Up a CMake + Ninja Build System for STM32",
    excerpt:
      "Ditch the IDE project files â€” a reproducible, CI-friendly CMake build for STM32 projects, covering toolchain files, linker scripts, startup code, and VS Code integration.",
    href: "#",
  },
];

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  "CAN Bus":        { bg: "rgba(255,176,0,0.07)",   color: "#ffb000",  border: "rgba(255,176,0,0.30)" },
  "RTOS":           { bg: "rgba(255,153,34,0.07)",   color: "#ff9922",  border: "rgba(255,153,34,0.30)" },
  "Embedded Linux": { bg: "rgba(255,208,96,0.07)",   color: "#ffd060",  border: "rgba(255,208,96,0.30)" },
  "Protocols":      { bg: "rgba(255,85,0,0.07)",     color: "#ff5500",  border: "rgba(255,85,0,0.30)" },
  "Safety":         { bg: "rgba(255,85,85,0.07)",    color: "#ff5555",  border: "rgba(255,85,85,0.30)" },
  "Tooling":        { bg: "rgba(180,120,0,0.07)",    color: "#cc8800",  border: "rgba(180,120,0,0.30)" },
};

export default function BlogPage() {
  const { t } = useI18n();
  const tb = t?.blog;

  return (
    <div>
      {/* Header */}
      <section className="circuit-bg" style={{ padding: "80px 24px 72px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-line" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 16 }}>
            {tb?.pageTitle}
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.7 }}>{tb?.pageDesc}</p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "72px 24px 88px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Featured */}
          <div className="card-hover" style={{ background: "var(--surface)", borderRadius: 14, padding: "40px", border: "1px solid var(--border)", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 4, background: tagColors[posts[0].tag]?.bg, color: tagColors[posts[0].tag]?.color, border: `1px solid ${tagColors[posts[0].tag]?.border}`, fontFamily: "var(--font-geist-mono)" }}>
                {posts[0].tag}
              </span>
              <span style={{ fontSize: 13, color: "var(--text-light)" }}>{posts[0].date} Â· {posts[0].readTime}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", padding: "4px 10px", borderRadius: 0, background: "rgba(255,176,0,0.06)", fontFamily: "var(--font-geist-mono)" }}>
                {tb?.latest}
              </span>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.02em" }}>{posts[0].title}</h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 680, marginBottom: 24 }}>{posts[0].excerpt}</p>
            <Link href={posts[0].href} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
              {tb?.read} <ArrowRight size={15} />
            </Link>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {posts.slice(1).map((post, i) => {
              const tc = tagColors[post.tag] ?? { bg: "var(--surface-2)", color: "var(--text-muted)", border: "var(--border)" };
              return (
                <div key={i} className="card-hover" style={{ background: "var(--surface)", borderRadius: 12, padding: "28px", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 4, background: tc.bg, color: tc.color, border: `1px solid ${tc.border}`, fontFamily: "var(--font-geist-mono)" }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-light)" }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.01em", lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "var(--text-light)" }}>{post.date}</span>
                    <Link href={post.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                      {tb?.readShort} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );}