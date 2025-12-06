"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Residential Design",
    description:
      "Transform houses into homes with interiors that reflect personal style, comfort, and elegance.",
    image: "/images/services/residential.jpg",
    link: "/services/residential-design",
  },
  {
    title: "Commercial Spaces",
    description:
      "Create functional, inspiring environments for offices, retail, and hospitality that elevate brand and productivity.",
    image: "/images/services/commercial.jpg",
    link: "/services/commercial-spaces",
  },
  {
    title: "Planning & Styling",
    description:
      "Create functional, inspiring environments for offices, retail, and hospitality that elevate brand and productivity.",
    image: "/images/services/planning.jpg",
    link: "/services/planning-styling",
  },
  {
    title: "Furniture & Material",
    description:
      "Create functional, inspiring environments for offices, retail, and hospitality that elevate brand and experience.",
    image: "/images/services/furniture.jpg",
    link: "/services/furniture-material",
  },
];

export default function ServicesBusiness() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
            className="mb-6 lg:mb-0"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-secondary/60 mb-3 md:mb-4">
              SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.15] max-w-2xl">
              Design solutions tailored to your lifestyle
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-dark hover:gap-4 transition-all duration-300 font-medium"
            >
              EXPLORE OUR SERVICES
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
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.33, 0.02, 0, 0.93],
              }}
              className="group"
            >
              <Link href={service.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary/5 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-secondary/20 text-sm">
                    [{service.title.toUpperCase()}]
                  </div>

                  {/* Uncomment when you have real images */}
                  {/* <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  /> */}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-heading font-normal mb-3 tracking-tight group-hover:text-secondary/80 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
