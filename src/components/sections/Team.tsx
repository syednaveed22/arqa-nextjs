"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "/images/team/team-1.jpg",
    bio: "20+ years of experience in architectural design and project management.",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "/images/team/team-2.jpg",
    bio: "Award-winning designer specializing in modern minimalist aesthetics.",
  },
  {
    name: "Michael Chen",
    role: "Lead Architect",
    image: "/images/team/team-3.jpg",
    bio: "Expert in sustainable architecture and green building practices.",
  },
  {
    name: "Emma Williams",
    role: "Interior Designer",
    image: "/images/team/team-4.jpg",
    bio: "Passionate about creating functional and beautiful living spaces.",
  },
];

export default function Team() {
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
            Meet Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Our talented team of professionals brings creativity, expertise, and
            dedication to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-white aspect-[3/4]">
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-heading font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary/60 text-sm uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-secondary/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
