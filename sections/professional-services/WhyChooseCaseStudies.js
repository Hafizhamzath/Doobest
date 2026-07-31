import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const othersList = ["Generic Advice", "Slow Response", "Hidden Costs", "Manual Reports"];

const doobestList = [
  "Affordable Expertise",
  "Dedicated Advisor",
  "Fast Response",
  "Transparent Pricing",
  "Digital Reporting",
  "Compliance Assurance",
  "Business Growth",
  "Long-Term Partnership",
];

const caseStudies = [
  {
    category: "Restaurant Business",
    desc: "Streamlined accounting and payroll helped reduce costs and save 25% hours per month.",
    image: "/assets/case-study-restaurant.jpg",
  },
  {
    category: "Transportation",
    desc: "Better fleet expense tracking and cash flow visibility helped cut fuel and maintenance costs.",
    image: "/assets/case-study-transportation.jpg",
  },
  {
    category: "SME - Retail Business",
    desc: "Accurate reporting and tax planning led to increased profits and better financial control.",
    image: "/assets/case-study-sme-retail.jpg",
  },
];

export default function WhyChooseCaseStudies() {
  return (
    <Container as="section" className="grid grid-cols-1 gap-14 py-20 md:py-24 lg:grid-cols-[0.85fr_1.3fr]">
      <div>
        <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Why Choose Doobest
        </p>
        <h2 className="mb-8 font-serif text-2xl leading-tight font-semibold text-ink md:text-3xl">
          More Than Numbers.
          <br />
          We Build Confidence.
        </h2>

        <Reveal className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
          <div className="border border-ink/[0.08] bg-white px-4 py-5 sm:px-5">
            <p className="mb-4 text-xs font-bold tracking-wide text-faint uppercase">
              Others
            </p>
            <ul className="flex flex-col gap-3.5">
              {othersList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg px-1.5 py-0.5 text-[13.5px] text-muted transition-all duration-200 hover:translate-x-1 hover:bg-ink/[0.03]"
                >
                  <span className="text-maroon" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#7a1414] to-[#4a0d0d] px-4 py-5 text-white sm:px-5">
            <p className="mb-4 text-xs font-bold tracking-wide text-gold uppercase">
              Doobest +
            </p>
            <ul className="flex flex-col gap-3.5">
              {doobestList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg px-1.5 py-0.5 text-[13.5px] font-semibold transition-all duration-200 hover:translate-x-1 hover:bg-white/10"
                >
                  <span className="text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div>
        <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Case Studies
        </p>
        <h2 className="mb-8 font-serif text-2xl leading-tight font-semibold text-ink md:text-3xl">
          Real Results. Stronger Businesses.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.category} delay={index * 110} className="group">
              <div className="relative mb-4 h-[150px] overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 group-hover:shadow-[0_18px_36px_rgba(100,16,16,0.18)]">
                <Image
                  src={study.image}
                  alt={study.category}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mb-2 text-[11.5px] font-bold tracking-wide text-maroon uppercase">
                {study.category}
              </p>
              <p className="mb-3.5 text-[13.5px] leading-relaxed text-body">
                {study.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors duration-200 group-hover:text-maroon"
              >
                Read Full Story{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
