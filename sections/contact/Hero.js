import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pt-12 pb-8 md:pt-16">
      <div className="max-w-[440px] flex-1 basis-[340px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Contact &amp; Consultation
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[48px]">
          Let&rsquo;s Talk.
          <br className="hidden sm:block" /> Let&rsquo;s Grow <span className="text-maroon">Together.</span>
        </h1>
        <span className="mb-6 block h-[3px] w-13 bg-gold" aria-hidden="true" />
        <p className="mb-8 text-[14.5px] leading-relaxed text-body">
          Have a question, need expert advice, or ready to take your business
          to the next level? We&rsquo;re here to help. Reach out to us today.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Button href="#get-in-touch" size="sm">
            Book a Free Consultation
          </Button>
          <span className="h-8.5 w-px bg-ink/10" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1.1z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted">Or Call Us Directly</p>
              <p className="text-sm font-bold text-maroon">+94 74 041 0943 (Sri Lanka)</p>
              <p className="text-sm font-bold text-maroon">+971 54 374 8522 (UAE)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[340px] min-w-[280px] flex-1 basis-[600px] sm:min-h-[420px] lg:min-h-[460px]">
        <Image
          src="/assets/contact-hero-maroon-bg.png"
          alt=""
          width={1535}
          height={1024}
          className="absolute -top-[6%] right-[-2%] z-0 h-[58%] w-[52%] object-cover opacity-95"
        />
        <div className="absolute inset-0 z-[1] overflow-hidden drop-shadow-[0_30px_55px_rgba(17,17,17,0.3)]">
          <Image
            src="/assets/contact-hero-blob.png"
            alt="Doobest executive boardroom with Dubai skyline view and branded desk items"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="object-cover object-right"
          />
        </div>
        <div className="absolute top-[6%] right-0 z-[2] w-[210px] rounded-2xl bg-[#2A0808] px-6 py-7 shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:right-[-2%] sm:w-[230px]">
          <div className="mb-4.5 flex h-9.5 w-9.5 items-center justify-center rounded-full border-[1.3px] border-gold font-serif text-lg font-bold text-gold">
            &ldquo;
          </div>
          <p className="mb-4.5 text-[13px] leading-relaxed text-white">
            Your success is our priority. Let&rsquo;s create clarity, build
            confidence, and achieve greatness together.
          </p>
          <span className="mb-4 block h-px w-full bg-white/15" aria-hidden="true" />
          <p className="mb-2.5 font-serif text-xl text-gold italic">Mohamed Amjath</p>
          <p className="text-xs font-bold tracking-wide text-gold">FOUNDER &amp; CEO</p>
        </div>
      </div>
    </Container>
  );
}
