import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  isScrolled?: boolean
}

export default function SearchBar({ isScrolled = false }: SearchBarProps) {
  return (
    <div className="relative flex items-center group">
      <Search 
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
          isScrolled ? 'text-muted-foreground group-focus-within:text-primary' : 'text-white/70 group-focus-within:text-white'
        }`}
        size={14} 
      />
      <Input
        type="search"
        placeholder="Search destinations..."
        className={`pl-9 pr-4 h-9 w-64 text-sm transition-all duration-200 rounded-full ${
          isScrolled 
            ? 'border-border/30 bg-background/70 focus:bg-background focus:border-primary/30 text-foreground placeholder:text-muted-foreground hover:bg-background/90' 
            : 'border-white/20 bg-white/15 focus:bg-white/25 text-white placeholder:text-white/60 hover:bg-white/20 backdrop-blur-sm'
        }`}
      />
    </div>
  )
}
