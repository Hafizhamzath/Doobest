import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const bio = [
  "Mohamed Amjath is the Founder and Visionary Director of Doobest Consultancy (Pvt) Ltd, a company incorporated under the Sri Lankan Companies Act No. 07 of 2007, providing professional services in Company Secretarial Services, Accounting Solutions, Accounting Coaching, and Accounting-related certification programs.",
  "With a vision to make professional accounting services accessible worldwide, he is expanding Doobest as a trusted global platform offering cost-effective online accounting solutions, enabling businesses to access reliable and efficient accounting support without the burden of maintaining a full-time in-house accountant.",
  "Under his leadership, Doobest provides a wide range of business support services, including VAT and Corporate Tax Registration & Filing, New Business Incorporation, Corporate Bank Account Opening, and complete business back-end support solutions, with a strong focus on delivering value-driven services to businesses across different markets.",
  "Mohamed Amjath holds a Master's Degree in Accounting, a Bachelor's Degree in Business Administration (BBA), and professional qualifications including CMA and AAT. With many years of hands-on accounting experience, he combines technical expertise, practical knowledge, and a forward-thinking approach to help businesses strengthen their financial management and achieve sustainable growth.",
  "His mission is to bridge the gap between businesses and professional accounting expertise by delivering high-quality, affordable, and technology-driven financial solutions globally.",
];

export default function DirectorProfile() {
  return (
    <Container as="section" className="flex flex-wrap gap-12 pb-20 md:pb-24">
      <Reveal variant="left" className="min-w-[240px] flex-1 basis-[280px]">
        <div className="sticky top-24 overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(17,17,17,0.18)] transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/assets/team-amjath.jpg"
              alt="Mohamed Amjath, Visionary Director of Doobest Consultancy"
              fill
              sizes="(min-width: 1024px) 32vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="min-w-[280px] flex-[1.6] basis-[420px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Meet Our Director
        </p>
        <h2 className="mb-6 font-serif text-3xl leading-snug font-semibold text-ink">
          Meet Our Visionary Director.
        </h2>

        <div className="mb-6 rounded-2xl border border-ink/[0.08] bg-cream/60 px-5 py-4">
          <p className="font-serif text-xl font-bold text-ink">Mohamed Amjath</p>
          <p className="mb-1.5 text-[12px] leading-snug text-faint">
            MBus (Acc.Spcl), BBA (Hons), CMA, AATSL
          </p>
          <p className="text-[12.5px] font-bold tracking-wide text-maroon uppercase">
            Visionary Director
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {bio.map((para, index) => (
            <p key={index} className="text-sm leading-relaxed text-body">
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
