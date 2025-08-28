import SectionTitle from "../reusable/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface Sponsor {
    id: number;
    name: string;
    image: string;
}

const sponsorItems: Sponsor[] = [
    {
        id: 1,
        name: "Sponsor 1",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 2,
        name: "Sponsor 2",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 3,
        name: "Sponsor 3",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 4,
        name: "Sponsor 4",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 5,
        name: "Sponsor 5",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 6,
        name: "Sponsor 6",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 7,
        name: "Sponsor 7",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 8,
        name: "Sponsor 8",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 9,
        name: "Sponsor 9",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 10,
        name: "Sponsor 10",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 11,
        name: "Sponsor 11",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 12,
        name: "Sponsor 12",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 13,
        name: "Sponsor 13",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 14,
        name: "Sponsor 14",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 15,
        name: "Sponsor 15",
        image: "/images/sponsors/sponsor1.png"
    },
    {
        id: 16,
        name: "Sponsor 16",
        image: "/images/sponsors/sponsor1.png"
    },
]

export default function SponsorsSection() {
    return (
        <div className="sponsors_section flex flex-col items-center justify-center gap-12 pb-16 px-6">
            <SectionTitle title="Our Sponsors" />
            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                    }}
                    speed={1000}
                    navigation={false}
                    pagination={false}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                    className="sponsors-swiper"
                >
                    {sponsorItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-24 h-16 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}