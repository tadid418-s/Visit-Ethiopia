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
    <article className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="relative h-64 md:h-[420px] lg:h-[520px] bg-gray-200">
        <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute left-6 right-6 bottom-6 z-10 text-left">
          <span className="inline-block bg-white/90 text-sm text-gray-800 px-3 py-1 rounded-full mb-3 font-medium">{article.category}</span>
          <h2 className="font-serif text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-3">{article.title}</h2>
          <p className="text-white/90 text-sm md:text-base max-w-2xl font-sans">{article.excerpt}</p>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <time className="text-xs text-muted-foreground">{article.date}</time>
          <a href="#" className="text-sm text-red-600 hover:underline">Read more</a>
        </div>
      </div>
    </article>
  )
}
