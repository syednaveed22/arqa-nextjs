"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What design services do you offer?",
    answer:
      "We offer comprehensive design services including residential design, commercial projects, landscape design, interior design, and remodeling. Our team handles everything from initial concept to final implementation.",
  },
  {
    question: "Can you customize designs according to my preferences?",
    answer:
      "Absolutely! We pride ourselves on creating bespoke designs tailored to each client's unique vision, lifestyle, and requirements. Your input is essential throughout the design process.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Project costs vary based on scope, complexity, and specific requirements. We offer transparent pricing and provide detailed quotes after an initial consultation. Contact us for a personalized estimate.",
  },
  {
    question: "Do you collaborate with contractors and suppliers?",
    answer:
      "Yes, we work with a trusted network of contractors, suppliers, and craftsmen. We can coordinate the entire project or collaborate with your preferred partners to ensure smooth execution.",
  },
  {
    question: "What happens after project completion?",
    answer:
      "We provide post-completion support including final walkthroughs, addressing any concerns, and offering maintenance guidance. We maintain relationships with our clients for future projects and consultations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timeline varies by project scope. A residential design might take 3-6 months, while larger commercial projects can span 6-12 months or more. We provide detailed schedules during the planning phase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Got questions? We've got answers. Browse through our most commonly
            asked questions below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-heading font-bold pr-8">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold text-secondary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-secondary/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
