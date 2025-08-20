'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

interface Destination {
  name: string;
  image: string;
  description: string;
  region: string;
}

const destinations: Destination[] = [
  {
    name: 'Axum',
    image: '/axum.jpg',
    description: 'Ancient capital of the Aksumite Empire',
    region: 'Tigray Region',
  },
  {
    name: 'Danakil',
    image: '/danakil.png',
    description: 'One of the hottest places on Earth',
    region: 'Afar Region',
  },
  {
    name: 'Lalibela',
    image: '/lalibela.jpg',
    description: 'Rock-hewn churches carved from stone',
    region: 'Amhara Region',
  },
  {
    name: 'Simien',
    image: '/simien.jpg',
    description: 'Dramatic mountain landscapes and wildlife',
    region: 'Amhara Region',
  },
  {
    name: 'Bale Mountains',
    image: '/simien.jpg',
    description: 'Highland wilderness and endemic wildlife',
    region: 'Oromia Region',
  },
];

export default function FavoriteDestinations() {
  const swiperRef = React.useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Add keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goPrev();
      } else if (event.key === 'ArrowRight') {
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={20}
            navigation={false}
            loop={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            resistance={true}
            resistanceRatio={0.85}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
                         {destinations.map((dest, index) => (
               <SwiperSlide key={index}>
                 <div className="relative w-full">
                   <div className="bg-white rounded-xl overflow-hidden shadow-md">
                                           <Image
                        src={dest.image}
                        alt={dest.name}
                        width={300}
                        height={500}
                        className="w-full h-80 object-cover"
                      />
                   </div>
                   {/* Transparent overlay with destination info */}
                   <div className="absolute bottom-2 left-2 right-2 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                     <div className="flex justify-between items-start">
                       <div className="text-white">
                         <p className="text-sm font-semibold">{dest.name}</p>
                         <p className="text-xs text-white/80">{dest.region}</p>
                         <p className="text-xs text-white/90 mt-1">{dest.description}</p>
                       </div>
                       <Button
                         className="text-xs text-white bg-black/20 hover:bg-black/40 transition-colors border border-white/20"
                         size="sm"
                         variant="secondary"
                       >
                         More Info
                       </Button>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
             ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <button 
            onClick={goPrev}
            aria-label="Previous destination"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          <button 
            onClick={goNext}
            aria-label="Next destination"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          
          {/* Gradient overlays for fade effect on sides - matching background color */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
