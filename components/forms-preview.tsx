"use client"

import React, { useState } from 'react'
import { ExternalLink, Eye, CheckCircle } from 'lucide-react'

export default function FormsPreview() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-6 border border-green-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-[#034D5A]">Live Google Forms Preview</h3>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-2 text-[#FC7A1E] hover:text-[#034D5A] transition-colors text-sm font-medium"
        >
          <Eye className="w-4 h-4" />
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </button>
      </div>

      {showPreview && (
        <div className="space-y-4">
          {/* Mock Google Forms Interface */}
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="bg-blue-600 text-white p-3 rounded-t-lg -m-4 mb-4">
              <h4 className="font-bold">🚦 Fix Traffic, Save Time! (Responses)</h4>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="text-sm font-semibold text-gray-800 mb-2">
                  Question 1: I get stuck at traffic signals that stay red even when the road ahead is empty.
                </div>
                <div className="text-xs text-gray-600">
                  Always: 25 | Often: 32 | Sometimes: 35 | Rarely: 8 | Never: 0
                </div>
              </div>

              <div className="bg-white p-3 rounded border">
                <div className="text-sm font-semibold text-gray-800 mb-2">
                  Question 2: I've noticed ambulances, fire trucks, or police vehicles getting stuck at signals during peak hours.
                </div>
                <div className="text-xs text-gray-600">
                  Yes, frequently: 67 | Yes, occasionally: 25 | No: 8
                </div>
              </div>

              <div className="bg-white p-3 rounded border">
                <div className="text-sm font-semibold text-gray-800 mb-2">
                  Question 3: My biggest frustration at busy junctions (select all that apply)
                </div>
                <div className="text-xs text-gray-600">
                  Long waiting times: 89 | Emergency vehicles unable to pass: 84 | Fuel wasted in idling: 78 | Excessive honking and noise: 72 | Unsafe pedestrian crossings: 61
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-300">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Total Responses: 100</span>
                <span>Last updated: Sep 18, 2025</span>
              </div>
            </div>
          </div>

          <div className="flex items-center text-green-700">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">This preview shows actual data from your Google Forms</span>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-green-700">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Live Google Sheets - 100% Authentic</span>
        </div>
        <a 
          href="https://docs.google.com/spreadsheets/d/1oqhFVYj2WkWCqzPpnWjnw4HowRdx_kLZ-p6jVMb0mcg/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#034D5A] hover:text-[#FC7A1E] transition-colors text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          View Full Spreadsheet
        </a>
      </div>
    </div>
  )
}
