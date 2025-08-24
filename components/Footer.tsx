'use client';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, COMPANY_DESCRIPTION, NEWSLETTER } from '@/constants'
import { amhara } from "@/app/fonts"
import Link from 'next/link'
import React from 'react'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <footer className="bg-black mt-16 rounded-t-3xl shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="lg:max-w-sm">
            <div className="flex items-center mb-4">
              <a 
                href="#hero" 
                className="transition-opacity hover:opacity-90"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Logo isScrolled={false} />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Visit Ethiopia helps travelers discover the cradle of humanity's rich heritage, 
              breathtaking landscapes, and vibrant culture — everything you need in one place.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
            {/* Destinations */}
            <div>
              <h4 className="font-medium text-white mb-6">Destinations</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Lalibela</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Axum</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Simien Mountains</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Danakil Depression</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium text-white mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Travel Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Culture & History</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Visa Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Safety Tips</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-white mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-12 mt-12 border-t border-gray-700 gap-4">
          <p className="text-gray-400 text-sm">© 2025 Visit Ethiopia. All rights reserved</p>
          <div className="flex gap-6">
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="https://github.com/tadid418-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
              tabIndex={0}
              aria-label="Built by Tadiyos (opens in new tab)"
              onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open('https://github.com/tadid418-s', '_blank', 'noopener,noreferrer');
              }
              }}
            >
              Built by :
              <span className="underline ml-1"> Tadiyos</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer