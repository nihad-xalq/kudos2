"use client";
import Nav from "@/components/semantic/Nav";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../Logo";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-black grid grid-cols-3 items-center px-4 w-full transition-all duration-300 ${isScrolled ? 'py-6' : 'py-12'}`}
        >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <Link
                    href="/"
                    aria-label="Home"
                    className={`flex items-center gap-2 ${isScrolled ? "w-1/6" : "w-1/4"}`}
                >
                    <Logo />
                </Link>
            </motion.div>
            <Nav />

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex items-center justify-center"
            >
                <Link
                    href="/#register_form"
                    type="button"
                    aria-label="Register"
                    className={`${isScrolled ?
                        "hover:scale-105 transition-all duration-300 text-white text-center font-medium cursor-pointer w-1/2 ml-auto hover:text-green-500"
                        : "bg-white hover:bg-emerald-500 hover:scale-105 transition-all duration-300 text-black text-center font-medium cursor-pointer w-1/2 ml-auto px-8 py-3 rounded-full"
                        }`}
                >
                    Register
                </Link>
            </motion.div>
        </header >
    );
}