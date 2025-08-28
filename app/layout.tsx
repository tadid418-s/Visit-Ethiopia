import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { amhara } from './fonts';

export const metadata: Metadata = {
  title: 'Visit Ethiopia - Discover Ancient Wonders & Natural Beauty',
  description: 'Explore Ethiopia\'s rich cultural heritage, UNESCO World Heritage sites, stunning landscapes, and authentic experiences. From the rock-hewn churches of Lalibela to the Danakil Depression, discover the cradle of humanity.',
  authors: [
    { name: 'Visit Ethiopia', url: 'https://visit-ethiopia.com/' }
  ],
  keywords: [
    'Ethiopia', 'Travel', 'Tourism', 'Lalibela', 'Axum', 'Simien Mountains', 'Danakil Depression', 'UNESCO World Heritage', 'Ethiopian Culture', 'Addis Ababa', 'Historical Sites', 'Natural Wonders', 'African Tourism', 'Cultural Heritage', 'Rock Churches'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Visit Ethiopia - Discover Ancient Wonders & Natural Beauty',
    description: 'Explore Ethiopia\'s rich cultural heritage, UNESCO World Heritage sites, stunning landscapes, and authentic experiences. From the rock-hewn churches of Lalibela to the Danakil Depression, discover the cradle of humanity.',
    url: 'https://visit-ethiopia-rosy.vercel.app/',
    siteName: 'Visit Ethiopia',
    images: [
      {
        url: '/Ethiopia_Background.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore Ethiopia - hero image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Ethiopia - Discover Ancient Wonders & Natural Beauty',
    description: 'Explore Ethiopia\'s rich cultural heritage, UNESCO World Heritage sites, stunning landscapes, and authentic experiences.',
    images: ['/Ethiopia_Background.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className={amhara.variable}>
        <head>
          <meta property="og:title" content="Visit Ethiopia - Discover Ancient Wonders & Natural Beauty" />
          <meta property="og:description" content="Explore Ethiopia's rich cultural heritage, UNESCO World Heritage sites, stunning landscapes, and authentic experiences." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/Ethiopia_Background.jpg" />
          <meta property="og:image:alt" content="Explore Ethiopia - hero image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Visit Ethiopia - Discover Ancient Wonders & Natural Beauty" />
          <meta name="twitter:description" content="Explore Ethiopia's rich cultural heritage, UNESCO World Heritage sites, stunning landscapes, and authentic experiences." />
          <meta name="twitter:image" content="/Ethiopia_Background.jpg" />
        </head>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
