"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [currentApproach, setCurrentApproach] = useState(0);

  const approaches = [
    {
      number: "01",
      title: "Innovative Design",
      description:
        "We believe architecture should push boundaries, blending creativity with cutting-edge technology to create spaces that are both aesthetically striking and highly functional. Our designs embrace bold concepts, meticulous craftsmanship, and future-ready solutions that redefine the way people experience their surroundings.",
      image: "/images/approach/innovative-design.jpg",
    },
    {
      number: "02",
      title: "Client-Centric Approach",
      description:
        "Every project starts with understanding our clients' vision, needs, and aspirations. We collaborate closely throughout the design process, ensuring that every detail aligns with their goals. Our tailored approach guarantees that each space is a true reflection of its users, balancing personal style with architectural excellence.",
      image: "/images/approach/client-centric.jpg",
    },
    {
      number: "03",
      title: "Sustainable Practices",
      description:
        "We integrate eco-conscious strategies into every stage of design and construction, prioritizing energy efficiency, sustainable materials, and minimal environmental impact. By focusing on longevity and responsible design choices, we create buildings that harmonize with their surroundings and stand the test of time.",
      image: "/images/approach/sustainable.jpg",
    },
  ];


  const team = [
    {
      name: "Syed Haseeb",
      role: "Founder and Lead Engineer",
      bio: "A specialist in construction management and site engineering. Syed focuses on overseeing project execution, ensuring structural integrity, and delivering high-quality engineering solutions that meet the highest standards of safety and performance.",
      image: "/images/team/team-1.jpg",
      linkedin: "#",
    },
    {
      name: "Sophie Bennett",
      role: "Senior Architect",
      bio: "With over 15 years of experience in sustainable design, Sophie brings innovative approaches to eco-friendly architecture and green building practices.",
      image: "/images/team/team-2.jpg",
      linkedin: "#",
    },
    {
      name: "Daniel Hayes",
      role: "Interior Designer",
      bio: "Blending form and function, Daniel creates interior spaces that reflect elegance, comfort, and practicality, bringing every design concept to life with meticulous detail.",
      image: "/images/team/team-3.jpg",
      linkedin: "#",
    },
    {
      name: "Marcus Chen",
      role: "Project Manager",
      bio: "Expert in coordinating complex architectural projects from concept to completion, ensuring timely delivery and exceptional quality standards.",
      image: "/images/team/team-4.jpg",
      linkedin: "#",
    },
    {
      name: "Isabella Rodriguez",
      role: "Sustainability Consultant",
      bio: "Passionate about environmental responsibility, Isabella integrates sustainable practices into every project, minimizing ecological impact.",
      image: "/images/team/team-1.jpg",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "Architectural Designer",
      bio: "Creative visionary specializing in contemporary design, James transforms bold ideas into functional architectural masterpieces.",
      image: "/images/team/team-2.jpg",
      linkedin: "#",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#1a1d23] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10 w-full py-20 sm:py-24 md:py-32 lg:py-40">
          {/* Top Section - About Studios */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold mb-4 md:mb-6 leading-[0.95] text-white">
                About Arqa
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Whether delivering luxury villas, commercial buildings, or tailored fit-outs, Arqa Design & Build focuses on creating spaces that perform beautifully, comply with Dubai's standards, and stand the test of time.
              </p>
            </motion.div>
          </div>

          {/* Vision, Mission, Core Value */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 border-t border-white/5 pt-8 md:pt-12 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 md:mb-4 text-white group-hover:text-gray-300 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                To shape Dubai's next generation of villas and buildings into refined, resilient spaces that perform flawlessly and age beautifully.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 md:mb-4 text-white group-hover:text-gray-300 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                To turn complex construction into a guided, transparent journey by uniting design, engineering, and build under one accountable team.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group sm:col-span-2 md:col-span-1"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 md:mb-4 text-white group-hover:text-gray-300 transition-colors duration-300">
                Our Core Values
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Clarity, craft, compliance, collaboration—building to Dubai's codes, speaking honestly, and treating every project as a true partnership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crafting Timeless Architecture */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#f5f5f0]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gray-200 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transition-transform duration-700 group-hover:scale-105"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
                INSIDE ARQA
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                Crafting Refined Spaces in Dubai
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base sm:text-lg">
                Arqa Design & Build was founded to bring architecture, engineering, and construction together into one clear, accountable process. From luxury villas to bespoke commercial projects, we create spaces that balance aesthetics, functionality, cost, and full compliance with Dubai's regulations.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base sm:text-lg">
                Our experience spans private homes, investment properties, and tailored fit-outs, with every project shaped around its context, purpose, and long-term value for owners and investors.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-4 md:mb-6 text-gray-900">
                Beyond Construction – A Vision for the Future
              </h3>
              <ul className="space-y-4 mb-8">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Dubai-Rooted – Deep understanding of local market, communities, and codes.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Integrated Design–Build – One team guiding projects from first sketch to handover.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Quality & Sustainability – Durable, efficient spaces designed to perform over time.
                  </span>
                </motion.li>
              </ul>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                OUR PROJECTS
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 md:gap-12 lg:gap-20 items-center max-w-[1600px] mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-6 font-medium">
                APPROACH
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-8 md:mb-12 text-gray-900 leading-[1.15]">
                Designing with Purpose, Innovation, and Sustainability
              </h2>

              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {approaches[currentApproach] && (
                    <motion.div
                      key={currentApproach}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="min-h-[200px]"
                    >
                      <h3 className="text-xl lg:text-2xl font-heading font-normal mb-5 text-gray-900 flex items-baseline gap-3">
                        <span className="text-gray-300 text-lg">{approaches[currentApproach].number}</span>
                        <span>{approaches[currentApproach].title}</span>
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-[1.75] max-w-xl">
                        {approaches[currentApproach].description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <motion.button
                    onClick={() =>
                      setCurrentApproach((prev) =>
                        prev > 0 ? prev - 1 : approaches.length - 1
                      )
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all duration-300 shadow-sm"
                    aria-label="Previous approach"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button
                    onClick={() =>
                      setCurrentApproach((prev) =>
                        prev < approaches.length - 1 ? prev + 1 : 0
                      )
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all duration-300 shadow-sm"
                    aria-label="Next approach"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden order-1 lg:order-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentApproach}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
                >
                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-heading text-gray-300 mb-3 font-light">
                        [{approaches[currentApproach].number}]
                      </div>
                      <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-gray-400 font-light">
                        {approaches[currentApproach].title}
                      </div>
                    </div>
                  </div>
                  {/* Uncomment when you have real images */}
                  {/* <img
                    src={approaches[currentApproach].image}
                    alt={approaches[currentApproach].title}
                    className="w-full h-full object-cover"
                  /> */}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#1a1d23] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-3 md:mb-4 font-medium">
              MEMBER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40, rotateZ: -2 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  scale: 1.03,
                  rotateZ: 0,
                  y: -8,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative cursor-pointer"
              >
                {/* Polaroid Card */}
                <div className="shadow-2xl group-hover:shadow-3xl transition-all duration-700 ease-out relative overflow-hidden">
                  {/* Photo Area */}
                  <div className="relative h-[350px] sm:h-[400px] md:h-[450px] bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transform transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"></div>

                    {/* Info Overlay - Always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-5 transform transition-all duration-700 ease-out group-hover:bg-black/90 group-hover:backdrop-blur-md">
                      <h3 className="text-white font-heading font-bold text-lg mb-1 transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                        {member.name}
                      </h3>
                      <p className="text-gray-200 text-sm font-medium transform transition-opacity duration-500 group-hover:opacity-80">
                        {member.role}
                      </p>
                    </div>

                    {/* Expandable Bio Section */}
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-md p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform scale-98 group-hover:scale-100">
                      <div className="text-center">
                        <h3 className="text-white font-heading font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-4">
                          {member.role}
                        </p>
                        <p className="text-gray-200 text-sm leading-relaxed mb-6">
                          {member.bio}
                        </p>

                        {/* LinkedIn Icon */}
                        <motion.a
                          href={member.linkedin}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex w-12 h-12 bg-white text-gray-900 rounded-full items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-6 font-medium">
              OUR COMMITMENT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-4 text-gray-900 leading-tight">
              Why Choose Arqa
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {/* 120+ Approvals Secured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-2">120+</div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  APPROVALS SECURED
                </p>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Building permits and authority approvals obtained across Dubai—Dubai Municipality, Civil Defence, utilities, and community NOCs for villas and commercial projects.
              </p>
            </motion.div>

            {/* 92% On-Time Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-2">92%</div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  ON-TIME DELIVERY
                </p>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Projects completed on or before schedule through disciplined planning, weekly tracking, and tight coordination between design, engineering, and site teams.
              </p>
            </motion.div>

            {/* 88% Budget Reliability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-2">88%</div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  BUDGET RELIABILITY
                </p>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Projects delivered within the agreed budget range, backed by transparent cost plans, early value engineering, and continuous commercial control.
              </p>
            </motion.div>

            {/* 68% Repeat & Referral Clients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-2">68%</div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  REPEAT & REFERRAL CLIENTS
                </p>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Of new projects come from existing clients and referrals—reflecting long-term trust in Arqa's quality, communication, and end-to-end accountability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
