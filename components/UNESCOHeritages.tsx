'use client';


import { useState, useEffect, useRef } from 'react';

interface Site {
  name: string;
  image: string;
}

const sites: Site[] = [
  { name: 'Aksum', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0015_0001.jpg' },
  { name: 'Rock-Hewn Churches, Lalibela', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0018_0001.jpg' },
  { name: 'Simien National Park', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0009_0001.jpg' },
  { name: 'Fasil Ghebbi, Gondar Region', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0019_0001.jpg' },
  { name: 'Harar Jugol, the Fortified Historic Town', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_1189_0001.jpg' },
  { name: 'Konso Cultural Landscape', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_1333_0001.jpg' },
  { name: 'Lower Valley of the Awash', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0010_0001.jpg' },
  { name: 'Lower Valley of the Omo', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0017_0001.jpg' },
  { name: 'Tiya', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0012_0001.jpg' },
  { name: 'Bale Mountains National Park', image: 'https://whc.unesco.org/uploads/sites/gallery/original/site_0111_0001.jpg' },
];

const siteDescriptions: Record<string, string> = {
  'Aksum': 'Aksum is an ancient city in northern Ethiopia, known for its obelisks, archaeological sites, and as the heart of the Aksumite Empire.',
  'Rock-Hewn Churches, Lalibela': 'Lalibela is famous for its 12th-century rock-hewn churches, a pilgrimage site and a marvel of Ethiopian Christianity.',
  'Simien National Park': 'A UNESCO World Heritage site, Simien National Park is renowned for its dramatic mountain scenery and endemic wildlife.',
  'Fasil Ghebbi, Gondar Region': 'Fasil Ghebbi is a fortress-enclosure in Gondar, once the residence of Ethiopian emperors.',
  'Harar Jugol, the Fortified Historic Town': 'Harar Jugol is the old walled city of Harar, considered the fourth holiest city in Islam.',
  'Konso Cultural Landscape': 'The Konso Cultural Landscape is a living cultural tradition stretching back 21 generations.',
  'Lower Valley of the Awash': 'The Lower Valley of the Awash is a paleoanthropological site, famous for the discovery of the hominid Lucy.',
  'Lower Valley of the Omo': 'The Lower Valley of the Omo is known for its fossils, providing key evidence for human evolution.',
  'Tiya': 'Tiya is an archaeological site in central Ethiopia, noted for its ancient stelae.',
  'Bale Mountains National Park': 'Bale Mountains National Park is a high-altitude wilderness with unique flora and fauna, including the Ethiopian wolf.',
};

export default function UNESCOHeritages() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Focus trap for accessibility
  useEffect(() => {
    if (activeIndex !== null && cardRef.current) {
      cardRef.current.focus();
    }
  }, [activeIndex]);

  return (
    <section className="py-12 bg-[#fdfaf7] relative">
      <div className="max-w-7xl mx-auto px-4">
  <p className="text-sm text-gray-500 mb-8 uppercase text-left">UNESCO Heritages</p>
  <ul className="space-y-4 w-full">
          {sites.map((site, index) => (
            <li
              key={index}
              className={`text-2xl md:text-3xl font-bold uppercase cursor-pointer transition-colors text-left ${
                activeIndex === index ? 'text-red-800' : 'text-red-300'
              }`}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
              aria-label={`Show details for ${site.name}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index); }}
            >
              {site.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Popup Card Overlay */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="relative w-full max-w-xs mx-4 rounded-3xl shadow-2xl focus:outline-none bg-white/0 min-h-[600px] flex flex-col"
          >
            {/* X Close Button */}
            <button
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 hover:bg-red-100 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              tabIndex={0}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Image with gradient overlay */}
            <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden flex flex-col justify-end" style={{ backgroundImage: `url(${sites[activeIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
              <div className="relative z-10 px-6 pt-24 pb-5 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {sites[activeIndex].name}
                </h3>
                <div className="flex justify-between items-center bg-white/30 backdrop-blur-sm rounded-xl px-4 py-2 mb-3">
                  <div className="flex flex-col items-start">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-xs text-gray-900 font-medium">World Heritage</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-green-600 text-lg">🌍</span>
                    <span className="text-xs text-gray-900 font-medium">Ethiopia</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-blue-500 text-lg">🏞️</span>
                    <span className="text-xs text-gray-900 font-medium">Since 1978</span>
                  </div>
                </div>
                <p className="text-white/90 text-base mb-4 text-left">{siteDescriptions[sites[activeIndex].name] || 'A remarkable UNESCO World Heritage site in Ethiopia.'}</p>
                <button
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                  tabIndex={0}
                  aria-label="Discover more about this site"
                >
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
