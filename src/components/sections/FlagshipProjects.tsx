"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    number: "01",
    title: "PENTHOUSE HORIZON",
    location: "Palm Jumeirah, Dubai",
    type: "Residential Villa",
    image: "/images/projects/villa-palm.jpg",
  },
  {
    number: "02",
    title: "CULTURAL ART GALLERY",
    location: "Business Bay, Dubai",
    type: "Commercial Building",
    image: "/images/projects/commercial-tower.jpg",
  },
  {
    number: "03",
    title: "SKYLINE TOWER LOBBY",
    location: "Dubai Marina",
    type: "Commercial Lobby",
    image: "/images/projects/villa-ranches.jpg",
  },
  {
    number: "04",
    title: "SEASIDE RETREAT VILLA",
    location: "Jumeirah Beach Residence",
    type: "Luxury Villa",
    image: "/images/projects/jbr-apartment.jpg",
  },
];

export default function FlagshipProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      if (sectionTop <= 0 && sectionTop + sectionHeight > windowHeight) {
        const scrolled = Math.abs(sectionTop);
        const totalScrollableHeight = sectionHeight - windowHeight;
        const progress = Math.min(scrolled / totalScrollableHeight, 1);

        // Determine active project based on scroll progress
        const projectIndex = Math.floor(progress * projects.length);
        const clampedIndex = Math.min(projectIndex, projects.length - 1);
        setActiveIndex(clampedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-[#E8E3DC] relative lg:min-h-[400vh]"
    >
      {/* Mobile Layout - Simple vertical list with images below each project */}
      <div className="lg:hidden py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-12 max-w-[1400px]">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
            className="mb-10"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-secondary/50 mb-3 sm:mb-4 font-medium">
              OUR PROJECTS
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-normal tracking-[-0.02em] leading-[1.15] text-dark">
              Crafting spaces that speak for themselves
            </h2>
          </motion.div>

          {/* Mobile Project List with Images */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.33, 0.02, 0, 0.93],
                }}
                className="space-y-4"
              >
                {/* Project Name */}
                <div className="flex items-center gap-3 py-3 border-b border-secondary/10">
                  <div className="text-xs font-heading tracking-tight text-dark font-normal min-w-[20px]">
                    {project.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-heading tracking-tight text-dark font-normal leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Image - Below the name */}
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden bg-white/20 backdrop-blur-sm rounded-lg">
                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-heading mb-2 tracking-tight font-light">
                      [{project.number}]
                    </div>
                    <div className="text-xs sm:text-sm tracking-[0.2em] uppercase font-light px-4 text-center">
                      {project.title}
                    </div>
                  </div>
                  {/* Uncomment when you have real images */}
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </motion.div>
            ))}

            {/* View Full Portfolio Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="/projects"
                className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-heading tracking-[0.15em] text-dark hover:gap-4 transition-all duration-500 uppercase font-medium"
              >
                VIEW FULL PORTFOLIO
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Sticky scroll with side-by-side layout */}
      <div className="hidden lg:block sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full py-8 lg:py-12">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 xl:gap-28 items-center">
              {/* Left Column - Header + Project List */}
              <div className="lg:pr-4 flex flex-col justify-center overflow-hidden">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
                  className="mb-8 lg:mb-10"
                >
                  <p className="text-[10px] lg:text-xs uppercase tracking-[0.25em] text-secondary/50 mb-3 lg:mb-4 font-medium">
                    OUR PROJECTS
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-normal tracking-[-0.02em] leading-[1.15] text-dark">
                    Crafting spaces that speak for themselves
                  </h2>
                </motion.div>

                {/* Project List */}
                <div className="space-y-0 overflow-hidden">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.number}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.33, 0.02, 0, 0.93],
                      }}
                      className={`group cursor-pointer transition-all duration-500 ${
                        activeIndex === index
                          ? "opacity-100"
                          : "opacity-30 hover:opacity-60"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 lg:gap-5 py-4 lg:py-5 border-b transition-all duration-500 ${
                          activeIndex === index
                            ? "border-dark/80"
                            : "border-secondary/10"
                        }`}
                      >
                        {/* Project Number */}
                        <div
                          className={`text-xs font-heading tracking-tight transition-all duration-500 min-w-[20px] ${
                            activeIndex === index
                              ? "text-dark font-normal"
                              : "text-secondary/40"
                          }`}
                        >
                          {project.number}
                        </div>

                        {/* Project Title */}
                        <div className="flex-1">
                          <h3
                            className={`text-sm lg:text-base xl:text-lg font-heading tracking-tight transition-all duration-500 leading-tight ${
                              activeIndex === index
                                ? "text-dark font-normal"
                                : "text-secondary/50"
                            }`}
                          >
                            {project.title}
                          </h3>
                        </div>

                        {/* Arrow Indicator */}
                        <div
                          className={`transition-all duration-500 ${
                            activeIndex === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-3"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 text-dark"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* View Full Portfolio Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-6 lg:pt-8"
                  >
                    <a
                      href="/projects"
                      className="inline-flex items-center gap-3 text-[11px] lg:text-xs font-heading tracking-[0.15em] text-dark hover:gap-4 transition-all duration-500 uppercase font-medium"
                    >
                      VIEW FULL PORTFOLIO
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Scrolling Images */}
              <div className="relative h-[50vh] lg:h-[65vh] xl:h-[70vh]">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.number}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : activeIndex > index ? -50 : 50,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.33, 0.02, 0, 0.93],
                    }}
                    className="absolute inset-0 overflow-hidden bg-white/20 backdrop-blur-sm"
                    style={{
                      zIndex: activeIndex === index ? 10 : 0,
                    }}
                  >
                    {/* Placeholder - Replace with actual images */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                      <div className="text-6xl lg:text-7xl xl:text-8xl font-heading mb-3 tracking-tight font-light">
                        [{project.number}]
                      </div>
                      <div className="text-xs lg:text-sm tracking-[0.2em] uppercase font-light">
                        {project.title}
                      </div>
                    </div>
                    {/* Uncomment when you have real images */}
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    /> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
