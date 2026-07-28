import Container from "@/components/ui/Container";

const processSteps = [
  {
    num: "01",
    title: "Client Consultation",
    desc: "Understand the client's business needs and requirements.",
  },
  {
    num: "02",
    title: "Service Assessment",
    desc: "Analyze records and identify the required accounting, tax, or compliance services.",
  },
  {
    num: "03",
    title: "Proposal & Agreement",
    desc: "Provide a customized service plan and confirm engagement.",
  },
  {
    num: "04",
    title: "Data Collection & Processing",
    desc: "Gather documents and perform bookkeeping, tax, payroll, or secretarial work.",
  },
  {
    num: "05",
    title: "Review & Reporting",
    desc: "Review accuracy and provide financial reports, tax filings, or compliance updates.",
  },
  {
    num: "06",
    title: "Ongoing Support & Growth",
    desc: "Offer continuous guidance, monitoring, and business improvement recommendations.",
  },
];

export default function OurProcess() {
  return (
    <Container as="section" className="py-20 md:py-24">
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex-1 basis-[280px] lg:max-w-[340px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
            Our Process
          </p>
          <h2 className="font-serif text-2xl leading-tight font-semibold text-ink md:text-3xl">
            A Simple Process for Better Results
          </h2>
        </div>

        <div className="relative flex-1 basis-[600px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.num} className="relative z-[1] text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {step.num}
                </div>
                <p className="mb-2 font-serif text-[15px] leading-tight font-bold text-ink">
                  {step.title}
                </p>
                <p className="text-[12.5px] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
