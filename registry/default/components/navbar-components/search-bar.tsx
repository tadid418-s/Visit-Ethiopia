"use client"

import * as React from "react"
import {
  MapPinIcon,
  CalendarIcon,
  PlaneIcon,
  CameraIcon,
  SearchIcon,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

interface SearchBarProps {
  isScrolled?: boolean
}

export default function SearchBar({ isScrolled = false }: SearchBarProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        className={`inline-flex h-8 w-fit rounded-md border px-4 py-1.5 text-xs shadow-xs transition-all duration-200 outline-none ${
          isScrolled 
            ? 'border-border/30 bg-background/70 text-foreground hover:bg-background/90 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:ring-[3px]' 
            : 'border-white/20 bg-white/15 text-white hover:bg-white/20 focus-visible:ring-white/30 focus-visible:border-white/30 focus-visible:ring-[3px] backdrop-blur-sm'
        }`}
        onClick={() => setOpen(true)}
        data-search-trigger
      >
        <span className="flex items-center gap-2">
          <SearchIcon
            className={`${isScrolled ? 'text-muted-foreground/80' : 'text-white/80'}`}
            size={14}
            aria-hidden="true"
          />
          <span className={`font-normal whitespace-nowrap ${isScrolled ? 'text-muted-foreground/70' : 'text-white/70'}`}>
            Search
          </span>
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search destinations, events, or plan your trip..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Popular Destinations">
            <CommandItem>
              <MapPinIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Lalibela Rock Churches</span>
              <CommandShortcut className="justify-center">Historical</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MapPinIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Simien Mountains</span>
              <CommandShortcut className="justify-center">Nature</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CameraIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Danakil Depression</span>
              <CommandShortcut className="justify-center">Adventure</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Actions">
            <CommandItem>
              <CalendarIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Browse Events</span>
            </CommandItem>
            <CommandItem>
              <PlaneIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Plan a Trip</span>
            </CommandItem>
            <CommandItem>
              <MapPinIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>View All Destinations</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
