import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#2A0808] py-20 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,#2A0808_0%,#3a0d0d_55%,#4a1010_100%)]"
      />

      <Container size="default" className="relative z-[1] flex flex-wrap items-center gap-10">
        <div className="max-w-[420px] flex-1 basis-[300px] overflow-hidden rounded-tr-[60px] rounded-bl-[60px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          <Image
            src="/assets/about-cta-arch.png"
            alt="Marble archway opening onto a sunset city skyline with lit staircase"
            width={620}
            height={914}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="max-w-[420px] flex-1 basis-[300px]">
          <h2 className="mb-4 font-serif text-3xl leading-tight font-semibold text-white">
            Let&rsquo;s Build a Stronger <span className="text-gold">Future Together.</span>
          </h2>
          <span className="mb-5 block h-0.5 w-11 bg-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/75">
            We&rsquo;re here to help you achieve your goals with clarity,
            confidence and care.
          </p>
        </div>

        <div className="hidden self-stretch bg-white/15 lg:block lg:w-px" aria-hidden="true" />

        <div className="max-w-[320px] flex-1 basis-[260px]">
          <div className="mb-4.5 flex h-13 w-13 items-center justify-center rounded-full border-[1.3px] border-gold text-gold">
            <Icon
              paths={["M9 14l2 2 4-4"]}
              size={22}
              strokeWidth={1.6}
              rects={[{ x: 3, y: 5, width: 18, height: 16, rx: 2 }]}
            />
          </div>
          <p className="mb-2.5 font-serif text-lg font-bold text-white">
            Book a Free Consultation
          </p>
          <p className="mb-5 text-[13px] leading-relaxed text-white/70">
            Take the next step toward a stronger and more successful tomorrow.
          </p>
          <Button href="/contact" variant="inverse">
            Book Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
