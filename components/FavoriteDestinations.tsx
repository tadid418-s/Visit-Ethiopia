'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Destination {
  name: string;
  image: string;
}

const destinations: Destination[] = [
  {
    name: 'Axum',
    image: '/axum.jpg',
  },
  {
    name: 'Danakil',
    image: '/danakil.png',
  },
  {
    name: 'Lalibela',
    image: '/lalibela.jpg',
  },
  {
    name: 'Simien',
    image: '/simien.jpg',
  },
];

export default function FavoriteDestinations() {
  return (
    <section id="destinations" className="py-12 bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 text-left pt-20">
        {/* Top Label and Headline Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {/* Headline (takes 3 columns on larger screens) */}
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-red-700 mb-2">
              Escape to Our Favorite Destination
            </h2>
            <p className="text-gray-600 text-sm">
              Discover Ethiopia&apos;s most popular vacation spots, from Axum, Danakil, Lalibela, Simien and many more.
            </p>
          </div>

          {/* Small Label on the far right */}
          <div className="md:col-span-1">
            <p className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              VISIT ETHIOPIA
            </p>
          </div>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-2 text-gray-800 font-medium">{dest.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Gradient overlays for fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
