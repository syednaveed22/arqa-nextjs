"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description:
      "Beautiful, user-friendly designs that captivate your audience and enhance user experience.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Robust, scalable web applications built with the latest technologies and best practices.",
    icon: "💻",
  },
  {
    title: "Branding",
    description:
      "Comprehensive brand identity solutions that help your business stand out from the crowd.",
    icon: "✨",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns that drive traffic, engagement, and conversions.",
    icon: "📈",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and increase organic traffic to your website.",
    icon: "🔍",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance and strategic advice to help you make informed business decisions.",
    icon: "💡",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business
            succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-secondary/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
