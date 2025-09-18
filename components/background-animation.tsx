"use client"

import { useState, useEffect, useRef, useCallback } from 'react'

interface TrafficNode {
  x: number
  y: number
  size: number
  opacity: number
  color: string
  pulsePhase: number
  id: number
  floatX?: number
  floatY?: number
}

interface TrafficLane {
  startX: number
  startY: number
  endX: number
  endY: number
  opacity: number
  color: string
}

export default function BackgroundAnimation() {
  const [time, setTime] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<TrafficNode[]>([])
  const lanesRef = useRef<TrafficLane[]>([])

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize traffic system
  const initTrafficSystem = useCallback(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: TrafficNode[] = []
    const lanes: TrafficLane[] = []
    const colors = ['#FC7A1E', '#034D5A', '#33673B']

    // Create traffic nodes (intersections/stations)
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        id: i
      })
    }
    
    // Create traffic lanes connecting nodes
    for (let i = 0; i < 8; i++) {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)]
      const endNode = nodes[Math.floor(Math.random() * nodes.length)]
      
      if (startNode !== endNode) {
        lanes.push({
          startX: startNode.x,
          startY: startNode.y,
          endX: endNode.x,
          endY: endNode.y,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    nodesRef.current = nodes
    lanesRef.current = lanes
  }, [isClient])

  // Animate traffic system
  const animateTrafficSystem = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw traffic lanes with subtle animation
    lanesRef.current.forEach(lane => {
      const gradient = ctx.createLinearGradient(lane.startX, lane.startY, lane.endX, lane.endY)
      gradient.addColorStop(0, `${lane.color}${Math.floor(lane.opacity * 255).toString(16).padStart(2, '0')}`)
      gradient.addColorStop(0.5, `${lane.color}00`)
      gradient.addColorStop(1, `${lane.color}${Math.floor(lane.opacity * 255).toString(16).padStart(2, '0')}`)

      ctx.save()
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      ctx.setLineDash([5, 10])
      ctx.lineDashOffset = -(Date.now() * 0.01) % 15
      ctx.beginPath()
      ctx.moveTo(lane.startX, lane.startY)
      ctx.lineTo(lane.endX, lane.endY)
      ctx.stroke()
      ctx.restore()
    })

    // Draw traffic nodes with pulse effect
    nodesRef.current.forEach(node => {
      // Passive floating motion
      const time = Date.now() * 0.0005
      node.floatX = Math.sin(time + node.id * 0.5) * 3
      node.floatY = Math.cos(time * 0.7 + node.id * 0.3) * 2

      // Pulse animation
      node.pulsePhase += 0.02
      const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7

      // Draw node glow with floating motion
      const drawX = node.x + (node.floatX || 0)
      const drawY = node.y + (node.floatY || 0)
      
      ctx.save()
      ctx.globalAlpha = node.opacity * 0.3 * pulse
      ctx.fillStyle = node.color
      ctx.beginPath()
      ctx.arc(drawX, drawY, node.size * 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Draw node core
      ctx.save()
      ctx.globalAlpha = node.opacity * pulse
      ctx.fillStyle = node.color
      ctx.beginPath()
      ctx.arc(drawX, drawY, node.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Keep nodes in bounds
      if (node.x < 0 || node.x > canvas.width) node.x = Math.random() * canvas.width
      if (node.y < 0 || node.y > canvas.height) node.y = Math.random() * canvas.height
    })

    // Draw connections between nearby nodes
    nodesRef.current.forEach((node, index) => {
      nodesRef.current.forEach((otherNode, otherIndex) => {
        if (index !== otherIndex) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          )
          
          if (distance < 150) {
            ctx.save()
            ctx.globalAlpha = (150 - distance) / 150 * 0.1
            ctx.strokeStyle = '#034D5A'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      })
    })

    // Update time for passive animations
    setTime(Date.now())

    animationRef.current = requestAnimationFrame(animateTrafficSystem)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    initTrafficSystem()

    // Event listeners
    window.addEventListener('resize', initTrafficSystem)

    // Start animation
    animateTrafficSystem()

    return () => {
      window.removeEventListener('resize', initTrafficSystem)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isClient, initTrafficSystem, animateTrafficSystem])

  return (
    <>
      {/* Canvas for traffic network animation - only render on client */}
      {isClient && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-0"
          style={{ background: 'transparent' }}
        />
      )}

      {/* Animated gradient waves - only render on client */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <div 
            className="absolute inset-0 opacity-12"
            style={{
              background: `radial-gradient(circle at ${50 + Math.sin(time * 0.0003) * 5}% ${50 + Math.cos(time * 0.0004) * 3}%, #FC7A1E12 0%, transparent 50%)`,
              transition: 'background 0.3s ease-out'
            }}
          />
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              background: `radial-gradient(circle at ${30 + Math.cos(time * 0.0002) * 4}% ${70 + Math.sin(time * 0.0003) * 3}%, #034D5A08 0%, transparent 60%)`,
              transform: `rotate(${Math.sin(time * 0.0001) * 2}deg)`,
              transition: 'all 0.4s ease-out'
            }}
          />
          <div 
            className="absolute inset-0 opacity-4"
            style={{
              background: `conic-gradient(from ${time * 0.01}deg at ${60 + Math.sin(time * 0.0002) * 2}% ${40 + Math.cos(time * 0.0002) * 2}%, #FC7A1E04, transparent, #034D5A04, transparent)`,
              transition: 'all 0.5s ease-out'
            }}
          />
        </div>
      )}

      {/* Abstract Background Shapes with passive motion - only render on client */}
      {isClient && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Large gradient blob - top left */}
        <div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#FC7A1E]/20 via-[#FC7A1E]/10 to-transparent rounded-full blur-3xl transition-all duration-500"
          style={{
            transform: `translate(${Math.sin(time * 0.0002) * 8}px, ${Math.cos(time * 0.0003) * 6}px) scale(${1 + Math.sin(time * 0.0001) * 0.02})`,
            animationDelay: '0s'
          }}
        />
        
        {/* Medium gradient blob - top right */}
        <div 
          className="absolute -top-20 -right-32 w-64 h-64 bg-gradient-to-bl from-[#33673B]/15 via-[#33673B]/8 to-transparent rounded-full blur-2xl transition-all duration-600"
          style={{
            transform: `translate(${Math.cos(time * 0.0001) * -6}px, ${Math.sin(time * 0.0002) * 4}px) rotate(${Math.sin(time * 0.0001) * 3}deg)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Small gradient blob - bottom left */}
        <div 
          className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-[#034D5A]/12 via-[#034D5A]/6 to-transparent rounded-full blur-xl transition-all duration-700"
          style={{
            transform: `translate(${Math.sin(time * 0.0001 + 4) * 5}px, ${Math.cos(time * 0.0002) * -4}px)`,
            animationDelay: '4s'
          }}
        />
        
        {/* Large gradient blob - bottom right */}
        <div 
          className="absolute -bottom-32 -right-48 w-96 h-96 bg-gradient-to-tl from-[#FC7A1E]/8 via-[#33673B]/6 to-transparent rounded-full blur-3xl transition-all duration-800"
          style={{
            transform: `translate(${Math.cos(time * 0.0001 + 1) * -7}px, ${Math.sin(time * 0.0002 + 1) * -5}px) scale(${1 + Math.sin(time * 0.0001) * 0.015})`,
            animationDelay: '1s'
          }}
        />
        
        {/* Additional floating shapes for depth with passive motion */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-[#FC7A1E]/10 to-transparent rounded-full blur-2xl transition-all duration-600"
          style={{
            transform: `translate(${Math.sin(time * 0.0002 + 3) * 6}px, ${Math.cos(time * 0.0003 + 3) * 4}px)`,
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-tr from-[#33673B]/8 to-transparent rounded-full blur-xl transition-all duration-700"
          style={{
            transform: `translate(${Math.cos(time * 0.0001 + 5) * -4}px, ${Math.sin(time * 0.0002 + 5) * -3}px)`,
            animationDelay: '5s'
          }}
        />
        </div>
      )}
    </>
  )
}