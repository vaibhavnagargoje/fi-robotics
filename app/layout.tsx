import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";

export const metadata: Metadata = {
  title: "Intelligence Factory — Human Intelligence for Robots",
  description:
    "We build the foundation models for physical autonomy — powered by massive-scale human demonstration data.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f6f3] text-[#0a0a0a] antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
