"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2005",
    label: "Established",
    icon: "🏛️",
  },
  {
    number: "100+",
    label: "Architects",
    icon: "👥",
  },
  {
    number: "1000+",
    label: "Projects Completed",
    icon: "🏗️",
  },
  {
    number: "50+",
    label: "Countries Worldwide",
    icon: "🌍",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
