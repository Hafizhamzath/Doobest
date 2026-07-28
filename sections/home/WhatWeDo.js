import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/constants/features";

const serviceArc = [
  {
    label: "Accounting and Bookkeeping",
    x: "12.7%",
    y: "75.8%",
    icon: { paths: ["M6 3h12v18H6z", "M9 7h6M9 11h6M9 15h4"] },
  },
  {
    label: "Taxation",
    x: "27%",
    y: "36.6%",
    icon: { paths: ["M6 3h9l3 3v15H6z", "M15 3v3h3", "M9 12h6M9 16h6"] },
  },
  {
    label: "Accounting Software Implementation",
    x: "50%",
    y: "21.6%",
    icon: { paths: ["M4 4h16v13H4z", "M9 20h6", "M12 17v3", "M8 8h5", "M8 11h8"] },
  },
  {
    label: "Corporate Secretary Services",
    x: "73%",
    y: "36.6%",
    icon: { paths: ["M4 21V9l8-6 8 6v12", "M9 21v-6h6v6", "M4 9h16"] },
  },
  {
    label: "Payroll",
    x: "87.3%",
    y: "75.8%",
    icon: {
      paths: [
        "M9 11a3 3 0 100-6 3 3 0 000 6z",
        "M4 20c0-3 2.5-5 5-5s5 2 5 5",
        "M16 8h4M16 12h4M16 16h4",
      ],
    },
  },
];

const ringDividers = [0, 36, 72, 108, 144, 180].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  const cx = 350;
  const cy = 350;
  const ri = 207;
  const ro = 345;
  return {
    x1: cx + ri * Math.cos(rad),
    y1: cy - ri * Math.sin(rad),
    x2: cx + ro * Math.cos(rad),
    y2: cy - ro * Math.sin(rad),
  };
});

function ServicesMobileList() {
  return (
    <div className="flex flex-col gap-3 sm:hidden">
      {serviceArc.map((service) => (
        <div
          key={service.label}
          className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-maroon/20">
            <Icon paths={service.icon.paths} size={18} strokeWidth={1.6} className="text-gold" />
          </div>
          <p className="text-[13px] leading-snug font-bold text-white/90">{service.label}</p>
        </div>
      ))}
    </div>
  );
}

function ServicesWheel() {
  return (
    <div className="relative mx-auto hidden aspect-[2/1] w-full max-w-[820px] sm:block">
      <svg viewBox="0 0 700 350" className="absolute inset-0 block h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ringFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F2EBDC" />
            <stop offset="100%" stopColor="#E4D7BE" />
          </linearGradient>
          <radialGradient id="centerFill" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#7a1818" />
            <stop offset="80%" stopColor="#4a0d0d" />
          </radialGradient>
        </defs>
        <path
          d="M 5,350 A 345,345 0 0 1 695,350 L 5,350 Z M 143,350 A 207,207 0 0 1 557,350 L 143,350 Z"
          fill="url(#ringFill)"
          fillRule="evenodd"
        />
        {ringDividers.map((rd, i) => (
          <g key={i}>
            <line x1={rd.x1} y1={rd.y1} x2={rd.x2} y2={rd.y2} stroke="#C9B28A" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx={rd.x2} cy={rd.y2} r="4" fill="#C89D54" />
          </g>
        ))}
        <path
          d="M 143,350 A 207,207 0 0 1 557,350 L 143,350 Z"
          fill="url(#centerFill)"
        />
      </svg>

      <div className="absolute top-[68%] left-1/2 z-[2] w-[80%] max-w-[220px] min-w-[150px] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gold">
          <span>01</span>
          <span className="inline-block h-px w-5 bg-gold" aria-hidden="true" />
        </div>
        <p className="mb-2.5 font-serif text-base leading-tight font-semibold text-white sm:text-xl">
          Accounting and Bookkeeping
        </p>
        <span className="mx-auto mb-2.5 block h-[1.5px] w-7 bg-gold" aria-hidden="true" />
        <p className="text-[10px] leading-snug text-white/75 sm:text-[11.5px]">
          Accurate records, timely reports, and better financial control.
        </p>
      </div>

      {serviceArc.map((service) => (
        <div
          key={service.label}
          className="group absolute z-[1] flex w-[22%] min-w-[70px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 sm:gap-2"
          style={{ left: service.x, top: service.y }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-maroon/30 bg-white transition-colors group-hover:border-maroon group-hover:bg-maroon sm:h-[46px] sm:w-[46px]">
            <Icon
              paths={service.icon.paths}
              size={18}
              strokeWidth={1.5}
              className="text-maroon transition-colors group-hover:text-white sm:hidden"
            />
            <Icon
              paths={service.icon.paths}
              size={24}
              strokeWidth={1.5}
              className="hidden text-maroon transition-colors group-hover:text-white sm:block"
            />
          </div>
          <p className="w-full max-w-[105px] mx-auto text-center text-[9px] leading-tight font-bold text-[#221a15] sm:text-xs">
            {service.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden rounded-b-[70px] bg-charcoal pt-16 pb-16 md:pt-20">
      <Image
        src="/assets/about-marble-dark.png"
        alt=""
        fill
        className="object-cover opacity-90"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_50%)]"
        aria-hidden="true"
      />

      <Container size="medium" className="relative z-[1]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="max-w-[400px]">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              What We Do
            </p>
            <span className="mb-4 block h-0.5 w-9 bg-gold" aria-hidden="true" />
            <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
              Our Key Services
            </h2>
            <p className="mb-6 text-[14.5px] leading-relaxed text-white/60">
              From bookkeeping and reporting to taxation and business
              support, we provide a complete range of solutions under one
              platform.
            </p>
            <Button href="/professional-services" variant="text" tone="gold">
              View All Services
            </Button>
          </div>

          <ServicesMobileList />
          <ServicesWheel />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 rounded-3xl bg-cream px-6 pt-9 shadow-[0_-20px_50px_rgba(0,0,0,0.25)] sm:grid-cols-3 md:px-10 lg:grid-cols-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              variant="compact"
              showDivider={index < features.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
