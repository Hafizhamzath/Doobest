import Container from "@/components/ui/Container";

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
    bgClass: "bg-gradient-to-br from-[#e9ddca] to-[#ddcda9]",
  },
  {
    category: "Construction Company",
    desc: "Improved cash flow management and project tracking, resulting in better project profitability.",
    bgClass: "bg-gradient-to-br from-[#d8c7ab] to-[#c7ae87]",
  },
  {
    category: "SME - Retail Business",
    desc: "Accurate reporting and tax planning led to increased profits and better financial control.",
    bgClass: "bg-gradient-to-br from-[#e2d3ba] to-[#d0bb96]",
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

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
          <div className="border border-ink/[0.08] bg-white px-4 py-5 sm:px-5">
            <p className="mb-4 text-xs font-bold tracking-wide text-faint uppercase">
              Others
            </p>
            <ul className="flex flex-col gap-3.5">
              {othersList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13.5px] text-muted"
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
                  className="flex items-center gap-2 text-[13.5px] font-semibold"
                >
                  <span className="text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Case Studies
        </p>
        <h2 className="mb-8 font-serif text-2xl leading-tight font-semibold text-ink md:text-3xl">
          Real Results. Stronger Businesses.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.category}>
              <div
                className={`mb-4 flex h-[150px] items-center justify-center rounded-2xl font-mono text-[10px] tracking-wide text-ink/35 ${study.bgClass}`}
              >
                {study.category} photo
              </div>
              <p className="mb-2 text-[11.5px] font-bold tracking-wide text-maroon uppercase">
                {study.category}
              </p>
              <p className="mb-3.5 text-[13.5px] leading-relaxed text-body">
                {study.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink hover:text-maroon"
              >
                Read Full Story <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
