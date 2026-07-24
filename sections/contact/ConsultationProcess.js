import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

const processSteps = [
  {
    num: "01",
    title: "Connect",
    desc: "Reach out to us via call, email or form.",
    icon: {
      paths: [
        "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
        "M9 11a4 4 0 100-8 4 4 0 000 8z",
        "M23 21v-2a4 4 0 00-3-3.87",
        "M16 3.13a4 4 0 010 7.75",
      ],
    },
  },
  {
    num: "02",
    title: "Understand",
    desc: "We learn about your business and goals.",
    icon: { paths: ["M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "M12 11a4 4 0 100-8 4 4 0 000 8z"] },
  },
  {
    num: "03",
    title: "Analyze",
    desc: "Our experts analyze your requirements.",
    icon: {
      paths: [
        "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
        "M9 11a4 4 0 100-8 4 4 0 000 8z",
        "M17 8a4 4 0 100 6",
      ],
    },
  },
  {
    num: "04",
    title: "Recommend",
    desc: "We provide the best solutions for you.",
    icon: {
      paths: [
        "M12 17a4 4 0 100-8 4 4 0 000 8z",
        "M12 2l1.2 3.5L17 6l-3 2.5.9 3.6L12 10 8.1 12.1 9 8.5 6 6l3.8-.5z",
      ],
    },
  },
  {
    num: "05",
    title: "Partner",
    desc: "We work together to achieve your success.",
    icon: { paths: ["M12 12a4 4 0 100-8 4 4 0 000 8z", "M4 21a8 8 0 0116 0"] },
  },
];

export default function ConsultationProcess() {
  return (
    <section className="bg-[#2A0808] py-16 md:py-20">
      <Container className="flex flex-wrap items-center gap-10">
        <div className="max-w-[320px] flex-1 basis-[260px]">
          <h2 className="mb-4 font-serif text-2xl leading-snug font-semibold text-white sm:text-[28px]">
            Our Consultation Process
          </h2>
          <span className="mb-5 block h-[3px] w-11 bg-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/65">
            A simple step-by-step approach to deliver results.
          </p>
        </div>

        <div className="grid flex-[3] basis-[600px] grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border-[1.3px] border-gold/40 bg-[#2A0808] text-gold">
                <Icon paths={step.icon.paths} size={26} strokeWidth={1.5} />
              </div>
              <p className="mb-2 font-serif text-sm font-bold text-gold">{step.num}</p>
              <p className="mb-2 font-serif text-lg font-bold text-white">{step.title}</p>
              <p className="mx-auto max-w-[150px] text-[12.5px] leading-relaxed text-white/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
