"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactLead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-4 text-white">
            Start Your <span className="text-primary">Project Today</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Get a free consultation and detailed project proposal. Our team will
            contact you within 24 hours to discuss your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-white">
              Submit Your Project
            </h3>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Ahmed Al-Mansoori"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="ahmed@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="" className="bg-dark">
                    Select project type
                  </option>
                  <option value="villa" className="bg-dark">
                    Villa Design & Build
                  </option>
                  <option value="commercial" className="bg-dark">
                    Commercial Building
                  </option>
                  <option value="fitout" className="bg-dark">
                    Fit-Out & Renovation
                  </option>
                  <option value="consultation" className="bg-dark">
                    Architectural Consultation
                  </option>
                  <option value="other" className="bg-dark">
                    Other
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Estimated Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="" className="bg-dark">
                    Select budget range
                  </option>
                  <option value="under-2m" className="bg-dark">
                    Under AED 2M
                  </option>
                  <option value="2m-5m" className="bg-dark">
                    AED 2M - 5M
                  </option>
                  <option value="5m-10m" className="bg-dark">
                    AED 5M - 10M
                  </option>
                  <option value="10m-20m" className="bg-dark">
                    AED 10M - 20M
                  </option>
                  <option value="above-20m" className="bg-dark">
                    Above AED 20M
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements, timeline, location..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-dark hover:bg-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Submit Your Project →
              </button>

              <p className="text-sm text-white/60 text-center">
                By submitting, you agree to our terms. We'll respond within 24 hours.
              </p>
            </div>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">
                Get In Touch
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our team is ready to discuss your project requirements and provide
                expert guidance. Reach out via phone, email, WhatsApp, or visit
                our office in Dubai.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+971XXXXXXXXX"
                className="flex items-start gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 group"
              >
                <div className="text-3xl">📞</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold mb-1 text-white group-hover:text-primary transition-colors">
                    Call Us
                  </h4>
                  <p className="text-white/70">+971 XX XXX XXXX</p>
                  <p className="text-sm text-white/50">Mon-Sat, 9AM-6PM GST</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 group"
              >
                <div className="text-3xl">💬</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold mb-1 text-white group-hover:text-primary transition-colors">
                    WhatsApp
                  </h4>
                  <p className="text-white/70">+971 XX XXX XXXX</p>
                  <p className="text-sm text-white/50">Quick responses, 24/7</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@yourcompany.ae"
                className="flex items-start gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 group"
              >
                <div className="text-3xl">📧</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold mb-1 text-white group-hover:text-primary transition-colors">
                    Email
                  </h4>
                  <p className="text-white/70">info@yourcompany.ae</p>
                  <p className="text-sm text-white/50">Response within 24hrs</p>
                </div>
              </a>

              {/* Office */}
              <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-3xl">📍</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold mb-1 text-white">
                    Office Location
                  </h4>
                  <p className="text-white/70">
                    Business Bay, Dubai
                    <br />
                    United Arab Emirates
                  </p>
                  <p className="text-sm text-white/50 mt-2">
                    Visit by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Repeat */}
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
              <p className="text-white/90 mb-4">
                <strong className="text-primary">Urgent project?</strong> Call us
                directly for immediate assistance.
              </p>
              <a
                href="tel:+971XXXXXXXXX"
                className="btn bg-primary text-dark hover:bg-white w-full justify-center"
              >
                📞 Call Now: +971 XX XXX XXXX
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
