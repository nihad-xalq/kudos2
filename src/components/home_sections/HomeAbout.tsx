import SectionTitle from "../reusable/SectionTitle";
import { motion } from "framer-motion";

interface AboutItem {
    id: number;
    title: string;
    description: string;
}

const aboutItems: AboutItem[] = [
    {
        id: 1,
        title: "Enjoyable",
        description: "Where Fun Meets Knowledge"
    },
    {
        id: 2,
        title: "Surprising Gifts",
        description: "Answer, win, and get rewards!"
    },

    {
        id: 3,
        title: "Be the Star!",
        description: "Shine and lead the team!"
    }
]

export default function HomeAbout() {
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
            className="about_section flex flex-col items-center justify-center gap-12 pb-16 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                <motion.div variants={itemVariants}>
                    <SectionTitle title="What is Kudos?" />
                </motion.div>
                <motion.p 
                    className="w-full md:w-1/2 font-normal text-lg leading-6 tracking-normal"
                    variants={itemVariants}
                >
                    Kudos is a fun quiz that tests knowledge across topics like history, science, and popular culture.
                    Whether solo or in a team, it encourages learning, critical thinking, and friendly competition.
                </motion.p>
            </div>
            <ul className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 w-full mt-28">
                {aboutItems.map((item) => (
                    <motion.li 
                        key={item.id} 
                        className="w-full flex flex-col items-center justify-center border-2 border-black rounded-3xl p-6 bg-emerald-200 relative"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-24 h-24 bg-emerald-500 border-7 border-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-2xl font-bold uppercase mt-10">{item.title}</h3>
                        <p className="text-lg font-medium mt-3">{item.description}</p>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}