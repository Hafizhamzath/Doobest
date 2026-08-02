"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const valueBadges = [
  {
    label: "Accuracy",
    desc: "Precise, error-free financial records.",
    icon: "/assets/badges/badge-accuracy.png",
    left: "19%",
    top: "21%",
    tooltip: "below",
  },
  {
    label: "Expertise",
    desc: "Experienced professionals at your service.",
    icon: "/assets/badges/badge-expertise.png",
    left: "82%",
    top: "21%",
    tooltip: "below",
  },
  {
    label: "Compliance",
    desc: "Fully aligned with UAE & Sri Lanka regulations.",
    icon: "/assets/badges/badge-compliance.png",
    left: "14%",
    top: "43%",
    tooltip: "below",
  },
  {
    label: "Integrity",
    desc: "Honest, transparent financial guidance.",
    icon: "/assets/badges/badge-integrity.png",
    left: "87%",
    top: "43%",
    tooltip: "below",
  },
  {
    label: "Growth",
    desc: "Strategies that scale with your business.",
    icon: "/assets/badges/badge-growth.png",
    left: "16%",
    top: "65%",
    tooltip: "above",
  },
  {
    label: "Trust",
    desc: "A partner you can count on.",
    icon: "/assets/badges/badge-trust.png",
    left: "84%",
    top: "65%",
    tooltip: "above",
  },
];

export default function Hero() {
  return (
    <Container as="section" className="flex flex-col items-start gap-10 pt-6 md:pt-8 lg:flex-row lg:flex-nowrap">
      <div className="min-w-0 max-w-[520px] flex-1 basis-auto pb-10 md:pb-14 lg:basis-[420px]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Welcome to Doobest
        </p>
        <h1 className="mb-6 font-serif text-5xl leading-[1.08] font-semibold text-ink sm:text-6xl lg:text-[58px]">
          Professional Accounting &amp;
          <br className="hidden sm:block" /> <span className="text-maroon">Business Support Solutions</span>
        </h1>
        <p className="mb-9 max-w-[440px] text-base leading-relaxed text-body">
          At Doobest Consultancy, we help businesses simplify their financial
          management through reliable, affordable, and professional
          accounting solutions. We provide online accounting support,
          taxation services, business support services, and career
          development programs designed to meet the needs of modern
          businesses and aspiring accounting professionals.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Button href="/professional-services">Explore Our Services</Button>
          <Button
            href="/contact"
            variant="text"
            arrow={false}
            icon={<Icon name="calendar" size={16} strokeWidth={1.8} className="text-maroon" />}
          >
            Book a Consultation
          </Button>
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-1 basis-auto flex-col items-center lg:min-w-[280px] lg:basis-[700px] lg:self-end">
        <div className="relative w-full max-w-[700px] overflow-hidden rounded-[28px]">
          <Image
            src="/assets/hero-full-visual.png"
            alt="Man walking through marble archway on red carpet, surrounded by accuracy, compliance, growth, expertise, integrity and trust badges"
            width={1402}
            height={1122}
            priority
            className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {valueBadges.map((badge) => (
              <div
                key={badge.label}
                tabIndex={0}
                className="group pointer-events-auto absolute h-[9%] w-[9%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none"
                style={{ left: badge.left, top: badge.top }}
              >
                <span className="absolute inset-0 scale-100 rounded-full bg-gold/0 transition-all duration-500 group-hover:scale-125 group-hover:bg-gold/10 group-focus-visible:scale-125 group-focus-visible:bg-gold/10" />

                <div
                  className={cn(
                    "pointer-events-none absolute left-1/2 flex w-max max-w-[190px] -translate-x-1/2 items-start gap-2.5 rounded-lg bg-ink px-3 py-2.5 text-left opacity-0 shadow-[0_10px_24px_rgba(17,17,17,0.3)] transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                    badge.tooltip === "below"
                      ? "top-full mt-2 translate-y-1 group-hover:translate-y-2 group-focus-visible:translate-y-2"
                      : "bottom-full mb-2 -translate-y-1 group-hover:-translate-y-2 group-focus-visible:-translate-y-2"
                  )}
                >
                  <span className="relative h-8 w-8 shrink-0 rounded-full bg-cream p-1.5">
                    <Image src={badge.icon} alt="" fill sizes="32px" className="object-contain" />
                  </span>
                  <span>
                    <p className="text-[11px] font-bold tracking-wide text-gold">{badge.label}</p>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-white/85">{badge.desc}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
