import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const leaders = [
  {
    name: "Hisham Muhammed",
    role: "Founder & CEO",
    desc: "Over 15 years of experience in accounting, finance and business advisory.",
    photo: "/assets/about-leader-1.png",
  },
  {
    name: "Shamla Parveen",
    role: "Director – Operations",
    desc: "Expert in operational excellence and client relationship management.",
    photo: "/assets/about-leader-2.png",
  },
  {
    name: "Faisal Nizar",
    role: "Director – Advisory",
    desc: "Specializes in strategic planning, compliance and financial consulting.",
    photo: "/assets/about-leader-3.png",
  },
  {
    name: "Rashid V.K.",
    role: "Head – Taxation",
    desc: "Tax expert with deep knowledge in VAT, corporate tax and international taxation.",
    photo: "/assets/about-leader-4.png",
  },
];

export default function LeadershipGrid() {
  return (
    <Container id="our-leadership" as="section" className="flex flex-wrap gap-10 pb-20 md:pb-24">
      <div className="max-w-[300px] flex-1 basis-[260px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Our Leadership
        </p>
        <h2 className="mb-4 font-serif text-3xl leading-snug font-semibold text-ink">
          Visionary Leadership.
          <br />
          <span className="text-maroon">Trusted Guidance.</span>
        </h2>
        <span className="mb-5 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        <p className="mb-6 text-sm leading-relaxed text-body">
          Our leadership team brings a blend of expertise, integrity, and
          industry knowledge to deliver excellence at every step.
        </p>
        <Button href="#" variant="text">
          View All Team Members
        </Button>
      </div>

      <div className="grid flex-1 basis-[600px] grid-cols-2 gap-5 sm:grid-cols-4">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3.3] w-full">
              <Image
                src={leader.photo}
                alt={`${leader.name} portrait`}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-4.5">
              <p className="mb-0.5 font-serif text-[17px] font-bold text-maroon">{leader.name}</p>
              <p className="mb-2.5 text-[12.5px] font-semibold text-ink">{leader.role}</p>
              <span className="mb-2.5 block h-0.5 w-5 bg-gold" aria-hidden="true" />
              <p className="mb-3.5 text-xs leading-snug text-muted">{leader.desc}</p>
              <span className="flex h-6.5 w-6.5 items-center justify-center rounded-md border-[1.2px] border-maroon text-maroon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.78V23h-4V8z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
