"use client"

import FoundersSection from "@/components/home_sections/FoundersSection";
import SponsorsSection from "@/components/home_sections/SponsorsSection";
import HomeContact from "@/components/home_sections/HomeContact";
import HeroSection from "@/components/home_sections/HeroSection";
import HomeAbout from "@/components/home_sections/HomeAbout";
import { motion } from "framer-motion";

export default function Home() {
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.section 
            className="space-y-16"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={sectionVariants}>
                <HeroSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <HomeAbout />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <FoundersSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <SponsorsSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <HomeContact />
            </motion.div>
        </motion.section>
    );
}