import SectionTitle from "../reusable/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

interface Founder {
    id: number;
    name: string;
    surname: string;
    image: string;
}

const founderItems: Founder[] = [
    {
        id: 1,
        name: "Elgun",
        surname: "Abdurrahmanov",
        image: "/images/founders/founder1.jpg"
    },
    {
        id: 2,
        name: "Tofig",
        surname: "Aghayev",
        image: "/images/founders/founder2.jpg"
    }
]

export default function FoundersSection() {
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
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div 
            className="founders_section flex flex-col items-center justify-center gap-12 pb-16 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <motion.div variants={itemVariants}>
                    <SectionTitle title="Founders" />
                </motion.div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {founderItems.map((item) => (
                        <motion.div 
                            key={item.id} 
                            className="bg-emerald-400 rounded-3xl overflow-hidden p-4 w-full"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="w-full h-full hidden md:flex flex-col items-center justify-center text-black">
                                <h3 className="text-3xl font-bold uppercase mt-3 text-center flex flex-col items-center justify-center">
                                    <span>{item.name}</span> <span>{item.surname}</span>
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}