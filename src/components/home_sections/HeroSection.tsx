import Header from "../semantic/Header";

export default function HeroSection() {
    return (
        <div className="hero_section flex flex-col items-center justify-center bg-black pb-28 rounded-b-4xl">
            <Header />
            <h1 className="font-bold flex flex-col items-center justify-center uppercase">
                <span className="text-8xl text-white">Entertaining</span>{" "}
                <span className="text-8xl text-white">Intellectual</span>{" "}
                <span className="text-9xl bg-black shadow shadow-[2px_2px_1px_4px_rgb(0,255,163)] rounded-3xl p-2 text-white rotate-6 -translate-y-1">
                    Quiz
                </span>
            </h1>
            <p className="text-lg">
                Kudos.az Eylenceli oyun
            </p>
        </div>
    )
}