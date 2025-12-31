"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";

const categories = ["All", "Flyers", "Banners", "Carousels", "Social Media"];

const projects = [
    {
        id: 1,
        title: "Urban Beats Festival",
        description: "Vibrant music festival flyer design with bold typography and energetic colors.",
        category: "Flyers",
        image: "/projects/flyer-1.jpg",
    },
    {
        id: 2,
        title: "Summer Night Party",
        description: "Tropical themed party flyer featuring neon gradients and palm silhouettes.",
        category: "Flyers",
        image: "/projects/flyer-2.jpg",
    },
    {
        id: 3,
        title: "Tech Summit 2024",
        description: "Corporate banner design for annual technology conference.",
        category: "Banners",
        image: "/projects/banner-1.jpg",
    },
    {
        id: 4,
        title: "Black Friday Sale",
        description: "E-commerce promotional banner with striking contrast and urgency elements.",
        category: "Banners",
        image: "/projects/banner-2.jpg",
    },
    {
        id: 5,
        title: "Product Launch Series",
        description: "10-slide Instagram carousel showcasing new product features.",
        category: "Carousels",
        image: "/projects/carousel-1.jpg",
    },
    {
        id: 6,
        title: "Educational Content",
        description: "LinkedIn carousel explaining design principles in digestible slides.",
        category: "Carousels",
        image: "/projects/carousel-2.jpg",
    },
    {
        id: 7,
        title: "Brand Launch Campaign",
        description: "Social media post series for new wellness brand introduction.",
        category: "Social Media",
        image: "/projects/social-1.jpg",
    },
    {
        id: 8,
        title: "Motivational Quotes",
        description: "Instagram post collection featuring minimalist quote designs.",
        category: "Social Media",
        image: "/projects/social-2.jpg",
    },
    {
        id: 9,
        title: "Food Festival Promo",
        description: "Mouth-watering flyer design for local food festival event.",
        category: "Flyers",
        image: "/projects/flyer-3.jpg",
    },
    {
        id: 10,
        title: "Startup Pitch Deck",
        description: "Professional carousel for LinkedIn showcasing startup journey.",
        category: "Carousels",
        image: "/projects/carousel-3.jpg",
    },
    {
        id: 11,
        title: "Holiday Sale Banner",
        description: "Festive web banner with snowflakes and warm holiday vibes.",
        category: "Banners",
        image: "/projects/banner-3.jpg",
    },
    {
        id: 12,
        title: "Behind the Scenes",
        description: "Instagram story series showing the creative process.",
        category: "Social Media",
        image: "/projects/social-3.jpg",
    },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <PageTransition>
            <div className="min-h-screen py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold font-medium mb-4 block">Portfolio</span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            My <span className="text-gradient-gold">Creative Work</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Explore my collection of designs ranging from event flyers to
                            social media content. Each project tells a unique story.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-gradient-gold text-black"
                                        : "bg-card border border-border hover:border-gold/50"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        category={project.category}
                                        image={project.image}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-muted-foreground text-lg">
                                No projects found in this category.
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-24 py-8 px-4 border-t border-border">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span className="text-muted-foreground text-sm">
                            © 2024 ART.PNG. All rights reserved.
                        </span>
                        <span className="text-gradient-gold font-semibold">ART.PNG</span>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}
