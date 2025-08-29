export default function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-3xl md:text-5xl font-bold uppercase">{title}</h2>
    );
}