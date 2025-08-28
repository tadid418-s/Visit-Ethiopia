"use client"

import { useEffect } from "react"

export default function NotFoundBodyClass() {
  useEffect(() => {
    // Add a class to body so other client components (like Navbar) can detect 404 page
    document.body.classList.add("nav-404")
    window.dispatchEvent(new Event("notfound:mounted"))
    return () => {
      document.body.classList.remove("nav-404")
      window.dispatchEvent(new Event("notfound:unmounted"))
    }
  }, [])

  return null
}
