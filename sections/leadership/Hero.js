import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pt-12 md:pt-16">
      <div className="mx-auto max-w-[460px] flex-1 basis-[380px] text-center lg:mx-0 lg:text-left">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Leadership &amp; Team
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[50px]">
          Experienced Leaders.
          <br className="hidden sm:block" /> <span className="text-maroon">Dedicated Team.</span>
        </h1>
        <span className="mx-auto mb-6 block h-[3px] w-13 bg-maroon lg:mx-0" aria-hidden="true" />
        <p className="mb-8 text-[14.5px] leading-relaxed text-body">
          Behind every accurate report and every confident decision is a team
          of experts who care. Our leaders bring years of experience, and our
          team brings dedication, skill, and a shared commitment to your
          success.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
          <Button href="#our-leadership">Meet Our Leaders</Button>
          <Button
            href="#"
            variant="text"
            arrow={false}
            icon={
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-[1.3px] border-maroon">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-maroon" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            }
          >
            Our Team in Action
          </Button>
        </div>
      </div>

      <div className="flex min-w-[280px] flex-1 basis-[600px] justify-center">
        <div className="relative w-full max-w-[760px]">
          <Image
            src="/assets/leadership-hero-blob-v2.png"
            alt="Doobest executive boardroom with skyline view, in an organic blob-shaped frame"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="h-auto w-full drop-shadow-[0_30px_55px_rgba(17,17,17,0.28)]"
          />
          <div className="absolute -top-2 -right-4 z-[2] w-[150px] rounded-2xl bg-[#2A0808] px-4 py-4 shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:-top-2 sm:-right-6 sm:w-[200px] sm:px-5 sm:py-5">
            <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full border-[1.3px] border-gold font-serif text-[10px] font-bold text-gold sm:mb-2.5 sm:h-7.5 sm:w-7.5 sm:text-sm">
              &ldquo;
            </div>
            <p className="mb-2 text-[9.5px] leading-snug text-white sm:mb-3 sm:text-[12px] sm:leading-relaxed">
              Great leadership builds great teams. Great teams build
              exceptional outcomes.
            </p>
            <span className="mb-2 block h-px w-full bg-white/15 sm:mb-2.5" aria-hidden="true" />
            <p className="mb-1 font-serif text-[13px] font-bold text-gold sm:text-base">Mohamed Amjath</p>
            <p className="text-[8px] font-bold tracking-wide text-gold sm:text-[10px]">FOUNDER &amp; CEO</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
