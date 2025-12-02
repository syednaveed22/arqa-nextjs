"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Meet with our team to discuss your vision, budget, timeline, and project requirements. Site visit and feasibility assessment included.",
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "Budget Estimate", "Timeline Proposal"],
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our architects create detailed designs, 3D renderings, and technical drawings. Value engineering to optimize costs without compromising quality.",
    duration: "4-6 weeks",
    deliverables: ["Architectural Drawings", "3D Renders", "Material Specs"],
  },
  {
    number: "03",
    title: "Approvals & Permits",
    description:
      "Handle all Dubai Municipality approvals, Al Safat certification, NOCs, and regulatory compliance. We manage the entire approval process.",
    duration: "6-8 weeks",
    deliverables: ["Building Permit", "NOC Approvals", "Al Safat Certificate"],
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Professional construction team executes the project with regular quality checks, progress updates, and milestone payments. Full transparency guaranteed.",
    duration: "Project-specific",
    deliverables: ["Weekly Updates", "Quality Reports", "Site Access"],
  },
  {
    number: "05",
    title: "Handover & Support",
    description:
      "Final inspections, snagging, and project handover with all documentation. 12-month warranty and ongoing maintenance support included.",
    duration: "2-4 weeks",
    deliverables: ["Completion Certificate", "Warranty Documents", "O&M Manuals"],
  },
];

export default function ProcessBusiness() {
  return (
    <section id="process" className="py-24 bg-primary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
            Our streamlined 5-step process ensures your project is delivered
            on-time, within budget, and to the highest quality standards.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-full bg-secondary/20 -z-10" />
              )}

              <div className="flex gap-8 mb-12">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-secondary text-white flex items-center justify-center relative z-10">
                    <span className="text-3xl font-heading font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-8 rounded-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-heading font-bold">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary text-secondary text-sm font-medium rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-secondary/70 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <div className="text-sm font-medium text-secondary/60 mb-2">
                      Key Deliverables:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-3 py-1 bg-primary/50 text-secondary text-sm rounded"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-lg text-secondary/80 mb-6">
            Ready to start your project? Let's discuss your requirements.
          </p>
          <a href="#contact" className="btn btn-secondary text-lg px-8">
            Schedule Free Consultation
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
