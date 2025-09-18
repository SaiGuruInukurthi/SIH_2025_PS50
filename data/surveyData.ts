// Real survey data from Google Forms - Traffic Management Survey
export const trafficSurveyData = {
  // Question 1: Traffic Signal Frustration Frequency
  signalFrustration: {
    question: "I get stuck at traffic signals that stay red even when the road ahead is empty",
    responses: {
      "Always": 25,
      "Often": 32,
      "Sometimes": 35,
      "Rarely": 8,
      "Never": 0
    }
  },

  // Question 2: Emergency Vehicle Issues
  emergencyVehicleIssues: {
    question: "I've noticed ambulances, fire trucks, or police vehicles getting stuck at signals during peak hours",
    responses: {
      "Yes, frequently": 67,
      "Yes, occasionally": 25,
      "No": 8
    }
  },

  // Question 3: Biggest Frustrations (Multiple Choice - Top Issues)
  biggestFrustrations: {
    question: "My biggest frustration at busy junctions",
    responses: {
      "Long waiting times": 89,
      "Fuel wasted in idling": 78,
      "Excessive honking and noise": 72,
      "Emergency vehicles unable to pass": 84,
      "Unsafe pedestrian crossings": 61,
      "Lack of road civic sense in people": 12,
      "Stays green for 15 seconds only": 3
    }
  },

  // Question 4: Current System Effectiveness
  currentSystemEffectiveness: {
    question: "A fixed-timer traffic lights can handle today's traffic congestion effectively",
    responses: {
      "Yes, they work fine": 15,
      "Sometimes, but not during peak hours": 45,
      "Rarely, traffic feels unmanaged": 35,
      "No, they are outdated and inefficient": 5
    }
  },

  // Question 5: Expected Benefits from Smart System (Multiple Choice)
  smartSystemBenefits: {
    question: "If a smart traffic system could automatically adjust signals based on real-time traffic, I'd benefit from",
    responses: {
      "Shorter commute times": 76,
      "Faster movement for ambulances and emergency vehicles": 89,
      "Less fuel waste and pollution": 82,
      "Reduced noise and honking": 71,
      "Safer roads for pedestrians and drivers": 68
    }
  },

  // Additional insights
  totalResponses: 100,
  surveyPeriod: "September 17-18, 2025",
  targetAudience: "Hyderabad residents and commuters"
}

// Process the data for charts
export function getChartData() {
  return {
    signalFrustration: {
      labels: Object.keys(trafficSurveyData.signalFrustration.responses),
      data: Object.values(trafficSurveyData.signalFrustration.responses),
      chartType: 'pie' as const,
      colors: ['#FF6B6B', '#FC7A1E', '#4ECDC4', '#45B7D1', '#96CEB4']
    },
    
    emergencyVehicleIssues: {
      labels: Object.keys(trafficSurveyData.emergencyVehicleIssues.responses),
      data: Object.values(trafficSurveyData.emergencyVehicleIssues.responses),
      chartType: 'bar' as const,
      colors: ['#FF6B6B', '#FC7A1E', '#4ECDC4']
    },
    
    biggestFrustrations: {
      labels: Object.keys(trafficSurveyData.biggestFrustrations.responses),
      data: Object.values(trafficSurveyData.biggestFrustrations.responses),
      chartType: 'bar' as const,
      colors: ['#FC7A1E']
    },
    
    currentSystemEffectiveness: {
      labels: Object.keys(trafficSurveyData.currentSystemEffectiveness.responses),
      data: Object.values(trafficSurveyData.currentSystemEffectiveness.responses),
      chartType: 'pie' as const,
      colors: ['#4ECDC4', '#FC7A1E', '#FF6B6B', '#96CEB4']
    },
    
    smartSystemBenefits: {
      labels: Object.keys(trafficSurveyData.smartSystemBenefits.responses),
      data: Object.values(trafficSurveyData.smartSystemBenefits.responses),
      chartType: 'bar' as const,
      colors: ['#034D5A']
    }
  }
}
