"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Settings, Shield, Camera, Activity } from "lucide-react"
import Navigation from "@/components/navigation"

interface SimulationState {
  isRunning: boolean
  mode: "static" | "dynamic"
  manualOverride: boolean
  trafficFlow: number
  signalPhase: "north-south" | "east-west"
}

export default function SimulationPage() {
  const [simulation, setSimulation] = useState<SimulationState>({
    isRunning: false,
    mode: "static",
    manualOverride: false,
    trafficFlow: 45,
    signalPhase: "north-south",
  })

  const [animationFrame, setAnimationFrame] = useState(0)

  // Simulate traffic flow animation
  useEffect(() => {
    if (simulation.isRunning) {
      const interval = setInterval(() => {
        setAnimationFrame((prev) => (prev + 1) % 100)
        setSimulation((prev) => ({
          ...prev,
          trafficFlow: Math.max(20, Math.min(80, prev.trafficFlow + (Math.random() - 0.5) * 10)),
          signalPhase:
            Math.random() > 0.95
              ? prev.signalPhase === "north-south"
                ? "east-west"
                : "north-south"
              : prev.signalPhase,
        }))
      }, 200)
      return () => clearInterval(interval)
    }
  }, [simulation.isRunning])

  const toggleSimulation = () => {
    setSimulation((prev) => ({ ...prev, isRunning: !prev.isRunning }))
  }

  const toggleMode = () => {
    setSimulation((prev) => ({ ...prev, mode: prev.mode === "static" ? "dynamic" : "static" }))
  }

  const toggleManualOverride = () => {
    setSimulation((prev) => ({ ...prev, manualOverride: !prev.manualOverride }))
  }

  const CameraView = ({ label, isActive }: { label: string; isActive: boolean }) => (
    <div className="bg-[#034D5A]/90 rounded-xl overflow-hidden border-2 border-[#FC7A1E]/20 relative group hover:border-[#FC7A1E]/40 transition-all duration-300">
      <div className="aspect-video relative">
        {/* Fake video feed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#034D5A] to-[#033D4A]">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className={`border border-[#FC7A1E]/30 transition-all duration-500 ${
                    simulation.isRunning && (i + animationFrame) % 8 === 0 ? "bg-[#FC7A1E]/20" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Simulated traffic elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Traffic light simulation */}
              <div className="w-4 h-12 bg-[#FCFCFC]/20 rounded-full flex flex-col items-center justify-around p-1">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    simulation.signalPhase === "north-south" ? "bg-red-500 shadow-lg shadow-red-500/50" : "bg-red-900"
                  }`}
                />
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    simulation.signalPhase === "east-west"
                      ? "bg-green-500 shadow-lg shadow-green-500/50"
                      : "bg-green-900"
                  }`}
                />
              </div>

              {/* Moving vehicles simulation */}
              {simulation.isRunning && (
                <div className="absolute -top-8 -left-8 w-16 h-16">
                  <div
                    className="w-2 h-4 bg-[#FCFCFC] rounded-sm absolute transition-all duration-200"
                    style={{
                      transform: `translate(${(animationFrame * 2) % 60}px, ${Math.sin(animationFrame * 0.1) * 10}px)`,
                    }}
                  />
                  <div
                    className="w-2 h-4 bg-[#FC7A1E] rounded-sm absolute transition-all duration-200"
                    style={{
                      transform: `translate(${((animationFrame + 20) * 2) % 60}px, ${Math.sin((animationFrame + 20) * 0.1) * 10 + 20}px)`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Camera status indicator */}
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
          <span className="text-[#FCFCFC] text-xs font-medium">{isActive ? "LIVE" : "OFFLINE"}</span>
        </div>

        {/* Camera label */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-[#FCFCFC]/10 backdrop-blur-sm rounded-lg px-3 py-2">
            <p className="text-[#FCFCFC] text-sm font-medium">{label}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FFFFE3]">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent">
              Traffic Simulation
            </h1>
            <p className="text-xl text-[#034D5A]/70 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring and intelligent traffic signal control system
            </p>
          </div>

          {/* Camera Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#034D5A] flex items-center space-x-3">
                <Camera className="w-8 h-8 text-[#FC7A1E]" />
                <span>Camera Views at Intersection</span>
              </h2>
              <div className="flex items-center space-x-2 text-sm text-[#034D5A]/70">
                <Activity className="w-4 h-4" />
                <span>Traffic Flow: {Math.round(simulation.trafficFlow)}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <CameraView label="North Approach" isActive={simulation.isRunning} />
              <CameraView label="East Approach" isActive={simulation.isRunning} />
              <CameraView label="South Approach" isActive={simulation.isRunning} />
              <CameraView label="West Approach" isActive={simulation.isRunning} />
            </div>
          </div>

          {/* Simulation Area */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#034D5A] mb-6 flex items-center space-x-3">
              <Settings className="w-8 h-8 text-[#33673B]" />
              <span>Simulation Dashboard</span>
            </h2>

            <div className="bg-[#FCFCFC] rounded-2xl shadow-lg border border-[#034D5A]/10 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Status Panel */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#FC7A1E]/10 to-[#33673B]/10 rounded-xl p-6 border border-[#FC7A1E]/20">
                    <h3 className="text-lg font-semibold text-[#034D5A] mb-4">System Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[#034D5A]/70">Simulation State:</span>
                        <span className={`font-medium ${simulation.isRunning ? "text-green-600" : "text-red-600"}`}>
                          {simulation.isRunning ? "Running" : "Stopped"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#034D5A]/70">Control Mode:</span>
                        <span className="font-medium text-[#FC7A1E] capitalize">{simulation.mode}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#034D5A]/70">Manual Override:</span>
                        <span
                          className={`font-medium ${simulation.manualOverride ? "text-orange-600" : "text-[#33673B]"}`}
                        >
                          {simulation.manualOverride ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#034D5A]/70">Current Phase:</span>
                        <span className="font-medium text-[#034D5A] capitalize">
                          {simulation.signalPhase.replace("-", " → ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Traffic Flow Indicator */}
                  <div className="bg-[#034D5A]/5 rounded-xl p-6 border border-[#034D5A]/10">
                    <h3 className="text-lg font-semibold text-[#034D5A] mb-4">Traffic Flow Analysis</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[#034D5A]/70">Current Flow:</span>
                        <span className="font-bold text-[#FC7A1E]">{Math.round(simulation.trafficFlow)}%</span>
                      </div>
                      <div className="w-full bg-[#034D5A]/10 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#33673B] to-[#FC7A1E] h-3 rounded-full transition-all duration-300"
                          style={{ width: `${simulation.trafficFlow}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intersection Visualization */}
                <div className="bg-[#034D5A]/5 rounded-xl p-6 border border-[#034D5A]/10">
                  <h3 className="text-lg font-semibold text-[#034D5A] mb-4">Intersection Layout</h3>
                  <div className="aspect-square bg-[#034D5A]/10 rounded-lg relative overflow-hidden">
                    {/* Road lines */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-2 bg-[#034D5A]/30"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-2 bg-[#034D5A]/30"></div>
                    </div>

                    {/* Traffic lights */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          simulation.signalPhase === "north-south"
                            ? "bg-green-500 shadow-lg shadow-green-500/50"
                            : "bg-red-500 shadow-lg shadow-red-500/50"
                        }`}
                      />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          simulation.signalPhase === "north-south"
                            ? "bg-green-500 shadow-lg shadow-green-500/50"
                            : "bg-red-500 shadow-lg shadow-red-500/50"
                        }`}
                      />
                    </div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          simulation.signalPhase === "east-west"
                            ? "bg-green-500 shadow-lg shadow-green-500/50"
                            : "bg-red-500 shadow-lg shadow-red-500/50"
                        }`}
                      />
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          simulation.signalPhase === "east-west"
                            ? "bg-green-500 shadow-lg shadow-green-500/50"
                            : "bg-red-500 shadow-lg shadow-red-500/50"
                        }`}
                      />
                    </div>

                    {/* Animated vehicles */}
                    {simulation.isRunning && (
                      <>
                        <div
                          className="absolute w-3 h-6 bg-[#FC7A1E] rounded-sm transition-all duration-200"
                          style={{
                            left: "50%",
                            top: `${20 + ((animationFrame * 2) % 60)}%`,
                            transform: "translateX(-50%)",
                          }}
                        />
                        <div
                          className="absolute w-6 h-3 bg-[#33673B] rounded-sm transition-all duration-200"
                          style={{
                            top: "50%",
                            left: `${20 + (((animationFrame + 30) * 2) % 60)}%`,
                            transform: "translateY(-50%)",
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#034D5A] mb-6 flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-[#034D5A]" />
              <span>Simulation Controls</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleSimulation}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  simulation.isRunning
                    ? "bg-red-500 text-[#FCFCFC] hover:bg-red-600"
                    : "bg-[#33673B] text-[#FCFCFC] hover:bg-[#33673B]/90"
                }`}
              >
                {simulation.isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{simulation.isRunning ? "Stop" : "Start"} Simulation</span>
              </button>

              <button
                onClick={toggleMode}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  simulation.mode === "dynamic"
                    ? "bg-[#FC7A1E] text-[#FCFCFC] hover:bg-[#FC7A1E]/90"
                    : "bg-[#034D5A] text-[#FCFCFC] hover:bg-[#034D5A]/90"
                }`}
              >
                {simulation.mode === "static" ? "Switch to Dynamic" : "Switch to Static"}
              </button>

              <button
                onClick={toggleManualOverride}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  simulation.manualOverride
                    ? "bg-orange-500 text-[#FCFCFC] hover:bg-orange-600"
                    : "bg-[#034D5A]/20 text-[#034D5A] hover:bg-[#034D5A]/30 border-2 border-[#034D5A]/30"
                }`}
              >
                {simulation.manualOverride ? "Disable" : "Enable"} Manual Override
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
