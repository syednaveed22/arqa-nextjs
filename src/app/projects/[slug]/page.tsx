"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData = [
  {
    id: 1,
    slug: "urban-wellness-spa",
    title: "Urban Wellness Spa",
    category: "COMMERCIAL",
    year: "2022",
    location: "Chicago, USA",
    type: "Commercial",
    area: "6,300 sq ft",
    services: ["Commercial Spaces", "Planning & Styling", "Furniture & Material"],
    description: "A grand corporate lobby reimagined with bold materials and timeless sophistication.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
    detailsTitle: "A Grand Entrance Redefining First Impressions",
    detailsText: "The Skyline Tower Lobby delivers a striking balance between grandeur and intimacy. Visitors are greeted with a design that feels both monumental and human-centered, where architectural scale meets refined detailing. The result is a lobby that not only enhances the identity of the building but also elevates everyday experiences, transforming the simple act of arrival into an inspiring first impression.",
    image1: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    summaryTitle: "Project Overview",
    summaryText: "The Skyline Tower Lobby delivers a striking balance between grandeur and intimacy. Visitors are greeted with a design that feels both monumental and human-centered, where architectural scale meets refined detailing. The result is a lobby that not only enhances the identity of the building but also elevates everyday experiences, transforming the simple act of arrival into an inspiring first impression.",
    briefTitle: "THE BRIEF",
    briefText: "The Skyline Tower Lobby was envisioned as more than just a transitional space—it was to be the heart of the building, setting the tone for both residents and visitors. The client requested a design that conveyed prestige and sophistication while remaining welcoming and functional. The lobby needed to reflect the tower's modern architectural identity while offering comfort, elegance, and a sense of belonging.",
    scopeTitle: "SCOPE OF WORK",
    scopeText: "Arrus developed a concept that treated the lobby as both a gateway and a gathering space. The design emphasized verticality to mirror the tower's soaring presence, with double-height ceilings and statement lighting fixtures that create a dramatic yet inviting ambiance. Materials were carefully chosen to balance strength and warmth: polished marble for timeless elegance, bronze accents for sophistication, and soft textiles to add comfort. Custom reception desks, bespoke seating arrangements, and art installations were integrated to guide flow and provide moments of pause. The planning also considered circulation efficiency, ensuring seamless movement while carving out intimate zones for waiting and social interaction.",
    image3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    image4: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    textSectionTitle: "Design Philosophy",
    textSectionContent: "We approached this project with a deep respect for the principles of 'Ma'—the Japanese concept of negative space. Rather than filling every corner, we designed voids, pauses, and moments of calm. Natural materials like stone, wood, and washi paper create tactile warmth, while carefully controlled lighting mimics the gentle rhythm of dawn and dusk.\n\nThe color palette is purposefully muted—soft grays, warm beiges, and natural wood tones—allowing the architecture to recede and the experience to take center stage. Water features, living plants, and filtered natural light bring the outside in, creating a biophilic environment that supports healing and restoration.",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ]
  },
  {
    id: 2,
    slug: "the-vertical-hub",
    title: "The Vertical Hub",
    category: "COMMERCIAL",
    year: "2023",
    location: "Financial District, Singapore",
    type: "Commercial",
    area: "50,000 sq ft",
    services: ["Architectural Design", "Workspace Strategy", "Sustainable Systems"],
    description: "A dynamic, adaptable environment that fosters collaboration, creativity, and well-being.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    detailsTitle: "Redefining Workplace",
    detailsText: "The Vertical Hub challenges conventional office design by creating a dynamic, adaptable environment that fosters collaboration, creativity, and well-being in equal measure.",
    image1: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
    summaryTitle: "Project Overview",
    summaryText: "This 50,000 sq ft commercial headquarters reimagines the modern workplace as a vertical ecosystem. Spanning 12 floors, the design integrates flexible workspaces, collaborative zones, wellness amenities, and sustainable technologies to create an environment where innovation thrives.",
    briefTitle: "THE BRIEF",
    briefText: "TechCorp Asia sought a headquarters that would reflect their values of innovation, sustainability, and employee well-being while accommodating rapid growth and changing work patterns.",
    scopeTitle: "SCOPE OF WORK",
    scopeText: "The design emphasized verticality to mirror the tower's soaring presence, with double-height ceilings and statement lighting fixtures that create a dramatic yet inviting ambiance. Materials were carefully chosen to balance strength and warmth: polished marble for timeless elegance, bronze accents for sophistication, and soft textiles to add comfort.",
    image3: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    image4: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    textSectionTitle: "Innovation & Sustainability",
    textSectionContent: "The Vertical Hub earned LEED Platinum certification through the integration of passive cooling strategies, rainwater harvesting, photovoltaic panels, and a comprehensive waste reduction program. Biophilic elements—including a central atrium garden, green walls, and natural ventilation—create a connection to nature that improves air quality and employee satisfaction.",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ]
  },
  {
    id: 9,
    slug: "the-future-workspace",
    title: "The Future Workspace",
    category: "COMMERCIAL",
    year: "2024",
    location: "Tech District, San Francisco",
    type: "Commercial",
    area: "35,000 sq ft",
    services: ["Interior Architecture", "Smart Technology", "Custom Millwork"],
    description: "A workspace that adapts to the evolving needs of modern teams through cutting-edge technology and human-centric design.",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80",
    detailsTitle: "Next Generation Office",
    detailsText: "The Future Workspace redefines the corporate environment by blending cutting-edge technology, sustainable practices, and human-centric design to create an office that adapts to the evolving needs of modern teams.",
    image1: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    summaryTitle: "Project Overview",
    summaryText: "Spanning 35,000 sq ft across three floors in San Francisco's tech corridor, this workspace is designed for maximum flexibility and creativity. The design embraces agile work methodologies with zones for collaboration, focused work, social interaction, and wellness—all seamlessly integrated through smart building technology.",
    briefTitle: "THE BRIEF",
    briefText: "Innovation Labs sought a workspace that would embody their forward-thinking culture while supporting diverse work styles, attracting top talent, and minimizing environmental impact.",
    scopeTitle: "SCOPE OF WORK",
    scopeText: "At the heart of the design is a sophisticated IoT infrastructure that learns from occupancy patterns and adjusts lighting, temperature, and air quality in real-time. The workspace features movable walls, modular furniture, and reconfigurable meeting spaces that can transform to support different team sizes and activities.",
    image3: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
    image4: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    textSectionTitle: "Adaptive & Connected",
    textSectionContent: "At the heart of the design is a sophisticated IoT infrastructure that learns from occupancy patterns and adjusts lighting, temperature, and air quality in real-time. The workspace features movable walls, modular furniture, and reconfigurable meeting spaces that can transform to support different team sizes and activities.\n\nBiophilic design principles guide material choices and spatial planning. Living green walls purify the air, while floor-to-ceiling windows flood spaces with natural light. Reclaimed wood, recycled textiles, and low-VOC finishes create a healthy environment that minimizes the building's carbon footprint.",
    galleryImages: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ]
  },
];

const allProjects = [
  {
    id: 1,
    slug: "urban-wellness-spa",
    title: "Urban Wellness Spa",
    category: "Hospitality",
    year: "2025",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    id: 2,
    slug: "the-vertical-hub",
    title: "The Vertical Hub",
    category: "Commercial",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    id: 3,
    slug: "modular-office-space",
    title: "Modular Office Space",
    category: "Commercial",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    id: 4,
    slug: "eco-lodge-retreat",
    title: "Eco-Lodge Retreat",
    category: "Hospitality",
    year: "2025",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    id: 5,
    slug: "the-horizon-house",
    title: "The Horizon House",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 6,
    slug: "minimalist-retreat",
    title: "Minimalist Retreat",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full width image with title overlay */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/80 mb-6 font-medium">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-normal tracking-tight leading-[1.1] mb-6 text-white">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
                YEAR
              </p>
              <p className="text-lg lg:text-xl font-heading text-gray-900">{project.year}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
                LOCATION
              </p>
              <p className="text-lg lg:text-xl font-heading text-gray-900">{project.location}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
                TYPE
              </p>
              <p className="text-lg lg:text-xl font-heading text-gray-900">{project.type}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
                AREA
              </p>
              <p className="text-lg lg:text-xl font-heading text-gray-900">{project.area}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 md:col-span-1"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
                SERVICES
              </p>
              <div>
                {project.services.map((service, idx) => (
                  <p key={idx} className="text-lg lg:text-xl font-heading text-gray-900 leading-tight m-0">
                    {service}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two Photos Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-gray-200"
            >
              <Image
                src={project.image1}
                alt={`${project.title} - Image 1`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-gray-200"
            >
              <Image
                src={project.image2}
                alt={`${project.title} - Image 2`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary & Brief/Scope Section */}
      <section className="py-16 lg:py-24 bg-[#FBF8F2]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Summary - Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-normal tracking-tight text-gray-900 mb-8 leading-[1.15]">
                {project.detailsTitle}
              </h2>
              <div className="space-y-6 text-[15px] lg:text-base leading-relaxed text-gray-600">
                {project.detailsText.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Brief & Scope - Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  {project.briefTitle}
                </h3>
                <p className="text-[15px] lg:text-base leading-relaxed text-gray-600">
                  {project.briefText}
                </p>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  {project.scopeTitle}
                </h3>
                <p className="text-[15px] lg:text-base leading-relaxed text-gray-600">
                  {project.scopeText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two More Images */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden bg-gray-200"
            >
              <Image
                src={project.image3}
                alt={`${project.title} - Image 3`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative aspect-[4/3] overflow-hidden bg-gray-200"
            >
              <Image
                src={project.image4}
                alt={`${project.title} - Image 4`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Text & Image Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="space-y-12 lg:space-y-16">
            {/* Text Content - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h3 className="text-3xl lg:text-4xl font-heading font-normal tracking-tight text-gray-900 mb-8 leading-[1.15]">
                {project.textSectionTitle}
              </h3>
              <div className="space-y-6 text-[15px] lg:text-base leading-relaxed text-gray-600 w-full text-justify">
                {project.textSectionContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify w-full">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Single Image - Full Width Below Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-gray-200"
            >
              <Image
                src={project.galleryImages[0] || project.image1}
                alt={`${project.title} - ${project.textSectionTitle}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-20 lg:py-28 bg-[#FBF8F2]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-normal tracking-tight text-gray-900 mb-2">
                Other Work
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.15em] text-gray-900 hover:gap-3 transition-all duration-300 font-medium"
              >
                VIEW FULL PORTFOLIO
                <svg
                  className="w-4 h-4"
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
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {otherProjects.map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects/${proj.slug}`} className="group block">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-6">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-heading font-normal text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gray-400">
                      <span>{proj.year}</span>
                      <span>,</span>
                      <span className="font-medium">{proj.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
