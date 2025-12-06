"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Metadata } from "next";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    shortDesc: "Contemporary villa architecture tailored to Dubai's luxury real estate market",
    description: "We create architectural designs that blend modern aesthetics with functional excellence. Our team specializes in luxury villas, residential compounds, and high-end developments across Dubai and the UAE.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    approach: "Our architectural philosophy centers on creating timeless designs that respect context while pushing creative boundaries. We begin with comprehensive site analysis, considering climate, orientation, and surrounding environment to inform every design decision.",
    keyElements: [
      "Site analysis and environmental integration",
      "3D visualization and virtual walkthroughs",
      "Dubai Municipality compliance and approvals",
      "Sustainable design principles",
      "Material selection and specification"
    ]
  },
  {
    number: "02",
    title: "Interior Design",
    shortDesc: "Bespoke interior solutions that elevate living spaces to extraordinary experiences",
    description: "From concept to completion, we craft interior environments that reflect your vision and lifestyle. Our designs seamlessly integrate aesthetics, functionality, and the latest in luxury finishes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    approach: "We believe exceptional interiors emerge from understanding how spaces will be lived in. Our process involves deep collaboration with clients to create personalized environments that balance beauty with everyday functionality.",
    keyElements: [
      "Custom furniture and fixture design",
      "Lighting design and automation integration",
      "Premium material sourcing and procurement",
      "Space planning and flow optimization",
      "FF&E coordination and installation"
    ]
  },
  {
    number: "03",
    title: "Full-Home Renovation",
    shortDesc: "Complete transformation of existing properties into modern luxury residences",
    description: "We specialize in comprehensive renovations that reimagine existing spaces. Whether updating a villa in Emirates Hills or modernizing a Palm Jumeirah residence, we manage every detail from demolition to final finishes.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    approach: "Renovation requires a unique blend of vision and pragmatism. We assess structural potential, identify opportunities for enhancement, and develop phased execution plans that minimize disruption while maximizing transformation.",
    keyElements: [
      "Structural assessment and engineering",
      "Phased construction planning",
      "MEP system upgrades and modernization",
      "Permit coordination and approvals",
      "Quality control and project management"
    ]
  },
  {
    number: "04",
    title: "Project Management",
    shortDesc: "End-to-end oversight ensuring your vision is delivered on time and within budget",
    description: "Our project management services provide complete peace of mind. We coordinate all stakeholders, manage timelines, control costs, and maintain the highest quality standards throughout the construction process.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    approach: "Successful project delivery demands meticulous planning and proactive problem-solving. We implement rigorous systems for scheduling, budget tracking, and quality assurance while maintaining clear communication with all parties.",
    keyElements: [
      "Contractor selection and coordination",
      "Budget management and cost control",
      "Construction scheduling and milestones",
      "Quality inspections and compliance",
      "Client reporting and documentation"
    ]
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <main className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-6 font-medium"
            >
              OUR SERVICES
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-normal tracking-tight leading-[1.1] text-gray-900 mb-6 md:mb-8"
            >
              Comprehensive design & construction solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-gray-600 max-w-2xl"
            >
              From initial concept to final handover, we provide integrated services that bring exceptional properties to life across Dubai and the UAE.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-custom">
          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 max-w-[1600px] mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center"
              >
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-baseline gap-4 md:gap-6 mb-4 md:mb-6">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-light text-gray-200 leading-none">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-normal tracking-tight text-gray-900 leading-[1.15]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-gray-600 mb-4 md:mb-6">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500 mb-6 md:mb-8">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setSelectedService(index)}
                    className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-wide uppercase text-gray-900 hover:gap-4 transition-all duration-300"
                  >
                    LEARN MORE
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedService(index)}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6 font-medium">
                  START YOUR PROJECT
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white mb-4 md:mb-6">
                  Ready to build with Arqa?
                </h2>
                <p className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-white/70 mb-6 md:mb-8 max-w-xl">
                  Whether you're planning a custom villa, a signature commercial space, or a major renovation, Arqa Design & Build guides you from first sketch to handover with one accountable team.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-white/10">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1">80+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1">8+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Years in Dubai</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1">92%</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+971XXXXXXXXX"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Us Now</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-3 md:gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative aspect-square overflow-hidden bg-white/5"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                    alt="Architecture project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative aspect-square overflow-hidden bg-white/5 mt-8"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80"
                    alt="Interior design project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative aspect-square overflow-hidden bg-white/5 -mt-8"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80"
                    alt="Renovation project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative aspect-square overflow-hidden bg-white/5"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80"
                    alt="Construction project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex items-baseline gap-6 mb-8 pr-12">
                  <span className="text-5xl lg:text-6xl font-heading font-light text-gray-200 leading-none">
                    {services[selectedService].number}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-heading font-normal tracking-tight text-gray-900 leading-[1.15]">
                    {services[selectedService].title}
                  </h3>
                </div>

                {/* Images Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={services[selectedService].image}
                      alt={services[selectedService].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={services[selectedService].image}
                      alt={`${services[selectedService].title} detail`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mb-10">
                  <h4 className="text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                    Our Approach
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {services[selectedService].approach}
                  </p>
                </div>

                {/* Key Elements */}
                <div>
                  <h4 className="text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                    Key Elements
                  </h4>
                  <ul className="space-y-3">
                    {services[selectedService].keyElements.map((element, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] text-gray-600">
                        <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
