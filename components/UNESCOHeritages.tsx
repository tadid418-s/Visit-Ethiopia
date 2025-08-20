'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

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

export default function UNESCOHeritages() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (showCursor) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCursor]);

  return (
    <section className="py-12 bg-[#fdfaf7] relative">
      <div className="max-w-7xl mx-auto px-4 flex items-start">
        <div className="w-1/2 pr-8">
          <p className="text-sm text-gray-500 mb-4 uppercase">UNESCO Heritages</p>
          <ul className="space-y-4">
            {sites.map((site, index) => (
              <li
                key={index}
                className={`text-5xl font-bold uppercase cursor-pointer transition-colors ${
                  selectedIndex === index ? 'text-red-800' : 'text-red-300'
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {site.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2" ref={imageRef}>
          <div
            className="relative"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
          >
            <Image
              src={sites[selectedIndex].image}
              alt={sites[selectedIndex].name}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover cursor-none"
            />
          </div>
        </div>
      </div>
      {showCursor && (
        <div
          className="fixed pointer-events-none z-50 w-24 h-24 rounded-full bg-red-800 text-white flex items-center justify-center text-center text-sm font-medium"
          style={{
            left: `${cursorPosition.x - 48}px`,
            top: `${cursorPosition.y - 48}px`,
          }}
        >
          Plan a Trip
        </div>
      )}
    </section>
  );
}
