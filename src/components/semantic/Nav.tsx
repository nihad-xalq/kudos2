import { motion } from "framer-motion";
import Link from "next/link";

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
]

export default function Nav() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <ul className="flex gap-20 w-full justify-center items-center">
                {navItems.map((item) => (
                    <motion.li 
                        key={item.id}
                        variants={itemVariants}
                        whileHover={{ 
                            y: -3,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <Link
                            href={item.href}
                            aria-label={item.name}
                            className="text-white font-light hover:text-green-500 transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
}