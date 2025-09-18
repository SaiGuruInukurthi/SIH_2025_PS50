"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navigation from "@/components/navigation"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [sectionVisible, setSectionVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setTimeout(() => setTitleVisible(true), 300)
    setTimeout(() => setSectionVisible(true), 1000)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32">
        <div 
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 montserrat-font leading-tight">
            <span className="text-[#034D5A] drop-shadow-lg">Smart Traffic</span>
            <br />
            <span 
              className={`text-[#FC7A1E] drop-shadow-lg transition-all duration-1000 delay-300 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Management System
            </span>
          </h1>
          <div className="w-24 h-1 bg-[#FC7A1E] mx-auto mb-8 rounded-full shadow-lg" />
          <p 
            className={`text-xl md:text-2xl text-[#034D5A] mb-12 max-w-4xl leading-relaxed text-center mx-auto transition-all duration-1000 delay-500 ${
              titleVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            AI-powered adaptive traffic signals that optimize flow,<br />
            reduce congestion, and create smarter cities
          </p>
          
          <div 
            className={`transition-all duration-1000 delay-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/simulation"
                className="inline-flex items-center gap-3 bg-[#FC7A1E] hover:bg-[#e66a0a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <span>🚦</span>
                Explore System
                <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/analytics"
                className="inline-flex items-center gap-3 bg-[#034D5A] hover:bg-[#023a47] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <span>📊</span>
                View Analytics
                <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div 
            className={`mt-16 flex justify-center transition-all duration-1000 delay-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="backdrop-blur-md bg-white/10 p-4 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer animate-bounce">
              <ChevronDown className="w-6 h-6 text-[#034D5A]" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className={`relative z-20 px-4 py-16 transition-all duration-1000 ${sectionVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto">
          {/* Problem Statement Details */}
          <div className="bg-[#FFFFE3]/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-12 border border-[#FFFFE3]/40">
            <h2 className="text-4xl font-bold text-[#034D5A] mb-8 text-center montserrat-font">
              Problem Statement Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[#FC7A1E]/10 p-6 rounded-2xl border-l-4 border-[#FC7A1E]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Problem Statement ID</h3>
                  <p className="text-2xl font-mono text-[#FC7A1E] font-bold">SIH25050</p>
                </div>
                
                <div className="bg-[#034D5A]/10 p-6 rounded-2xl border-l-4 border-[#034D5A]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Organization</h3>
                  <p className="text-lg text-gray-700">Government of Odisha</p>
                  <p className="text-sm text-gray-600">Electronics & IT Department</p>
                </div>

                <div className="bg-[#FC7A1E]/10 p-6 rounded-2xl border-l-4 border-[#FC7A1E]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Category & Theme</h3>
                  <p className="text-lg text-gray-700">Software</p>
                  <p className="text-sm text-gray-600">Transportation & Logistics</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#034D5A]/10 p-6 rounded-2xl border-l-4 border-[#034D5A]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Design an AI-based traffic management system to optimize signal timings and reduce congestion in urban areas. 
                    The system should analyze real-time traffic data from cameras and IoT sensors to predict and mitigate bottlenecks.
                  </p>
                </div>

                <div className="bg-[#FC7A1E]/10 p-6 rounded-2xl border-l-4 border-[#FC7A1E]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Expected Outcome</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A software prototype reducing average commute time by 10% in a simulated urban environment, 
                    with a dashboard for traffic authorities to monitor and control signals.
                  </p>
                </div>

                <div className="bg-[#034D5A]/10 p-6 rounded-2xl border-l-4 border-[#034D5A]">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-3">Technical Feasibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Uses computer vision (e.g., OpenCV) and reinforcement learning for traffic prediction, 
                    integrated with existing traffic camera networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stakeholders Section */}
          <div className="bg-[#FFFFE3]/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-12 border border-[#FFFFE3]/40">
            <h2 className="text-4xl font-bold text-[#034D5A] mb-8 text-center montserrat-font">
              Key Stakeholders
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#034D5A]/10 to-[#FC7A1E]/10 p-6 rounded-2xl text-center border border-white/30">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-[#034D5A] mb-3">Government Authorities</h3>
                <p className="text-gray-700">Traffic police, municipal corporations, and urban planning departments</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#FC7A1E]/10 to-[#034D5A]/10 p-6 rounded-2xl text-center border border-white/30">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-[#034D5A] mb-3">Citizens & Commuters</h3>
                <p className="text-gray-700">Daily commuters, public transport users, and emergency services</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#034D5A]/10 to-[#FC7A1E]/10 p-6 rounded-2xl text-center border border-white/30">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-[#034D5A] mb-3">Technology Partners</h3>
                <p className="text-gray-700">IoT sensor manufacturers, AI companies, and system integrators</p>
              </div>
            </div>
          </div>

          {/* Current System Analysis */}
          <div className="bg-[#FFFFE3]/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-12 border border-[#FFFFE3]/40">
            <h2 className="text-4xl font-bold text-[#034D5A] mb-8 text-center montserrat-font">
              Current System vs Our Solution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <span className="mr-3">❌</span>
                  Current Challenges
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Fixed-time traffic signals causing unnecessary delays
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    No real-time adaptation to traffic conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Lack of coordination between intersections
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Manual monitoring and control systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Increased fuel consumption and emissions
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                  <span className="mr-3">✅</span>
                  Our Smart Solution
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    AI-powered adaptive signal timing optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Real-time traffic flow analysis and prediction
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Coordinated intersection management system
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Automated monitoring with smart dashboard
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Reduced emissions and improved city sustainability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
