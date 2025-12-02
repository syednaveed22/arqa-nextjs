"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-6">
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.15] max-w-4xl">
            Shaping the Future of Architecture with Innovation, Precision, and Timeless Design
          </h2>
        </motion.div>

        {/* Vision, Mission, Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 0.02, 0, 0.93] }}
          >
            <h3 className="text-lg font-heading font-semibold mb-4 tracking-tight">
              Our Vision
            </h3>
            <p className="text-secondary/70 text-[15px] leading-relaxed">
              To redefine modern architecture by creating inspiring, sustainable, and functional spaces that shape the future.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 0.02, 0, 0.93] }}
          >
            <h3 className="text-lg font-heading font-semibold mb-4 tracking-tight">
              Our Mission
            </h3>
            <p className="text-secondary/70 text-[15px] leading-relaxed">
              To deliver innovative, client-focused architectural solutions that blend aesthetics, efficiency, and environmental responsibility.
            </p>
          </motion.div>

          {/* Core Value */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 0.02, 0, 0.93] }}
          >
            <h3 className="text-lg font-heading font-semibold mb-4 tracking-tight">
              Core Value
            </h3>
            <p className="text-secondary/70 text-[15px] leading-relaxed">
              To uphold innovation, sustainability, excellence, and collaboration in every project, ensuring timeless design and meaningful impact.
            </p>
          </motion.div>
        </div>

        {/* Three Column Layout with Images - Sleek Balanced Design */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Left Column - Text First, Then Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 0.02, 0, 0.93] }}
            className="flex flex-col"
          >
            {/* Philosophy Text at Top */}
            <div className="mb-6">
              <p className="text-secondary/70 text-[15px] leading-relaxed">
                At Arqa, we believe architecture is more than just constructing spaces—it's about crafting experiences, fostering connections, and leaving a lasting impact.
              </p>
            </div>

            {/* Image fills remaining space */}
            <div className="relative flex-1 min-h-[400px] overflow-hidden bg-secondary/5 group">
              <div className="absolute inset-0 flex items-center justify-center text-secondary/20 text-sm">
                [Modern Interior Image]
              </div>
              {/* <img
                src="/images/about/interior-minimal.jpg"
                alt="Modern minimalist interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}
            </div>
          </motion.div>

          {/* Middle Column - Image + Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 0.02, 0, 0.93] }}
            className="flex flex-col"
          >
            {/* Image fills space minus text height */}
            <div className="relative flex-1 min-h-[500px] overflow-hidden bg-secondary/5 group mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-secondary/20 text-sm">
                [Villa Architecture Image]
              </div>
              {/* <img
                src="/images/about/villa-exterior.jpg"
                alt="Modern villa with pool"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}
            </div>

            {/* Description Text */}
            <div>
              <p className="text-secondary/70 text-[15px] leading-relaxed">
                With a deep commitment to creativity, sustainability, and functionality, our expert team transforms ideas into extraordinary built environments.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Large Image + Text + Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 0.02, 0, 0.93] }}
            className="flex flex-col"
          >
            {/* Large Image */}
            <div className="relative flex-1 min-h-[500px] overflow-hidden bg-secondary/5 group mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-secondary/20 text-sm">
                [Interior Living Space Image]
              </div>
              {/* <img
                src="/images/about/interior-living.jpg"
                alt="Luxury living space with natural light"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}
            </div>

            {/* Description Text */}
            <div>
              <p className="text-secondary/70 text-[15px] leading-relaxed mb-6">
                From visionary residential designs to groundbreaking commercial spaces, we seamlessly blend artistry with practicality. Every project we undertake is a testament to our passion for design excellence, meticulous attention to detail, and client-centered approach.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-dark text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-dark/90"
                >
                  More About Us
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-accent/90"
                >
                  Our Works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
