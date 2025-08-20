import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, COMPANY_DESCRIPTION, NEWSLETTER } from '@/constants'
import { amhara } from "@/app/fonts"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-3xl shadow-xl mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-8">
        {/* Company Logo and Description */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center mb-4">
            <h1 className={`${amhara.variable} text-2xl font-bold text-gray-900`} style={{ fontFamily: "var(--font-amhara)" }}>
              <span className="text-gray-900">Visit </span>
              <span className="text-green-600">E</span>
              <span className="text-yellow-500">t</span>
              <span className="text-red-600">hiopia</span>
            </h1>
          </div>
          <p className="text-sm text-gray-600">{COMPANY_DESCRIPTION}</p>
        </div>

        {/* Company Links */}
        <div className="flex-1 min-w-[150px]">
          <FooterColumn title="Company">
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS[0].links.map((link, linkIdx) => (
                <li key={link + '-' + linkIdx}>
                  <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center transition-colors group">
                    {link} 
                    {link === 'Become an Affiliate' || link === 'Projects' ? (
                      <span className="ml-1 text-gray-400 group-hover:text-gray-600 transition-colors">↗</span>
                    ) : (
                      <span className="ml-1">→</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Socials */}
        <div className="flex-1 min-w-[150px]">
          <FooterColumn title="Socials">
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS[1].links.map((link, linkIdx) => (
                <li key={link + '-' + linkIdx}>
                  <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center transition-colors group">
                    {link} <span className="ml-1 text-gray-400 group-hover:text-gray-600 transition-colors">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <FooterColumn title={NEWSLETTER.title}>
            <p className="text-sm text-gray-600 mb-4">{NEWSLETTER.description}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={NEWSLETTER.placeholder}
                className="px-4 py-3 bg-gray-100 text-gray-800 rounded-l-full focus:outline-none flex-1 text-sm border border-gray-200"
              />
              <button className="bg-black text-white px-4 py-3 rounded-r-full text-sm hover:bg-gray-800 transition-colors">
                {NEWSLETTER.buttonText}
              </button>
            </div>
          </FooterColumn>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500">
          <p>© 2025 Visit Ethiopia · All rights reserved · Made with Visit Ethiopia</p>
          <div className="flex items-center gap-2">
            <span>Built by </span>
            <Link 
              href="https://github.com/tadid418" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-700 transition-colors"
            >
              Tadiyos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
      {children}
    </div>
  )
}

export default Footer