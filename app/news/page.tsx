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
  <section className="py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-6 md:mt-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="font-serif text-3xl md:text-4xl">News & Stories</h1>
        <div className="w-full md:w-1/2 lg:w-1/3 flex gap-3">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FeaturedArticle article={featured} />
        </div>

        <aside className="space-y-4">
          {side.length ? (
            side.map(a => (
              <ArticleCard key={a.id} article={a} />
            ))
          ) : (
            SAMPLE.slice(1).map(a => <ArticleCard key={a.id} article={a} />)
          )}
        </aside>
      </div>
    </section>
  )
}
