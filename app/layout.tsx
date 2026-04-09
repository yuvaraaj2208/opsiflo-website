import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://opsiflo.com'),
  title: 'Opsiflo — The AI Operating System for Professionals',
  description: 'Optimize your Resume. Grow your LinkedIn. Scale your Hiring. Opsiflo brings AI-powered tools and done-for-you services to ambitious professionals and teams.',
  keywords: 'AI resume, LinkedIn optimization, email campaigns, career tools, hiring tools, resume builder',
  authors: [{ name: 'Opsiflo' }],
  openGraph: {
    title: 'Opsiflo — The AI Operating System for Professionals',
    description: 'Optimize your Resume. Grow your LinkedIn. Scale your Hiring.',
    url: 'https://opsiflo.com',
    siteName: 'Opsiflo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Opsiflo — AI Operating System for Professionals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opsiflo — The AI Operating System for Professionals',
    description: 'Optimize your Resume. Grow your LinkedIn. Scale your Hiring.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Opsiflo',
              url: 'https://opsiflo.com',
              description: 'AI-powered tools for resume optimization, LinkedIn growth, and email campaigns',
              sameAs: [
                'https://twitter.com/opsiflo',
                'https://linkedin.com/company/opsiflo',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
