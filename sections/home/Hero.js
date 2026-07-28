import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <Container as="section" className="flex flex-col items-start gap-10 pt-6 md:pt-8 lg:flex-row lg:flex-nowrap">
      <div className="min-w-0 max-w-[520px] flex-1 basis-auto pb-10 md:pb-14 lg:basis-[420px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Welcome to Doobest
        </p>
        <h1 className="mb-6 font-serif text-5xl leading-[1.08] font-semibold text-ink sm:text-6xl lg:text-[58px]">
          Professional Accounting &amp;
          <br className="hidden sm:block" /> <span className="text-maroon">Business Support Solutions</span>
        </h1>
        <p className="mb-9 max-w-[440px] text-base leading-relaxed text-body">
          At Doobest Consultancy, we help businesses simplify their financial
          management through reliable, affordable, and professional
          accounting solutions. We provide online accounting support,
          taxation services, business support services, and career
          development programs designed to meet the needs of modern
          businesses and aspiring accounting professionals.
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

      <div className="flex w-full min-w-0 flex-1 basis-auto flex-col items-center lg:min-w-[280px] lg:basis-[700px] lg:self-end">
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
