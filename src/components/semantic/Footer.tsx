import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot, FaEnvelope, FaXTwitter } from "react-icons/fa6";

interface SocialMedia {
    name: string;
    icon: React.ElementType;
    url: string;
}

interface QuickLink {
    name: string;
    url: string;
}

interface ContactInfo {
    name: string;
    icon: React.ElementType;
    url: string;
}

const socialMedia: SocialMedia[] = [
    {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/kudos.az"
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/kudos.az"
    },

    {
        name: "Twitter",
        icon: FaXTwitter,
        url: "https://www.twitter.com/kudos.az"
    },

    {
        name: "Youtube",
        icon: FaYoutube,
        url: "https://www.youtube.com/kudos.az"
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/kudos.az"
    },
]

const quickLinks: QuickLink[] = [
    {
        name: "About Us",
        url: "/about"
    },
    {
        name: "Game Results",
        url: "/results"
    },
    {
        name: "Contact Us",
        url: "/contact"
    },
    {
        name: "Register Team",
        url: "/#register_form"
    }
]

const contactInfo: ContactInfo[] = [
    {
        name: "Email",
        icon: FaEnvelope,
        url: "info@kudos.az"
    },
    {
        name: "Phone",
        icon: FaPhone,
        url: "+994 50 123 45 67"
    },
    {
        name: "Location",
        icon: FaLocationDot,
        url: "Baku, Azerbaijan"
    }
]

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">KUDOS</h3>
                            <p className="text-white text-base md:text-lg leading-relaxed font-light">
                                Entertaining Intellectual Quiz - where fun meets knowledge.
                                Test your skills, compete with friends, and win exciting rewards.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Interactive Quiz Experience</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Team Competitions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white">Rewards & Prizes</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 md:space-y-6">
                        <h4 className="text-2xl font-bold">Quick Links</h4>
                        <ul className="space-y-2 md:space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url} className="text-white hover:text-white transition-colors duration-300 text-lg">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Game Features */}
                    {/* <div className="space-y-6">
                        <h4 className="text-2xl font-bold">Game Features</h4>
                        <ul className="space-y-4">
                            <li className="text-white text-lg">
                                • Multiple Categories
                            </li>
                            <li className="text-white text-lg">
                                • Real-time Scoring
                            </li>
                            <li className="text-white text-lg">
                                • Leaderboards
                            </li>
                            <li className="text-white text-lg">
                                • Team Challenges
                            </li>
                            <li className="text-white text-lg">
                                • Achievement System
                            </li>
                        </ul>
                    </div> */}

                    {/* Contact Info */}
                    <div className="space-y-4 md:space-y-6">
                        <h4 className="text-2xl font-bold">Get In Touch</h4>
                        <div className="space-y-2 md:space-y-4">
                            {contactInfo.map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <item.icon className="text-white" />
                                    <p className="text-white">{item.url}</p>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="pt-2 md:pt-4">
                            <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
                            <div className="grid grid-cols-5 gap-2 md:gap-4 w-max">
                                {socialMedia.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${item.name}`}
                                        className="group w-10 h-10 bg-white hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors duration-300"
                                    >
                                        <item.icon className="text-black font-bold group-hover:text-white transition-colors duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-white text-sm md:text-lg">
                                © 2025 Kudos.az - All rights reserved
                            </p>
                        </div>
                        <div className="flex gap-6 text-white">
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}