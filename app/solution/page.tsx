"use client"

import type React from "react"

import { useState } from "react"
import { X, Camera, Brain, ListOrdered, Zap, Shield } from "lucide-react"
import Navigation from "@/components/navigation"

interface WorkflowNode {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  description: string
  details: string[]
  position: { x: number; y: number }
}

const workflowNodes: WorkflowNode[] = [
  {
    id: "cameras",
    title: "Traffic Cameras",
    subtitle: "Video Feed",
    icon: <Camera className="w-8 h-8" />,
    description: "High-resolution cameras capture real-time traffic data at intersection approaches",
    details: [
      "4K resolution cameras with night vision capabilities",
      "360-degree coverage of all intersection approaches",
      "Weather-resistant housing with automatic cleaning systems",
      "Real-time video streaming with edge processing",
      "Integration with existing traffic infrastructure",
    ],
    position: { x: 10, y: 50 },
  },
  {
    id: "yolo",
    title: "YOLO Model",
    subtitle: "Real-Time Vehicle Detection & Counting",
    icon: <Brain className="w-8 h-8" />,
    description: "Advanced AI model for accurate vehicle detection, classification, and counting",
    details: [
      "YOLOv8 architecture optimized for traffic scenarios",
      "Real-time processing at 60+ FPS",
      "Vehicle classification (cars, trucks, buses, motorcycles)",
      "Pedestrian and cyclist detection",
      "Queue length estimation and congestion analysis",
    ],
    position: { x: 30, y: 20 },
  },
  {
    id: "algorithm",
    title: "Priority Queue Algorithm",
    subtitle: "Decides Green Light Side",
    icon: <ListOrdered className="w-8 h-8" />,
    description: "Intelligent algorithm that optimizes signal timing based on real-time traffic data",
    details: [
      "Dynamic priority assignment based on traffic density",
      "Emergency vehicle detection and priority routing",
      "Pedestrian crossing optimization",
      "Multi-intersection coordination for traffic waves",
      "Machine learning adaptation to traffic patterns",
    ],
    position: { x: 70, y: 20 },
  },
  {
    id: "controller",
    title: "Smart Signal Controller",
    subtitle: "Dynamic Timing",
    icon: <Zap className="w-8 h-8" />,
    description: "Advanced traffic signal controller with adaptive timing capabilities",
    details: [
      "Millisecond-precision signal timing control",
      "Wireless communication with central management",
      "Backup systems for fail-safe operation",
      "Integration with existing signal infrastructure",
      "Real-time performance monitoring and diagnostics",
    ],
    position: { x: 90, y: 50 },
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    subtitle: "Police Monitoring & Overriding",
    icon: <Shield className="w-8 h-8" />,
    description: "Comprehensive monitoring and control interface for traffic management authorities",
    details: [
      "Real-time system monitoring and alerts",
      "Manual override capabilities for emergency situations",
      "Historical data analysis and reporting",
      "Multi-user access with role-based permissions",
      "Mobile app for field personnel",
    ],
    position: { x: 50, y: 80 },
  },
]

export default function SolutionPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const selectedNodeData = workflowNodes.find((node) => node.id === selectedNode)

  const closeModal = () => {
    setSelectedNode(null)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      <main className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent">
              Our Solution
            </h1>
            <p className="text-xl text-[#034D5A]/70 max-w-3xl mx-auto leading-relaxed">
              An intelligent workflow that transforms traditional traffic management through AI-powered automation
            </p>
          </div>

          {/* Interactive Workflow Diagram */}
          <div className="mb-16">
            <div className="bg-[#FCFCFC] rounded-2xl shadow-lg border border-[#034D5A]/10 p-8 overflow-hidden">
              <h2 className="text-2xl font-bold text-[#034D5A] mb-8 text-center">Interactive Workflow Diagram</h2>

              <div className="relative h-96 md:h-[500px]">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {/* Camera to YOLO */}
                  <line
                    x1="20%"
                    y1="50%"
                    x2="30%"
                    y2="25%"
                    stroke="#FC7A1E"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  {/* YOLO to Algorithm */}
                  <line
                    x1="40%"
                    y1="25%"
                    x2="65%"
                    y2="25%"
                    stroke="#33673B"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  {/* Algorithm to Controller */}
                  <line
                    x1="75%"
                    y1="25%"
                    x2="85%"
                    y2="45%"
                    stroke="#034D5A"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  {/* Controller to Dashboard */}
                  <line
                    x1="85%"
                    y1="55%"
                    x2="60%"
                    y2="75%"
                    stroke="#FC7A1E"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  {/* Dashboard to Camera (feedback loop) */}
                  <line
                    x1="45%"
                    y1="80%"
                    x2="15%"
                    y2="55%"
                    stroke="#33673B"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    opacity="0.6"
                  />
                </svg>

                {/* Workflow Nodes */}
                {workflowNodes.map((node, index) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 focus:outline-none"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      zIndex: 10,
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="bg-gradient-to-br from-[#FCFCFC] to-[#FC7A1E]/5 rounded-2xl shadow-lg border-2 border-[#FC7A1E]/20 p-6 min-w-48 group-hover:border-[#FC7A1E]/40 group-hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-3 bg-gradient-to-br from-[#FC7A1E] to-[#33673B] rounded-xl text-[#FCFCFC] group-hover:scale-110 transition-transform duration-300">
                          {node.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#034D5A] text-sm mb-1">{node.title}</h3>
                          <p className="text-xs text-[#034D5A]/70 leading-tight">{node.subtitle}</p>
                        </div>
                        <div className="w-8 h-1 bg-gradient-to-r from-[#FC7A1E] to-[#33673B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </button>
                ))}

                {/* Step Numbers */}
                {workflowNodes.map((node, index) => (
                  <div
                    key={`number-${node.id}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y - 15}%`,
                      zIndex: 5,
                    }}
                  >
                    <div className="w-8 h-8 bg-[#034D5A] text-[#FCFCFC] rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-[#034D5A]/70 text-sm">
                  Click on any component to learn more about its functionality
                </p>
              </div>
            </div>
          </div>

          {/* System Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FC7A1E]/10 to-[#FC7A1E]/5 rounded-2xl p-8 border border-[#FC7A1E]/20">
              <h3 className="text-xl font-bold text-[#034D5A] mb-4">Efficiency Gains</h3>
              <ul className="space-y-2 text-[#034D5A]/80">
                <li>• 40% reduction in average wait times</li>
                <li>• 25% improvement in traffic throughput</li>
                <li>• 60% faster emergency vehicle response</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#33673B]/10 to-[#33673B]/5 rounded-2xl p-8 border border-[#33673B]/20">
              <h3 className="text-xl font-bold text-[#034D5A] mb-4">Environmental Impact</h3>
              <ul className="space-y-2 text-[#034D5A]/80">
                <li>• 30% reduction in CO2 emissions</li>
                <li>• 35% decrease in fuel consumption</li>
                <li>• Improved air quality in urban areas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#034D5A]/10 to-[#034D5A]/5 rounded-2xl p-8 border border-[#034D5A]/20">
              <h3 className="text-xl font-bold text-[#034D5A] mb-4">Smart Features</h3>
              <ul className="space-y-2 text-[#034D5A]/80">
                <li>• Real-time adaptive signal timing</li>
                <li>• Predictive traffic flow analysis</li>
                <li>• Automated incident detection</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {selectedNode && selectedNodeData && (
        <div className="fixed inset-0 bg-[#034D5A]/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-[#FCFCFC] rounded-2xl shadow-2xl border border-[#FC7A1E]/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-[#FC7A1E] to-[#33673B] rounded-xl text-[#FCFCFC]">
                    {selectedNodeData.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#034D5A]">{selectedNodeData.title}</h2>
                    <p className="text-[#034D5A]/70">{selectedNodeData.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-[#034D5A]/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-[#034D5A]/70" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-[#034D5A]/80 leading-relaxed">{selectedNodeData.description}</p>

                <div>
                  <h3 className="text-lg font-semibold text-[#034D5A] mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {selectedNodeData.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FC7A1E] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#034D5A]/80 leading-relaxed">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-[#034D5A]/10">
                <button
                  onClick={closeModal}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#FC7A1E] to-[#33673B] text-[#FCFCFC] rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
