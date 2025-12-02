"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const achievements = [
  {
    number: 1240,
    suffix: "+",
    label: "Realized Projects",
    icon: "🏗️",
  },
  {
    number: 12,
    suffix: "",
    label: "Regional Offices",
    icon: "🌍",
  },
  {
    number: 46,
    suffix: "",
    label: "Years of Experience",
    icon: "📅",
  },
  {
    number: 180,
    suffix: "+",
    label: "Team Members",
    icon: "👥",
  },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = end / (duration * 60); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function Achievements() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4 text-white">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Numbers that speak to our commitment to excellence and our impact
            in the architecture industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>

              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">
                  <CountUp end={achievement.number} />
                  {achievement.suffix}
                </span>
              </div>

              <p className="text-white/80 uppercase tracking-wider text-sm">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
