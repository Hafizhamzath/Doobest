import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const leaders = [
  {
    name: "Mohamed Amjath",
    role: "Founder & CEO",
    desc: "8 years of experience in strategic finance and business advisory.",
    photo: "/assets/team-amjath-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/nazeer-amjath-aa8292215",
  },
  {
    name: "Steshan",
    role: "Finance Manager",
    desc: "Specializes in strategic advisory, risk analysis, and financial consulting.",
    photo: "/assets/team-stasan.jpg",
    linkedin: "https://www.linkedin.com/in/steshanfernando",
  },
  {
    name: "Anujan",
    role: "Senior Accountant",
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

      <div className="mt-12 mb-10 flex flex-wrap justify-center gap-7">
        {leaders.map((leader, index) => (
          <Reveal key={leader.name} delay={index * 90} className="flex max-w-[430px] min-w-[300px] flex-1 basis-[360px]">
          <div
            className="group flex w-full items-stretch overflow-hidden rounded-2xl border border-ink/[0.06] bg-white text-left shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(100,16,16,0.18)]"
          >
            <div className="relative w-[155px] shrink-0 overflow-hidden">
              <Image
                src={leader.photo}
                alt={`${leader.name} portrait`}
                fill
                sizes="155px"
                className="object-cover object-top grayscale-[45%] transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-col justify-center px-5 py-6">
              <p className="mb-1.5 font-serif text-xl font-bold text-ink transition-colors duration-300 group-hover:text-maroon">
                {leader.name}
              </p>
              <p className="mb-3 text-[13.5px] font-semibold text-maroon">{leader.role}</p>
              <span className="mb-3 block h-0.5 w-6 bg-maroon transition-all duration-300 group-hover:w-9" aria-hidden="true" />
              <p className="mb-3.5 text-[13px] leading-relaxed text-muted">{leader.desc}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${leader.name} on LinkedIn`}
                className="flex h-7.5 w-7.5 items-center justify-center rounded-md border-[1.2px] border-maroon text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white group-hover:bg-maroon group-hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.78V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
          </Reveal>
        ))}
      </div>

      <Button href="/leadership" variant="text" className="mx-auto">
        View Our Team
      </Button>
    </Container>
  );
}
