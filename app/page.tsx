"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Navigation from "@/components/navigation"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-[#FFFFE3]">
      <Navigation />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-8 relative">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent leading-tight">
            Smart Traffic
            <br />
            Management System
          </h1>

          <p className="text-xl md:text-2xl text-[#034D5A]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            AI-powered adaptive traffic signals that optimize flow, reduce congestion, and create smarter cities
          </p>
        </div>

        {/* Animated Down Arrow */}
        <button
          onClick={scrollToNext}
          className={`absolute bottom-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} hover:scale-110 group`}
        >
          <div className="flex flex-col items-center">
            <ChevronDown
              size={48}
              className="text-[#FC7A1E] animate-bounce group-hover:text-[#33673B] transition-colors duration-300"
            />
            <span className="text-sm text-[#034D5A]/60 mt-2 group-hover:text-[#034D5A] transition-colors duration-300">
              Explore System
            </span>
          </div>
        </button>
      </main>

      {/* Placeholder for next section */}
      <section className="min-h-screen bg-[#FFFFE3] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#034D5A] mb-4">Welcome to the Future of Traffic Management</h2>
          <p className="text-lg text-[#034D5A]/70">Navigate through our system using the menu above</p>
        </div>
      </section>
    </div>
  )
}
