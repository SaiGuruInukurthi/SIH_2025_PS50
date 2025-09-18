"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, AlertTriangle, Users, Settings } from "lucide-react"
import Navigation from "@/components/navigation"

interface CardData {
  id: string
  title: string
  icon: React.ReactNode
  summary: string
  details: string[]
}

const cardData: CardData[] = [
  {
    id: "problem",
    title: "Problem Statement",
    icon: <AlertTriangle className="w-8 h-8" />,
    summary: "Current traffic systems are inefficient, causing congestion and delays",
    details: [
      "Fixed-time traffic signals don't adapt to real-time traffic conditions",
      "Peak hour congestion leads to increased fuel consumption and emissions",
      "Emergency vehicles face delays due to rigid signal timing",
      "Pedestrian crossing times are not optimized for actual foot traffic",
      "Lack of coordination between adjacent intersections creates traffic waves",
    ],
  },
  {
    id: "stakeholders",
    title: "Stakeholders",
    icon: <Users className="w-8 h-8" />,
    summary: "Multiple parties benefit from intelligent traffic management solutions",
    details: [
      "City Traffic Departments - Improved traffic flow and reduced maintenance costs",
      "Emergency Services - Faster response times with priority signal control",
      "Public Transportation - Reduced delays and improved schedule reliability",
      "Local Businesses - Increased accessibility and reduced delivery times",
      "Citizens & Commuters - Shorter travel times and reduced stress",
      "Environmental Agencies - Lower emissions through optimized traffic flow",
    ],
  },
  {
    id: "current",
    title: "Current System",
    icon: <Settings className="w-8 h-8" />,
    summary: "Traditional traffic systems rely on pre-programmed timing patterns",
    details: [
      "Fixed-time controllers with predetermined signal phases",
      "Manual traffic surveys conducted periodically for timing adjustments",
      "Limited sensor integration (mostly inductive loop detectors)",
      "No real-time adaptation to changing traffic patterns",
      "Centralized control systems with minimal automation",
      "Reactive maintenance approach rather than predictive analytics",
    ],
  },
]

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="min-h-screen bg-[#FFFFE3]">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent">
              System Overview
            </h1>
            <p className="text-xl text-[#034D5A]/70 max-w-3xl mx-auto leading-relaxed">
              Understanding the challenges, stakeholders, and current state of traffic management systems
            </p>
          </div>

          {/* Expandable Cards Grid */}
          <div className="grid gap-8 md:gap-12">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={`group transition-all duration-500 ${
                  expandedCard === card.id ? "scale-[1.02]" : "hover:scale-[1.01]"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-[#FCFCFC] rounded-2xl shadow-lg border border-[#034D5A]/10 overflow-hidden transition-all duration-500 ${
                    expandedCard === card.id
                      ? "shadow-2xl border-[#FC7A1E]/30"
                      : "hover:shadow-xl hover:border-[#FC7A1E]/20"
                  }`}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="w-full p-8 text-left transition-all duration-300 hover:bg-[#FC7A1E]/5 focus:outline-none focus:bg-[#FC7A1E]/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div
                          className={`p-4 rounded-xl transition-all duration-300 ${
                            expandedCard === card.id
                              ? "bg-[#FC7A1E] text-[#FCFCFC] scale-110"
                              : "bg-[#FC7A1E]/10 text-[#FC7A1E] group-hover:bg-[#FC7A1E]/20"
                          }`}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#034D5A] mb-2">{card.title}</h2>
                          <p className="text-[#034D5A]/70 text-lg leading-relaxed">{card.summary}</p>
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-300 ${
                          expandedCard === card.id ? "rotate-180" : "group-hover:scale-110"
                        }`}
                      >
                        {expandedCard === card.id ? (
                          <ChevronUp className="w-8 h-8 text-[#FC7A1E]" />
                        ) : (
                          <ChevronDown className="w-8 h-8 text-[#034D5A]/60" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedCard === card.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <div className="border-t border-[#034D5A]/10 pt-6">
                        <ul className="space-y-4">
                          {card.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className={`flex items-start space-x-4 transition-all duration-300 ${
                                expandedCard === card.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                              }`}
                              style={{
                                transitionDelay: expandedCard === card.id ? `${detailIndex * 100}ms` : "0ms",
                              }}
                            >
                              <div className="w-2 h-2 bg-[#33673B] rounded-full mt-3 flex-shrink-0"></div>
                              <p className="text-[#034D5A]/80 leading-relaxed">{detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#FC7A1E]/10 via-[#33673B]/10 to-[#034D5A]/10 rounded-2xl p-8 border border-[#FC7A1E]/20">
              <h3 className="text-2xl font-bold text-[#034D5A] mb-4">Ready to See Our Solution in Action?</h3>
              <p className="text-[#034D5A]/70 mb-6 max-w-2xl mx-auto">
                Explore our interactive simulation and discover how AI-powered traffic management transforms urban
                mobility
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-[#FC7A1E] text-[#FCFCFC] rounded-lg font-semibold hover:bg-[#FC7A1E]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  View Simulation
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-[#33673B] text-[#33673B] rounded-lg font-semibold hover:bg-[#33673B] hover:text-[#FCFCFC] transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
