import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const approachSteps = [
  {
    title: "Conceptual Understanding",
    desc: "We start with clear explanations.",
    icon: { paths: ["M4 4h16v16H4z", "M4 9h16"] },
  },
  {
    title: "Practical Application",
    desc: "Hands-on exercises and case studies.",
    icon: { paths: ["M9 11l3 3L22 4", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"] },
  },
  {
    title: "Industry Relevance",
    desc: "Real-world insights and current trends.",
    icon: { paths: ["M3 17l6-6 4 4 8-8", "M15 6h6v6"] },
  },
  {
    title: "Continuous Guidance",
    desc: "Get feedback and support at every step.",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M23 20v-2a4 4 0 00-3-3.87",
        "M16 3.13a4 4 0 010 7.75",
      ],
    },
  },
];

const whyChoose = [
  {
    title: "Expert Instructors",
    desc: "Learn from industry professionals with real-world experience.",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M18 3l.6 1.6L20 5l-1.4.4L18 7l-.6-1.6L16 5l1.4-.4z",
      ],
    },
  },
  {
    title: "Practical Approach",
    desc: "Hands-on training with live projects and case studies.",
    icon: { paths: ["M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z", "M4 5v14", "M8 7h6M8 11h6"] },
  },
  {
    title: "Flexible Learning",
    desc: "Online, live, and recorded classes to suit your schedule and pace.",
    icon: { paths: ["M4 4h16v13H4z", "M9 20h6", "M12 17v3", "M10 9l4 2-4 2z"] },
  },
  {
    title: "Certification",
    desc: "Industry-recognized certificates to boost your career opportunities.",
    icon: {
      paths: [
        "M12 3l2.2 4.5L19 8l-3.5 3.4.8 4.8L12 14l-4.3 2.2.8-4.8L5 8l4.8-.5z",
        "M9 19l3 3 3-3",
      ],
    },
  },
  {
    title: "Career Support",
    desc: "Resume guidance, interview preparation and job support.",
    icon: {
      paths: [
        "M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2z",
        "M9 9a3 3 0 006 0",
        "M9 9V7a3 3 0 016 0v2",
      ],
    },
  },
  {
    title: "Job-Ready Skills",
    desc: "Build in-demand skills & gain confidence to succeed in your career.",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M18 5l.6 1.6L20 7l-1.4.4L18 9l-.6-1.6L16 7l1.4-.4z",
        "M20 13l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z",
      ],
    },
  },
];

export default function LearningApproach() {
  return (
    <Container as="section" className="grid grid-cols-1 gap-14 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Our Learning Approach
        </p>
        <h2 className="mb-5 font-serif text-2xl leading-snug font-semibold text-ink md:text-3xl">
          Practical Learning That Makes a <em className="font-bold text-maroon not-italic">Difference</em>
        </h2>
        <p className="mb-10 max-w-[420px] text-sm leading-relaxed text-muted">
          Our programs combine expert instruction with hands-on practice,
          real-world projects, and continuous support.
        </p>

        <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-3">
          <span
            aria-hidden="true"
            className="absolute top-7 right-[8%] left-[8%] hidden h-0 border-t-[1.5px] border-dashed border-maroon/35 sm:block"
          />
          {approachSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90} className="relative z-[1] text-center">
              <div className="group cursor-default">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-[1.3px] border-maroon/30 bg-cream transition-all duration-300 group-hover:scale-110 group-hover:bg-maroon">
                  <Icon paths={step.icon.paths} size={22} strokeWidth={1.5} className="text-maroon transition-colors duration-300 group-hover:text-white" />
                </div>
                <p className="mb-1.5 text-[13.5px] leading-tight font-bold text-ink transition-colors duration-300 group-hover:text-maroon">
                  {step.title}
                </p>
                <p className="text-[11.5px] leading-relaxed text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-[linear-gradient(140deg,#4a0d0d,#2a0808)] px-6 py-10 sm:px-11">
        <p className="mb-6 text-xs font-bold tracking-[0.2em] text-gold uppercase">
          Why Choose Doobest Academy?
        </p>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {whyChoose.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="group flex gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.3px] border-gold/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
                <Icon paths={item.icon.paths} size={20} strokeWidth={1.5} className="text-gold transition-colors duration-300 group-hover:text-[#2a0808]" />
              </div>
              <div>
                <p className="mb-1.5 font-serif text-[15px] font-bold text-white">
                  {item.title}
                </p>
                <p className="text-[12.5px] leading-snug text-white/65">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
