// Utility functions to process Google Forms survey data

export interface SurveyResponse {
  [key: string]: string | number
}

export interface ProcessedQuestionData {
  question: string
  type: 'multiple-choice' | 'rating' | 'text' | 'number'
  responses: string[]
  counts: { [key: string]: number }
  chartType: 'pie' | 'bar' | 'line'
}

// Process raw survey data into chart-ready format
export function processSurveyData(
  rawData: SurveyResponse[],
  questionColumn: string,
  questionType: 'multiple-choice' | 'rating' | 'text' | 'number' = 'multiple-choice'
): ProcessedQuestionData {
  const responses = rawData.map(row => row[questionColumn]?.toString() || '').filter(Boolean)
  
  // Count occurrences of each response
  const counts: { [key: string]: number } = {}
  responses.forEach(response => {
    counts[response] = (counts[response] || 0) + 1
  })

  // Determine appropriate chart type
  let chartType: 'pie' | 'bar' | 'line' = 'bar'
  if (questionType === 'multiple-choice' && Object.keys(counts).length <= 6) {
    chartType = 'pie'
  } else if (questionType === 'rating' || questionType === 'number') {
    chartType = 'bar'
  }

  return {
    question: questionColumn,
    type: questionType,
    responses: Object.keys(counts),
    counts,
    chartType
  }
}

// Convert processed data to Chart.js format
export function convertToChartJSData(
  processedData: ProcessedQuestionData,
  colors: string[] = ['#FC7A1E', '#034D5A', '#33673B', '#FF6B6B', '#4ECDC4', '#45B7D1']
) {
  const labels = processedData.responses
  const data = processedData.responses.map(response => processedData.counts[response])
  
  const backgroundColor = processedData.chartType === 'pie' 
    ? colors.slice(0, labels.length)
    : colors[0]
  
  const borderColor = processedData.chartType === 'pie'
    ? colors.slice(0, labels.length)
    : colors[0]

  return {
    labels,
    datasets: [{
      label: processedData.question,
      data,
      backgroundColor,
      borderColor,
      borderWidth: 1,
    }]
  }
}

// Sample data structure for testing
export const sampleSurveyData: SurveyResponse[] = [
  { 'How satisfied are you with our service?': 'Very Satisfied', 'Age Group': '18-25', 'Timestamp': '2024-01-01' },
  { 'How satisfied are you with our service?': 'Satisfied', 'Age Group': '26-35', 'Timestamp': '2024-01-01' },
  { 'How satisfied are you with our service?': 'Neutral', 'Age Group': '18-25', 'Timestamp': '2024-01-02' },
  { 'How satisfied are you with our service?': 'Very Satisfied', 'Age Group': '36-45', 'Timestamp': '2024-01-02' },
  { 'How satisfied are you with our service?': 'Dissatisfied', 'Age Group': '26-35', 'Timestamp': '2024-01-03' },
]

// Helper function to read CSV data (you'll need to implement file reading)
export function parseCSVData(csvText: string): SurveyResponse[] {
  const lines = csvText.split('\n')
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/"/g, ''))
    const row: SurveyResponse = {}
    headers.forEach((header, index) => {
      row[header] = values[index] || ''
    })
    return row
  }).filter(row => Object.values(row).some(value => value !== ''))
}
