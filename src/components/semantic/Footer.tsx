"use client"

import { FaPhone, FaLocationDot, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../Logo";

interface SocialMedia {
    name: string;
    icon: React.ElementType;
    url: string;
}

interface QuickLink {
    name: string;
    url: string;
}

interface ContactInfo {
    name: string;
    icon: React.ElementType;
    url: string;
}

const socialMedia: SocialMedia[] = [
    {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/kudos.az"
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/kudos.az"
    },

    {
        name: "Twitter",
        icon: FaXTwitter,
        url: "https://www.twitter.com/kudos.az"
    },

    {
        name: "Youtube",
        icon: FaYoutube,
        url: "https://www.youtube.com/kudos.az"
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/kudos.az"
    },
]

const quickLinks: QuickLink[] = [
    {
        name: "About Us",
        url: "/about"
    },
    {
        name: "Game Results",
        url: "/results"
    },
    {
        name: "Contact Us",
        url: "/contact"
    },
    {
        name: "Register Team",
        url: "/#register_form"
    }
]

const contactInfo: ContactInfo[] = [
    {
        name: "Email",
        icon: FaEnvelope,
        url: "info@kudos.az"
    },
    {
        name: "Phone",
        icon: FaPhone,
        url: "+994 50 123 45 67"
    },
    {
        name: "Location",
        icon: FaLocationDot,
        url: "Baku, Azerbaijan"
    }
]

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.footer
            className="bg-black text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
                        <div>
                            <div className="w-1/4 mb-4">
                                <Logo />
                            </div>
                            <p className="text-white text-base md:text-base leading-relaxed font-light">
                                Entertaining Intellectual Quiz - where fun meets knowledge.
                                Test your skills, compete with friends, and win exciting rewards.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-1">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Interactive Quiz Experience</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Team Competitions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Rewards & Prizes</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
                        <h4 className="text-2xl font-bold">Quick Links</h4>
                        <ul className="space-y-2 md:space-y-4">
                            {quickLinks.map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <a href={item.url} className="text-white hover:text-white transition-colors duration-300 text-lg">
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
                        <h4 className="text-2xl font-bold">Get In Touch</h4>
                        <div className="space-y-2 md:space-y-4">
                            {contactInfo.map((item) => (
                                <motion.div
                                    key={item.name}
                                    className="flex items-center gap-2"
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <item.icon className="text-white" />
                                    <p className="text-white">{item.url}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="pt-2 md:pt-4">
                            <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
                            <div className="grid grid-cols-5 gap-2 md:gap-4 w-max">
                                {socialMedia.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={socialVariants}
                                        whileHover={{
                                            scale: 1.2,
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Follow us on ${item.name}`}
                                            className="group w-10 h-10 bg-white hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors duration-300"
                                        >
                                            <item.icon className="text-black font-bold group-hover:text-white transition-colors duration-300" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="border-t border-white"
                variants={itemVariants}
            >
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-white text-sm md:text-lg">
                                © 2025 Kudos.az - All rights reserved
                            </p>
                        </div>
                        <div className="flex gap-6 text-white">
                            <motion.a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            >
                                Terms of Service
                            </motion.a>
                            <motion.a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            >
                                Cookie Policy
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
}