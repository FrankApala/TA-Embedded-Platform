"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 36,
        right: 36,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: "var(--accent)",
        color: "#000",
        border: "2px solid rgba(255,176,0,0.4)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? "0 0 28px rgba(255,176,0,0.9), 0 0 0 6px rgba(255,176,0,0.15)"
          : "0 0 16px rgba(255,176,0,0.5)",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? hovered ? "translateY(-4px) scale(1.1)" : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.8)",
        transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChevronUp size={22} strokeWidth={2.5} />
    </button>
  );
}
