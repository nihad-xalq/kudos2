"use client";
import Nav from "@/components/semantic/Nav";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "../Logo";

interface NavItem {
    id: number;
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    {
        id: 1,
        name: "About",
        href: "/about"
    },
    {
        id: 2,
        name: "Game Results",
        href: "/results"
    },
    {
        id: 3,
        name: "Contact Us",
        href: "/contact"
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`sticky top-0 z-50 bg-black w-full transition-all duration-300 ${isScrolled ? 'py-3 md:py-6' : 'py-6 md:py-12'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex-shrink-0"
                        >
                            <Link
                                href="/"
                                aria-label="Home"
                                className={`flex items-center ${isScrolled ? 'w-16 md:w-20' : 'w-24 md:w-24'}`}
                            >
                                <Logo />
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="hidden md:block"
                        >
                            <Nav />
                        </motion.div>

                        {/* Desktop Register Button */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="hidden md:flex items-center"
                        >
                            <Link
                                href="/#register_form"
                                type="button"
                                aria-label="Register"
                                className={`${isScrolled
                                        ? "text-white hover:text-emerald-400 transition-colors duration-300 font-medium px-4 py-2"
                                        : "bg-white hover:bg-emerald-500 hover:scale-105 transition-all duration-300 text-black font-medium px-6 py-3 rounded-full"
                                    }`}
                            >
                                Register
                            </Link>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            onClick={toggleMobileMenu}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <motion.span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                    }`}
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 6 : 0,
                                }}
                            />
                            <motion.span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                            />
                            <motion.span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                    }`}
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -6 : 0,
                                }}
                            />
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 md:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                                duration: 0.4
                            }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-100 z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                                    <div className="w-20">
                                        <Logo inverted={false} />
                                    </div>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors duration-200"
                                        aria-label="Close mobile menu"
                                    >
                                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="flex-1 px-6 py-8">
                                    <ul className="space-y-6">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={item.id}
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    delay: index * 0.1 + 0.2,
                                                    duration: 0.4,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMobileMenu}
                                                    className="block text-2xl font-light text-black hover:text-emerald-400 transition-colors duration-300 py-2"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Mobile Register Button */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                    className="p-6 border-t border-gray-800"
                                >
                                    <Link
                                        href="/#register_form"
                                        onClick={closeMobileMenu}
                                        className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-center py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        Register Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}