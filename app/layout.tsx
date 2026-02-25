import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TA Embedded — Embedded Software Engineering",
    template: "%s | TA Embedded",
  },
  description:
    "TA Embedded specialises in firmware development, embedded Linux, CAN/LIN protocol stacks, RTOS integration, and safety-critical software for automotive and industrial applications.",
  keywords: [
    "embedded software",
    "firmware development",
    "CAN bus",
    "RTOS",
    "STM32",
    "embedded Linux",
    "automotive software",
    "ISO 26262",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GoToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
