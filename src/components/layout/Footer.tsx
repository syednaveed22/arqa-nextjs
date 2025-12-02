"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const workLinks = [
  { name: "Penthouse Horizon", href: "/projects" },
  { name: "Cultural Art Gallery", href: "/projects" },
  { name: "Skyline Tower Lobby", href: "/projects" },
  { name: "Seaside Retreat Villa", href: "/projects" },
];

const studioLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Pinterest", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // Smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#FBF8F2] text-[#121212]">
      {/* Let's Talk CTA Section */}
      <section className="border-b border-gray-300">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-12 lg:py-14">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#121212] mb-4 leading-tight">
                Let's Talk!
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Ready to take the first step toward realizing your dream project? Contact us today
                for a consultation and let's turn your vision into a reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#121212] hover:gap-3 transition-all duration-300 underline decoration-[#121212] underline-offset-4"
              >
                BOOK A CONSULTATION
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Information Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight">
                ARQA
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Designing the Future, One Space at a Time
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="leading-relaxed">
                    500 Park Avenue, 12th Floor, Suite 1205
                    <br />
                    New York, NY 10022, USA
                  </p>
                </div>
                <div>
                  <p className="mb-1">Mail us:</p>
                  <a
                    href="mailto:contact@arqa.com"
                    className="underline hover:no-underline transition-all"
                  >
                    contact@arqa.com
                  </a>
                </div>
                <div>
                  <p className="mb-1">Call us:</p>
                  <a
                    href="tel:+12125557890"
                    className="hover:underline transition-all"
                  >
                    +1 (212) 555-7890
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Work Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-bold uppercase tracking-wide mb-4 text-[#121212]">
              Work
            </h4>
            <ul className="space-y-2">
              {workLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-700 hover:text-[#121212] underline underline-offset-4 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Studio Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-bold uppercase tracking-wide mb-4 text-[#121212]">
              Studio
            </h4>
            <ul className="space-y-2">
              {studioLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-700 hover:text-[#121212] underline underline-offset-4 transition-colors duration-300"
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base font-bold mb-3 text-[#121212] leading-tight">
              Sign up to receive the latest news and events from us.
            </h4>
            <form onSubmit={handleEmailSubmit} className="mt-4">
              <label htmlFor="newsletter-email" className="block text-xs text-gray-600 mb-2">
                Your Email*
              </label>
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  required
                  className="flex-1 px-0 py-2 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#121212] transition-colors duration-300 text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#121212] text-white px-6 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300"
                >
                  SEND
                </button>
              </div>
              <p className="text-xs text-gray-600">
                No worries, we don't spam your inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] pt-4 pb-3">
          <div className="flex justify-center md:justify-end items-center">
              <p className="text-sm text-gray-700 m-0">
                © {currentYear} Arqa. All Rights Reserved
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
