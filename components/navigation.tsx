"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
    { href: "/home", label: "Overview" },
    { href: "/simulation", label: "Simulation" },
    { href: "/solution", label: "Solution" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <>
      {/* Logo - Fixed position in top left */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FC7A1E] to-[#33673B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-6 h-6 bg-[#FCFCFC] rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-[#034D5A] group-hover:text-[#FC7A1E] transition-colors duration-300">
            STMS
          </span>
        </Link>
      </div>

      {/* Centered Navigation Pill */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#FFFE3]/20 backdrop-blur-lg border border-[#FFFE3]/30 rounded-full px-6 py-3 shadow-2xl">
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  pathname === item.href 
                    ? "text-white bg-gradient-to-r from-[#FC7A1E] to-[#33673B] shadow-lg" 
                    : "text-[#034D5A]/80 hover:text-[#FC7A1E] hover:bg-[#FFFE3]/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Fixed position in top right */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button className="p-3 text-[#034D5A] hover:text-[#FC7A1E] transition-colors duration-300 bg-[#FFFE3]/20 backdrop-blur-lg border border-[#FFFE3]/30 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Navigation
