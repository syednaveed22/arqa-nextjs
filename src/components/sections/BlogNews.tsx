"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Future of Sustainable Architecture",
    excerpt:
      "Exploring innovative approaches to eco-friendly building design and green construction practices for the modern era.",
    category: "Sustainability",
    date: "December 15, 2024",
    image: "/images/blog/post-1.jpg",
    author: "Sarah Mitchell",
    readTime: "5 min read",
  },
  {
    title: "Integrating Smart Technology in Residential Design",
    excerpt:
      "How IoT and smart home systems are revolutionizing the way we design and experience living spaces.",
    category: "Technology",
    date: "December 10, 2024",
    image: "/images/blog/post-2.jpg",
    author: "Michael Chen",
    readTime: "7 min read",
  },
  {
    title: "Minimalism Meets Functionality",
    excerpt:
      "The art of creating beautiful, functional spaces through thoughtful minimalist design principles and practices.",
    category: "Design Trends",
    date: "December 5, 2024",
    image: "/images/blog/post-3.jpg",
    author: "Emma Williams",
    readTime: "6 min read",
  },
];

export default function BlogNews() {
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
            Latest <span className="text-secondary">News</span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and stories from the
            world of architecture and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-5 aspect-[4/3] bg-primary">
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-secondary/60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-secondary/70 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-secondary/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary/60">
                    By {post.author}
                  </span>
                  <span className="text-secondary group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/blog" className="btn btn-outline">
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
