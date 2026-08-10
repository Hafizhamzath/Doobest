import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: "5+",
    label: "Years of Excellence",
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
    value: "15+",
    label: "Happy Clients",
    icon: { paths: ["M3 7h18v13H3z", "M8 7V4h8v3", "M3 12h18"] },
  },
  {
    value: "10+",
    label: "Industries Served",
    icon: { paths: ["M3 21h18", "M6 21V10l4-3 4 3v11", "M14 21v-6l3-2 3 2v6"] },
  },
  {
    value: "10+",
    label: "Expert Professionals",
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
    value: "2",
    label: "Countries Served",
    icon: {
      paths: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M3 12h18", "M12 3a13 13 0 010 18 13 13 0 010-18z"],
    },
  },
];

export default function StatsBar() {
  return (
    <Container as="section" className="pb-16 md:pb-20">
      <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
        <Image src="/assets/about-marble-dark.png" alt="" fill className="object-cover" />
        <div className="relative z-[1] flex flex-wrap gap-x-8 gap-y-6 px-6 py-10 sm:px-10">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              variant="scale"
              className={`group flex flex-1 basis-[160px] items-center gap-4 ${
                index < stats.length - 1 ? "sm:border-r sm:border-gold/25 sm:pr-6" : ""
              }`}
            >
              <Icon paths={stat.icon.paths} size={26} strokeWidth={1.6} className="shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
              <div>
                <p className="font-serif text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-0.5 text-[12.5px] whitespace-nowrap text-white/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
