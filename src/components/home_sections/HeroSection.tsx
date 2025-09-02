import { motion } from "framer-motion";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const quizVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            rotate: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 6,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
                delay: 0.6
            }
        }
    };

    return (
        <motion.div
            className="hero_section flex flex-col items-center justify-center bg-black py-10 md:py-28 rounded-b-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="font-bold flex flex-col items-center justify-center gap-0 md:gap-0 uppercase"
                variants={itemVariants}
            >
                <motion.span
                    className="text-4xl md:text-8xl text-white"
                    variants={itemVariants}
                >
                    Entertaining
                </motion.span>
                <motion.span
                    className="text-4xl md:text-8xl text-white"
                    variants={itemVariants}
                >
                    Intellectual
                </motion.span>
                <motion.span
                    className="text-5xl md:text-9xl bg-black shadow-[2px_2px_1px_4px_rgb(0,255,163)] rounded-3xl p-2 text-white rotate-6 translate-y-1 md:-translate-y-1"
                    variants={quizVariants}
                    whileHover={{
                        scale: 1.1,
                        rotate: 12,
                        transition: { duration: 0.3 }
                    }}
                >
                    Quiz
                </motion.span>
            </motion.h1>
        </motion.div>
    )
}