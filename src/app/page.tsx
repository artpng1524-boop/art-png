"use client";

import { useRef } from "react";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Layers } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const featuredProjects = [
  {
    id: 1,
    title: "Urban Beats Festival",
    category: "Flyer",
    image: "/projects/flyer-1.jpg",
  },
  {
    id: 2,
    title: "Tech Summit 2024",
    category: "Banner",
    image: "/projects/banner-1.jpg",
  },
  {
    id: 3,
    title: "Wellness Brand Launch",
    category: "Social Media",
    image: "/projects/social-1.jpg",
  },
  {
    id: 4,
    title: "Product Showcase Series",
    category: "Carousel",
    image: "/projects/carousel-1.jpg",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/30 bg-gold/5"
          >
            <Sparkles size={16} className="text-gold" />
            <span className="text-sm font-medium text-gold">
              Available for Projects
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Turning{" "}
            <span className="text-gradient-gold">Pixels</span>
            <br />
            into{" "}
            <span className="relative inline-block">
              Purpose
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I&apos;m <span className="text-gold font-semibold">ART.PNG</span>, a
            Graphic Designer crafting visual stories that captivate, convert,
            and create lasting impressions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <motion.div
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-gold text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold/25 transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                className="px-8 py-4 border-2 border-gold/50 text-foreground font-semibold rounded-full hover:bg-gold/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What I <span className="text-gradient-gold">Create</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From social media graphics to large-scale banners, I bring your
              vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette size={32} />,
                title: "Brand Identity",
                description:
                  "Creating cohesive visual identities that make your brand unforgettable.",
              },
              {
                icon: <Layers size={32} />,
                title: "Marketing Materials",
                description:
                  "Eye-catching flyers, banners, and promotional content that drive engagement.",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Social Media",
                description:
                  "Scroll-stopping content for Instagram, LinkedIn, and beyond.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Featured <span className="text-gradient-gold">Work</span>
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent projects
              </p>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-gold font-medium hover:underline"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border"
              >
                {/* Placeholder Image - Replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <span className="text-6xl opacity-30">🎨</span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                >
                  <span className="text-gold text-sm font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gold/90 text-black rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to bring your{" "}
              <span className="text-gradient-gold">vision</span> to life?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s collaborate and create something extraordinary
              together. I&apos;m just a message away.
            </p>
            <Link href="/contact">
              <motion.div
                className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-gold text-black font-semibold rounded-full text-lg hover:shadow-xl hover:shadow-gold/25 transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-muted-foreground text-sm">
            © 2024 ART.PNG. All rights reserved.
          </span>
          <span className="text-gradient-gold font-semibold">ART.PNG</span>
        </div>
      </footer>
    </PageTransition>
  );
}
