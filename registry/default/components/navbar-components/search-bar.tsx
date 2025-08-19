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
        className={`inline-flex h-9 w-fit rounded-full border px-3 py-2 text-sm shadow-xs transition-all duration-200 outline-none ${
          isScrolled 
            ? 'border-border/30 bg-background/70 text-foreground hover:bg-background/90 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:ring-[3px]' 
            : 'border-white/20 bg-white/15 text-white hover:bg-white/20 focus-visible:ring-white/30 focus-visible:border-white/30 focus-visible:ring-[3px] backdrop-blur-sm'
        }`}
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className={`-ms-1 me-3 ${isScrolled ? 'text-muted-foreground/80' : 'text-white/80'}`}
            size={16}
            aria-hidden="true"
          />
          <span className={`font-normal ${isScrolled ? 'text-muted-foreground/70' : 'text-white/70'}`}>
            Search destinations...
          </span>
        </span>
        <kbd className={`ms-8 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium ${
          isScrolled 
            ? 'bg-background text-muted-foreground/70' 
            : 'bg-white/20 text-white/70'
        }`}>
          ⌘K
        </kbd>
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
