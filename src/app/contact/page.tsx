"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20 bg-[#FBF8F2]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-6 font-medium">
              GET IN TOUCH
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-normal tracking-tight leading-[1.1] text-gray-900 mb-6 md:mb-8">
              Contact us
            </h1>
            <p className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-gray-600 max-w-2xl">
              We'd love to hear from you! Whether you have a new project in mind, need expert consultation, or just want to learn more about our work, our team is ready to assist. Reach out to us, and let's create something remarkable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Two Columns */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start lg:items-center">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12 flex flex-col justify-center"
            >
              {/* Email */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  EMAIL
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:hello@arqa.com"
                    className="block text-base sm:text-lg lg:text-xl font-heading text-gray-900 hover:text-gray-600 transition-colors duration-300 break-all"
                  >
                    HELLO@ARQA.COM
                  </a>
                  <a
                    href="mailto:projects@arqa.com"
                    className="block text-base sm:text-lg lg:text-xl font-heading text-gray-900 hover:text-gray-600 transition-colors duration-300 break-all"
                  >
                    PROJECTS@ARQA.COM
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  PHONE
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+971501234567"
                    className="block text-base sm:text-lg lg:text-xl font-heading text-gray-900 hover:text-gray-600 transition-colors duration-300"
                  >
                    +971 50 123 4567
                  </a>
                  <a
                    href="tel:+97142234567"
                    className="block text-base sm:text-lg lg:text-xl font-heading text-gray-900 hover:text-gray-600 transition-colors duration-300"
                  >
                    +971 4 223 4567
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  LOCATION
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-heading text-gray-900 leading-relaxed">
                  Arqa Design & Build Studio<br />
                  Business Bay, Dubai<br />
                  United Arab Emirates
                </p>
              </div>

              {/* Hours */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
                  HOURS
                </p>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg lg:text-xl font-heading text-gray-900">Monday – Friday</p>
                  <p className="text-base sm:text-lg lg:text-xl font-heading text-gray-900">9:00 AM – 6:00 PM (GST)</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name & Last Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      First name<span className="text-gray-400 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 text-[15px] lg:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Last name<span className="text-gray-400 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 text-[15px] lg:text-base"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Your email<span className="text-gray-400 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 text-[15px] lg:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 text-[15px] lg:text-base"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message<span className="text-gray-400 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type something..."
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none text-[15px] lg:text-base"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-gray-800"
                  >
                    <span>SEND</span>
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
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


