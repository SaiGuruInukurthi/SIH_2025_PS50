"use client"

import React, { useState, useEffect } from "react";
import Navigation from "@/components/navigation";

// 1. UPDATED DATA: Detailed info is now included for the modals.
const timelineNodes = [
  {
    id: 1,
    title: "Traffic Cameras",
    subtitle: "Video Feed",
    position: "top",
    color: "#FC7A1E",
    details: {
      title: "Real-Time Visual Sensor Grid",
      description: "Our system leverages existing CCTV infrastructure as its eyes on the street.",
      points: [
        { title: "High-Fidelity Feed", text: "Provides a continuous video stream to the AI model." },
        { title: "Rich Data Source", text: "Captures complex traffic scenarios that traditional sensors miss." },
        { title: "Cost-Effective", text: "Reduces implementation cost by using cameras already in place." },
      ],
    },
  },
  {
    id: 2,
    title: "YOLO Model",
    subtitle: "Real-Time Vehicle Detection & Counting",
    position: "bottom",
    color: "#33673B",
    details: {
      title: "AI-Powered Vision & Detection",
      description: "This is the brain that understands the video feed in real-time.",
      points: [
        { title: "Vehicle Classification", text: "Detects and classifies cars, buses, trucks, and emergency vehicles." },
        { title: "Real-Time Counting", text: "Accurately counts vehicles in each lane to measure congestion." },
        { title: "Anomaly Alerts", text: "Automatically detects accidents, stalled cars, or other incidents." },
        { title: "Automated Ticketing", text: "Uses OCR to read license plates for e-challan generation." },
      ],
    },
  },
  {
    id: 3,
    title: "Priority Queue Alg",
    subtitle: "Decides Green Light Side",
    position: "top",
    color: "#034D5A",
    details: {
      title: "Intelligent Decision Engine",
      description: "This algorithm analyzes the data and decides who goes next.",
      points: [
        { title: "Congestion Ranking", text: "Ranks lanes by traffic density to determine priority." },
        { title: "Dynamic Weighting", text: "Gives higher priority to public transport and emergency vehicles." },
        { title: "Fairness Logic", text: "Considers vehicle wait times to prevent lanes from getting stuck on red." },
      ],
    },
  },
  {
    id: 4,
    title: "Smart Signal Controller",
    subtitle: "Dynamic Timing",
    position: "bottom",
    color: "#FC7A1E",
    details: {
      title: "Dynamic & Adaptive Control",
      description: "This unit executes the algorithm's decisions by controlling the lights.",
      points: [
        { title: "Real-Time Adjustment", text: "Changes signal timings dynamically based on traffic flow, not fixed timers." },
        { title: "Green Corridors", text: "Communicates with other signals to create synchronized 'green waves'." },
        { title: "Hardware Integration", text: "Compatible with existing traffic light hardware for easy upgrades." },
      ],
    },
  },
  {
    id: 5,
    title: "Admin Dashboard",
    subtitle: "Police Monitoring & Overriding",
    position: "top",
    color: "#33673B",
    details: {
      title: "Centralized Command & Analytics",
      description: "The single source of truth for traffic monitoring and management.",
      points: [
        { title: "Live Monitoring", text: "Provides a unified view of all camera feeds for regional traffic oversight." },
        { title: "Manual Override", text: "Allows authorities to take control during special events or emergencies." },
        { title: "Data Analytics", text: "Visualizes traffic data with heatmaps and historical trends for planning." },
      ],
    },
  },
];

// 2. NEW COMPONENT: The Modal for displaying detailed information.
const InfoModal = ({ node, onClose }: { node: any; onClose: () => void }) => {
  // Effect to prevent body scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Header with color indicator */}
        <div
          className="p-6 rounded-t-2xl text-white"
          style={{ backgroundColor: node.color }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">{node.details.title}</h2>
              <p className="text-white/80 mt-1">{node.details.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <ul className="space-y-4">
            {node.details.points.map((point: any, index: number) => (
              <li key={index} className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                  style={{ backgroundColor: `${node.color}20` }} // Lighter version of the node color
                >
                  <span className="font-bold text-sm" style={{ color: node.color }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{point.title}</h4>
                  <p className="text-gray-600">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function SolutionPage() {
  // 3. STATE MANAGEMENT: To track the currently open modal.
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  const handleNodeClick = (id: number) => {
    setActiveModalId(id);
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  const activeNode = timelineNodes.find(node => node.id === activeModalId);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FFFFE3 0%, #FFFBDC 50%, #FFFFE3 100%)' }}>
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-[#FFFFE3]/30 backdrop-blur-md rounded-3xl p-8 mb-8 border border-[#FFFFE3]/40 shadow-2xl text-center">
            <h1 className="text-4xl font-bold text-[#034D5A] montserrat-font mb-3">Our Solution</h1>
            <p className="text-[#034D5A] text-lg">An intelligent workflow that transforms traditional traffic management through AI-powered automation</p>
          </div>

          {/* Timeline Container */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-yellow-50/80 to-amber-50/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-yellow-200/50 p-12">
              <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                System Workflow
              </h2>
              
              <div className="relative overflow-x-auto">
                <div className="min-w-[900px] relative h-96 mx-auto">
                  <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform -translate-y-1/2"></div>
                  
                  <div className="absolute inset-0 flex justify-between items-center px-12">
                    {timelineNodes.map((node) => (
                      <div key={node.id} className="relative flex-1 flex justify-center">
                        <div className="relative">
                          <div className={`absolute ${node.position === "top" ? "bottom-16 -translate-x-1/2 left-1/2" : "top-16 -translate-x-1/2 left-1/2"} w-48`}>
                            {/* 4. ONCLICK HANDLER & CURSOR: Added here to trigger the modal */}
                            <div
                              className="bg-white rounded-xl shadow-lg p-4 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                              style={{ borderColor: node.color }}
                              onClick={() => handleNodeClick(node.id)}
                            >
                              <div className="flex items-start gap-2 mb-2">
                                <span className="text-2xl font-bold" style={{ color: node.color }}>
                                  {node.id}.
                                </span>
                                <h3 className="font-bold text-gray-800 leading-tight">
                                  {node.title}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-600 leading-snug">
                                {node.subtitle}
                              </p>
                            </div>
                            
                            <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-8 ${node.position === "top" ? "top-full" : "bottom-full"}`} style={{ backgroundColor: node.color }}></div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-150" style={{ backgroundColor: node.color }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 text-sm text-gray-500 lg:hidden">
                ← Scroll horizontally to view all steps →
              </div>
            </div>
          </div>
          
          {/* System Benefits Section (unchanged) */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
              System Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-amber-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-amber-700">Efficiency Gains</h3>
                  </div>
                  <ul className="space-y-3 text-amber-800">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>40% reduction in average wait times</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>25% improvement in traffic throughput</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>60% faster emergency vehicle response</span></li>
                  </ul>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-amber-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-amber-700">Environmental Impact</h3>
                  </div>
                  <ul className="space-y-3 text-amber-800">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>30% reduction in CO2 emissions</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>35% decrease in fuel consumption</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>Improved air quality in urban areas</span></li>
                  </ul>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-amber-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-amber-700">Smart Features</h3>
                  </div>
                  <ul className="space-y-3 text-amber-800">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>Real-time adaptive signal timing</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>Predictive traffic flow analysis</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✓</span><span>Automated incident detection</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. CONDITIONAL RENDERING: The modal is rendered here when activeNode is not null. */}
      {activeNode && <InfoModal node={activeNode} onClose={handleCloseModal} />}
    </div>
  );
}