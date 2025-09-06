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
    <article className="article-clipping p-4 md:p-5 rounded-sm">
      <div className="flex md:flex-row flex-col md:gap-4 gap-3">
        {article.image && (
          <div className="md:w-28 md:h-20 w-full h-40 overflow-hidden rounded-sm flex-shrink-0">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex-1">
          <h3 className="font-serif text-lg leading-snug text-gray-900">{article.title}</h3>
          {article.excerpt && <p className="text-sm text-gray-700 mt-2">{article.excerpt}</p>}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
            <span>{article.date}</span>
            <span className="italic">{article.category}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
