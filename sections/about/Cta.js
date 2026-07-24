import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Cta() {
  return (
    <Container as="section" size="default" className="py-14 md:py-16">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#2A0808_0%,#3a0d0d_55%,#4a1010_100%)] lg:grid-cols-[25%_45%_30%] lg:items-stretch">
        <div className="relative h-64 w-full sm:h-80 lg:h-full">
          <Image
            src="/assets/about-cta-arch.png"
            alt="Marble archway opening onto a sunset city skyline with lit staircase"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-10 lg:px-10 lg:py-12">
          <h2 className="font-serif text-[26px] leading-snug font-semibold text-white sm:text-[30px] lg:text-[32px]">
            Let&rsquo;s Build a Stronger
            <br />
            <span className="text-gold">Future</span> Together.
          </h2>
          <span className="mt-4 mb-4 block h-0.5 w-11 bg-gold" aria-hidden="true" />
          <p className="max-w-[380px] text-sm leading-relaxed text-white/70">
            We&rsquo;re here to help you achieve your goals with clarity,
            confidence and care.
          </p>
        </div>

        <div className="flex flex-col justify-center border-t border-white/15 px-6 py-10 lg:border-t-0 lg:border-l lg:px-10 lg:py-12">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-[1.3px] border-gold text-gold">
            <Icon
              paths={["M9 14l2 2 4-4"]}
              size={19}
              strokeWidth={1.6}
              rects={[{ x: 3, y: 5, width: 18, height: 16, rx: 2 }]}
            />
          </div>
          <p className="mb-2 font-serif text-lg font-bold text-white">
            Book a Free Consultation
          </p>
          <p className="mb-5 max-w-[280px] text-[13px] leading-relaxed text-white/70">
            Talk to our experts and discover how we can support your
            business.
          </p>
          <Button href="/contact" variant="inverse" size="sm" className="self-start">
            Book Now
          </Button>
        </div>
      </div>
    </Container>
  );
}
