"use client"

import { useState, useEffect } from "react"
import { Github, Instagram, Send } from "lucide-react"

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nod1rDev/",
      color: "hover:text-white hover:bg-gray-800",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/nod1rbek_portfolio",
      color: "hover:text-white hover:bg-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/negmatov_._/",
      color: "hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
  ]

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/20 ${social.color}
                animate-float`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.name}
              </div>
            </a>
          )
        })}
      </div>

      {/* Decorative line */}
      <div className="mt-6 w-px h-20 bg-gradient-to-b from-slate-600 to-transparent mx-auto"></div>
    </div>
  )
}
