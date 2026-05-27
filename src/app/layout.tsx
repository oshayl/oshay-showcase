import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O'Shay Lighten — Founder & Operator",
  description: "Founder of Noira LLC and ShayVisuals LLC — Delivering exceptional digital experiences through marketing automation and visual storytelling.",
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
