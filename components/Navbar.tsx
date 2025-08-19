"use client"

import { Map, MapPin, Calendar, Route } from "lucide-react"
import { useState, useEffect } from "react"

import Logo from "@/components/Logo"
import LanguageSelector from "@/registry/default/components/navbar-components/language-selector"
import SearchBar from "@/registry/default/components/navbar-components/search-bar"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Navigation links array
const navigationLinks = [
  { href: "#about", label: "About", icon: Map, active: false },
  { href: "#destinations", label: "Destinations", icon: MapPin, active: false },
  { href: "#events", label: "Events", icon: Calendar, active: false },
  { href: "#plan", label: "Plan a trip", icon: Route, active: false },
]

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Change background after scrolling 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-sm' 
          : ''
      }`}
    >
      <div className="flex h-14 items-center justify-between gap-3">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
        <Button 
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className={`flex-row items-center gap-1.5 py-1 text-sm transition-colors ${
                            isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                          }`}
                          active={link.active}
                          onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <Icon
                            size={14}
                            className={`transition-colors ${isScrolled ? "text-muted-foreground/80" : "text-white/80"}`}
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className={`flex-row items-center gap-1.5 py-1 px-2 rounded-md text-sm transition-all duration-200 ${
                        isScrolled 
                          ? 'text-foreground hover:text-primary hover:bg-accent/50' 
                          : 'text-white hover:text-white hover:bg-white/10'
                      } ${link.active ? (isScrolled ? 'bg-accent/30 text-primary' : 'bg-white/15 text-white') : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Icon
                        size={14}
                        className={`transition-colors ${isScrolled ? "text-muted-foreground/80" : "text-white/80"}`}
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Middle side: Logo */}
        <div className="flex items-center">
          <a href="#" className="transition-opacity hover:opacity-90">
            <Logo isScrolled={isScrolled} />
          </a>
      </div>

        {/* Right side: Actions */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex">
            <SearchBar isScrolled={isScrolled} />
          </div>
          {/* Language selector */}
          <div className="flex items-center">
            <LanguageSelector isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  )
}