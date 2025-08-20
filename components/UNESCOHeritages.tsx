'use client';

import { useState } from 'react';

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

  return (
    <section className="py-12 bg-[#fdfaf7] relative">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-500 mb-8 uppercase text-center">UNESCO Heritages</p>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {sites.map((site, index) => (
            <li
              key={index}
              className={`text-2xl md:text-3xl font-bold uppercase cursor-pointer transition-colors text-center ${
                selectedIndex === index ? 'text-red-800' : 'text-red-300'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {site.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
