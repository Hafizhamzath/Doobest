import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pt-12 md:pt-16">
      <div className="mx-auto max-w-[480px] flex-1 basis-[420px] text-center lg:mx-0 lg:text-left">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          About Doobest
        </p>
        <h1 className="mb-4 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[52px]">
          Our Story.
          <br className="hidden sm:block" /> <span className="text-maroon">Your Success.</span>
        </h1>
        <span className="mx-auto mb-5 block h-[3px] w-13 bg-maroon lg:mx-0" aria-hidden="true" />
        <p className="mb-6 text-[14.5px] leading-relaxed text-body">
          Doobest Consultancy (Pvt) Ltd is a professional accounting and
          financial consultancy firm incorporated under the Companies Act No.
          07 of 2007 of Sri Lanka, proudly serving businesses across Sri
          Lanka and the UAE. We deliver IFRS, IAS and SLFRS-compliant
          accounting, bookkeeping, taxation and company secretarial services
          that help organizations stay compliant and make informed business
          decisions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
          <Button href="#our-journey">Our Journey</Button>
        </div>
      </div>

      <div className="relative min-w-[280px] flex-1 basis-[600px]">
        <div className="relative aspect-[8/5] w-full overflow-hidden rounded-tr-[90px] rounded-bl-[90px] shadow-[0_30px_70px_rgba(17,17,17,0.2)]">
          <Image
            src="/assets/about-hero-reception-v2.jpg"
            alt="Doobest Consultancy reception desk with branded marble wall signage"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="absolute top-[4%] -right-2 z-[2] w-[160px] rounded-2xl bg-[#141414] px-3.5 py-3 shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:top-[10%] sm:-right-10 sm:w-[230px] sm:px-6 sm:py-7">
          <div className="mb-2 flex h-6.5 w-6.5 items-center justify-center rounded-full border-[1.3px] border-gold font-serif text-xs font-bold text-gold sm:mb-4.5 sm:h-9.5 sm:w-9.5 sm:text-sm">
            66
          </div>
          <p className="mb-2 text-[9.5px] leading-snug text-white sm:mb-4.5 sm:text-[13px] sm:leading-relaxed">
            My mission is to bridge the gap between businesses and
            professional accounting expertise — delivering high-quality,
            affordable, technology-driven solutions.
          </p>
          <span className="mb-4 hidden h-px w-full bg-white/15 sm:block" aria-hidden="true" />
          <p className="mb-4.5 hidden text-[11.5px] leading-relaxed text-white/75 sm:block">
            A Partner You Can Trust.
            <br />
            A Team You Can Rely On.
          </p>
          <p className="mb-1 font-serif text-[15px] font-bold text-gold sm:mb-2.5 sm:text-xl">Mohamed Amjath</p>
          <p className="text-[9px] font-bold tracking-wide text-gold sm:text-[11px]">FOUNDER &amp; CEO</p>
        </div>

        <svg viewBox="0 0 100 26" preserveAspectRatio="none" className="-mt-0.5 block h-14 w-full text-maroon" aria-hidden="true">
          <path d="M0,26 C30,4 45,0 62,8 C80,16 90,4 100,0 L100,26 Z" fill="currentColor" />
        </svg>
      </div>
    </Container>
  );
}
