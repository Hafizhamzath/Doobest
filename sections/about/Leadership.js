import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const leaders = [
  {
    name: "Mohamed Amjath",
    role: "Founder & CEO",
    desc: "Over 15 years of experience in strategic finance and business advisory.",
    photo: "/assets/team-amjath.jpg",
    linkedin: "https://www.linkedin.com/in/nazeer-amjath-aa8292215",
  },
  {
    name: "Amna",
    role: "Finance - Operations",
    desc: "Expert in operations excellence and financial workflows management.",
    photo: "/assets/about-leader-2.png",
    linkedin: "https://www.linkedin.com/in/naseer-fathima-amna-3b2212289",
  },
  {
    name: "Steshan",
    role: "Partner - Advisory",
    desc: "Specializes in strategic advisory, risk analysis, and financial consulting.",
    photo: "/assets/team-stasan.jpg",
    linkedin: "https://www.linkedin.com/in/steshanfernando",
  },
  {
    name: "Anujan",
    role: "Head - Taxation",
    desc: "Tax expert with deep knowledge in VAT, corporate tax and international taxation.",
    photo: "/assets/team-anujan.jpg",
    linkedin: "https://www.linkedin.com/in/lokenthiran-anujan-6a4160225",
  },
];

export default function Leadership() {
  return (
    <Container id="leadership" as="section" className="pb-20 text-center md:pb-24">
      <SectionHeading
        align="center"
        eyebrow="Team Members"
        title={
          <>
            Experienced Leaders. <span className="text-maroon">Dedicated Team.</span>
          </>
        }
        description="Our leadership team combines expertise, experience, and vision to helping businesses succeed."
        className="mx-auto"
        descriptionClassName="mx-auto"
      />

      <div className="mt-12 mb-10 flex flex-wrap justify-center gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="group flex max-w-[380px] min-w-[280px] flex-1 basis-[320px] items-stretch overflow-hidden rounded-2xl border border-ink/[0.06] bg-white text-left shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(100,16,16,0.16)]"
          >
            <div className="relative w-[130px] shrink-0 overflow-hidden">
              <Image
                src={leader.photo}
                alt={`${leader.name} portrait`}
                fill
                sizes="130px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center px-4 py-5">
              <p className="mb-1 font-serif text-lg font-bold text-ink transition-colors duration-300 group-hover:text-maroon">
                {leader.name}
              </p>
              <p className="mb-2.5 text-[12.5px] font-semibold text-maroon">{leader.role}</p>
              <span className="mb-2.5 block h-0.5 w-5 bg-maroon transition-all duration-300 group-hover:w-8" aria-hidden="true" />
              <p className="mb-3 text-xs leading-snug text-muted">{leader.desc}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${leader.name} on LinkedIn`}
                className="flex h-6.5 w-6.5 items-center justify-center rounded-md border-[1.2px] border-maroon text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white group-hover:bg-maroon group-hover:text-white"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.78V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <Button href="/leadership" variant="text" className="mx-auto">
        View Our Team
      </Button>
    </Container>
  );
}
