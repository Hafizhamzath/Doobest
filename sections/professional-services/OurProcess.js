import Container from "@/components/ui/Container";

const processSteps = [
  { num: "01", title: "Consultation", desc: "We understand your needs" },
  { num: "02", title: "Requirement Analysis", desc: "We assess and plan effectively" },
  { num: "03", title: "Planning", desc: "Our experts create a suitable strategy" },
  { num: "04", title: "Execution", desc: "We implement with precision and care" },
  { num: "05", title: "Review", desc: "We ensure quality and accuracy" },
  { num: "06", title: "Support", desc: "We stay with you for the long term" },
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
          <span
            aria-hidden="true"
            className="absolute top-6 right-[8%] left-[8%] hidden h-0 border-t-[1.5px] border-dashed border-maroon/30 md:block"
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-6 md:gap-x-3">
            {processSteps.map((step) => (
              <div key={step.num} className="relative z-[1] text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {step.num}
                </div>
                <p className="mb-2 font-serif text-[17px] font-bold text-ink">
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
