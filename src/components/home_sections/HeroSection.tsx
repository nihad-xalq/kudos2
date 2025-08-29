export default function HeroSection() {
    return (
        <div className="hero_section flex flex-col items-center justify-center bg-black py-10 md:py-28 rounded-b-4xl">
            <h1 className="font-bold flex flex-col items-center justify-center gap-0 md:gap-0 uppercase">
                <span className="text-4xl md:text-8xl text-white">Entertaining</span>{" "}
                <span className="text-4xl md:text-8xl text-white">Intellectual</span>{" "}
                <span className="text-5xl md:text-9xl bg-black shadow-[2px_2px_1px_4px_rgb(0,255,163)] rounded-3xl p-2 text-white rotate-6 translate-y-1 md:-translate-y-1">
                    Quiz
                </span>
            </h1>
            <p className="text-lg">
                Kudos.az Eylenceli oyun
            </p>
        </div>
    )
}