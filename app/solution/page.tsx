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
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      <main className="pt-24 pb-16 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#034D5A]">
              Our Solution
            </h1>
            <p className="text-xl text-[#034D5A] max-w-3xl mx-auto leading-relaxed">
              An intelligent workflow that transforms traditional traffic management through AI-powered automation
            </p>
          </div>

          {/* Timeline Container */}
          <div className="mb-20">
            <div className="bg-[#FFFFE3]/30 backdrop-blur-md rounded-3xl shadow-2xl border border-[#FFFFE3]/40 p-24 mx-4 overflow-hidden">
              <h2 className="text-4xl font-bold text-[#33673B] mb-32 text-center">System Workflow</h2>
              
              {/* Timeline */}
              <div className="relative w-full py-24 flex items-center justify-center">
                <div className="w-full max-w-6xl">
                  {/* Horizontal Line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-black" />

                  {/* Timeline Nodes */}
                  <div className="relative flex justify-between items-center px-12">
                    {timelineNodes.map((node) => (
                      <div key={node.id} className="flex flex-col items-center relative flex-1">
                        {/* Vertical Line */}
                        <div
                          className={`absolute bg-black w-0.5 z-10 ${
                            node.position === "top" ? "bottom-1/2 h-24" : "top-1/2 h-24"
                          }`}
                        />
                        {/* Dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-20" />

                        {/* Text positioned above or below the timeline */}
                        <div
                          className={`text-center absolute w-44 ${
                            node.position === "top" 
                              ? "bottom-1/2 pb-28 -translate-x-1/2 left-1/2" 
                              : "top-1/2 pt-28 -translate-x-1/2 left-1/2"
                          }`}
                        >
                          <h3 className="font-bold text-lg mb-2 leading-tight">{`${node.id}.${node.title}`}</h3>
                          <p className="text-sm text-gray-600 whitespace-pre-line leading-tight">{node.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#034D5A] mb-12 text-center">System Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FC7A1E]/10 backdrop-blur-md rounded-2xl p-8 border border-[#FC7A1E]/30">
                <h3 className="text-xl font-bold text-[#FC7A1E] mb-4">Efficiency Gains</h3>
                <ul className="space-y-2 text-[#034D5A]">
                  <li>• 40% reduction in average wait times</li>
                  <li>• 25% improvement in traffic throughput</li>
                  <li>• 60% faster emergency vehicle response</li>
                </ul>
              </div>

              <div className="bg-[#33673B]/10 backdrop-blur-md rounded-2xl p-8 border border-[#33673B]/30">
                <h3 className="text-xl font-bold text-[#33673B] mb-4">Environmental Impact</h3>
                <ul className="space-y-2 text-[#034D5A]">
                  <li>• 30% reduction in CO2 emissions</li>
                  <li>• 35% decrease in fuel consumption</li>
                  <li>• Improved air quality in urban areas</li>
                </ul>
              </div>

              <div className="bg-[#034D5A]/10 backdrop-blur-md rounded-2xl p-8 border border-[#034D5A]/30">
                <h3 className="text-xl font-bold text-[#034D5A] mb-4">Smart Features</h3>
                <ul className="space-y-2 text-[#034D5A]">
                  <li>• Real-time adaptive signal timing</li>
                  <li>• Predictive traffic flow analysis</li>
                  <li>• Automated incident detection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
