"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    image: string;
    index: number;
}

export function ProjectCard({
    title,
    description,
    category,
    image,
    index,
}: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border"
        >
            {/* Image Container with Parallax */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium bg-gold/90 text-black rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-gold transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Hover Border Effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    border: "2px solid var(--gold)",
                }}
            />
        </motion.div>
    );
}
