import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { approachSteps } from "@/constants/approach";

export default function OurApproach() {
  return (
    <section className="bg-[linear-gradient(135deg,#1a0808,#3a0d0d_55%,#2a0909)] py-20 md:py-24">
      <Container size="medium">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.6fr_1.4fr] md:gap-10">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Our Approach
            </p>
            <span className="mb-4 block h-0.5 w-9 bg-gold" aria-hidden="true" />
            <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
              A Simple Process That <em className="font-bold text-gold not-italic">Works</em>
            </h2>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              We follow a proven methodology to understand, plan, implement
              and continuously improve.
            </p>
            <Button href="/professional-services" variant="text" tone="gold">
              Learn More About Our Approach
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-3">
            {approachSteps.map((step, index) => (
              <div key={step.num} className="relative text-center">
                {index < approachSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[29px] left-[calc(50%+30px)] hidden h-0 w-[calc(100%-20px)] border-t-[1.5px] border-dashed border-gold/40 lg:block"
                  />
                )}
                <p className="mb-3 text-[13px] font-bold tracking-wide text-gold">
                  {step.num}
                </p>
                <div className="relative z-[1] mx-auto mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[1.5px] border-white/35 bg-[#1a0808]">
                  <Icon paths={step.icon.paths} size={22} strokeWidth={1.5} className="text-white" />
                </div>
                <p className="mb-2.5 font-serif text-lg font-bold text-white">
                  {step.title}
                </p>
                <p className="mx-auto max-w-[170px] text-[12.5px] leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
