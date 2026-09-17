"use client";

import { Award, CheckCircle2, Terminal } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Main animation variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const workExperience = [
    {
      company: "ApexBart Solution",
      role: "Frontend Developer",
      period: "October 2024 - Present",
      type: "Remote",
      description:
        "Working on multiple projects with modern tech stack. Collaborating with international teams and delivering high-quality solutions.",
      highlights: [
        "Modern Frontend Development",
        "Team Collaboration",
        "Project Management",
      ],
      logo: "/apexbart.png",
    },
    {
      company: "SmartBase",
      role: "Frontend Developer",
      period: "August 2024 - January 2025",
      type: "Remote",
      description:
        "Worked on 3-4 team projects, enhanced algorithmic thinking, and gained solid experience in frontend-backend integration.",
      highlights: [
        "Team Projects",
        "Algorithm Development",
        "Full-Stack Integration",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19AKoHF9-qBv_673-WEUjsptSPrLnJ3eWxA&s",
    },
    {
      company: "Najot Ta'lim",
      role: "Assistant Instructor",
      period: "March 2024 - July 2024",
      type: "On-site",
      description:
        "Mentored students in frontend development, conducted code reviews, and assisted in curriculum development.",
      highlights: ["Teaching", "Mentoring", "Technical Leadership"],
      logo: "https://cdn.commeta.uz/media/uploaded/2023/09/26/najot_talim_logo.jpg",
    },
  ];

  const certifications = [
    {
      title: "Najot Ta'lim Certificate",
      description:
        "Successfully completed intensive training at Najot Ta'lim in frontend development, focusing on modern frameworks and clean coding practices.",
      image: "/najotTalim.jpg",
    },
    {
      title: "English B2 Multi-level Certificate",
      description:
        "Achieved B2 proficiency in English, demonstrating advanced understanding in reading, writing, listening, and speaking.",
      image: "/cefr.jpg",
    },
    {
      title: "Level of knowledge of the general education subject of history",
      description:
        "History — A+ Grade: Demonstrated strong knowledge and understanding of historical events, civilizations, and key historical concepts.",
      image: "/tarix.PNG",
    },
    {
      title:
        "Proficiency level in the general education subject of the Uzbek language",
      description:
        "Uzbek Language — C+ Grade: Demonstrated a good understanding of Uzbek grammar, language structure, and effective communication skills.",
      image: "/onatili.PNG",
    },
    {
      title: "International Law Student at UWED",
      description:
        "Currently studying International Law at the University of World Economy and Diplomacy (UWED), developing strong knowledge of international legal principles, treaties, diplomacy, and global legal frameworks.",
      image: "/uwed.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-black/50 relative overflow-hidden scroll-mt-20"
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="mb-6 font-mono text-sm text-muted-foreground animate-fade-in">
            <span className="text-primary">[PROFILE]</span> DEVELOPER INFO
          </div>

          <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl mb-6 matrix-text">
            ABOUT ME
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto font-mono leading-relaxed">
            <span className="text-primary">&gt;</span> Passionate frontend
            developer creating modern, responsive web applications with
            cutting-edge technologies and clean code practices.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 lg:mb-24"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="terminal-border rounded-xl p-8 relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-none hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 transition-opacity duration-500" />

              <img
                src="/nodirr17.jpg"
                alt="Nodir - Frontend Developer"
                className="w-[60%] mx-auto h-[250px] md:h-[400px] rounded-xl neon-glow relative z-10"
              />

              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Developer Profile */}
          <motion.div
            variants={containerVariants}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h3 className="font-mono font-semibold text-2xl lg:text-3xl mb-6 text-primary flex items-center">
                <Terminal className="w-7 h-7 mr-3" />
                DEVELOPER PROFILE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm lg:text-base">
                {[
                  { label: "Name", value: "Nodir" },
                  { label: "Role", value: "Frontend Developer" },
                  { label: "Experience", value: "1+ Years" },
                  { label: "Location", value: "Uzbekistan" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col space-y-1 p-3 rounded-lg bg-gray-900/30 border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-primary text-xs uppercase tracking-wider">
                      {item.label}
                    </span>

                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialization */}
            <div className="space-y-4">
              <p className="text-primary font-mono text-lg">Specialization:</p>

              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="text-muted-foreground font-mono leading-relaxed text-base lg:text-lg">
              I’m a passionate Frontend Developer focused on building modern,
              responsive, and user-friendly web applications. Alongside my
              development career, I am pursuing a degree in International Law at
              the University of World Economy and Diplomacy (UWED), with a
              particular interest in strengthening my knowledge of Digital Law
              and international legal frameworks. My goal is to combine
              technology and law to better understand and contribute to the
              rapidly evolving field of digital and international relations.
            </p>
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="terminal-border rounded-xl p-8 lg:p-12 hologram relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />

          <h3 className="font-mono font-semibold text-2xl lg:text-3xl mb-8 lg:mb-12 text-primary flex items-center">
            <Terminal className="w-7 h-7 mr-3" />
            TECH STACK & TOOLS
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Skills */}
            <div className="space-y-6">
              {[
                { name: "React", level: 95, category: "Framework" },
                { name: "Next.js", level: 90, category: "Framework" },
                { name: "TypeScript", level: 78, category: "Language" },
                { name: "Tailwind CSS", level: 92, category: "Styling" },
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-base lg:text-lg text-primary">
                      {skill.name}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-muted-foreground px-2 py-1 bg-gray-800/50 rounded">
                        {skill.category}
                      </span>

                      <span className="text-sm font-mono text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-primary/80 relative"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Skills */}
            <div className="space-y-6">
              {[
                { name: "JavaScript", level: 94, category: "Language" },
                { name: "Framer Motion", level: 50, category: "Animation" },
                { name: "Node.js", level: 30, category: "Backend" },
                { name: "Git & GitHub", level: 60, category: "Tools" },
              ].map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-base lg:text-lg text-primary">
                      {skill.name}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-muted-foreground px-2 py-1 bg-gray-800/50 rounded">
                        {skill.category}
                      </span>

                      <span className="text-sm font-mono text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-primary/80 relative"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${(index + 4) * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Experience */}
        <section className="py-20 relative">
          <div className="text-center mb-16">
            <h3 className="font-mono font-semibold text-3xl lg:text-4xl text-primary flex items-center justify-start gap-3">
              <Terminal className="w-8 h-8" />
              WORK EXPERIENCE
            </h3>
          </div>

          <div className="relative max-w-5xl mx-auto space-y-12">
            {workExperience.map((job, idx) => (
              <motion.div
                key={job.company}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-start gap-6 rounded-2xl bg-black/40 backdrop-blur-md p-8 border border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-500"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-30px] top-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />

                  {idx !== workExperience.length - 1 && (
                    <div className="w-px h-40 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Logo */}
                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-2xl font-mono font-bold text-primary">
                      {job.company}
                    </h4>

                    <p className="text-lg text-white/90 font-mono">
                      {job.role}
                    </p>

                    <p className="text-sm text-primary/80 font-semibold mt-1">
                      {job.period}
                    </p>

                    <span className="inline-block px-3 py-1 mt-2 text-sm font-mono rounded-full border border-primary/40 bg-primary/10 text-primary">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground font-mono leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {job.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-mono font-semibold text-3xl lg:text-4xl text-primary flex items-center justify-start gap-3">
              <Award className="w-8 h-8" />
              CERTIFICATIONS
            </h3>
          </div>

          <div className="max-w-6xl mx-auto grid gap-12 lg:gap-16">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.02 }}
                className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-black/40 backdrop-blur-md p-8 border border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-500"
              >
                {idx % 2 === 0 ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="rounded-xl shadow-lg h-[300px] object-contain mx-auto"
                    />

                    <div className="space-y-4">
                      <h4 className="text-xl font-mono font-semibold text-primary">
                        {cert.title}
                      </h4>

                      <p className="text-muted-foreground font-mono leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4 order-2 lg:order-1">
                      <h4 className="text-xl font-mono font-semibold text-primary">
                        {cert.title}
                      </h4>

                      <p className="text-muted-foreground font-mono leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="rounded-xl shadow-lg h-[300px] object-contain mx-auto order-1 lg:order-2"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
