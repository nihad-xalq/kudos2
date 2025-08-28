import Nav from "@/components/semantic/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black grid grid-cols-3 items-center px-4 py-12 w-full">
            <div className="">
                <Link
                    href="/"
                    aria-label="Home"
                    className="flex items-center gap-2"
                >
                    <Image src="/logo.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </Link>
            </div>
            <Nav />

            <Link
                href="/register"
                type="button"
                aria-label="Register"
                className="bg-white hover:bg-emerald-500 hover:scale-105 transition-all duration-300 text-black text-center font-medium px-8 py-3 rounded-full cursor-pointer w-1/2 ml-auto"
            >
                Register
            </Link>
        </header>
    );
}