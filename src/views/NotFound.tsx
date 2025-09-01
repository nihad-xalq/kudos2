"use client"

import Link from "next/link";

interface HelpfulLink {
    id: number;
    name: string;
    href: string;
}

const helpfulLinks: HelpfulLink[] = [
    {
        id: 1,
        name: "About Us",
        href: "/about"
    },
    {
        id: 2,
        name: "Contact Us",
        href: "/contact"
    },
    {
        id: 3,
        name: "Results",
        href: "/results"
    },
]

const BackToHomepageBtn = () => {
    return (
        <Link
            href="/"
            aria-label="Back to Homepage"
            title="Back to Homepage"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Homepage
        </Link>
    );
}

const GoBackBtn = () => {
    return (
        <button
            onClick={() => window.history.back()}
            type="button"
            aria-label="Go Back"
            title="Go Back"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
        </button>
    );
}

export default function NotFound() {
    return (
        <div className="min-h-[82vh] bg-gradient-to-b from-black via-blue-900 to-indigo-900 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-none">
                        404
                    </h1>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        The page you&apos;re looking for seems to have wandered off into the digital wilderness.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <BackToHomepageBtn />
                    <GoBackBtn />
                </div>

                {/* Decorative Elements */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Helpful Links */}
                    <div className="relative z-10">
                        <p className="text-gray-400 mb-4">Or try one of these popular pages:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {
                                helpfulLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        aria-label={link.name}
                                        title={link.name}
                                        href={link.href}
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/10"
                                    >
                                        {link.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};