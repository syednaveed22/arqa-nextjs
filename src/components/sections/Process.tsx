"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Receive & Analyze",
    description: "We carefully review your requirements and project goals to understand your vision.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Conceptualization",
    description: "Our team creates initial concepts and design ideas tailored to your needs.",
    icon: "💡",
  },
  {
    number: "03",
    title: "Detailed Drawings",
    description: "We develop comprehensive technical drawings and specifications.",
    icon: "📐",
  },
  {
    number: "04",
    title: "Documents Submission",
    description: "All necessary documentation is prepared and submitted for approval.",
    icon: "📄",
  },
  {
    number: "05",
    title: "Supervision & Handover",
    description: "We oversee implementation and ensure smooth project completion.",
    icon: "✅",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4">
            Our <span className="text-secondary">Process</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from
            concept to completion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-primary z-0" />
              )}

              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                <div className="mb-4">
                  <span className="text-6xl font-heading font-bold text-primary/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary/70 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
