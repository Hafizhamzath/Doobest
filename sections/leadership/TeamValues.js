import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

const values = [
  {
    title: "Collaboration",
    desc: "We work together, support each other, and achieve more as one team.",
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
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and professionalism.",
    icon: { paths: ["M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5z", "M9 12l2 2 4-4"] },
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering exceptional quality every time.",
    icon: { paths: ["M12 2l2.4 6.8L21 10l-5 4.6L17.4 22 12 18.3 6.6 22 8 14.6 3 10l6.6-1.2z"] },
  },
  {
    title: "Growth",
    desc: "We encourage learning, innovation, and continuous improvement.",
    icon: { paths: ["M3 21h4v-7H3z", "M10 21h4V9h-4z", "M17 21h4V4h-4z", "M3 13l6-5 4 3 7-7"] },
  },
  {
    title: "Client Focus",
    desc: "We put our clients at the center of everything we do.",
    icon: { paths: ["M12 12a4 4 0 100-8 4 4 0 000 8z", "M4 21a8 8 0 0116 0"] },
  },
];

export default function TeamValues() {
  return (
    <Container as="section" className="pb-20 md:pb-24">
      <p className="mb-7 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
        Our Team Values
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`px-3 text-center ${
              index < values.length - 1 ? "lg:border-r lg:border-ink/[0.08]" : ""
            }`}
          >
            <div className="mx-auto mb-4.5 flex h-[76px] w-[76px] items-center justify-center rounded-full border-[1.3px] border-maroon/20 text-maroon">
              <Icon paths={value.icon.paths} size={26} strokeWidth={1.5} />
            </div>
            <p className="mb-2.5 font-serif text-lg font-bold text-ink">{value.title}</p>
            <p className="mb-2.5 text-[12.5px] leading-relaxed text-muted">{value.desc}</p>
            <span className="mx-auto block h-0.5 w-6 bg-gold" aria-hidden="true" />
          </div>
        ))}
      </div>
    </Container>
  );
}
