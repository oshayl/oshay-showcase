import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "O'Shay Lighten — Serial Entrepreneur",
  description: 'AI operations through Noira. Creative direction through ShayVisuals. One operator, two disciplines.',
  openGraph: {
    title: "O'Shay Lighten — Serial Entrepreneur",
    description: 'AI operations through Noira. Creative direction through ShayVisuals. One operator, two disciplines.',
    url: 'https://oshaylighten.com',
    siteName: "O'Shay Lighten",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'Shay Lighten — Serial Entrepreneur",
    description: 'AI operations through Noira. Creative direction through ShayVisuals. One operator, two disciplines.',
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}