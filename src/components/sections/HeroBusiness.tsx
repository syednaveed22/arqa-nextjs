"use client";

import { motion } from "framer-motion";

export default function HeroBusiness() {
  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark/98 to-dark/95">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/50" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 0.02, 0, 0.93] }}
            className="text-center mb-6 md:mb-8"
          >
            <span className="block text-white font-heading font-normal leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Luxury Villa Design &
            </span>
            <span className="block text-white font-heading font-normal leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Construction{" "}
              <span className="text-accent relative inline-block">
                Specialists
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent origin-left"
                />
              </span>
            </span>
            <span className="block text-white/70 font-heading font-normal leading-[1.1] tracking-tighter text-2xl sm:text-3xl md:text-4xl">
              in Dubai
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 0.02, 0, 0.93] }}
            className="text-center text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Full-service architecture and construction for investors, developers, and homeowners across the UAE
          </motion.p>

          {/* Key Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 0.02, 0, 0.93] }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12 text-xs sm:text-sm md:text-base px-4"
          >
            {[
              "Dubai Municipality Approved",
              "Al Safat Certified",
              "98% On-Time Delivery"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: [0.33, 0.02, 0, 0.93] }}
                className="flex items-center gap-2 text-white/80"
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 0.02, 0, 0.93] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => handleScrollTo('#contact')}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent text-white font-semibold text-sm tracking-wide uppercase overflow-hidden transition-all duration-500 hover:gap-4 hover:px-12"
            >
              <span className="relative z-10">Request Project Consultation</span>
              <svg
                className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-dark scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.33,0.02,0,0.93)] group-hover:scale-y-100"></span>
            </button>

            <a
              href="tel:+971XXXXXXXXX"
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-white/20 text-white font-semibold text-sm tracking-wide uppercase backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-dark hover:border-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 0.02, 0, 0.93] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 border-t border-white/10"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "AED 2B+", label: "Project Value" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: [0.33, 0.02, 0, 0.93] }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-1 md:mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScrollTo('#services')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300"
          aria-label="Scroll to services"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
