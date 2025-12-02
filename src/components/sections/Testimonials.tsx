"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "David Thompson",
    role: "CEO, Tech Innovations",
    content:
      "Working with this team was an absolute pleasure. They transformed our office space into a modern, functional environment that our employees love. The attention to detail and professionalism was outstanding.",
    rating: 5,
    image: "/images/clients/client-1.jpg",
  },
  {
    name: "Jennifer Martinez",
    role: "Homeowner",
    content:
      "Our dream home became a reality thanks to their exceptional design expertise. They listened to our needs and delivered beyond our expectations. Every corner of our house reflects their creativity and skill.",
    rating: 5,
    image: "/images/clients/client-2.jpg",
  },
  {
    name: "Robert Johnson",
    role: "Restaurant Owner",
    content:
      "The commercial design they created for our restaurant is simply stunning. It perfectly captures our brand identity while providing an amazing dining experience for our customers. Highly recommended!",
    rating: 5,
    image: "/images/clients/client-3.jpg",
  },
  {
    name: "Lisa Anderson",
    role: "Real Estate Developer",
    content:
      "Professional, creative, and always on time. They managed our large-scale residential project flawlessly. The quality of work and communication throughout the process was exemplary.",
    rating: 5,
    image: "/images/clients/client-4.jpg",
  },
  {
    name: "Michael Brown",
    role: "Boutique Hotel Owner",
    content:
      "They completely transformed our hotel with a beautiful, contemporary design that our guests absolutely adore. The project was completed on schedule and within budget. Exceptional work!",
    rating: 5,
    image: "/images/clients/client-5.jpg",
  },
  {
    name: "Emily Davis",
    role: "Art Gallery Director",
    content:
      "The minimalist design they created for our gallery is perfect. It enhances the artwork while providing a sophisticated atmosphere. Their understanding of space and aesthetics is remarkable.",
    rating: 5,
    image: "/images/clients/client-6.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

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
            Client <span className="text-secondary">Testimonials</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-4xl font-heading font-bold text-secondary">
              4.7
            </span>
            <div>
              <div className="flex text-yellow-500 text-xl">
                {"★".repeat(5)}
              </div>
              <p className="text-sm text-secondary/60">
                Based on 1,000+ reviews
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-primary p-12 rounded-lg"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-secondary/60">{currentTestimonial.role}</p>
                <div className="flex text-yellow-500 text-lg mt-2">
                  {"★".repeat(currentTestimonial.rating)}
                </div>
              </div>
            </div>
            <p className="text-lg text-secondary/80 italic leading-relaxed">
              "{currentTestimonial.content}"
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-secondary w-8"
                      : "bg-secondary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
