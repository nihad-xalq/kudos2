import Image from "next/image";

export default function Logo({ inverted = true }: { inverted?: boolean }) {
    return (
        <Image
            src="/kudos_logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className={`w-full h-auto ${inverted ? 'brightness-0 invert' : ''}`}
        />);
}   