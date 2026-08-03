import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const ctaPoints = [
  {
    label: "Learn from Experts",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
      ],
    },
  },
  {
    label: "Gain Practical Skills",
    icon: { paths: ["M4 20V10M10 20V4M16 20v-7M22 20V13", "M15 6l5-2 2 5"] },
  },
  {
    label: "Build Your Career",
    icon: {
      paths: [
        "M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2",
        "M3 8h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
        "M3 12h18",
      ],
    },
  },
];

export default function Cta() {
  return (
    <Container as="section" className="py-14 md:py-16">
      <div className="flex flex-wrap items-center gap-10 overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#5a1010,#2a0808)]">
        <div className="relative min-h-[220px] flex-1 basis-[260px] self-stretch">
          <Image src="/assets/arch-bg-red.png" alt="" fill className="object-cover" />
        </div>

        <div className="flex-1 basis-[320px] py-6">
          <h2 className="mb-3.5 font-serif text-3xl leading-tight font-semibold text-white">
            Invest in Your Skills.
            <br />
            Shape Your Future.
          </h2>
          <p className="mb-6 max-w-[340px] text-sm text-white/75">
            Join Doobest Academy and take the first step towards a successful
            career in finance.
          </p>
          <Button href="#" variant="inverse">
            Enroll Now
          </Button>
        </div>

        <div className="hidden self-stretch bg-white/20 lg:block lg:w-px" aria-hidden="true" />

        <div className="flex flex-1 basis-[220px] flex-col gap-4 py-6 pr-6 sm:pr-10">
          {ctaPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 90} className="group flex items-center gap-3">
              <Icon paths={point.icon.paths} size={20} strokeWidth={1.6} className="shrink-0 text-gold transition-transform duration-300 group-hover:scale-125" />
              <span className="text-[13.5px] font-semibold text-white">{point.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
