"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [showScrollCue, setShowScrollCue] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setShowScrollCue(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollPromptClick = () => {
    const target = document.querySelector('#about')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
    }
    setShowScrollCue(false)
  }

  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/Ethiopia_Background.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="flex items-end justify-end min-h-[calc(100vh-4rem)] pb-20">
          <div className="w-full max-w-2xl text-right mr-8 md:mr-16">
            <p className="text-xs md:text-sm text-white/80 uppercase tracking-wider mb-4 font-light">
              Your Official Ethiopian Travel Guide
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight tracking-tight">
              Explore
              <br />
              Ethiopia
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll cue - lower left (rotated label + vertical bar with bouncing dot) */}
      {showScrollCue && (
        <div className="absolute left-3 bottom-8 z-20 md:left-6 md:bottom-12 flex items-center gap-3">
          <button
            onClick={handleScrollPromptClick}
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 focus:outline-none"
            tabIndex={0}
          >
            <div className="hidden md:flex flex-col items-center gap-0 select-none transform translate-x-1" aria-hidden>
              {"SCROLL".split("").map((ch, i) => (
                <span key={i} className="text-xs uppercase tracking-[0.4em] text-white/80 leading-[1]">{ch}</span>
              ))}
            </div>

            <span className="relative flex items-center justify-center">
              <span className="elastic-bar text-white/20 animate-elasticus" aria-hidden />
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

export default Hero