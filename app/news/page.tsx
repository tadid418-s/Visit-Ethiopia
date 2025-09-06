"use client"

import React, { useMemo, useState } from 'react'
import FeaturedArticle from '@/components/news/FeaturedArticle'
import ArticleCard from '@/components/news/ArticleCard'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

const SAMPLE: any[] = [
  {
    id: '1',
    title: 'Lalibela: The Rock-Hewn Churches Reborn',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d',
    excerpt: 'Restoration efforts and renewed pilgrimages bring Lalibela back into the spotlight as visitors return to these 12th-century wonders.',
    category: 'Culture',
    date: 'Aug 12, 2025'
  },
  {
    id: '2',
    title: 'Simien Peaks See Record Conservation Funding',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234',
    excerpt: 'New programs focus on habitat restoration for the Ethiopian wolf and mountain biodiversity.',
    category: 'Nature',
    date: 'Jul 28, 2025'
  },
  {
    id: '3',
    title: 'Axum: Archaeologists Uncover Trade Routes',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=efgh5678',
    excerpt: 'New finds in Axum point to an even richer trading history connecting the Red Sea and inland Africa.',
    category: 'History',
    date: 'Jun 2, 2025'
  },
  {
    id: '4',
    title: 'Danakil: Travel Advisory and Visitor Tips',
    image: 'https://images.unsplash.com/photo-1508264165352-c3a1e7b2f9f3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl9012',
    excerpt: 'Safety and sustainability guidelines for travelers planning a trip into the Danakil Depression.',
    category: 'Travel',
    date: 'May 14, 2025'
  }
]

export default function NewsPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return SAMPLE.filter(a => (category === 'All' || a.category === category) && (a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase())))
  }, [category, query])

  const featured = filtered[0] || SAMPLE[0]
  const side = filtered.slice(1)

  return (
    <section className="news-paper paper-background py-6 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-6 md:mt-8">
      {/* Masthead */}
      <div className="newspaper-masthead mb-6">
        <h1 className="masthead-title">The Visit Ethiopia Journal</h1>
        <div className="masthead-sub">VOL. 1 • NO. 1 — {new Date().toLocaleDateString()}</div>
        <div className="theme-pills">
          {['All','Culture','Nature','History','Travel'].map(t => (
            <button 
              key={t}
              className={`theme-pill ${category === t ? 'active' : ''}`}
              onClick={() => setCategory(t)}
            >{t}</button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6">
        <div className="top-utility">
          <div className="hidden md:flex gap-6">
            <span>BOOKING</span>
            <span>GAVERKORT</span>
            <span>MENY</span>
            <span>EVENT</span>
            <span>TAKEAWAY</span>
            <span>UTLEVERING</span>
            <span>AKTUELT</span>
            <span>KONTAKT</span>
            <span>ENGLISH</span>
          </div>

          <div className="mt-4 md:mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-gray-800">Independent • Culture • Nature • Travel</div>
            <div className="w-full md:w-1/3 flex gap-3">
              <div className="w-1/2">
                <Select onValueChange={(v) => setCategory(v || 'All')} defaultValue="All">
                  <SelectTrigger>
                    <SelectValue>All</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Culture">Culture</SelectItem>
                    <SelectItem value="Nature">Nature</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Travel">Travel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Input placeholder="Search news, places, topics..." value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
            </div>
          </div>

          {/* theme pills (mobile-friendly position) */}
          <div className="mt-4 flex justify-center">
            <div className="theme-pills">
              {['All','Culture','Nature','History','Travel'].map(t => (
                <button 
                  key={t}
                  className={`theme-pill ${category === t ? 'active' : ''}`}
                  onClick={() => setCategory(t)}
                >{t}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main front-page grid: left teaser, center lead, right image */}
      <div>
        <div className="front-headline">{featured.title.toUpperCase()}</div>
        <div className="front-grid">
          {/* left teaser */}
          <div>
            <div className="article-clipping mb-6">
              <img src={SAMPLE[1].image} alt="teaser" className="w-full h-32 object-cover mb-3" />
              <h3 className="font-serif text-lg">{SAMPLE[1].title}</h3>
              <p className="text-sm text-gray-700 mt-2">{SAMPLE[1].excerpt}</p>
              <div className="mt-3 text-xs text-gray-600">{SAMPLE[1].date} • {SAMPLE[1].category}</div>
              <div className="mt-3 border-t pt-3 text-sm"><a href="#" className="underline">Book Bord</a></div>
            </div>

            <div className="clip-list">
              {SAMPLE.slice(2).map(s => (
                <div key={s.id} className="article-clipping mb-4">
                  <h3>{s.title}</h3>
                  <div className="text-xs text-gray-600">{s.date} • {s.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* center lead article */}
          <main className="lead-article">
            <div className="lead-eyebrow">FEATURE</div>
            <h2 className="lead-title">{featured.title}</h2>
            <div className="article-byline">By Staff • {featured.date}</div>
            <div className="article-body mt-4">
              <p>{featured.excerpt} {featured.excerpt} {featured.excerpt}</p>
              <p className="mt-4">Additional long-form content goes here to mimic the newspaper column structure. This will flow into two columns on medium screens and keep a classic serif reading experience.</p>
            </div>
          </main>

          {/* right large image */}
          <aside>
            <img src={featured.image} alt="feature" className="w-full h-full object-cover border border-gray-200" />
          </aside>
        </div>
      </div>
    </section>
  )
}
