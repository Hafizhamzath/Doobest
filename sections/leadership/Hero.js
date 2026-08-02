import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pt-12 md:pt-16">
      <div className="max-w-[460px] flex-1 basis-[380px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Leadership &amp; Team
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[50px]">
          Experienced Leaders.
          <br className="hidden sm:block" /> <span className="text-maroon">Dedicated Team.</span>
        </h1>
        <span className="mb-6 block h-[3px] w-13 bg-maroon" aria-hidden="true" />
        <p className="mb-8 text-[14.5px] leading-relaxed text-body">
          Behind every accurate report and every confident decision is a team
          of experts who care. Our leaders bring years of experience, and our
          team brings dedication, skill, and a shared commitment to your
          success.
        </p>
        <div className="flex flex-wrap items-center gap-6">
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
            src="/assets/leadership-hero-blob.png"
            alt="Doobest executive boardroom with marble table, city skyline view and branded notebook and mug, in an organic blob-shaped frame"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="h-auto w-full drop-shadow-[0_30px_55px_rgba(17,17,17,0.28)]"
          />
          <div className="absolute top-[10%] -right-2 z-[2] w-[210px] rounded-2xl bg-[#2A0808] px-6 py-7 shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:-right-6 sm:w-[230px]">
            <div className="mb-4.5 flex h-9.5 w-9.5 items-center justify-center rounded-full border-[1.3px] border-gold font-serif text-lg font-bold text-gold">
              &ldquo;
            </div>
            <p className="mb-4.5 text-[13px] leading-relaxed text-white">
              Great leadership builds great teams. Great teams build
              exceptional outcomes.
            </p>
            <span className="mb-4 block h-px w-full bg-white/15" aria-hidden="true" />
            <p className="mb-2.5 font-serif text-xl text-gold italic">Mohamed Amjath</p>
            <p className="text-xs font-bold tracking-wide text-gold">FOUNDER &amp; CEO</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
