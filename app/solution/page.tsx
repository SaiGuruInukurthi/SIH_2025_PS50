"use client"

import type React from "react"
import Navigation from "@/components/navigation"

const timelineNodes = [
  {
    id: 1,
    title: "Traffic Cameras",
    subtitle: "Video Feed",
    position: "top",
  },
  {
    id: 2,
    title: "YOLO Model",
    subtitle: "Real-Time Vehicle\nDetection & Counting",
    position: "bottom",
  },
  {
    id: 3,
    title: "Priority Queue Alg",
    subtitle: "Decides Green Light\nSide",
    position: "top",
  },
  {
    id: 4,
    title: "Smart Signal Controller",
    subtitle: "Dynamic Timing",
    position: "bottom",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    subtitle: "Police Monitoring &\nOverriding",
    position: "top",
  },
]

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Navigation />

      <main className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Our Solution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An intelligent workflow that transforms traditional traffic management through AI-powered automation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative w-full py-20">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black" />

            {/* Timeline Nodes */}
            <div className="relative flex justify-between w-full">
              {timelineNodes.map((node) => (
                <div key={node.id} className="flex flex-col items-center">
                  {/* Vertical Line */}
                  <div
                    className={`absolute bg-black w-0.5 ${
                      node.position === "top" ? "bottom-1/2 h-20" : "top-1/2 h-20"
                    }`}
                  />
                  {/* Dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full" />

                  <div
                    className={`text-center ${
                      node.position === "top" ? "mb-24" : "mt-24"
                    }`}
                  >
                    <h3 className="font-bold text-lg">{`${node.id}.${node.title}`}</h3>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{node.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
