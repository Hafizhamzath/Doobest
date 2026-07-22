import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const stats = [
  {
    value: "500+",
    label: "Students Trained",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M23 20v-2a4 4 0 00-3-3.87",
        "M16 3.13a4 4 0 010 7.75",
      ],
    },
  },
  {
    value: "20+",
    label: "Expert Instructors",
    icon: { paths: ["M4 12l8-4 8 4-8 4-8-4z", "M4 12v5c2 1.5 5 2 8 2s6-.5 8-2v-5"] },
  },
  {
    value: "15+",
    label: "Courses",
    icon: { paths: ["M8 3h8l2 4H6l2-4z", "M6 7v13a1 1 0 001 1h10a1 1 0 001-1V7"] },
  },
  {
    value: "95%",
    label: "Success Rate",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M18 8l1.5 1.5L22 7",
      ],
    },
  },
];

const heroBadges = [
  {
    label: "PRACTICAL LEARNING",
    icon: { paths: ["M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z", "M4 5v14", "M8 7h6M8 11h6"] },
  },
  {
    label: "EXPERT TRAINERS",
    icon: {
      paths: [
        "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2",
        "M9 10a4 4 0 100-8 4 4 0 000 8z",
        "M23 20v-2a4 4 0 00-3-3.87",
        "M16 3.13a4 4 0 010 7.75",
      ],
    },
  },
  {
    label: "INDUSTRY RELEVANT",
    icon: { paths: ["M3 17l6-6 4 4 8-8", "M15 6h6v6"] },
  },
  {
    label: "CAREER FOCUSED",
    icon: { paths: ["M4 20V10M10 20V4M16 20v-7M22 20V13", "M15 6l5-2 2 5"] },
  },
];

export default function Hero() {
  return (
    <Container as="section" className="flex flex-wrap gap-8 pt-12 md:pt-16">
      <div className="max-w-[520px] flex-1 basis-[420px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Doobest Academy
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[52px]">
          Build Skills.
          <br className="hidden sm:block" /> Build Your{" "}
          <span className="text-maroon">Future.</span>
        </h1>
        <p className="mb-8 max-w-[420px] text-base leading-relaxed text-body">
          Practical learning programs designed to shape confident accounting
          professionals and future business leaders.
        </p>
        <div className="mb-11 flex flex-wrap items-center gap-7">
          <Button href="#our-programs">Explore Courses</Button>
          <Button
            href="#"
            variant="text"
            arrow={false}
            icon={
              <Icon
                paths={["M6 3h9l3 3v15H6z", "M15 3v3h3", "M9 13h6M9 17h6"]}
                size={15}
                strokeWidth={1.8}
                className="text-maroon"
              />
            }
          >
            Download Brochure
          </Button>
        </div>
        <div className="grid max-w-[480px] grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Icon paths={stat.icon.paths} size={24} strokeWidth={1.5} className="mb-2.5 text-maroon" />
              <p className="font-serif text-2xl font-bold text-ink">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-w-[280px] flex-1 basis-[660px] items-start justify-center gap-6">
        <div className="relative w-full max-w-[700px] pb-5">
          <div
            aria-hidden="true"
            className="absolute top-3.5 -right-3.5 bottom-[86px] left-3.5 hidden rounded-t-full border-[1.3px] border-dashed border-maroon/30 sm:block"
          />
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-t-full shadow-[0_30px_70px_rgba(17,17,17,0.18)]">
            <Image
              src="/assets/academy-hero-desk.png"
              alt="Desk with laptop showing Doobest Academy, books and study notes"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <svg
            viewBox="0 0 100 26"
            preserveAspectRatio="none"
            className="-mt-1 block h-16 w-full text-maroon"
            aria-hidden="true"
          >
            <path
              d="M0,0 C20,4 34,26 50,26 C66,26 80,4 100,0 L100,26 L0,26 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="hidden flex-shrink-0 flex-col gap-5 pt-2.5 md:flex">
          {heroBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.3px] border-maroon/30">
                <Icon paths={badge.icon.paths} size={20} strokeWidth={1.6} className="text-maroon" />
              </div>
              <p className="max-w-[100px] text-xs leading-tight font-bold tracking-wide text-ink/85">
                {badge.label}
              </p>
            </div>
          ))}
          <div className="mt-1 flex max-w-[150px] items-start gap-2.5">
            <Icon
              paths={["M12 22s7-3.5 7-10V5l-7-3-7 3v7c0 6.5 7 10 7 10z"]}
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-maroon"
            />
            <p className="text-[11.5px] leading-snug font-bold text-ink/85">
              INVEST IN SKILLS. SECURE YOUR FUTURE.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
