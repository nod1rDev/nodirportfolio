"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Shield, Lock, Eye, Terminal, ArrowLeft, Filter, Search, Star, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "E-Commerce", "Web Apps", "Tools", "Mobile", "API"]

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, cart management, and secure payment integration.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "/placeholder.svg?height=300&width=500",
      status: "LIVE",
      icon: Shield,
      category: "E-Commerce",
      github: "https://github.com/nodir",
      demo: "https://demo.nodir.dev",
      featured: true,
      year: "2024",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
      status: "DEVELOPMENT",
      icon: Eye,
      category: "Web Apps",
      github: "https://github.com/nodir",
      demo: "https://tasks.nodir.dev",
      featured: true,
      year: "2024",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with smooth animations, dark mode, and optimized performance.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
      image: "/placeholder.svg?height=300&width=500",
      status: "COMPLETED",
      icon: Lock,
      category: "Web Apps",
      github: "https://github.com/nodir",
      demo: "https://nodir.dev",
      featured: false,
      year: "2024",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and data visualization.",
      tech: ["React", "Chart.js", "OpenWeather API", "PWA"],
      image: "/placeholder.svg?height=300&width=500",
      status: "LIVE",
      icon: Terminal,
      category: "Tools",
      github: "https://github.com/nodir",
      demo: "https://weather.nodir.dev",
      featured: true,
      year: "2023",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blogging platform with markdown support, user authentication, and content management.",
      tech: ["Next.js", "MDX", "Supabase", "Tailwind"],
      image: "/placeholder.svg?height=300&width=500",
      status: "DEVELOPMENT",
      icon: Shield,
      category: "Web Apps",
      github: "https://github.com/nodir",
      demo: "https://blog.nodir.dev",
      featured: false,
      year: "2024",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with group chats, file sharing, and end-to-end encryption features.",
      tech: ["React", "Firebase", "WebRTC", "Material-UI"],
      image: "/placeholder.svg?height=300&width=500",
      status: "COMPLETED",
      icon: Eye,
      category: "Web Apps",
      github: "https://github.com/nodir",
      demo: "https://chat.nodir.dev",
      featured: false,
      year: "2023",
    },
    {
      title: "Crypto Tracker",
      description:
        "Cryptocurrency tracking application with real-time prices, portfolio management, and market analysis.",
      tech: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex"],
      image: "/placeholder.svg?height=300&width=500",
      status: "LIVE",
      icon: Terminal,
      category: "Tools",
      github: "https://github.com/nodir",
      demo: "https://crypto.nodir.dev",
      featured: true,
      year: "2023",
    },
    {
      title: "Food Delivery App",
      description:
        "Mobile-first food delivery platform with restaurant management, order tracking, and payment processing.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      status: "DEVELOPMENT",
      icon: Shield,
      category: "Mobile",
      github: "https://github.com/nodir",
      demo: "https://food.nodir.dev",
      featured: false,
      year: "2024",
    },
    {
      title: "REST API Service",
      description:
        "Scalable REST API with authentication, rate limiting, documentation, and comprehensive testing suite.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      image: "/placeholder.svg?height=300&width=500",
      status: "COMPLETED",
      icon: Lock,
      category: "API",
      github: "https://github.com/nodir",
      demo: "https://api.nodir.dev",
      featured: false,
      year: "2023",
    },
  ]

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "text-emerald-400 border-emerald-400/50 bg-emerald-400/10"
      case "DEVELOPMENT":
        return "text-yellow-400 border-yellow-400/50 bg-yellow-400/10"
      case "COMPLETED":
        return "text-blue-400 border-blue-400/50 bg-blue-400/10"
      default:
        return "text-primary border-primary/50 bg-primary/10"
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20 relative">
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <Link href="/">
            <Button
              variant="outline"
              className="glass-card glass-hover font-mono mb-8 group bg-transparent border-primary/30 hover:border-primary/50"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center">
            <div className="mb-4 font-mono text-sm text-muted-foreground">
              <span className="text-primary">[PORTFOLIO]</span> COMPLETE PROJECT ARCHIVE
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 gradient-text">All Projects</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive showcase of web applications, tools, and systems built with modern technologies and best
              practices.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 animate-slide-in-right">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass-card bg-transparent border-primary/20 focus:border-primary/50 font-mono"
              />
            </div>

            <div className="flex items-center gap-3">
              <Filter size={16} className="text-primary" />
              <span className="font-mono text-sm text-muted-foreground">Filter by category:</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-mono transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-primary/20 text-primary border-primary/50 shadow-lg shadow-primary/20"
                    : "glass-card glass-hover border-primary/20 hover:border-primary/40"
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  ({category === "All" ? allProjects.length : allProjects.filter((p) => p.category === category).length}
                  )
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="project-card group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <Star size={12} className="text-primary fill-primary" />
                  <span className="text-xs font-mono text-primary">Featured</span>
                </div>
              )}

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div
                  className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${getStatusColor(project.status)}`}
                >
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        project.status === "LIVE"
                          ? "bg-emerald-400"
                          : project.status === "DEVELOPMENT"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      } animate-pulse-soft`}
                    ></div>
                    {project.status}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                  <Calendar size={12} className="text-muted-foreground" />
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary/80 hover:bg-primary text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Eye size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white group-hover:text-primary transition-colors duration-300 text-lg font-semibold">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/50 text-primary border border-slate-700/50 hover:border-primary/50 transition-all duration-300 cursor-default hover:bg-primary/10 animate-slide-in-right"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent border-slate-600 hover:border-primary/50 hover:bg-primary/10 text-slate-300 hover:text-primary transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                  >
                    <Terminal size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="glass-card p-8 max-w-md mx-auto">
              <Search size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search terms or category filter.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All")
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="text-center py-16 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{allProjects.length}</div>
              <div className="text-sm font-medium text-muted-foreground">Total Projects</div>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {allProjects.filter((p) => p.status === "LIVE").length}
              </div>
              <div className="text-sm font-medium text-muted-foreground">Live Projects</div>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {allProjects.filter((p) => p.status === "DEVELOPMENT").length}
              </div>
              <div className="text-sm font-medium text-muted-foreground">In Development</div>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {allProjects.filter((p) => p.featured).length}
              </div>
              <div className="text-sm font-medium text-muted-foreground">Featured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
