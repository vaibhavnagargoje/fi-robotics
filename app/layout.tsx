import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Intelligence Factory",
  description: "Human intelligence for Robots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-[#f0f0f0] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
