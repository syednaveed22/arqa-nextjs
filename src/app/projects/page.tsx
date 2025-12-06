"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    slug: "urban-wellness-spa",
    title: "Urban Wellness Spa",
    category: "Hospitality",
    year: "2025",
    description: "Inspired by Japanese minimalism and biophilic design, the spa seamlessly integrates natural elements, soft light, and mindful architecture to create",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    id: 2,
    slug: "the-vertical-hub",
    title: "The Vertical Hub",
    category: "Commercial",
    year: "2025",
    description: "By combining innovative spatial planning with biophilic design principles, The Vertical",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    id: 3,
    slug: "modular-office-space",
    title: "Modular Office Space",
    category: "Commercial",
    year: "2025",
    description: "By integrating smart technology, sustainable materials, and ergonomic design, this",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    id: 4,
    slug: "eco-lodge-retreat",
    title: "Eco-Lodge Retreat",
    category: "Hospitality",
    year: "2025",
    description: "Inspired by the raw beauty of the landscape, this retreat integrates eco-conscious",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    id: 5,
    slug: "the-horizon-house",
    title: "The Horizon House",
    category: "Residential",
    year: "2025",
    description: "Developed in collaboration with master craftsmen and sustainable material experts.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 6,
    slug: "minimalist-retreat",
    title: "Minimalist Retreat",
    category: "Residential",
    year: "2025",
    description: "Conceived as a seamless integration of architecture and landscape, this residence is a collaboration with skilled artisans and material specialists.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    id: 7,
    slug: "urban-courtyard-residence",
    title: "Urban Courtyard Residence",
    category: "Residential",
    year: "2022",
    description: "Crafted in collaboration with leading artisans and sustainable material specialists, the home embodies a refined",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
  },
  {
    id: 8,
    slug: "cliffside-boutique-hotel",
    title: "Cliffside Boutique Hotel",
    category: "Hospitality",
    year: "2025",
    description: "Panoramic vistas, sun-drenched terraces, and an intimate atmosphere redefine luxury, offering guests a serene haven",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: 9,
    slug: "the-future-workspace",
    title: "The Future Workspace",
    category: "Commercial",
    year: "2025",
    description: "This project transforms the workplace as a dynamic, adaptable ecosystem that fosters collaboration, creativity.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: 10,
    slug: "the-glass-pavilion",
    title: "The Glass Pavilion",
    category: "Residential",
    year: "2025",
    description: "Developed in collaboration with master craftsmen and sustainable material experts, the home embodies a refined",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 11,
    slug: "the-serenity-resort",
    title: "The Serenity Resort",
    category: "Hospitality",
    year: "2025",
    description: "Thoughtfully crafted spaces, open-air pavilions, and a deep respect for the surrounding ecosystem create an",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    id: 12,
    slug: "the-adaptive-mall",
    title: "The Adaptive Mall",
    category: "Commercial",
    year: "2025",
    description: "Designed for adaptability, the mall features modular store configurations, interactive digital experiences, and a",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Hospitality", "Commercial"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <main className="min-h-screen bg-[#FBF8F2]">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="container-custom">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-6 font-medium"
          >
            THE WORKS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-normal tracking-tight leading-[1.1] text-gray-900 mb-6 md:mb-8"
          >
            Our Projects
          </motion.h1>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 md:gap-3 justify-start sm:justify-end"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-normal text-gray-900 mb-2 md:mb-3 group-hover:text-gray-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3 md:gap-4 text-xs uppercase tracking-wider text-gray-400">
                        <span className="font-medium">{project.category}</span>
                        <span>|</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
