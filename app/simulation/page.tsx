"use client"

import { useState } from "react"
import { Play, Pause, Settings, Camera, RotateCcw } from "lucide-react"
import Navigation from "@/components/navigation"

export default function SimulationPage() {
  const [isEnvRunning, setIsEnvRunning] = useState(false)
  const [intersectionType, setIntersectionType] = useState<"+" | "T" | "X">("+")
  const [isManualMode, setIsManualMode] = useState(false)

  const cameraFeeds = [
    { id: "north", name: "North Camera", position: "North Approach" },
    { id: "south", name: "South Camera", position: "South Approach" },
    { id: "east", name: "East Camera", position: "East Approach" },
    { id: "west", name: "West Camera", position: "West Approach" }
  ]

  const getIntersectionTypeIcon = (type: string) => {
    switch(type) {
      case "+": return "+"
      case "T": return "T"
      case "X": return ""
      default: return "+"
    }
  }

  const getNextIntersectionType = (current: "+" | "T" | "X") => {
    switch(current) {
      case "+": return "T"
      case "T": return "X"
      case "X": return "+"
      default: return "T"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      <div className="relative z-20 pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
            <h1 className="text-3xl font-bold text-[#034D5A] montserrat-font">Traffic Simulation Dashboard</h1>
            <p className="text-gray-600 mt-2">Live traffic monitoring and AI-powered intersection management</p>
          </div>

          {/* Camera Feeds Grid (2x2) */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {cameraFeeds.map((camera) => (
              <div key={camera.id} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#034D5A] flex items-center gap-2">
                    <Camera size={20} />
                    {camera.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">LIVE</span>
                  </div>
                </div>

                {/* Camera Feed Placeholder */}
                <div className="bg-gray-900 rounded-xl h-48 relative overflow-hidden border-2 border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Camera size={48} className="mx-auto mb-3 opacity-50" />
                      <p className="text-sm font-medium">{camera.position}</p>
                      <p className="text-xs mt-1">Camera Feed Placeholder</p>
                    </div>
                  </div>
                  
                  {/* Camera UI Overlay */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
                    CAM-{camera.id.toUpperCase()}
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                     REC
                  </div>
                  
                  {/* Scanning line effect */}
                  <div 
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
                    style={{ 
                      animation: "scan 3s linear infinite",
                      top: "50%"
                    }}
                  ></div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-sm text-gray-600">{camera.position}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Environment Simulation Window */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#034D5A] flex items-center gap-2">
                <Settings size={24} />
                Traffic Environment Simulation
              </h3>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isEnvRunning ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
                <span className={`text-sm font-medium ${isEnvRunning ? "text-green-600" : "text-gray-600"}`}>
                  {isEnvRunning ? "RUNNING" : "STOPPED"}
                </span>
              </div>
            </div>

            {/* Environment Display Area */}
            <div className="bg-gray-900 rounded-xl h-96 relative overflow-hidden border-2 border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4 text-[#FC7A1E]">
                    {getIntersectionTypeIcon(intersectionType)}
                  </div>
                  <p className="text-lg font-medium mb-2">Environment Simulation</p>
                  <p className="text-sm">Current: {intersectionType} Intersection</p>
                  <p className="text-xs mt-3 opacity-75">Teammate working on environment integration...</p>
                </div>
              </div>

              {/* Status Overlay */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                <div className="text-xs font-mono">
                  <div>Type: {intersectionType} Intersection</div>
                  <div>Mode: {isManualMode ? "Manual Control" : "AI Automated"}</div>
                  <div>Status: {isEnvRunning ? "Active" : "Paused"}</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded">
                <div className="text-xs font-mono">
                  <div>FPS: {isEnvRunning ? "60" : "0"}</div>
                  <div>Vehicles: {isEnvRunning ? "12" : "0"}</div>
                  <div>Efficiency: {isEnvRunning ? "94%" : "N/A"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-3 gap-6">
            {/* Start/Stop Environment */}
            <button
              onClick={() => setIsEnvRunning(!isEnvRunning)}
              className={`flex items-center justify-center gap-3 py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                isEnvRunning 
                  ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25"
                  : "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25"
              }`}
            >
              {isEnvRunning ? <Pause size={24} /> : <Play size={24} />}
              <div className="text-center">
                <div>{isEnvRunning ? "Stop Environment" : "Start Environment"}</div>
                <div className="text-sm opacity-90 font-normal">Simulation Control</div>
              </div>
            </button>

            {/* Switch Intersection Type */}
            <button
              onClick={() => setIntersectionType(getNextIntersectionType(intersectionType))}
              className="flex items-center justify-center gap-3 bg-[#FC7A1E] hover:bg-[#FC7A1E]/90 text-white py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FC7A1E]/25"
            >
              <div className="text-2xl">{getIntersectionTypeIcon(intersectionType)}</div>
              <div className="text-center">
                <div>Switch Intersection</div>
                <div className="text-sm opacity-90 font-normal">{intersectionType}  {getNextIntersectionType(intersectionType)}</div>
              </div>
            </button>

            {/* Manual Override */}
            <button
              onClick={() => setIsManualMode(!isManualMode)}
              className={`flex items-center justify-center gap-3 py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                isManualMode
                  ? "bg-[#034D5A] hover:bg-[#034D5A]/90 text-white shadow-lg shadow-[#034D5A]/25"
                  : "bg-gray-600 hover:bg-gray-700 text-white shadow-lg shadow-gray-600/25"
              }`}
            >
              <RotateCcw size={24} />
              <div className="text-center">
                <div>{isManualMode ? "AI Control" : "Manual Override"}</div>
                <div className="text-sm opacity-90 font-normal">{isManualMode ? "Switch to AI" : "Take Manual Control"}</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { 
            transform: translateY(-100px); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(300px); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  )
}
