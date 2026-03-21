import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Mono, Outfit } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvalmehta.vercel.app'),
  title: {
    default: 'Yuval Mehta | Generative AI Engineer',
    template: '%s | Yuval Mehta',
  },
  description:
    'Versatile AI Engineer from Mumbai. Top 1% Amazon ML Challenge 2024. IEEE published. Specializing in LangGraph agents, computer vision, and MLOps.',
  keywords: [
    'Generative AI Engineer',
    'AI Engineer',
    'ML Engineer',
    'LangGraph',
    'Computer Vision',
    'MLOps',
    'Mumbai',
    'Yuval Mehta',
  ],
  authors: [{ name: 'Yuval Mehta' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yuvalmehta.vercel.app',
    siteName: 'Yuval Mehta',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Yuval Mehta — Generative AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuval Mehta | Generative AI Engineer',
    description:
      'Generative AI Engineer. Top 1% Amazon ML Challenge. IEEE published.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmMono.variable} ${outfit.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Yuval Mehta',
              jobTitle: 'Generative AI Engineer',
              url: 'https://yuvalmehta.vercel.app',
              email: 'yuvalmehta.728@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mumbai',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://github.com/yuval728',
                'https://linkedin.com/in/yuvalmehta728',
              ],
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden bg-background text-text-primary">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
