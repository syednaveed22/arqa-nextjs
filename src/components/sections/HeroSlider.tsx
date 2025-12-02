"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Where Innovation Meets Timeless Design",
    subtitle: "Creating spaces that inspire",
    description: "With over 20 years of experience, we transform visions into architectural masterpieces.",
    image: "/images/hero/slide-1.jpg",
    cta: { text: "Explore Our Work", link: "#portfolio" },
  },
  {
    title: "Blending Tradition With Bold Innovation",
    subtitle: "Modern architecture, classic values",
    description: "We honor architectural heritage while pushing the boundaries of contemporary design.",
    image: "/images/hero/slide-2.jpg",
    cta: { text: "Our Services", link: "/services" },
  },
  {
    title: "Where Creativity Meets Lasting Style",
    subtitle: "Sustainable design solutions",
    description: "Building environments that stand the test of time with eco-conscious practices.",
    image: "/images/hero/slide-3.jpg",
    cta: { text: "Get Started", link: "#contact" },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-dark/50">
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container-custom text-center text-white z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-primary uppercase tracking-widest mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading font-bold mb-6 max-w-4xl mx-auto"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={slides[currentSlide].cta.link}
                  className="btn bg-primary text-dark hover:bg-white"
                >
                  {slides[currentSlide].cta.text}
                  <span className="ml-2">→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary text-white hover:text-dark rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary text-white hover:text-dark rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-primary"
                : "w-8 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
