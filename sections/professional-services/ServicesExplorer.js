"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { services } from "@/constants/services";

export default function ServicesExplorer() {
  const [selected, setSelected] = useState(0);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const tabRefs = useRef([]);
  const current = services[selected];

  useLayoutEffect(() => {
    const el = tabRefs.current[selected];
    if (el) {
      setIndicator({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [selected]);

  return (
    <section
      id="services-explorer"
      className="relative overflow-hidden bg-[#1a0808] py-20 md:py-24"
    >
      <Image
        src="/assets/arch-bg-red.png"
        alt=""
        fill
        className="animate-[kenBurns_40s_linear_infinite] object-cover opacity-90"
      />

      <Container size="medium" className="relative z-[1]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr_1.8fr] lg:items-start">
          <Reveal className="pt-2 text-center lg:text-left">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Our Services
            </p>
            <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
              Smart Services for <em className="font-bold text-gold not-italic">Smart Business</em>
            </h2>
            <p className="mx-auto max-w-[300px] text-sm leading-relaxed text-white/65 lg:mx-0">
              Tailored services designed to meet your business needs at every
              stage of growth.
            </p>
          </Reveal>

          <Reveal
            as="div"
            delay={100}
            variant="left"
            role="tablist"
            aria-label="Professional services"
            className="relative overflow-hidden rounded-2xl bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 z-0 bg-maroon transition-all duration-[400ms] ease-out"
              style={{ top: indicator.top, height: indicator.height }}
            />
            {services.map((service, index) => {
              const isSelected = index === selected;
              return (
                <button
                  key={service.slug}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelected(index)}
                  className={cn(
                    "relative z-[1] flex w-full items-center justify-between gap-2 border-b border-ink/[0.06] px-4 py-4 text-left transition-colors last:border-b-0",
                    !isSelected && "hover:bg-ink/[0.03]"
                  )}
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <Icon
                      paths={service.icon.paths}
                      size={22}
                      strokeWidth={1.5}
                      className={cn("transition-colors duration-300", isSelected ? "text-white" : "text-maroon")}
                    />
                    <span
                      className={cn(
                        "text-sm font-semibold transition-colors duration-300",
                        isSelected ? "text-white" : "text-ink"
                      )}
                    >
                      {service.name}
                    </span>
                  </span>
                  {isSelected && (
                    <span className="shrink-0 text-white" aria-hidden="true">
                      →
                    </span>
                  )}
                </button>
              );
            })}
          </Reveal>

          <Reveal as="div" delay={180} variant="fade">
            <div
              key={current.slug}
              role="tabpanel"
              className="rounded-2xl bg-cream px-6 py-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-10"
              style={{ animation: "panelIn 400ms ease-out" }}
            >
              <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
                {current.name}
              </p>
              <p className="mb-8 max-w-[620px] text-[15px] leading-relaxed text-body">
                {current.intro}
              </p>
              <p className="mb-4 text-[14.5px] font-bold text-ink">
                What&apos;s Included
              </p>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {current.features.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13.5px] leading-snug text-body"
                    style={{ animation: "panelIn 400ms ease-out both", animationDelay: `${120 + index * 45}ms` }}
                  >
                    <span className="mt-0.5 shrink-0 text-maroon" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex justify-end border-t border-ink/[0.08] pt-6">
                <Button href="/contact" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
