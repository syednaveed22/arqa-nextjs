"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/project-1.jpg",
    description: "Modern online store with seamless checkout experience",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/images/portfolio/project-2.jpg",
    description: "Complete brand redesign for tech startup",
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "/images/portfolio/project-3.jpg",
    description: "Social networking app with real-time features",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    image: "/images/portfolio/project-4.jpg",
    description: "Professional website for consulting firm",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/project-5.jpg",
    description: "Multi-channel campaign driving 300% ROI",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/images/portfolio/project-6.jpg",
    description: "Intuitive analytics dashboard for B2B platform",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4">
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Explore our recent work and see how we've helped businesses achieve
            their goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-primary aspect-[4/3]">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-heading text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    +
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-secondary/60 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-heading font-bold">
                  {project.title}
                </h3>
                <p className="text-secondary/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
