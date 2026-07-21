import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const heroCards = [
  {
    label: "Expert Guidance",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
      ],
    },
  },
  {
    label: "Reliable Solutions",
    icon: {
      paths: [
        "M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z",
        "M9.5 12l1.8 1.8L15 10",
      ],
    },
  },
  {
    label: "Stronger Tomorrow",
    icon: {
      paths: ["M4 20V10M10 20V4M16 20v-7M22 20V13", "M15 6l5-2 2 5"],
    },
  },
];

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1920px] flex-wrap items-stretch">
      <div className="flex flex-1 basis-[480px] flex-col justify-center px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Professional Services
        </p>
        <h1 className="mb-6 max-w-[600px] font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[56px]">
          Complete Financial Solutions for{" "}
          <span className="text-maroon">Modern Businesses.</span>
        </h1>
        <p className="mb-9 max-w-[480px] text-base leading-relaxed text-body">
          Doobest provides end-to-end accounting and financial solutions that
          help you stay compliant, make better decisions, and build a
          stronger tomorrow.
        </p>
        <div className="flex flex-wrap items-center gap-7">
          <Button href="/contact">Book a Consultation</Button>
          <Button href="#services-explorer" variant="text">
            Explore Services
          </Button>
        </div>
      </div>

      <div className="relative min-h-[360px] flex-1 basis-[640px] sm:min-h-[440px] lg:min-h-[520px]">
        <Image
          src="/assets/services-hero-desk.png"
          alt="Laptop with financial dashboard on marble desk"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="rounded-tl-[100px] object-cover sm:rounded-tl-[150px] lg:rounded-tl-[200px]"
        />
        <div className="absolute top-1/2 right-4 z-[2] hidden -translate-y-1/2 flex-col gap-4 sm:right-6 md:flex">
          {heroCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 whitespace-nowrap shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
            >
              <Icon paths={card.icon.paths} size={20} strokeWidth={1.6} className="text-maroon" />
              <span className="text-sm font-bold text-ink">{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
