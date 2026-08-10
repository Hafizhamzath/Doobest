import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const processSteps = [
  {
    num: "01",
    title: "Connect",
    desc: "Share your details and let us know your business needs.",
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
    desc: "We analyze your requirements and understand your goals and challenges.",
    icon: {
      paths: ["M9 11l3 3L22 4", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"],
    },
  },
  {
    num: "03",
    title: "Recommend",
    desc: "Our experts provide the right solutions tailored to your business.",
    icon: { paths: ["M12 2l2.4 6.8L21 10l-5 4.6L17.4 22 12 18.3 6.6 22 8 14.6 3 10l6.6-1.2z"] },
  },
  {
    num: "04",
    title: "Onboard",
    desc: "We get started with a clear plan, timeline, and complete transparency.",
    icon: {
      paths: [
        "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
        "M14 2v6h6",
        "M9 15l2 2 4-4",
      ],
    },
  },
  {
    num: "05",
    title: "Grow Together",
    desc: "We support you continuously to help your business achieve more.",
    icon: { paths: ["M3 21h18M6 21V10l6-5 6 5v11M10 21v-6h4v6"] },
  },
];

const trustPoints = [
  {
    title: "Trusted Expertise",
    desc: "Experienced professionals with industry knowledge.",
    icon: { paths: ["M12 2l2.4 6.8L21 10l-5 4.6L17.4 22 12 18.3 6.6 22 8 14.6 3 10l6.6-1.2z"] },
  },
  {
    title: "Timely & Efficient",
    desc: "We value your time and deliver on our promises.",
    icon: { paths: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 7v5l3 3"] },
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden costs.",
    icon: {
      paths: ["M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5z", "M9 12l2 2 4-4"],
    },
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow when you grow. Your success is our priority.",
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
    title: "Always Here to Help",
    desc: "Dedicated support whenever you need us.",
    icon: {
      paths: [
        "M4 16v-4a8 8 0 1116 0v4",
        "M4 16a2 2 0 002 2h1v-6H5a1 1 0 00-1 1v3z",
        "M20 16a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1v3z",
      ],
    },
  },
];

export default function Process() {
  return (
    <Container as="section" className="pt-10 pb-16 text-center md:pb-20">
      <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
        Our Simple Start Process
      </p>
      <h2 className="mb-12 font-serif text-3xl font-semibold text-ink md:text-4xl">
        From Understanding to Results – We Make It Simple.
      </h2>

      <div className="relative mb-14 flex items-start">
        <span
          aria-hidden="true"
          className="absolute top-[38px] right-[8%] left-[8%] hidden h-0 border-t-2 border-dotted border-gold/50 md:block"
        />
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.num} delay={index * 90} variant="scale" className="group relative z-[1] flex flex-col items-center px-2">
              <div className="mb-4.5 flex items-center gap-3.5">
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#2A0808] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-maroon">
                  <Icon paths={step.icon.paths} size={22} strokeWidth={1.6} />
                </div>
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold/50 bg-cream text-sm font-bold text-maroon">
                  {step.num}
                </div>
              </div>
              <p className="mb-2 font-serif text-lg font-bold text-ink">{step.title}</p>
              <p className="max-w-[160px] text-[12.5px] leading-relaxed text-muted">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap rounded-2xl border border-ink/10 px-5 py-9">
        {trustPoints.map((point, index) => (
          <Reveal
            key={point.title}
            delay={index * 80}
            variant="left"
            className={`group min-w-[150px] flex-1 basis-[160px] px-4.5 text-center ${
              index < trustPoints.length - 1 ? "lg:border-r lg:border-ink/[0.08]" : ""
            }`}
          >
            <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon transition-all duration-300 group-hover:scale-110 group-hover:bg-maroon group-hover:text-white">
              <Icon paths={point.icon.paths} size={26} strokeWidth={1.6} />
            </div>
            <p className="mb-2 text-[13.5px] font-bold text-ink">{point.title}</p>
            <p className="text-xs leading-relaxed text-muted">{point.desc}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
