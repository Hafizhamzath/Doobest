import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { approachSteps } from "@/constants/approach";

export default function OurApproach() {
  return (
    <section className="bg-[linear-gradient(135deg,#1a0808,#3a0d0d_55%,#2a0909)] py-20 md:py-24">
      <Container size="medium">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.6fr_1.4fr] md:gap-10">
          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Our Approach
            </p>
            <span className="mx-auto mb-4 block h-0.5 w-9 bg-gold md:mx-0" aria-hidden="true" />
            <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
              A Simple Process That <em className="font-bold text-gold not-italic">Works</em>
            </h2>
            <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-white/60 md:mx-0">
              We follow a proven methodology to understand, plan, implement
              and continuously improve.
            </p>
            <Button href="/professional-services" variant="text" tone="gold">
              Learn More About Our Approach
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-3">
            {approachSteps.map((step, index) => (
              <Reveal key={step.num} delay={index * 90} className="relative text-center">
                {index < approachSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[29px] left-[calc(50%+30px)] hidden h-0 w-[calc(100%-20px)] border-t-[1.5px] border-dashed border-gold/40 lg:block"
                  />
                )}
                <div className="group cursor-default">
                  <p className="mb-3 text-[13px] font-bold tracking-wide text-gold">
                    {step.num}
                  </p>
                  <div className="relative z-[1] mx-auto mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[1.5px] border-white/35 bg-[#1a0808] transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-active:scale-110 group-active:border-gold group-active:bg-gold">
                    <Icon paths={step.icon.paths} size={22} strokeWidth={1.5} className="text-white transition-colors duration-300 group-hover:text-maroon group-active:text-maroon" />
                  </div>
                  <p className="mb-2.5 font-serif text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold group-active:text-gold">
                    {step.title}
                  </p>
                  <p className="mx-auto max-w-[170px] text-[12.5px] leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
