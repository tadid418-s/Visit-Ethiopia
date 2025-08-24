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
          className={`h-9 px-3 text-sm transition-colors border border-gray-300 rounded-sm shadow-none min-w-[110px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:ring-offset-transparent ${
            isScrolled
              ? 'hover:bg-accent text-foreground bg-white'
              : 'hover:bg-white/10 text-white bg-white/10'
          }`}
          style={{ boxSizing: 'border-box' }}
          tabIndex={0}
          aria-label="Select language"
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
  <DropdownMenuContent align="end" className="w-48 rounded-sm border border-gray-200 shadow-lg p-0 bg-white">
        <DropdownMenuRadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
          {languages.map((language) => (
            <DropdownMenuRadioItem
              key={language.code}
              value={language.code}
              className="px-3 py-2 rounded-sm focus:bg-gray-100 hover:bg-gray-50 transition-colors flex items-center w-full"
              tabIndex={0}
              aria-label={`Switch to ${language.fullName}`}
            >
              <div className="flex items-center gap-2 flex-1">
                <span>{language.flag}</span>
                <span>{language.fullName}</span>
              </div>
              <div className="flex items-center justify-end w-6">
                {selectedLanguage === language.code && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" aria-hidden="true"></span>
                )}
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
