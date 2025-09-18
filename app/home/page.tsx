" use client\

import Navigation from \@/components/navigation\

export default function HomePage() {
 return (
 <div className=\min-h-screen relative overflow-hidden\>
 <Navigation />

 <main className=\pt-24 pb-16 px-6 relative z-10\>
 <div className=\max-w-6xl mx-auto\>
 {/* Header Section */}
 <div className=\text-center mb-16\>
 <h1 className=\text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FC7A1E] via-[#33673B] to-[#034D5A] bg-clip-text text-transparent\>
 Smart Traffic Management System
 </h1>
 <h2 className=\text-3xl md:text-4xl font-semibold mb-6 text-[#034D5A]\>
 SIH25050 - Urban Congestion Solution
 </h2>
 <p className=\text-xl text-[#034D5A]/70 max-w-3xl mx-auto leading-relaxed\>
 An AI-powered intelligent traffic management system designed to optimize urban traffic flow, 
 reduce congestion, and improve overall transportation efficiency for the Government of Odisha.
 </p>
 </div>

 {/* Problem Statement Overview */}
 <div className=\bg-gradient-to-r from-[#FC7A1E]/10 via-[#33673B]/10 to-[#034D5A]/10 rounded-2xl p-8 border border-[#FC7A1E]/20 mb-12\>
 <h3 className=\text-2xl font-bold text-[#034D5A] mb-4 text-center\>Our Mission</h3>
 <p className=\text-[#034D5A]/80 text-center max-w-4xl mx-auto leading-relaxed\>
 Transform traditional fixed-time traffic signals into an adaptive, intelligent system that responds 
 to real-time traffic conditions, emergency vehicle priorities, and pedestrian needs while coordinating 
 across multiple intersections to create smooth traffic flow.
 </p>
 </div>

 {/* Key Features Grid */}
 <div className=\grid md:grid-cols-3 gap-8 mb-16\>
 <div className=\bg-[#FCFCFC] rounded-xl p-6 shadow-lg border border-[#034D5A]/10 hover:shadow-xl transition-all duration-300\>
 <div className=\w-12 h-12 bg-[#FC7A1E]/10 rounded-lg flex items-center justify-center mb-4\>
 <div className=\w-6 h-6 bg-[#FC7A1E] rounded\></div>
 </div>
 <h4 className=\text-xl font-semibold text-[#034D5A] mb-2\>Real-time Adaptation</h4>
 <p className=\text-[#034D5A]/70\>Dynamic signal timing based on live traffic conditions and flow patterns</p>
 </div>
 
 <div className=\bg-[#FCFCFC] rounded-xl p-6 shadow-lg border border-[#034D5A]/10 hover:shadow-xl transition-all duration-300\>
 <div className=\w-12 h-12 bg-[#33673B]/10 rounded-lg flex items-center justify-center mb-4\>
 <div className=\w-6 h-6 bg-[#33673B] rounded\></div>
 </div>
 <h4 className=\text-xl font-semibold text-[#034D5A] mb-2\>Emergency Priority</h4>
 <p className=\text-[#034D5A]/70\>Instant signal override for emergency vehicles to ensure rapid response</p>
 </div>
 
 <div className=\bg-[#FCFCFC] rounded-xl p-6 shadow-lg border border-[#034D5A]/10 hover:shadow-xl transition-all duration-300\>
 <div className=\w-12 h-12 bg-[#034D5A]/10 rounded-lg flex items-center justify-center mb-4\>
 <div className=\w-6 h-6 bg-[#034D5A] rounded\></div>
 </div>
 <h4 className=\text-xl font-semibold text-[#034D5A] mb-2\>Network Coordination</h4>
 <p className=\text-[#034D5A]/70\>Synchronized traffic signals across intersections for optimal flow</p>
 </div>
 </div>

 {/* Call to Action */}
 <div className=\text-center\>
 <div className=\bg-gradient-to-r from-[#FC7A1E]/10 via-[#33673B]/10 to-[#034D5A]/10 rounded-2xl p-8 border border-[#FC7A1E]/20\>
 <h3 className=\text-2xl font-bold text-[#034D5A] mb-4\>Experience Our Solution</h3>
 <p className=\text-[#034D5A]/70 mb-6 max-w-2xl mx-auto\>
 Explore our interactive simulation and discover how AI-powered traffic management transforms urban mobility
 </p>
 <div className=\flex flex-col sm:flex-row gap-4 justify-center\>
 <button className=\px-8 py-3 bg-[#FC7A1E] text-[#FCFCFC] rounded-lg font-semibold hover:bg-[#FC7A1E]/90 transition-all duration-300 hover:scale-105 shadow-lg\>
 View Simulation
 </button>
 <button className=\px-8 py-3 bg-transparent border-2 border-[#33673B] text-[#33673B] rounded-lg font-semibold hover:bg-[#33673B] hover:text-[#FCFCFC] transition-all duration-300 hover:scale-105\>
 About Our Solution
 </button>
 </div>
 </div>
 </div>
 </div>
 </main>
 </div>
 )
}
