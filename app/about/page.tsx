"use client"

import { useState } from "react"
import { Users, BookOpen, Award } from "lucide-react"
import Navigation from "@/components/navigation"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Harsha",
    role: "Developer 1: YOLO Model & AI Integration",
    description: "Specializing in YOLO object detection models and AI integration for real-time traffic analysis and vehicle detection systems."
  },
  {
    id: "2",
    name: "Janani",
    role: "Designer: Visuals, Diagrams, Mockups",
    description: "Creating comprehensive visual designs, system diagrams, and interactive mockups for the traffic management interface."
  },
  {
    id: "3",
    name: "Guru",
    role: "Developer 3: Frontend Dashboard (UI/UX)",
    description: "Building responsive frontend dashboards with intuitive UI/UX design for traffic monitoring and control systems."
  },
  {
    id: "4",
    name: "Nandith",
    role: "Developer 2: Backend (Flask/Python, Priority Queue Algorithm)",
    description: "Developing robust backend infrastructure using Flask/Python and implementing priority queue algorithms for traffic optimization."
  },
  {
    id: "5",
    name: "Vihaan",
    role: "Researcher: Traffic Management & Odisha Urban Issues",
    description: "Conducting in-depth research on traffic management solutions and analyzing specific urban transportation challenges in Odisha."
  },
  {
    id: "6",
    name: "Preetham",
    role: "Researcher: Traffic Management & Odisha Urban Issues",
    description: "Researching traffic flow patterns and urban mobility issues to develop data-driven solutions for Odisha's transportation network."
  }
]

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      <main className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent">
              About Our Team
            </h1>
            <p className="text-xl text-[#034D5A]/70 max-w-3xl mx-auto leading-relaxed">
              Meet the innovative minds behind the Smart Traffic Management System - a dedicated team of students
              passionate about creating smarter, more efficient cities
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-[#FC7A1E]" />
                <h2 className="text-3xl font-bold text-[#034D5A]">Our Team</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 h-full ${
                      hoveredCard === member.id
                        ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[#FC7A1E]/50 transform -translate-y-2"
                        : "hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.4)] hover:border-white/30"
                    }`}
                  >
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-[#FC7A1E] mb-2">{member.name}</h3>
                        <p className="text-[#034D5A] font-semibold mb-4">{member.role}</p>
                      </div>

                      <div className="flex-grow">
                        <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-4">
                          <p className="text-black text-sm leading-relaxed font-medium">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Data Section */}
          <div className="bg-[#FCFCFC] rounded-2xl shadow-lg border border-[#034D5A]/10 p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-[#33673B]" />
                <h2 className="text-3xl font-bold text-[#034D5A]">Research & Development</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Research Methodology */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#FC7A1E]/10 to-[#FC7A1E]/5 rounded-xl p-6 border border-[#FC7A1E]/20">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-4 flex items-center space-x-2">
                    <Award className="w-6 h-6 text-[#FC7A1E]" />
                    <span>Research Methodology</span>
                  </h3>
                  <ul className="space-y-3 text-[#034D5A]/80">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FC7A1E] rounded-full mt-2 flex-shrink-0" />
                      <span>Literature review of existing traffic management systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FC7A1E] rounded-full mt-2 flex-shrink-0" />
                      <span>Analysis of traffic patterns in urban intersections</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FC7A1E] rounded-full mt-2 flex-shrink-0" />
                      <span>AI model training and optimization for vehicle detection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FC7A1E] rounded-full mt-2 flex-shrink-0" />
                      <span>Simulation testing and performance validation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#33673B]/10 to-[#33673B]/5 rounded-xl p-6 border border-[#33673B]/20">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-4">Key Technologies</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#FCFCFC] rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-[#034D5A]">YOLOv8</p>
                      <p className="text-xs text-[#034D5A]/70">Object Detection</p>
                    </div>
                    <div className="bg-[#FCFCFC] rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-[#034D5A]">OpenCV</p>
                      <p className="text-xs text-[#034D5A]/70">Computer Vision</p>
                    </div>
                    <div className="bg-[#FCFCFC] rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-[#034D5A]">TensorFlow</p>
                      <p className="text-xs text-[#034D5A]/70">Machine Learning</p>
                    </div>
                    <div className="bg-[#FCFCFC] rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-[#034D5A]">React</p>
                      <p className="text-xs text-[#034D5A]/70">Frontend</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Collection Placeholder */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#034D5A]/10 to-[#034D5A]/5 rounded-xl p-6 border border-[#034D5A]/20">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-4">Research Data</h3>
                  <div className="bg-[#FCFCFC] rounded-lg p-6 border-2 border-dashed border-[#034D5A]/20 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-[#034D5A]/10 rounded-full flex items-center justify-center mx-auto">
                        <BookOpen className="w-8 h-8 text-[#034D5A]/50" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#034D5A] mb-2">Data Collection in Progress</h4>
                        <p className="text-[#034D5A]/70 text-sm leading-relaxed">
                          Research data will be automatically populated here via Google Form submissions. This section
                          will include performance metrics, test results, and validation data.
                        </p>
                      </div>
                      <button className="px-6 py-2 bg-[#034D5A] text-[#FCFCFC] rounded-lg text-sm font-medium hover:bg-[#034D5A]/90 transition-colors duration-200">
                        Submit Research Data
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FC7A1E]/10 to-[#33673B]/10 rounded-xl p-6 border border-[#FC7A1E]/20">
                  <h3 className="text-xl font-bold text-[#034D5A] mb-4">Project Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#33673B] rounded-full" />
                      <span className="text-sm text-[#034D5A]">Research & Planning - Completed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#33673B] rounded-full" />
                      <span className="text-sm text-[#034D5A]">System Design - Completed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#FC7A1E] rounded-full animate-pulse" />
                      <span className="text-sm text-[#034D5A]">Development & Testing - In Progress</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#034D5A]/30 rounded-full" />
                      <span className="text-sm text-[#034D5A]/70">Deployment & Validation - Upcoming</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#FC7A1E]/10 via-[#33673B]/10 to-[#034D5A]/10 rounded-2xl p-8 border border-[#FC7A1E]/20">
              <h3 className="text-2xl font-bold text-[#034D5A] mb-4">Get in Touch</h3>
              <p className="text-[#034D5A]/70 mb-6 max-w-2xl mx-auto">
                Interested in our Smart Traffic Management System? We'd love to hear from you and discuss potential
                collaborations or implementations.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#FC7A1E] to-[#33673B] text-[#FCFCFC] rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
