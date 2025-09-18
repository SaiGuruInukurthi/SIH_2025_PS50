"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/simulation", label: "Simulation" },
    { href: "/solution", label: "Solution" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <>
      {/* Logo - Fixed position in top left - Always visible */}
      <div className="fixed top-4 left-6 z-50">
        <Link href="/" className="group">
          <div className="relative w-36 h-36 group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/machine-maniac-logo.png"
              alt="Machine Maniacs Logo"
              width={144}
              height={144}
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Centered Navigation Pill - Acrylic Transparency */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  pathname === item.href
                    ? "text-white bg-[#FC7A1E]/80 backdrop-blur-sm shadow-md border border-white/20" 
                    : "text-[#034D5A]/90 hover:text-[#FC7A1E] hover:bg-white/30 hover:backdrop-blur-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Acrylic Transparency */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button className="p-3 text-[#034D5A]/90 hover:text-[#FC7A1E] transition-all duration-300 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl hover:bg-white/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Navigation
