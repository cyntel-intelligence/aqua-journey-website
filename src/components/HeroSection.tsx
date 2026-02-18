interface HeroSectionProps {
  title: string;
  description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-blue-100 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
