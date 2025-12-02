"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Emaar Properties",
    logo: "/images/clients/emaar.png",
  },
  {
    name: "Dubai Properties",
    logo: "/images/clients/dubai-properties.png",
  },
  {
    name: "Nakheel",
    logo: "/images/clients/nakheel.png",
  },
  {
    name: "Damac Properties",
    logo: "/images/clients/damac.png",
  },
  {
    name: "Meraas",
    logo: "/images/clients/meraas.png",
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-y border-secondary/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-sm uppercase tracking-wider text-secondary/60 mb-8">
            Trusted by Leading Developers & Investors
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder for logo */}
              <div className="w-full h-16 bg-primary/30 rounded flex items-center justify-center group hover:bg-primary transition-colors duration-300">
                <span className="text-sm font-medium text-secondary/60 group-hover:text-secondary transition-colors">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-secondary/80 italic mb-4">
            "Outstanding professionalism and quality. They delivered our 15M AED
            villa project on time and exceeded our expectations in every aspect."
          </p>
          <p className="text-secondary/60">
            — Ahmed Al-Mansoori, Private Investor
          </p>
        </motion.div>
      </div>
    </section>
  );
}
