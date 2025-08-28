"use client"

import FoundersSection from "@/components/home_sections/FoundersSection";
import SponsorsSection from "@/components/home_sections/SponsorsSection";
import HomeContact from "@/components/home_sections/HomeContact";
import HeroSection from "@/components/home_sections/HeroSection";
import HomeAbout from "@/components/home_sections/HomeAbout";

export default function Home() {
    return (
        <section className="space-y-16">
            <HeroSection />
            <HomeAbout />
            <FoundersSection />
            <SponsorsSection />
            <HomeContact />
        </section>
    );
}