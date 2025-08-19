import { useState } from "react"
import { Globe } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
      <SelectTrigger className={`w-[80px] h-9 border-none bg-transparent text-sm transition-colors ${
        isScrolled 
          ? 'hover:bg-accent text-foreground' 
          : 'hover:bg-white/10 text-white'
      }`}>
        <div className="flex items-center gap-1.5">
          <Globe size={14} className={isScrolled ? "text-muted-foreground" : "text-white/80"} />
          <span className="font-medium">{currentLanguage?.name}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.fullName}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
