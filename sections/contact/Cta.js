import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Cta() {
  return (
    <Container as="section" className="grid grid-cols-1 gap-8 py-16 md:py-20 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-stretch">
      <div className="relative min-h-[220px] overflow-hidden rounded-3xl shadow-[0_25px_55px_rgba(17,17,17,0.18)]">
        <Image
          src="/assets/contact-cta-arch.png"
          alt="Marble archway with staircase opening onto a sunset Dubai skyline"
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center">
        <div>
          <h2 className="mb-4 font-serif text-3xl leading-snug font-semibold text-ink">
            Ready to Take the <span className="text-maroon">Next Step?</span>
          </h2>
          <span className="mb-5 block h-[3px] w-11 bg-gold" aria-hidden="true" />
          <p className="text-[14.5px] leading-relaxed text-body">
            Let&rsquo;s build a stronger financial future for your business.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 border-t border-ink/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon">
          <Icon name="calendar" size={24} strokeWidth={1.8} />
        </div>
        <div>
          <p className="mb-1.5 font-serif text-[17px] font-bold text-ink">
            Book a Free Consultation
          </p>
          <p className="mb-4 text-[13px] leading-relaxed text-muted">
            Talk to our experts and see how we can help.
          </p>
          <Button href="/get-started" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </Container>
  );
}
