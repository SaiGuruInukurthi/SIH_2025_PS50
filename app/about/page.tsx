"use client"

import { useState } from "react"
import { Users, BookOpen, Award, Mail, Linkedin, Github } from "lucide-react"
import Navigation from "@/components/navigation"

interface TeamMember {
  id: string
  name: string
  role: string
  studentId: string
  specialization: string
  email: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Project Lead & AI Specialist",
    studentId: "CS2021001",
    specialization: "Machine Learning & Computer Vision",
    email: "alex.chen@university.edu",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Backend Developer",
    studentId: "CS2021002",
    specialization: "Distributed Systems & APIs",
    email: "sarah.johnson@university.edu",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "Frontend Developer",
    studentId: "CS2021003",
    specialization: "React & User Experience",
    email: "michael.rodriguez@university.edu",
  },
  {
    id: "4",
    name: "Emily Zhang",
    role: "Data Scientist",
    studentId: "CS2021004",
    specialization: "Traffic Analytics & Optimization",
    email: "emily.zhang@university.edu",
  },
  {
    id: "5",
    name: "David Kim",
    role: "Systems Architect",
    studentId: "CS2021005",
    specialization: "IoT & Hardware Integration",
    email: "david.kim@university.edu",
  },
  {
    id: "6",
    name: "Lisa Thompson",
    role: "UI/UX Designer",
    studentId: "CS2021006",
    specialization: "Interface Design & Usability",
    email: "lisa.thompson@university.edu",
  },
  {
    id: "7",
    name: "James Wilson",
    role: "DevOps Engineer",
    studentId: "CS2021007",
    specialization: "Cloud Infrastructure & Deployment",
    email: "james.wilson@university.edu",
  },
  {
    id: "8",
    name: "Maria Garcia",
    role: "Quality Assurance Lead",
    studentId: "CS2021008",
    specialization: "Testing & System Validation",
    email: "maria.garcia@university.edu",
  },
]

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCFCFC] to-[#034D5A]/5">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`bg-[#FCFCFC] rounded-2xl shadow-lg border border-[#034D5A]/10 overflow-hidden transition-all duration-300 ${
                      hoveredCard === member.id
                        ? "shadow-2xl border-[#FC7A1E]/30 transform -translate-y-2"
                        : "hover:shadow-xl hover:border-[#FC7A1E]/20"
                    }`}
                  >
                    {/* Avatar Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-[#FC7A1E]/20 via-[#33673B]/20 to-[#034D5A]/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br from-[#FC7A1E] to-[#33673B] rounded-full flex items-center justify-center text-[#FCFCFC] text-2xl font-bold transition-all duration-300 ${
                            hoveredCard === member.id ? "scale-110" : ""
                          }`}
                        >
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div
                              key={i}
                              className={`border border-[#034D5A]/20 transition-all duration-500 ${
                                hoveredCard === member.id && (i + index) % 4 === 0 ? "bg-[#FC7A1E]/30" : ""
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-[#034D5A] mb-2">{member.name}</h3>
                        <p className="text-[#FC7A1E] font-semibold mb-1">{member.role}</p>
                        <p className="text-[#034D5A]/60 text-sm font-mono">{member.studentId}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-[#034D5A]/5 rounded-lg p-3">
                          <p className="text-xs text-[#034D5A]/70 mb-1">Specialization</p>
                          <p className="text-sm text-[#034D5A] font-medium">{member.specialization}</p>
                        </div>

                        <div className="flex items-center justify-center space-x-3 pt-2">
                          <button className="p-2 bg-[#FC7A1E]/10 hover:bg-[#FC7A1E]/20 rounded-lg transition-colors duration-200">
                            <Mail className="w-4 h-4 text-[#FC7A1E]" />
                          </button>
                          <button className="p-2 bg-[#33673B]/10 hover:bg-[#33673B]/20 rounded-lg transition-colors duration-200">
                            <Linkedin className="w-4 h-4 text-[#33673B]" />
                          </button>
                          <button className="p-2 bg-[#034D5A]/10 hover:bg-[#034D5A]/20 rounded-lg transition-colors duration-200">
                            <Github className="w-4 h-4 text-[#034D5A]" />
                          </button>
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
