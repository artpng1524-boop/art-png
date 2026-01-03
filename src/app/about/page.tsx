"use client";

import { motion } from "framer-motion";
import { Download, Award, Target, Heart, ArrowRight, Paintbrush, Megaphone, Users, Layers } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

const teamMembers = [
    {
        name: "Muhammad Ainul Yaqin",
        role: "Logo & UI Designer",
        description: "Focuses on creating visual identities and app interfaces that stand out.",
        icon: <Paintbrush size={32} className="text-gold" />,
    },
    {
        name: "Ramadhani Arjuna Pangestu",
        role: "Marketing Graphics Specialist",
        description: "Specializes in Marketing Graphics (Flyers, Banners, Carousels, and Ads) for brand promotion.",
        icon: <Megaphone size={32} className="text-gold" />,
    },
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
                {/* Hero / Introduction Section */}
                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-gold font-medium mb-4 block tracking-wide uppercase">
                                Who We Are
                            </span>
                            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
                                We are <span className="text-gradient-gold">ART.PNG</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                A creative studio specializing in <span className="text-foreground font-semibold">Logo Design</span>, <span className="text-foreground font-semibold">UI Design</span>, and <span className="text-foreground font-semibold">Marketing Graphics</span>.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-16 px-4 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Top Tier <span className="text-gradient-gold">Team</span>
                            </h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                Combining expertise in Identity and Marketing to deliver complete brand solutions.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative bg-card border border-border rounded-3xl p-8 hover:border-gold/50 transition-all duration-300"
                                >
                                    {/* Placeholder Image Area */}
                                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-gold/10 to-transparent rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                        <span className="text-6xl opacity-20">👤</span>
                                        {/* You can replace the above span with an <Image /> component later */}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-gold/10 rounded-xl">
                                                {member.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{member.name}</h3>
                                                <p className="text-gold font-medium text-sm">{member.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Design Philosophy Section */}
                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-gold font-medium mb-4 block">
                                    Our Philosophy
                                </span>
                                <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                                    Why Choose <span className="text-gradient-gold">Team Collaboration?</span>
                                </h2>
                                <div className="space-y-6 text-muted-foreground text-lg">
                                    <p>
                                        At ART.PNG, we believe that great design is born from collaboration. We work as a unified team to ensure every aspect of your brand is cohesive.
                                    </p>
                                    <p>
                                        While one member perfects your <span className="text-foreground">Logo & UI</span> ensuring a solid visual foundation, the other focuses on <span className="text-foreground">Marketing Graphics</span> to amplify your message.
                                    </p>
                                    <p>
                                        This synergy allows us to deliver consistent and high-quality brand identities that not only look good but perform across all platforms.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid gap-6"
                            >
                                {[
                                    {
                                        title: "Consistent Identity",
                                        desc: "Unified design language across all touchpoints.",
                                        icon: <Layers size={24} />,
                                    },
                                    {
                                        title: "Specialized Focus",
                                        desc: "Experts dedicated to their specific craft.",
                                        icon: <Target size={24} />,
                                    },
                                    {
                                        title: "Collaborative Power",
                                        desc: "Two minds working together for your brand.",
                                        icon: <Users size={24} />,
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
                                        <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 bg-muted/30 border-y border-border/50">
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

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Ready to elevate your <span className="text-gradient-gold">Brand?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                                Let our team handle your design needs, from the core identity to the marketing visuals that sell it.
                            </p>
                            <Link href="/contact">
                                <motion.div
                                    className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-gold text-black font-semibold rounded-full text-lg hover:shadow-xl hover:shadow-gold/25 transition-shadow duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start a Project
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
                            © 2026 ART.PNG. All rights reserved.
                        </span>
                        <span className="text-gradient-gold font-semibold">ART.PNG</span>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}
