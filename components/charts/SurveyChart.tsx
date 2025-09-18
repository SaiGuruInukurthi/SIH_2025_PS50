"use client"

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { Bar, Pie, Line } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
)

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
  }[]
}

interface SurveyChartProps {
  type: 'bar' | 'pie' | 'line'
  data: ChartData
  title?: string
  width?: number
  height?: number
}

export default function SurveyChart({ type, data, title, width = 400, height = 200 }: SurveyChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: !!title,
        text: title,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    scales: type === 'bar' || type === 'line' ? {
      y: {
        beginAtZero: true,
      },
    } : undefined,
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={options} />
      case 'pie':
        return <Pie data={data} options={options} />
      case 'line':
        return <Line data={data} options={options} />
      default:
        return <Bar data={data} options={options} />
    }
  }

  return (
    <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
      <div style={{ width: width, height: height }}>
        {renderChart()}
      </div>
    </div>
  )
}
