"use client"

import { Map, MapPin, Compass, Route, Newspaper, Megaphone, FileText, Calendar, SearchIcon } from "lucide-react"
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
  { href: "#plan", label: "Plan a trip", icon: Route, active: false },
]

// Events popover options
const eventsOptions = [
  { href: "#upcoming-events", label: "Upcoming Events", icon: Calendar },
  { href: "#blogs", label: "Blogs", icon: FileText },
  { href: "#news", label: "News", icon: Newspaper },
  { href: "#announcements", label: "Announcements", icon: Megaphone },
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
            <PopoverContent align="start" className="w-36 p-1 md:hidden bg-white border-gray-200 shadow-lg">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2 w-full">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-1.5 py-1 text-sm transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded px-2 w-full text-left justify-start"
                          active={link.active}
                          onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <Icon
                            size={14}
                            className="transition-colors text-gray-500"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                  
                  {/* Events Popover for Mobile */}
                  <NavigationMenuItem className="w-full">
                    <Popover>
                      <PopoverTrigger asChild>
                        <NavigationMenuLink
                          className="flex-row items-center gap-1.5 py-1 text-sm transition-colors cursor-pointer w-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded px-2 text-left justify-start"
                        >
                          <Compass
                            size={14}
                            className="transition-colors text-gray-500"
                            aria-hidden="true"
                          />
                          <span>Discover</span>
                        </NavigationMenuLink>
                      </PopoverTrigger>
                      <PopoverContent align="end" className="w-48 p-2 bg-white border-gray-200 shadow-lg">
                        <div className="space-y-1">
                          {eventsOptions.map((option, index) => {
                            const Icon = option.icon
                            return (
                              <button
                                key={index}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors text-left"
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.querySelector(option.href)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                <Icon size={14} className="text-gray-500" />
                                <span>{option.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </NavigationMenuItem>

                  {/* Search Button for Mobile */}
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink
                      className="flex-row items-center gap-1.5 py-1 text-sm transition-colors cursor-pointer w-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded px-2 text-left justify-start"
                      onClick={() => {
                        // Open search dialog
                        const searchButton = document.querySelector('[data-search-trigger]') as HTMLButtonElement;
                        if (searchButton) {
                          searchButton.click();
                        }
                      }}
                    >
                      <SearchIcon
                        size={14}
                        className="transition-colors text-gray-500"
                        aria-hidden="true"
                      />
                      <span>Search</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
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
              
              {/* Events Popover */}
              <NavigationMenuItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <NavigationMenuLink
                      className={`flex-row items-center gap-1.5 py-1 px-2 rounded-md text-sm transition-all duration-200 cursor-pointer ${
                        isScrolled 
                          ? 'text-foreground hover:text-primary hover:bg-accent/50' 
                          : 'text-white hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Compass
                        size={14}
                        className={`transition-colors ${isScrolled ? "text-muted-foreground/80" : "text-white/80"}`}
                        aria-hidden="true"
                      />
                      <span>Discover</span>
                      <svg
                        className="w-3 h-3 ml-1 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavigationMenuLink>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-48 p-2 bg-white border-gray-200 shadow-lg">
                    <div className="space-y-1">
                      {eventsOptions.map((option, index) => {
                        const Icon = option.icon
                        return (
                          <button
                            key={index}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
                            onClick={(e) => {
                              e.preventDefault();
                              document.querySelector(option.href)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <Icon size={14} className="text-gray-500" />
                            <span>{option.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              </NavigationMenuItem>
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
          <div className="flex items-center min-w-[120px] justify-end relative">
            <div className="w-full flex justify-end">
              <LanguageSelector isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}