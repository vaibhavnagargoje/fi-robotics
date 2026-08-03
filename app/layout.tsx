import type { Metadata } from "next";
import "./globals.css";
import Sidebar      from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import SiteFooter   from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Intelligence Factory — Human Intelligence for Robots",
    template: "%s | Intelligence Factory",
  },
  description:
    "We build foundation models for physical autonomy — powered by the largest collection of human demonstration data on Earth.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#090c0a] text-[#f1f5ec] min-h-screen flex flex-col md:flex-row">
        {/* ─ Desktop sidebar (fixed, 280px) ─ */}
        <Sidebar />

        {/* ─ Right-hand content column ─ */}
        <div className="w-full md:w-[calc(100%-260px)] md:ml-[260px] min-h-screen flex flex-col">
          {/* Mobile-only sticky header */}
          <MobileHeader />

          {/* Page content */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>

          {/* Footer on every page */}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
