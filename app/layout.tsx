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
    url: 'https://visit-ethiopia.com/',
    siteName: 'Visit Ethiopia',
    images: [
      {
        url: '/lalibela.jpg',
        width: 1200,
        height: 630,
        alt: 'Rock-hewn churches of Lalibela, Ethiopia',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
