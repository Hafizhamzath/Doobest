import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const journey = [
  {
    year: "2012",
    title: "The Beginning",
    desc: "Doobest Consultancy Ltd was founded with a vision to deliver trusted accounting and advisory services.",
    icon: { paths: ["M4 21V4l14 4-6 3 6 3H4"] },
  },
  {
    year: "2016",
    title: "Growing Stronger",
    desc: "Expanded our team and services to support businesses across multiple industries.",
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
    year: "2021",
    title: "New Horizons",
    desc: "Launched Doobest Academy to empower professionals with practical financial knowledge.",
    icon: { paths: ["M3 21h18", "M6 21V9l6-5 6 5v12", "M10 21v-6h4v6"] },
  },
  {
    year: "2024 & Beyond",
    title: "Building the Future",
    desc: "Continuing to innovate, grow and create lasting value for our clients and communities.",
    icon: { paths: ["M12 2l2.4 6.8L21 10l-5 4.6L17.4 22 12 18.3 6.6 22 8 14.6 3 10l6.6-1.2z"] },
  },
];

export default function OurJourney() {
  return (
    <Container id="our-journey" as="section" className="flex flex-wrap gap-12 pb-20 md:pb-24">
      <div className="max-w-[340px] flex-1 basis-[280px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Our Journey
        </p>
        <h2 className="mb-4 font-serif text-3xl leading-snug font-semibold text-ink">
          Built on Trust.
          <br />
          Focused on Impact.
        </h2>
        <span className="mb-5 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        <p className="mb-4 text-sm leading-relaxed text-body">
          <span className="font-bold text-ink">Our Vision — </span>
          To become the most trusted accounting and business consultancy
          partner, empowering businesses with financial clarity, compliance,
          and sustainable growth.
        </p>
        <p className="mb-7 text-sm leading-relaxed text-body">
          <span className="font-bold text-ink">Our Mission — </span>
          To deliver affordable, professional, and technology-driven
          accounting, taxation, and business support services that help
          businesses make informed decisions, achieve compliance, and focus
          on growth.
        </p>
        <Button href="#">Explore Our Journey</Button>
      </div>

      <div className="min-w-[280px] flex-1 basis-[340px]">
        <div className="relative flex flex-col gap-8 pl-1">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] w-px bg-maroon/25"
          />
          {journey.map((item) => (
            <div key={item.year} className="relative flex items-start gap-5">
              <div className="z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
                <Icon paths={item.icon.paths} size={18} strokeWidth={1.6} />
              </div>
              <div>
                <p className="mb-1 font-serif text-lg font-bold text-maroon">{item.year}</p>
                <p className="mb-1.5 text-[15px] font-bold text-ink">{item.title}</p>
                <p className="max-w-[340px] text-[13px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-w-[280px] flex-1 basis-[320px]">
        <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(17,17,17,0.16)]">
          <Image
            src="/assets/about-journey-desk.png"
            alt="Doobest branded notebook, mug and globe on an executive desk"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
