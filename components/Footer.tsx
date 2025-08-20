import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, COMPANY_DESCRIPTION, NEWSLETTER } from '@/constants'
import { amhara } from "@/app/fonts"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white mt-16 rounded-t-3xl shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="lg:max-w-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black rounded mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">VE</span>
              </div>
              <h1 className={`${amhara.variable} text-xl font-semibold text-gray-900`} style={{ fontFamily: "var(--font-amhara)" }}>
                <span className="text-gray-900">Visit </span>
                <span className="text-green-600">E</span>
                <span className="text-yellow-500">t</span>
                <span className="text-red-600">hiopia</span>
              </h1>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Visit Ethiopia helps travelers discover the cradle of humanity's rich heritage, 
              breathtaking landscapes, and vibrant culture — everything you need in one place.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
            {/* Destinations */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Destinations</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Lalibela</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Axum</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Simien Mountains</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Danakil Depression</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Travel Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Culture & History</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Visa Info</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Safety Tips</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-12 mt-12 border-t border-gray-200 gap-4">
          <p className="text-gray-500 text-sm">© 2025 Visit Ethiopia. All rights reserved</p>
          <div className="flex gap-6">
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="https://github.com/tadid418-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors underline"
            >
              Built by Tadiyos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer