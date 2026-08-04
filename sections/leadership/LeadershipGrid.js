import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const leaders = [
  {
    name: "Mohamed Amjath",
    role: "Founder & CEO",
    qualifications: "MBus (Acc.Spcl), BBA (Hons), CMASL, AATPF",
    desc: "Leads the firm's vision, strategic growth, and client trust across all services.",
    photo: "/assets/team-amjath-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/nazeer-amjath-aa8292215",
  },
  {
    name: "Steshan Placidus Fernando",
    role: "Finance Manager",
    qualifications: "ACCA, BBA (Hons), AAT",
    desc: "Leads financial operations, budgeting, forecasting, and performance reporting.",
    photo: "/assets/team-stasan.jpg",
    linkedin: "https://www.linkedin.com/in/steshanfernando",
  },
  {
    name: "Mohamed Najath",
    role: "Accounts Lead",
    qualifications: "HNDA, BBA (Hons)",
    desc: "Supervises the accounting team, workflow, and reporting accuracy.",
    photo: "/assets/team-najath.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-najath",
  },
  {
    name: "Imthath Husain",
    role: "Lead in Financial Reporting",
    qualifications: "ACCA®, CA®, BBA (Acc.Spcl)",
    desc: "Manages financial statement preparation, IFRS compliance, and audit coordination.",
    photo: "/assets/team-imthath.jpg",
    linkedin: "https://www.linkedin.com/in/imthath-husain-90958b268",
  },
  {
    name: "Lokenthiran Anujan",
    role: "Senior Accountant",
    qualifications: "MBus (Acc.Spcl), BBA (Hons), CMA",
    desc: "Handles daily accounting, bookkeeping, reconciliations, and monthly closings.",
    photo: "/assets/team-anujan.jpg",
    linkedin: "https://www.linkedin.com/in/lokenthiran-anujan-6a4160225",
  },
];

export default function LeadershipGrid() {
  return (
    <Container id="our-leadership" as="section" className="flex flex-wrap gap-8 pb-14 md:pb-16">
      <div className="max-w-[300px] flex-1 basis-[260px]">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Team Members
        </p>
        <h2 className="mb-3 font-serif text-3xl leading-snug font-semibold text-ink">
          Visionary Leadership.
          <br />
          <span className="text-maroon">Trusted Guidance.</span>
        </h2>
        <span className="mb-4 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        <p className="mb-5 text-sm leading-relaxed text-body">
          Our leadership team brings a blend of expertise, integrity, and
          industry knowledge to deliver excellence at every step.
        </p>
        <Button href="#" variant="text">
          View All Team Members
        </Button>
      </div>

      <div className="grid flex-1 basis-[600px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {leaders.map((leader, index) => (
          <Reveal key={leader.name} delay={index * 80}>
          <div
            className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(100,16,16,0.16)]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={leader.photo}
                alt={`${leader.name} portrait`}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="px-3 py-3">
              <p className="mb-0.5 font-serif text-[14.5px] leading-snug font-bold text-maroon">{leader.name}</p>
              <p className="mb-1 text-[11px] font-semibold text-ink">{leader.role}</p>
              <p className="mb-2 text-[9.5px] leading-snug text-faint">{leader.qualifications}</p>
              <span className="mb-2 block h-0.5 w-4 bg-gold transition-all duration-300 group-hover:w-7" aria-hidden="true" />
              <p className="mb-2.5 text-[11px] leading-snug text-muted">{leader.desc}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${leader.name} on LinkedIn`}
                className="flex h-6 w-6 items-center justify-center rounded-md border-[1.2px] border-maroon text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white group-hover:bg-maroon group-hover:text-white"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.78V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
