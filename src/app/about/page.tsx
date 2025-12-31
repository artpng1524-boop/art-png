"use client";

import { motion } from "framer-motion";
import { Download, Award, Target, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Canva",
    "Brand Identity",
    "Typography",
    "Color Theory",
    "Layout Design",
];

const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "5+" },
];

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gold/20 to-gold/5 border border-border">
                                    {/* Placeholder - Replace with actual profile image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-9xl opacity-30">👤</span>
                                    </div>

                                    {/* Decorative Elements */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/15 rounded-full blur-xl"
                                        animate={{ scale: [1.2, 1, 1.2] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -bottom-6 -right-6 bg-card border border-gold/30 rounded-2xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                            <Award className="text-gold" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">5+ Years</p>
                                            <p className="text-sm text-muted-foreground">Experience</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="text-gold font-medium mb-4 block">
                                    About Me
                                </span>
                                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                    Passionate about
                                    <span className="text-gradient-gold"> Visual Storytelling</span>
                                </h1>
                                <div className="space-y-4 text-muted-foreground text-lg">
                                    <p>
                                        Hello! I&apos;m <span className="text-foreground font-semibold">ART.PNG</span>, a creative graphic designer with a passion for transforming ideas into compelling visual experiences.
                                    </p>
                                    <p>
                                        With over 5 years of experience in the design industry, I specialize in creating eye-catching flyers, impactful banners, engaging social media content, and cohesive brand identities.
                                    </p>
                                    <p>
                                        My approach combines minimalist aesthetics with bold creativity, ensuring every design not only looks stunning but also communicates effectively with your target audience.
                                    </p>
                                </div>

                                {/* Resume Download */}
                                <motion.a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-gradient-gold text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold/25 transition-shadow duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Download size={20} />
                                    Download Resume
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 bg-muted/30">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                My Design <span className="text-gradient-gold">Philosophy</span>
                            </h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                The principles that guide every project I undertake
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target size={32} />,
                                    title: "Purpose-Driven",
                                    description: "Every design decision is made with your goals in mind, ensuring maximum impact.",
                                },
                                {
                                    icon: <Heart size={32} />,
                                    title: "Passion for Craft",
                                    description: "I pour creativity and dedication into every pixel, treating each project as a masterpiece.",
                                },
                                {
                                    icon: <Award size={32} />,
                                    title: "Excellence Always",
                                    description: "Settling for 'good enough' is never an option. I strive for exceptional results.",
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 text-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-24 px-4 bg-muted/30">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Skills & <span className="text-gradient-gold">Tools</span>
                            </h2>
                            <p className="text-muted-foreground">
                                The technologies and skills I use to bring designs to life
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-5 py-2.5 rounded-full bg-card border border-border hover:border-gold/50 font-medium transition-all duration-200"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Let&apos;s work <span className="text-gradient-gold">together</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                                Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your vision to reality.
                            </p>
                            <Link href="/contact">
                                <motion.div
                                    className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-gold text-black font-semibold rounded-full text-lg hover:shadow-xl hover:shadow-gold/25 transition-shadow duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get in Touch
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
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
            </div>
        </PageTransition>
    );
}
