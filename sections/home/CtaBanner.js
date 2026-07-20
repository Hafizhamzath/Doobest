import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function CtaBanner() {
  return (
    <Container as="section" size="narrow" className="mb-20 md:mb-24">
      <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#5a1010,#6D1414_55%,#4a0d0d)] px-8 py-12 md:px-14 md:py-14 lg:grid-cols-[auto_1fr_auto_1fr_auto]">
        <span
          aria-hidden="true"
          className="absolute top-1/2 -left-2.5 hidden h-[150px] w-[150px] -translate-y-1/2 rounded-full border border-dashed border-gold/35 lg:block"
        />

        <div className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-gold/50">
          <Icon
            paths={["M12 19l7-7 3 3-7 7-3-3z", "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z", "M2 2l7.586 7.586"]}
            circles={[{ cx: 11, cy: 11, r: 2 }]}
            size={22}
            strokeWidth={1.6}
            className="text-gold"
          />
        </div>

        <p className="font-serif text-2xl leading-snug font-semibold text-white md:text-[30px]">
          Need Professional Accounting <em className="text-gold">Support?</em>
        </p>

        <span aria-hidden="true" className="hidden h-16 w-px bg-white/25 lg:block" />

        <p className="max-w-[320px] text-sm leading-relaxed text-white/80">
          Reduce costs, stay compliant and focus on growing your business.
          Let Doobest handle your accounting with accuracy and care.
        </p>

        <div className="flex flex-col items-start gap-3.5">
          <Button href="/contact" variant="inverse">
            Book a Free Consultation
          </Button>
          <p className="flex items-center gap-2 text-[12.5px] text-white/70">
            <Icon
              paths={["M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z", "M9 12l2 2 4-4"]}
              size={14}
              strokeWidth={2}
              className="text-gold"
            />
            No obligation. Just expert advice.
          </p>
        </div>
      </div>
    </Container>
  );
}
