"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  const loadingSteps = [
    "Initializing...",
    "Loading 3D Elements...",
    "Preparing Animations...",
    "Optimizing Experience...",
    "Almost Ready...",
  ]

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5

        // Update loading text based on progress
        if (newProgress > 20 && newProgress <= 40) {
          setLoadingText(loadingSteps[1])
        } else if (newProgress > 40 && newProgress <= 60) {
          setLoadingText(loadingSteps[2])
        } else if (newProgress > 60 && newProgress <= 80) {
          setLoadingText(loadingSteps[3])
        } else if (newProgress > 80) {
          setLoadingText(loadingSteps[4])
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsLoading(false)
          }, 800)
          return 100
        }
        return newProgress
      })
    }, 200)

    // Cleanup interval
    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="text-6xl md:text-7xl font-bold text-gradient animate-pulse">nodir.dev</div>
          <div className="absolute inset-0 text-6xl md:text-7xl font-bold text-gradient opacity-20 animate-ping"></div>
        </div>

        {/* Enhanced Loader */}
        <div className="relative">
          <div className="loader"></div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-24">
              <div
                className="absolute top-0 left-1/2 w-3 h-3 bg-neon-green rounded-full transform -translate-x-1/2 animate-ping"
                style={{ animation: "orbit 2s linear infinite" }}
              ></div>
              <div
                className="absolute top-1/2 right-0 w-2 h-2 bg-neon-blue rounded-full transform -translate-y-1/2 animate-ping"
                style={{ animation: "orbit 2s linear infinite reverse", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-neon-green rounded-full transform -translate-x-1/2 animate-ping"
                style={{ animation: "orbit 2s linear infinite", animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-0 w-2 h-2 bg-neon-blue rounded-full transform -translate-y-1/2 animate-ping"
                style={{ animation: "orbit 2s linear infinite reverse", animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text text-center">{loadingText}</div>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div
            className="loading-progress-bar"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <div className="text-sm text-muted font-mono">{Math.round(progress)}%</div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-green rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={i + 12}
              className="absolute w-0.5 h-0.5 bg-neon-blue rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite reverse`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(48px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(48px) rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}
