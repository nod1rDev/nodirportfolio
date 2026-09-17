"use client"

import { useEffect } from "react"

export default function ScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      const progressBar = document.getElementById("progress-bar")
      if (progressBar) {
        progressBar.style.width = scrollPercent + "%"
      }
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return null
}
