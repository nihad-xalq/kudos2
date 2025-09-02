"use client"

import { motion } from "framer-motion";
import Link from "next/link";

interface HelpfulLink {
    id: number;
    name: string;
    href: string;
}

const helpfulLinks: HelpfulLink[] = [
    {
        id: 1,
        name: "About Us",
        href: "/about"
    },
    {
        id: 2,
        name: "Contact Us",
        href: "/contact"
    },
    {
        id: 3,
        name: "Results",
        href: "/results"
    },
]

const BackToHomepageBtn = () => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                href="/"
                aria-label="Back to Homepage"
                title="Back to Homepage"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Homepage
            </Link>
        </motion.div>
    );
}

const GoBackBtn = () => {
    return (
        <motion.button
            onClick={() => window.history.back()}
            type="button"
            aria-label="Go Back"
            title="Go Back"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
        </motion.button>
    );
}

export default function NotFound() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const numberVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            className="min-h-[82vh] bg-gradient-to-b from-black via-blue-900 to-indigo-900 flex items-center justify-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <motion.div
                    className="mb-8"
                    variants={numberVariants}
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Main Message */}
                <motion.div
                    className="mb-8"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        The page you&apos;re looking for seems to have wandered off into the digital wilderness.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    variants={itemVariants}
                >
                    <BackToHomepageBtn />
                    <GoBackBtn />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                >
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Helpful Links */}
                    <div className="relative z-10">
                        <motion.p
                            className="text-gray-400 mb-4"
                            variants={itemVariants}
                        >
                            Or try one of these popular pages:
                        </motion.p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {
                                helpfulLinks.map((link) => (
                                    <motion.div
                                        key={link.id}
                                        variants={linkVariants}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <Link
                                            aria-label={link.name}
                                            title={link.name}
                                            href={link.href}
                                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/10"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};