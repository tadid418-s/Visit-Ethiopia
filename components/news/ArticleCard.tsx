"use client"

import React from 'react'

interface Article {
  id: string
  title: string
  image?: string
  excerpt?: string
  category?: string
  date?: string
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-200">
      {article.image && (
        <div className="w-28 h-20 overflow-hidden rounded-md flex-shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-serif text-lg leading-snug text-gray-900">{article.title}</h3>
        {article.excerpt && <p className="text-sm text-gray-600 mt-1 line-clamp-3">{article.excerpt}</p>}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{article.date}</span>
          <span className="italic">{article.category}</span>
        </div>
      </div>
    </article>
  )
}
