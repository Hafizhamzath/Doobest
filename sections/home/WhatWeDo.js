"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { services } from "@/constants/services";
import { cn } from "@/lib/cn";

const AUTO_ROTATE_MS = 3500;
const WHEEL_CX = 350;
const WHEEL_CY = 350;
const WHEEL_RI = 165;
const WHEEL_RO = 340;
const WHEEL_R_MID = (WHEEL_RI + WHEEL_RO) / 2;
const STEP_DEG = 360 / services.length;
const STEP_MS = 500;

// index 0 starts at the apex (90deg); each further index sits STEP_DEG
// clockwise around the full circle.
function arcAngle(index) {
  return 90 - index * STEP_DEG;
}

function arcPosition(index, radius) {
  const rad = (arcAngle(index) * Math.PI) / 180;
  return {
    xPercent: ((WHEEL_CX + radius * Math.cos(rad)) / 700) * 100,
    yPercent: ((WHEEL_CY - radius * Math.sin(rad)) / 700) * 100,
  };
}

// CSS rotate(R) shifts a point's arc angle to (angle - R), so bringing
// index's tile to the apex (90deg) needs R = arcAngle(index) - 90 = -index*STEP_DEG.
function baseRotationFor(index) {
  return arcAngle(index) - 90;
}

const ringDividers = Array.from({ length: services.length }, (_, i) => {
  const rad = (arcAngle(i) * Math.PI) / 180;
  const midRad = ((arcAngle(i) - STEP_DEG / 2) * Math.PI) / 180;
  return {
    x1: WHEEL_CX + WHEEL_RI * Math.cos(midRad),
    y1: WHEEL_CY - WHEEL_RI * Math.sin(midRad),
    x2: WHEEL_CX + WHEEL_RO * Math.cos(midRad),
    y2: WHEEL_CY - WHEEL_RO * Math.sin(midRad),
    dotX: WHEEL_CX + WHEEL_RO * Math.cos(rad),
    dotY: WHEEL_CY - WHEEL_RO * Math.sin(rad),
  };
});

function ServicesMobileList({ active, onSelect }) {
  return (
    <div className="flex flex-col gap-3 sm:hidden">
      {services.map((service, index) => {
        const isActive = index === active;
        return (
          <button
            key={service.slug}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "flex w-full items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-colors",
              isActive
                ? "border-gold/50 bg-maroon/30"
                : "border-white/10 bg-white/5"
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-maroon/20">
              <Icon paths={service.icon.paths} size={18} strokeWidth={1.6} className="text-gold" />
            </div>
            <div>
              <p className="text-[13px] leading-snug font-bold text-white/90">{service.name}</p>
              {isActive && (
                <p className="mt-1 text-[11.5px] leading-snug text-white/65">{service.tagline}</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function ServicesWheel({ active, rotation, transitionMs, onSelect }) {
  const current = services[active];
  const spinTransition = `transform ${transitionMs}ms cubic-bezier(0.65,0,0.35,1)`;

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[540px] sm:block">
      {/* fixed pointer marking the "slot" tiles rotate into */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-[3] -translate-x-1/2">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <path d="M1 0L10 13L19 0Z" fill="#C89D54" />
        </svg>
      </div>

      {/* rotating ring: band + dividers + tiles, spun as one rigid disc */}
      <div
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%", transform: `rotate(${rotation}deg)`, transition: spinTransition }}
      >
        <svg viewBox="0 0 700 700" className="absolute inset-0 block h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="ringFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F2EBDC" />
              <stop offset="100%" stopColor="#E4D7BE" />
            </linearGradient>
          </defs>
          <circle cx={WHEEL_CX} cy={WHEEL_CY} r={WHEEL_RO} fill="url(#ringFill)" />
          {ringDividers.map((rd, i) => (
            <g key={i}>
              <line x1={rd.x1} y1={rd.y1} x2={rd.x2} y2={rd.y2} stroke="#C9B28A" strokeOpacity="0.25" strokeWidth="1" />
              <circle cx={rd.dotX} cy={rd.dotY} r="4" fill="#C89D54" />
            </g>
          ))}
        </svg>

        {services.map((service, index) => {
          const { xPercent, yPercent } = arcPosition(index, WHEEL_R_MID);
          const isActive = index === active;
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={isActive}
              aria-label={service.name}
              className="absolute z-[1] w-[15%] min-w-[58px]"
              style={{ left: `${xPercent}%`, top: `${yPercent}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className="group flex flex-col items-center gap-1.5 sm:gap-2"
                style={{ transform: `rotate(${-rotation}deg) scale(${isActive ? 1.18 : 1})`, transition: spinTransition }}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 sm:h-10 sm:w-10",
                    isActive
                      ? "border-maroon bg-maroon shadow-[0_0_0_6px_rgba(100,16,16,0.2)]"
                      : "border-maroon/30 bg-white group-hover:border-maroon group-hover:bg-maroon"
                  )}
                >
                  <Icon
                    paths={service.icon.paths}
                    size={16}
                    strokeWidth={1.5}
                    className={cn(
                      "transition-colors duration-300 sm:hidden",
                      isActive ? "text-white" : "text-maroon group-hover:text-white"
                    )}
                  />
                  <Icon
                    paths={service.icon.paths}
                    size={19}
                    strokeWidth={1.5}
                    className={cn(
                      "hidden transition-colors duration-300 sm:block",
                      isActive ? "text-white" : "text-maroon group-hover:text-white"
                    )}
                  />
                </div>
                <p
                  className={cn(
                    "mx-auto w-full max-w-[85px] text-center text-[8px] leading-tight font-bold transition-colors duration-300 sm:text-[10px]",
                    isActive ? "text-maroon" : "text-[#221a15]"
                  )}
                >
                  {service.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* fixed red core: never rotates, always shows whichever tile reached the arrow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
        style={{
          width: `${(WHEEL_RI * 2 * 100) / 700}%`,
          height: `${(WHEEL_RI * 2 * 100) / 700}%`,
          background: "radial-gradient(circle at 50% 35%, #7a1818 0%, #4a0d0d 80%)",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gold">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className="inline-block h-px w-5 bg-gold" aria-hidden="true" />
          </div>
          <p className="mb-2.5 font-serif text-base leading-tight font-semibold text-white sm:text-lg">
            {current.name}
          </p>
          <span className="mx-auto mb-2.5 block h-[1.5px] w-7 bg-gold" aria-hidden="true" />
          <p className="text-[10px] leading-snug text-white/75 sm:text-[11px]">
            {current.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(() => baseRotationFor(0));
  const [transitionMs, setTransitionMs] = useState(700);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setTransitionMs(700);
      setActive((current) => (current + 1) % services.length);
      setRotation((current) => current - STEP_DEG);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  function handleSelect(index) {
    const steps = (index - activeRef.current + services.length) % services.length;
    if (steps === 0) {
      setPaused(true);
      return;
    }
    setTransitionMs(Math.min(600 + steps * STEP_MS, 2200));
    setActive(index);
    setRotation((current) => current - steps * STEP_DEG);
    setPaused(true);
  }

  return (
    <section
      className="relative overflow-hidden rounded-b-[70px] bg-charcoal pt-16 pb-16 md:pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
          <div className="mx-auto max-w-[400px] text-center lg:mx-0 lg:text-left">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              What We Do
            </p>
            <span className="mx-auto mb-4 block h-0.5 w-9 bg-gold lg:mx-0" aria-hidden="true" />
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

          <ServicesMobileList active={active} onSelect={handleSelect} />
          <ServicesWheel
            active={active}
            rotation={rotation}
            transitionMs={transitionMs}
            onSelect={handleSelect}
          />
        </div>
      </Container>
    </section>
  );
}
