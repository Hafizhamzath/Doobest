import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap items-center gap-10 pt-12 md:pt-16">
      <div className="max-w-[520px] flex-1 basis-[420px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Your Partner in Financial Excellence
        </p>
        <h1 className="mb-6 font-serif text-5xl leading-[1.08] font-semibold text-ink sm:text-6xl lg:text-[66px]">
          We Turn
          <br className="hidden sm:block" /> Numbers into
          <br className="hidden sm:block" /> <span className="text-maroon">Confidence.</span>
        </h1>
        <p className="mb-9 max-w-[440px] text-base leading-relaxed text-body">
          Reliable accounting solutions, expert guidance, and career
          development programs to help your business grow and your future
          shine.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Button href="/professional-services">Explore Our Services</Button>
          <Button
            href="/contact"
            variant="text"
            arrow={false}
            icon={<Icon name="calendar" size={16} strokeWidth={1.8} className="text-maroon" />}
          >
            Book a Consultation
          </Button>
        </div>
      </div>

      <div className="flex min-w-[280px] flex-1 basis-[700px] flex-col items-center">
        <Image
          src="/assets/hero-full-visual.png"
          alt="Man walking through marble archway on red carpet, surrounded by accuracy, compliance, growth, expertise, integrity and trust badges"
          width={1402}
          height={1122}
          priority
          className="h-auto w-full max-w-[700px]"
        />
      </div>
    </Container>
  );
}
