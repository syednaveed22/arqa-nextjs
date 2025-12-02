"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary pt-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold mb-6"
          >
            Modern Portfolio &{" "}
            <span className="text-secondary">Creative</span> Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary/80 mb-10 max-w-2xl mx-auto"
          >
            We create beautiful, functional, and memorable digital experiences
            that help businesses grow and thrive in the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="btn btn-secondary">
              Get Started
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
