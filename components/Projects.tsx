"use client";

import { Grid, List, ChevronDown, Github, Lock, Terminal, LayoutGrid, LayoutList } from "lucide-react";
import { useState, useRef, ReactNode, useMemo } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { projects } from "@/app/db";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProjectsProps {
  showAll?: boolean;
}

// Custom Card Components
function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl shadow-md bg-slate-900/70 border border-slate-700/50 backdrop-blur-sm p-1 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-5 pt-10 ${className}`}>{children}</div>;
}

function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-lg font-semibold leading-tight text-white ${className}`}
    >
      {children}
    </h3>
  );
}

function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const headerRef = useRef(null);
  const categoriesRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-50px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    allCategories.add("All");
    projects.forEach(project => {
      if (Array.isArray(project.category)) {
        project.category.forEach(cat => allCategories.add(cat));
      } else {
        allCategories.add(project.category);
      }
    });
    return Array.from(allCategories);
  }, []);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const handleFilter = (cat: string) => {
    setLoading(true);
    setVisibleProjects(3);
    setTimeout(() => {
      setActiveCategory(cat);
      setLoading(false);
    }, 600);
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeCategory);
      }
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, visibleProjects);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "text-green-400 border-green-400/50";
      case "DEVELOPMENT":
        return "text-yellow-400 border-yellow-400/50";
      case "COMPLETED":
        return "text-blue-400 border-blue-400/50";
      default:
        return "text-primary border-primary/50";
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const 
      } 
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-flow"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div ref={headerRef} initial="hidden" animate={headerInView ? "visible" : "hidden"} className="text-center mb-10">
          <h2 className="font-mono font-bold text-3xl md:text-4xl mb-4 matrix-text">
            {showAll ? "ALL MY PROJECTS" : "MY PROJECTS"}
          </h2>
        </motion.div>

        {/* Filter & View Controls */}
        <motion.div
          ref={categoriesRef}
          initial="hidden"
          animate={categoriesInView ? "visible" : "hidden"}
          className="flex flex-row justify-between items-center gap-4 mb-12"
        >
          {/* Mobile Category Selector */}
          <div className="w-full md:hidden">
            <Select value={activeCategory} onValueChange={handleFilter}>
              <SelectTrigger className="w-full bg-slate-800/50 border-slate-700">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Category Buttons */}
          <div className="hidden md:flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-md font-mono text-sm border transition ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent text-slate-300 border-slate-600 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Layout Controls */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm mr-2">Layout:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors flex items-center gap-2 ${
                viewMode === "grid" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-slate-700/30 text-slate-300 hover:bg-slate-600/50"
              }`}
              title="Grid View"
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors flex items-center gap-2 ${
                viewMode === "list" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-slate-700/30 text-slate-300 hover:bg-slate-600/50"
              }`}
              title="List View"
            >
              <LayoutList size={20} />
            </button>
          </div>
        </motion.div>

        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                variants={projectCardVariants}
                className={`h-full ${
                  viewMode === "grid" ? "flex flex-col" : ""
                }`}
              >
                <Card
                  className={viewMode === "grid" ? "h-full flex flex-col" : ""}
                >
                  <div
                    className={
                      viewMode === "list"
                        ? "flex gap-6"
                        : "flex flex-col h-full"
                    }
                  >
                    <div
                      className={
                        viewMode === "list"
                          ? "w-auto p-4 mx-auto h-auto flex-shrink-0"
                          : "w-full mx-auto h-auto"
                      }
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-auto  h-auto max-h-64 mx-auto object-cover rounded-t-xl"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center justify-between">
                            <span>{project.title}</span>
                            <span
                              className={`ml-2 text-xs border px-2 py-0.5 rounded-full ${getStatusColor(
                                project.status
                              )}`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs bg-slate-800/50 text-primary border border-slate-700/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              className="flex items-center justify-center flex-1 px-3 py-2 text-sm border border-slate-600 rounded-md hover:border-primary hover:text-primary text-slate-300"
                            >
                              <Github size={16} className="mr-1" /> GitHub
                            </a>
                          ) : (
                            <span className="flex items-center justify-center flex-1 px-3 py-2 text-sm border border-slate-700/30 rounded-md text-slate-500 cursor-not-allowed">
                              <Lock size={16} className="mr-1" /> Private
                            </span>
                          )}
                          <a
                            href={project.demo}
                            target="_blank"
                            className="flex items-center justify-center flex-1 px-3 py-2 text-sm rounded-md bg-primary/20 text-primary border border-primary/30 hover:border-primary/50"
                          >
                            <Terminal size={16} className="mr-1" /> Live Demo
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Load More Button */}
        {!showAll && filteredProjects.length > visibleProjects && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-black/30 border border-primary/30 text-primary rounded-lg flex items-center mx-auto hover:bg-primary/10"
            >
              Load More <ChevronDown size={20} className="ml-2" />
            </button>
          </motion.div>
        )}

        {/* CTA - only show if we're not in "show all" mode and there are no more projects to load */}
        {!showAll && filteredProjects.length <= visibleProjects && (
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center mt-16"
          >
            <Link href="/projects">
              <button className="px-6 py-3 bg-black/30 border border-primary/30 text-primary rounded-lg">
                View All Projects
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
