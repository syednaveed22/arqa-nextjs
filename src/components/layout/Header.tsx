"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Pages with dark hero sections that need transparent navbar initially
  const darkHeroPages = ["/", "/about"];
  const isDarkHeroPage = darkHeroPages.includes(pathname);
  
  // Initialize state: dark hero pages start with white text (false), others with black text (true)
  const [isLightBackground, setIsLightBackground] = useState(!isDarkHeroPage);

  // Handle scroll to update scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // For dark hero pages: when scrolled, switch to light background with black text
      if (isDarkHeroPage) {
        setIsLightBackground(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkHeroPage]);

  // Reset state when pathname changes
  useEffect(() => {
    setIsScrolled(false);
    setIsLightBackground(!isDarkHeroPage);
  }, [pathname, isDarkHeroPage]);

  // Background detection for other pages (not dark hero pages)
  useEffect(() => {
    if (isDarkHeroPage) {
      // Skip detection for dark hero pages - they are handled by scroll logic
      return;
    }

    const detectBackground = () => {
      if (isScrolled) {
        setIsLightBackground(true);
        return;
      }

      // Check pathname for known light pages
      const lightPages = ["/services"];
      if (lightPages.includes(pathname)) {
        setIsLightBackground(true);
        return;
      }

      // Try to get the main content element
      const mainElement = document.getElementById("pxl-main") || 
                          document.querySelector("main") || 
                          document.body;

      // Check for background color classes
      const hasLightBg = 
        mainElement.classList.contains("bg-[#FBF8F2]") ||
        mainElement.classList.contains("bg-white") ||
        mainElement.classList.contains("bg-primary") ||
        mainElement.classList.contains("bg-gray-50") ||
        mainElement.classList.contains("bg-gray-100");
      
      const hasDarkBg = 
        mainElement.classList.contains("bg-[#121212]") ||
        mainElement.classList.contains("bg-dark") ||
        mainElement.classList.contains("bg-black") ||
        mainElement.classList.contains("bg-gray-900");

      if (hasLightBg) {
        setIsLightBackground(true);
        return;
      }
      if (hasDarkBg) {
        setIsLightBackground(false);
        return;
      }

      // Default to light background for other pages
      setIsLightBackground(true);
    };

    const timer = setTimeout(detectBackground, 100);
    window.addEventListener("resize", detectBackground);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", detectBackground);
    };
  }, [pathname, isScrolled, isDarkHeroPage]);

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
      setIsMobileMenuOpen(false);
    }
  };

  // Determine text color based on background
  const textColor = isLightBackground ? "text-[#121212]" : "text-white";
  const textColorHover = isLightBackground ? "hover:text-[#121212]" : "hover:text-white";
  const textColorOpacity = isLightBackground ? "text-[#121212]/80" : "text-white/90";
  const underlineColor = isLightBackground ? "bg-[#121212]" : "bg-white";
  const menuButtonColor = isLightBackground ? "bg-[#121212]" : "bg-white";

  // Determine navbar background
  const getNavbarBackground = () => {
    if (isScrolled) {
      return "bg-white/95 backdrop-blur-md shadow-sm py-3";
    }
    
    if (isDarkHeroPage) {
      // Transparent background for dark hero pages
      return "bg-transparent py-6";
    }
    
    // Default: light background for other pages
    return "bg-white/95 backdrop-blur-md py-6";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 0.02, 0, 0.93] }}
      style={{
        backgroundColor: !isScrolled && isDarkHeroPage ? "transparent" : undefined,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${getNavbarBackground()}`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl lg:text-3xl font-heading font-bold tracking-tight transition-colors duration-300 ${textColor} hover:opacity-80`}
          >
            <span className="relative">
              ARQA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative px-5 py-2"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${textColorOpacity} ${textColorHover}`}
                >
                  {item.name}
                </motion.span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-px origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.33,0.02,0,0.93)] group-hover:origin-left group-hover:scale-x-100 ${underlineColor}`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-sm font-semibold tracking-wide uppercase overflow-hidden transition-all duration-500 hover:gap-3"
            >
              <span className="relative z-10">Get Quote</span>
              <svg
                className="w-4 h-4 relative z-10 transition-transform duration-400 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Hover effect overlay */}
              <span className="absolute inset-0 bg-dark scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.33,0.02,0,0.93)] group-hover:scale-y-100"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger lines - dark when menu is open (white bg), otherwise use menuButtonColor */}
            <span
              className={`block absolute h-0.5 w-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "bg-[#121212]" : menuButtonColor
              } ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-2"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "bg-[#121212]" : menuButtonColor
              } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block absolute h-0.5 w-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "bg-[#121212]" : menuButtonColor
              } ${
                isMobileMenuOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation - Always white background on mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.33, 0.02, 0, 0.93] }}
              className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-lg"
            >
              <div className="pt-6 pb-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-3 px-4 text-base font-medium tracking-wide uppercase transition-colors duration-300 text-[#121212]/80 hover:text-[#121212] hover:bg-gray-100/50"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="block py-3 px-4 bg-accent text-white text-center text-sm font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-dark"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
