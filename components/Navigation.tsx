"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Code2,
  Home,
  User,
  Briefcase,
  Mail,
  Award,
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "certifications",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },

    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card backdrop-blur-xl border-b border-primary/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center space-x-3 text-xl font-bold group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="relative p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 overflow-hidden">
              <Code2 className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              <div className="absolute -inset-1 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
            <span className="gradient-text font-mono text-lg group-hover:scale-105 transition-transform duration-300">
              nodir.dev
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium group overflow-hidden ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-inner"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon
                    size={16}
                    className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item.label}
                  </span>

                  {isActive && (
                    <>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
                    </>
                  )}

                  <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-soft"></div>
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-card hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <Menu
                size={20}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 rotate-180 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={20}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-180 scale-75"
                }`}
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <div
          className={`md:hidden fixed -top-4 -right-4  min-h-screen w-80   z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950  min-h-[100vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden"
              aria-label="Close menu"
            >
              <div className="relative w-5 h-5">
                <X
                  size={20}
                  className="absolute transition-all duration-300 opacity-100 rotate-0 scale-100"
                />
              </div>
            </button>

            <div className="mt-4 p-4 glass-card rounded-xl space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center gap-3 py-3 px-3 rounded-lg transition-all duration-300 font-medium border-b border-white/5 last:border-b-0 animate-slide-in-right ${
                      isActive
                        ? "text-primary bg-primary/10 shadow-inner"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
