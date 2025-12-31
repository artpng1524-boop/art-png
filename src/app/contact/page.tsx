"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Github, Linkedin, CheckCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const socialLinks = [
        {
            name: "Instagram",
            icon: <Instagram size={24} />,
            href: "https://instagram.com/art.png",
            handle: "@art.png",
        },
        {
            name: "GitHub",
            icon: <Github size={24} />,
            href: "https://github.com/artpng",
            handle: "@artpng",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={24} />,
            href: "https://linkedin.com/in/artpng",
            handle: "ART.PNG",
        },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold font-medium mb-4 block">Contact</span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Let&apos;s <span className="text-gradient-gold">Connect</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Have a project in mind or just want to say hello? I&apos;d love to
                            hear from you. Fill out the form below or reach out through social media.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="p-8 rounded-3xl bg-card border border-border">
                                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            <CheckCircle size={64} className="text-gold mb-4" />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                        <p className="text-muted-foreground">
                                            Thank you for reaching out. I&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium mb-2"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium mb-2"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                                placeholder="Project inquiry"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info & Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-8"
                        >
                            {/* Contact Info */}
                            <div className="p-8 rounded-3xl bg-card border border-border">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                                            <Mail className="text-gold" size={22} />
                                        </div>
                                        <div>
                                            <p className="font-medium mb-1">Email</p>
                                            <a
                                                href="mailto:hello@artpng.com"
                                                className="text-muted-foreground hover:text-gold transition-colors"
                                            >
                                                hello@artpng.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                                            <MapPin className="text-gold" size={22} />
                                        </div>
                                        <div>
                                            <p className="font-medium mb-1">Location</p>
                                            <p className="text-muted-foreground">
                                                Available Worldwide (Remote)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="p-8 rounded-3xl bg-card border border-border">
                                <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                                <div className="space-y-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                                {social.icon}
                                            </div>
                                            <div>
                                                <p className="font-medium">{social.name}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {social.handle}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="p-6 rounded-2xl bg-gold/10 border border-gold/30"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                                    </span>
                                    <span className="font-semibold text-gold">
                                        Currently Available
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    I&apos;m open for freelance projects and collaborations.
                                    Response time: within 24 hours.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
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
