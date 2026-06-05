import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";

export const metadata: Metadata = {
  title: "Intelligence Factory — Human Intelligence for Robots",
  description: "Building the foundation models to make physical autonomy work in unconstrained, diverse environments. Powered by massive-scale human demonstration data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050508] text-[#e8e8f0] antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
