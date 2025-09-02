import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
    return (
        <motion.h2 
            className="text-3xl md:text-5xl font-bold uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            viewport={{ once: true }}
        >
            {title}
        </motion.h2>
    );
}