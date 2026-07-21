import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { services } from "@/constants/services";

export default function ComprehensiveSolutions() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-24">
      <Image src="/assets/arch-bg-dark.png" alt="" fill className="object-cover opacity-90" />

      <Container className="relative z-[1] flex flex-wrap items-center gap-10">
        <div className="flex-1 basis-[280px] lg:max-w-[320px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Our Services
          </p>
          <h2 className="font-serif text-2xl leading-tight font-semibold text-white md:text-3xl">
            Comprehensive Solutions for Every Business Need
          </h2>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl bg-cream px-5 py-6 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon
                paths={service.icon.paths}
                size={26}
                strokeWidth={1.5}
                className="mb-8 text-maroon"
              />
              <p className="mb-3.5 text-[14.5px] leading-tight font-bold text-ink">
                {service.name}
              </p>
              <span className="text-base text-maroon" aria-hidden="true">
                →
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
