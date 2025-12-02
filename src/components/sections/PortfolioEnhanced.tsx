"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Commercial", "Residential", "Interior", "Landscape"];

const projects = [
  {
    title: "Modern Corporate Headquarters",
    category: "Commercial",
    location: "New York, USA",
    year: "2024",
    image: "/images/portfolio/project-1.jpg",
  },
  {
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Los Angeles, USA",
    year: "2024",
    image: "/images/portfolio/project-2.jpg",
  },
  {
    title: "Minimalist Interior Design",
    category: "Interior",
    location: "San Francisco, USA",
    year: "2023",
    image: "/images/portfolio/project-3.jpg",
  },
  {
    title: "Urban Park & Recreation",
    category: "Landscape",
    location: "Seattle, USA",
    year: "2023",
    image: "/images/portfolio/project-4.jpg",
  },
  {
    title: "Boutique Hotel Design",
    category: "Commercial",
    location: "Miami, USA",
    year: "2024",
    image: "/images/portfolio/project-5.jpg",
  },
  {
    title: "Contemporary Family Home",
    category: "Residential",
    location: "Austin, USA",
    year: "2023",
    image: "/images/portfolio/project-6.jpg",
  },
  {
    title: "Office Space Renovation",
    category: "Interior",
    location: "Chicago, USA",
    year: "2024",
    image: "/images/portfolio/project-7.jpg",
  },
  {
    title: "Community Garden Project",
    category: "Landscape",
    location: "Portland, USA",
    year: "2023",
    image: "/images/portfolio/project-8.jpg",
  },
  {
    title: "Retail Space Design",
    category: "Commercial",
    location: "Boston, USA",
    year: "2024",
    image: "/images/portfolio/project-9.jpg",
  },
];

export default function PortfolioEnhanced() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold mb-4">
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Explore our diverse range of completed projects across different
            categories and locations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary hover:bg-secondary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-2xl">+</span>
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-primary uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="/portfolio" className="btn btn-secondary">
            View All Projects
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
