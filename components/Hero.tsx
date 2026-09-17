"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Download,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const fullText = "Frontend Developer";
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS"];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setMouseTrail((prev) => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }].slice(
          -8
        );
        return newTrail;
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      let i = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
        }
      }, 80);
      return () => clearInterval(timer);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(skillTimer);
  }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden">
        <div className="particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in-up relative z-10">
          <div className="relative mb-8">
            <div className="loading-spinner mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft"></div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-foreground font-mono text-xl font-semibold gradient-text">
              nodir.dev
            </p>
            <p className="text-muted-foreground font-mono text-sm animate-pulse-soft">
              Initializing portfolio system...
            </p>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

        <div className="particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `scale(${0.5 + Math.random() * 0.5})`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.7 0.15 160 / 0.15) 0%, oklch(0.5 0.1 180 / 0.05) 30%, transparent 60%)`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>

        {mouseTrail.map((point, index) => (
          <div
            key={point.id}
            className="absolute pointer-events-none animate-fade-out"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity: ((index + 1) / mouseTrail.length) * 0.6,
              transform: `scale(${(index + 1) / mouseTrail.length})`,
            }}
          >
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse-soft"></div>
          </div>
        ))}

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-geometric opacity-10"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + i}s`,
              }}
            >
              <div
                className={`w-${4 + i} h-${4 + i} border border-primary/30 ${
                  i % 2 === 0 ? "rounded-full" : "rotate-45"
                } animate-spin-slow`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div
          className="animate-fade-in-up"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card mb-6 sm:mb-8 group hover:scale-105 transition-all duration-300 animate-pulse-soft">
              <div className="relative">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse-soft"></div>
                <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Available for new projects
              </span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-float-gentle" />
            </div>
          </div>

          <h1 className="font-bold text-responsive-xl mb-6 sm:mb-8 tracking-tight leading-none">
            <span className="gradient-text">nodir.dev</span>
          </h1>

          <div className="mb-6 sm:mb-8 h-16 sm:h-20 flex flex-col items-center justify-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-mono font-medium mb-2">
              {text}
              <span className="animate-pulse text-primary/60">|</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-mono">
              Specializing in{" "}
              <span className="text-primary font-semibold animate-gradient-shift">
                {skills[currentSkill]}
              </span>
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web
            technologies.
            <br className="hidden sm:block" />
            Building performant, accessible, and user-friendly applications that
            make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group text-sm sm:text-base"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <a href="/Resume.pdf">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto glass-card glass-hover px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent group border-primary/30 hover:border-primary/50 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
                <Code className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float-gentle cursor-pointer group"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="p-3 sm:p-4 rounded-full glass-card glass-hover group-hover:scale-110 transition-all duration-300">
          <ArrowDown className="text-primary group-hover:text-primary/80 transition-all group-hover:translate-y-1 duration-300 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll down
        </div>
      </div>
    </section>
  );
}
