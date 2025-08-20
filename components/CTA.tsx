'use client';

import React, { useState } from 'react';

const CTA = () => {
  const [activeTab, setActiveTab] = useState('tours');

  const formContent = {
    tours: {
      title: 'PLAN YOUR JOURNEY',
      fields: {
        first: {
          label: 'Destination',
          options: ['Addis Ababa', 'Lalibela', 'Axum', 'Gondar', 'Simien Mountains', 'Danakil Depression', 'Harar']
        },
        second: {
          label: 'Travel Date',
          type: 'date'
        },
        third: {
          label: 'Experience Type',
          options: ['Cultural Heritage Tour', 'Adventure & Nature', 'Religious & Spiritual', 'Photography Safari', 'Family Adventure']
        }
      },
      buttonText: 'Discover Ethiopia'
    },
    heritage: {
      title: 'EXPLORE HERITAGE',
      fields: {
        first: {
          label: 'UNESCO Site',
          options: ['Lalibela Churches', 'Aksum Obelisks', 'Gondar Castles', 'Harar Jugol', 'Simien National Park', 'Lower Valley of Awash', 'Tiya Stone Monuments']
        },
        second: {
          label: 'Visit Date',
          type: 'date'
        },
        third: {
          label: 'Group Size',
          options: ['Solo Traveler', '2-4 People', '5-10 People', '10+ People', 'Family Group']
        }
      },
      buttonText: 'Book Heritage Tour'
    },
    culture: {
      title: 'CULTURAL IMMERSION',
      fields: {
        first: {
          label: 'Cultural Experience',
          options: ['Coffee Ceremony', 'Traditional Music & Dance', 'Local Markets', 'Cooking Classes', 'Village Homestay', 'Festival Participation']
        },
        second: {
          label: 'Preferred Date',
          type: 'date'
        },
        third: {
          label: 'Duration',
          options: ['Half Day', 'Full Day', '2-3 Days', '1 Week', '2 Weeks', 'Custom Duration']
        }
      },
      buttonText: 'Experience Culture'
    },
    adventure: {
      title: 'ADVENTURE AWAITS',
      fields: {
        first: {
          label: 'Adventure Type',
          options: ['Mountain Trekking', 'Desert Expedition', 'Wildlife Safari', 'River Rafting', 'Rock Climbing', 'Photography Tour']
        },
        second: {
          label: 'Start Date',
          type: 'date'
        },
        third: {
          label: 'Difficulty Level',
          options: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Family Friendly']
        }
      },
      buttonText: 'Start Adventure'
    }
  };

  const currentContent = formContent[activeTab as keyof typeof formContent];

  return (
    <section id="plan" className="px-6 py-8 md:px-16 lg:px-24 bg-[#fdfdf8]">
      <div className="max-w-5xl mx-auto">
        {/* Inner container with flexbox layout */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">

          {/* Left section: Image and CTA text */}
          <div 
            className="relative flex-1 bg-black bg-cover bg-center min-h-[250px] md:min-h-[400px] rounded-l-2xl" 
            style={{
              backgroundImage: "url('/CTA.jpg')",
            }}
          >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40 rounded-l-2xl" />
            
            {/* CTA text overlay - moved to bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
                Ready to explore the Land of Origins?
              </h1>
            </div>
          </div>

          {/* Right section: Booking form */}
          <div className="relative flex-1 bg-black p-4 sm:p-6 md:p-8 text-white overflow-hidden rounded-r-2xl">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-95 z-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">{currentContent.title}</h2>

              {/* Tabs for different booking types */}
              <div className="flex flex-wrap gap-2 sm:gap-3 text-sm font-semibold mb-4">
                <button 
                  onClick={() => setActiveTab('tours')}
                  className={`px-3 py-2 sm:px-4 rounded-full transition-colors duration-200 ${
                    activeTab === 'tours' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Tours
                </button>
                <button 
                  onClick={() => setActiveTab('heritage')}
                  className={`px-3 py-2 sm:px-4 rounded-full transition-colors duration-200 ${
                    activeTab === 'heritage' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Heritage Sites
                </button>
                <button 
                  onClick={() => setActiveTab('culture')}
                  className={`px-3 py-2 sm:px-4 rounded-full transition-colors duration-200 ${
                    activeTab === 'culture' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Culture
                </button>
                <button 
                  onClick={() => setActiveTab('adventure')}
                  className={`px-3 py-2 sm:px-4 rounded-full transition-colors duration-200 ${
                    activeTab === 'adventure' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Adventure
                </button>
              </div>

              {/* Form fields */}
              <form className="space-y-3 flex-grow flex flex-col justify-center">
                {/* First Field */}
                <div className="relative">
                  <label htmlFor="field1" className="block text-white/80 text-xs sm:text-sm mb-1 font-medium">{currentContent.fields.first.label}</label>
                  <select
                    id="field1"
                    className="w-full bg-gray-800 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none pr-8 transition-colors duration-200 border border-gray-700"
                  >
                    {currentContent.fields.first.options?.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {/* Chevron down icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-white/70">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Second Field */}
                <div className="relative">
                  <label htmlFor="field2" className="block text-white/80 text-xs sm:text-sm mb-1 font-medium">{currentContent.fields.second.label}</label>
                  {currentContent.fields.second.type === 'date' ? (
                    <input
                      type="date"
                      id="field2"
                      defaultValue="2025-03-01"
                      className="w-full bg-gray-800 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 pr-8 transition-colors duration-200 border border-gray-700"
                    />
                  ) : (
                    <select
                      id="field2"
                      className="w-full bg-gray-800 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none pr-8 transition-colors duration-200 border border-gray-700"
                    >
                      {currentContent.fields.second.options?.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                  {/* Calendar or Chevron icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-white/70">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {currentContent.fields.second.type === 'date' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21l14-9-6 6-8 3z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      )}
                    </svg>
                  </div>
                </div>

                {/* Third Field */}
                <div className="relative">
                  <label htmlFor="field3" className="block text-white/80 text-xs sm:text-sm mb-1 font-medium">{currentContent.fields.third.label}</label>
                  <select
                    id="field3"
                    className="w-full bg-gray-800 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none pr-8 transition-colors duration-200 border border-gray-700"
                  >
                    {currentContent.fields.third.options?.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {/* Chevron down icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-white/70">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Red Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg py-3 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg mt-4"
                >
                  {currentContent.buttonText}
                </button>
              </form>

              {/* Small text at bottom */}
              <p className="text-white/60 text-xs mt-3 text-center">
                Join thousands discovering the cradle of humanity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;