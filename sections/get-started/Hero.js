import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import GetStartedForm from "@/sections/get-started/GetStartedForm";

const heroFeatures = [
  {
    title: "Easy Process",
    desc: "Simple steps to get started",
    icon: {
      paths: [
        "M3 10h18M7 3v4M17 3v4",
        "M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z",
      ],
    },
  },
  {
    title: "Secure & Confidential",
    desc: "Your data is protected with 100% confidentiality",
    icon: {
      paths: ["M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5z", "M9 12l2 2 4-4"],
    },
  },
  {
    title: "Expert Support",
    desc: "Our team is here to assist you",
    icon: {
      paths: [
        "M4 16v-4a8 8 0 1116 0v4",
        "M4 16a2 2 0 002 2h1v-6H5a1 1 0 00-1 1v3z",
        "M20 16a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1v3z",
      ],
    },
  },
];

export default function Hero() {
  return (
    <Container as="section" size="wide" className="flex flex-wrap items-stretch gap-8 pt-12 pb-8 md:pt-16">
      <div className="max-w-[420px] flex-1 basis-[340px] pr-0 lg:pr-6">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Get Started
        </p>
        <h1 className="mb-5 font-serif text-4xl leading-[1.12] font-semibold text-ink sm:text-[44px]">
          Take the First Step Towards{" "}
          <span className="text-maroon">Financial Clarity.</span>
        </h1>
        <span className="mb-6 block h-[3px] w-13 bg-gold" aria-hidden="true" />
        <p className="mb-7 text-sm leading-relaxed text-body">
          Partner with Doobest and experience accounting solutions that bring
          accuracy, compliance, and confidence to your business.
        </p>
        <div className="flex flex-wrap gap-5">
          {heroFeatures.map((feature) => (
            <div key={feature.title} className="flex max-w-[120px] flex-col items-start gap-2.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon">
                <Icon paths={feature.icon.paths} size={19} strokeWidth={1.8} />
              </div>
              <p className="text-[13px] font-bold text-ink">{feature.title}</p>
              <p className="text-[11.5px] leading-relaxed text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[300px] min-w-[280px] flex-[1.5] basis-[440px]">
        <Image
          src="/assets/getstarted-hero-desk-v2.jpg"
          alt="Doobest executive office with branded wall art"
          fill
          priority
          sizes="(min-width: 1024px) 35vw, 90vw"
          className="rounded-t-[100px] object-cover sm:rounded-t-[150px] lg:rounded-t-[200px]"
        />
      </div>

      <div className="max-w-[400px] flex-1 basis-[340px]">
        <GetStartedForm />
      </div>
    </Container>
  );
}
