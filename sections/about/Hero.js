import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pt-12 md:pt-16">
      <div className="max-w-[480px] flex-1 basis-[420px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          About Doobest
        </p>
        <h1 className="mb-5 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[52px]">
          Our Story.
          <br className="hidden sm:block" /> <span className="text-maroon">Your Success.</span>
        </h1>
        <span className="mb-6 block h-[3px] w-13 bg-maroon" aria-hidden="true" />
        <p className="mb-5 text-[14.5px] leading-relaxed text-body">
          Doobest Consultancy (Pvt) Ltd is a professional accounting and
          financial consultancy firm incorporated under the Companies Act No.
          07 of 2007 of Sri Lanka, proudly serving businesses across Sri
          Lanka and the UAE.
        </p>
        <p className="mb-8 text-[14.5px] leading-relaxed text-body">
          We deliver IFRS, IAS and SLFRS-compliant accounting, bookkeeping,
          taxation and company secretarial services that help organizations
          stay compliant and make informed business decisions.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Button href="#our-journey">Our Journey</Button>
          <Button
            href="#"
            variant="text"
            arrow={false}
            icon={
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-[1.3px] border-maroon">
                <Icon paths={["M8 5v14l11-7z"]} size={10} strokeWidth={0} className="fill-maroon" />
              </span>
            }
          >
            Watch Our Story
          </Button>
        </div>
      </div>

      <div className="relative min-w-[280px] flex-1 basis-[600px]">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tr-[90px] rounded-bl-[90px] shadow-[0_30px_70px_rgba(17,17,17,0.2)]">
          <Image
            src="/assets/about-hero-reception.png"
            alt="Doobest Consultancy reception desk with marble wall signage and skyline view through an arch"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="absolute top-[10%] -right-2 z-[2] w-[210px] rounded-2xl bg-[#141414] px-6 py-7 shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:-right-10 sm:w-[230px]">
          <div className="mb-4.5 flex h-9.5 w-9.5 items-center justify-center rounded-full border-[1.3px] border-gold font-serif text-sm font-bold text-gold">
            66
          </div>
          <p className="mb-4.5 text-[13px] leading-relaxed text-white">
            My mission is to bridge the gap between businesses and
            professional accounting expertise — delivering high-quality,
            affordable, technology-driven solutions.
          </p>
          <span className="mb-4 block h-px w-full bg-white/15" aria-hidden="true" />
          <p className="mb-4.5 text-[11.5px] leading-relaxed text-white/75">
            A Partner You Can Trust.
            <br />
            A Team You Can Rely On.
          </p>
          <p className="mb-2.5 font-serif text-xl text-gold italic">Mohamed Amjath</p>
          <p className="text-[11px] font-bold tracking-wide text-gold">FOUNDER &amp; CEO</p>
        </div>

        <svg viewBox="0 0 100 26" preserveAspectRatio="none" className="-mt-0.5 block h-14 w-full text-maroon" aria-hidden="true">
          <path d="M0,26 C30,4 45,0 62,8 C80,16 90,4 100,0 L100,26 Z" fill="currentColor" />
        </svg>
      </div>
    </Container>
  );
}
