"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold mb-6">
              About <span className="text-secondary">Us</span>
            </h2>
            <p className="text-secondary/80 mb-6">
              We are a creative studio focused on delivering exceptional digital
              experiences. With over 10 years of experience, we've helped hundreds
              of clients bring their visions to life.
            </p>
            <p className="text-secondary/80 mb-8">
              Our team combines creativity, technical expertise, and strategic
              thinking to create solutions that not only look great but also
              drive real business results.
            </p>
            <a href="#contact" className="btn btn-primary">
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-5xl font-heading font-bold text-secondary mb-2">
                10+
              </h3>
              <p className="text-secondary/70">Years Experience</p>
            </div>
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-5xl font-heading font-bold text-secondary mb-2">
                500+
              </h3>
              <p className="text-secondary/70">Projects Done</p>
            </div>
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-5xl font-heading font-bold text-secondary mb-2">
                100%
              </h3>
              <p className="text-secondary/70">Client Satisfaction</p>
            </div>
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-5xl font-heading font-bold text-secondary mb-2">
                50+
              </h3>
              <p className="text-secondary/70">Team Members</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
