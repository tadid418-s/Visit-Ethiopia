"use client"

import React from 'react'

interface Article {
  id: string
  title: string
  image: string
  excerpt: string
  category: string
  date?: string
}

export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="overflow-hidden article-clipping">
      <header className="px-4 py-6 masthead">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">The Visit Ethiopia Journal</h1>
        <div className="mt-3 text-sm text-gray-800">Vol. 1 • {article.date}</div>
      </header>

      <div className="ruled px-4 md:px-6 py-6">
        <div className="md:flex md:gap-8">
          <div className="md:flex-1 md:order-2">
            <div className="relative h-72 md:h-[420px] lg:h-[520px] bg-gray-100 overflow-hidden">
              <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>

          <div className="md:w-1/2 md:order-1">
            <span className="inline-block text-sm text-gray-700 mb-2">{article.category}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">{article.title}</h2>
            <div className="prose prose-sm md:prose md:prose-lg news-columns font-sans dropcap text-gray-800">
              <p className="dropcap">{article.excerpt} {article.excerpt} {article.excerpt}</p>
            </div>
            <div className="mt-6">
              <a href="#" className="text-sm underline">Continue reading →</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
