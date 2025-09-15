import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
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

    const starVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
            rotate: -30
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 30,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
                delay: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { y: 60, opacity: 0 },
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
            y: 120,
            opacity: 0,
            rotate: -10,
            scale: 0.7
        },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 2,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut" as const,
                delay: 0.8
            }
        }
    };

    const arrowVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
            rotate: -200
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: -100,
            transition: {
                duration: 0.9,
                ease: "easeOut" as const,
                delay: 1.0
            }
        }
    };

    const questionVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
            rotate: -30
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 30,
            transition: {
                duration: 0.9,
                ease: "easeOut" as const,
                delay: 1.2
            }
        }
    };

    return (
        <motion.div
            className="hero_section h-[40vh] md:h-auto flex flex-col items-center justify-center bg-black py-10 md:py-28 rounded-b-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="font-bold flex flex-col items-center justify-center gap-0 md:gap-0 uppercase relative"
                variants={containerVariants}
            >
                <motion.div
                    variants={starVariants}
                    className="absolute -left-[20px] md:-left-[40px] -top-7 md:-top-12"
                >
                    <Image
                        src="/images/illustrations/heroSection/star.png"
                        alt="Star"
                        width={100}
                        height={100}
                        className="w-8 h-8 md:w-16 md:h-16"
                    />
                </motion.div>

                <motion.span
                    className="text-5xl md:text-8xl text-white"
                    variants={textVariants}
                >
                    Entertaining
                </motion.span>

                <motion.span
                    className="text-5xl md:text-8xl text-white"
                    variants={textVariants}
                >
                    Intellectual
                </motion.span>

                <div className="flex items-center justify-center relative">
                    <motion.span
                        className="text-6xl md:text-9xl bg-black shadow-[2px_2px_1px_4px_rgb(0,255,163)] rounded-3xl p-2 text-white rotate-2 translate-y-1 md:-translate-y-0.5"
                        variants={quizVariants}
                        whileHover={{
                            scale: 1.1,
                            rotate: 12,
                            transition: { duration: 0.3 }
                        }}
                    >
                        Quiz
                    </motion.span>

                    <motion.div
                        variants={arrowVariants}
                        className="absolute -left-[60px] md:-left-[170px] -top-4 md:-top-6"
                    >
                        <Image
                            src="/images/illustrations/heroSection/arrow.png"
                            alt="Arrow"
                            width={100}
                            height={100}
                            className="w-12 h-12 md:w-36 md:h-36"
                        />
                    </motion.div>

                    <motion.div
                        variants={questionVariants}
                        className="absolute -right-[100px] md:-right-[200px] top-5"
                    >
                        <Image
                            src="/images/illustrations/heroSection/question.png"
                            alt="Question"
                            width={100}
                            height={100}
                            className="w-12 h-12 md:w-36 md:h-36"
                        />
                    </motion.div>
                </div>
            </motion.h1>
        </motion.div>
    )
}