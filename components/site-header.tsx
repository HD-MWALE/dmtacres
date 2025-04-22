"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter, usePathname } from "next/navigation"
import { useLoading } from "@/hooks/use-loading"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { setLoading } = useLoading()

  const closeMenu = () => setOpen(false)

  const handleNavigation = (href: string) => {
    setLoading(true)
    setOpen(false)
    router.push(href)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [open])

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products & Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2"
        >
          {/* <div className="relative h-10 w-10 overflow-hidden rounded-full"> */}
          <div className="relative h-12 w-24 overflow-hidden">
            <Image src="/logo/dmt_acres_logo_white_background.png" alt="DMT Acres Logo" fill className="object-cover" />
          </div>
          {/* <span className="text-xl font-bold text-green-800">DMT Acres</span> */}
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className={`text-sm font-medium hover:text-green-700 ${
                pathname === path ? "text-green-800 font-semibold" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => handleNavigation("/contact")}
            className="hidden md:flex bg-green-700 hover:bg-green-800"
          >
            Get In Touch
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className={`text-lg font-medium text-left hover:text-green-700 ${
                      pathname === path ? "text-green-800 font-semibold" : ""
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <Button
                  onClick={() => handleNavigation("/contact")}
                  className="mt-4 bg-green-700 hover:bg-green-800"
                >
                  Get In Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
