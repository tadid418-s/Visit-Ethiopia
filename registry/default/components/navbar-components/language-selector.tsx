"use client"

import { useState } from "react"
import { Globe, ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "EN", fullName: "English", flag: "🇺🇸" },
  { code: "am", name: "አማ", fullName: "አማርኛ", flag: "🇪🇹" },
  { code: "or", name: "ORO", fullName: "Oromoo", flag: "🇪🇹" },
  { code: "ti", name: "TG", fullName: "ትግርኛ", flag: "🇪🇹" },
]

interface LanguageSelectorProps {
  isScrolled?: boolean
}

export default function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  
  const currentLanguage = languages.find(lang => lang.code === selectedLanguage)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`h-9 px-3 text-sm transition-colors border-none ${
            isScrolled 
              ? 'hover:bg-accent text-foreground' 
              : 'hover:bg-white/10 text-white'
          }`}
        >
          <Globe size={14} className={`mr-1.5 ${isScrolled ? "text-muted-foreground/80" : "text-white/80"}`} />
          <span className="font-medium">{currentLanguage?.name}</span>
          <ChevronDownIcon
            className={`ml-1 opacity-60 ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}
            size={14}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuRadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.code} value={language.code}>
              <div className="flex items-center gap-2">
                <span>{language.flag}</span>
                <span>{language.fullName}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
