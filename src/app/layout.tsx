import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O'Shay Lighten — Founder & Operator",
  description: "Noira LLC. ShayVisuals LLC. Building the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}