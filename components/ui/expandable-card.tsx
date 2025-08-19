"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ExpandableCardProps {
  title: string
  src: string
  description: string
  children: React.ReactNode
  classNameExpanded?: string
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  classNameExpanded
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer",
        isExpanded ? "ring-2 ring-blue-500" : ""
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Title and Description */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn("p-4 space-y-3", classNameExpanded)}>
          {children}
        </div>
      </div>

      {/* Expand/Collapse Indicator */}
      <div className="absolute top-4 right-4">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )}
        >
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
