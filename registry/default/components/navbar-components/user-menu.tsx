import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UserMenu() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <User size={16} />
      <span className="sr-only">User menu</span>
    </Button>
  )
}
