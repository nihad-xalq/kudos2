import Link from "next/link";

interface NavItem {
    id: number;
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    {
        id: 1,
        name: "About",
        href: "/about"
    },
    {
        id: 2,
        name: "Game Results",
        href: "/results"
    },
    {
        id: 3,
        name: "Contact Us",
        href: "/contact"
    },
]

export default function Nav() {
    return (
        <nav>
            <ul className="flex gap-20 w-full justify-center items-center">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            aria-label={item.name}
                            className="text-white font-light hover:text-green-500 transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}