import SectionTitle from "../reusable/SectionTitle";
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
    return (
        <div className="founders_section flex flex-col items-center justify-center gap-12 pb-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <SectionTitle title="Founders" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {founderItems.map((item) => (
                        <div key={item.id} className="bg-emerald-400 rounded-3xl overflow-hidden p-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="w-full h-full flex flex-col items-center justify-center text-black">
                                <h3 className="text-3xl font-bold uppercase mt-3 text-center flex flex-col items-center justify-center"><span>{item.name}</span> <span>{item.surname}</span></h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}