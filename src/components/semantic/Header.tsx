import Nav from "@/components/semantic/Nav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 w-full mb-28">
            <div className="text-2xl font-bold text-white">LOGO</div>
            <Nav />

            <Link
                href="/register"
                type="button"
                aria-label="Register"
                className="bg-white hover:bg-emerald-500 hover:scale-105 transition-all duration-300 text-black font-medium px-8 py-3 rounded-full cursor-pointer"
            >
                Register
            </Link>
        </header>
    );
}