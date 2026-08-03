import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Our Mission",
    desc: "To provide reliable accounting and business solutions that empower organizations to grow with confidence and achieve sustainable success.",
    icon: {
      circles: [{ cx: 12, cy: 12, r: 8 }, { cx: 12, cy: 12, r: 3 }],
    },
  },
  {
    title: "Our Vision",
    desc: "To be the most trusted financial partner for businesses, recognized for our accuracy, integrity, and commitment to long-term relationships.",
    icon: {
      paths: ["M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"],
      circles: [{ cx: 12, cy: 12, r: 3 }],
    },
  },
  {
    title: "Our Values",
    isList: true,
    items: [
      "Integrity in every action",
      "Accuracy in every number",
      "Excellence in our service",
      "Commitment to our clients",
      "Growth through learning",
    ],
    icon: {
      paths: ["M6 3h12l4 6-10 12L2 9z", "M2 9h20", "M9 3l3 6-3 12", "M15 3l-3 6 3 12"],
    },
  },
];

export default function OurFoundation() {
  return (
    <Container as="section" className="flex flex-wrap gap-12 pb-20 md:pb-24">
      <div className="max-w-[300px] flex-1 basis-[260px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Our Foundation
        </p>
        <h2 className="mb-4 font-serif text-3xl leading-snug font-semibold text-ink">
          Driven by Purpose.
          <br />
          Guided by Values.
        </h2>
        <span className="mb-5 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-body">
          Our mission, vision and values shape everything we do. They guide
          how we serve our clients, support our team, and contribute to our
          community.
        </p>
      </div>

      <div className="grid min-w-[280px] flex-1 basis-[600px] grid-cols-1 gap-5 sm:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 100}>
          <div
            className="group rounded-2xl border border-ink/[0.06] bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(100,16,16,0.12)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon transition-all duration-300 group-hover:scale-110 group-hover:bg-maroon group-hover:text-white">
              <Icon paths={pillar.icon.paths} circles={pillar.icon.circles} size={22} strokeWidth={1.6} />
            </div>
            <p className="mb-2.5 font-serif text-[17px] font-bold text-ink">{pillar.title}</p>
            {pillar.isList ? (
              <ul className="flex flex-col gap-1.5">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-[12.5px] leading-snug text-muted"
                  >
                    <span className="mt-0.5 shrink-0 text-maroon" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] leading-relaxed text-muted">{pillar.desc}</p>
            )}
          </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
