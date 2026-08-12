"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { services } from "@/constants/services";

function ServiceCard({ service, isSelected, onSelect }) {
  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      style={{ "--x": "50%", "--y": "50%" }}
      className={cn(
        "group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-2xl border px-3 py-5 text-center transition-colors duration-300",
        isSelected ? "border-gold/60" : "border-white/10 bg-white/[0.04] hover:border-gold/30"
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(140px circle at var(--x) var(--y), rgba(201,162,75,0.3), transparent 70%)",
        }}
      />
      {isSelected && (
        <motion.span
          layoutId="serviceCardActive"
          className="absolute inset-0 z-0 rounded-2xl bg-maroon"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span
        className={cn(
          "relative z-[1] flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-105",
          isSelected ? "border-white/40 bg-white/10 text-white" : "border-maroon/25 bg-[#F0E6DC] text-maroon"
        )}
      >
        <Icon paths={service.icon.paths} size={20} strokeWidth={1.6} />
      </span>
      <span
        className={cn(
          "relative z-[1] text-[12px] leading-snug font-bold transition-colors duration-300",
          isSelected ? "text-white" : "text-white/85 group-hover:text-white"
        )}
      >
        {service.name}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "relative z-[1] block h-0.5 rounded-full bg-gold transition-all duration-300",
          isSelected ? "w-8" : "w-4 group-hover:w-6"
        )}
      />
    </button>
  );
}

export default function ServicesExplorer() {
  const [selected, setSelected] = useState(0);
  const current = services[selected];

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
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,162,75,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <Container size="medium" className="relative z-[1]">
        <Reveal className="pt-2 text-center lg:text-left">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Our Services
          </p>
          <span className="mx-auto mb-5 block h-0.5 w-9 bg-gold lg:mx-0" aria-hidden="true" />
          <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
            Smart Services for <em className="font-bold text-gold not-italic">Smart Business</em>
          </h2>
          <p className="mx-auto max-w-[340px] text-sm leading-relaxed text-white/65 lg:mx-0">
            Tailored services designed to meet your business needs at every
            stage of growth.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <Reveal
            as="div"
            delay={100}
            variant="left"
            role="tablist"
            aria-label="Professional services"
            className="grid grid-cols-3 gap-3"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                isSelected={index === selected}
                onSelect={() => setSelected(index)}
              />
            ))}
          </Reveal>

          <Reveal as="div" delay={180} variant="fade">
            <div
              key={current.slug}
              role="tabpanel"
              style={{ animation: "panelIn 400ms ease-out" }}
              className="rounded-2xl border-t-2 border-gold bg-cream px-6 py-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-10"
            >
              <div className="mb-6 flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-maroon text-white">
                  <Icon paths={current.icon.paths} size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-maroon uppercase">
                    {current.name}
                  </p>
                  <p className="text-[13px] text-muted italic">{current.tagline}</p>
                </div>
              </div>
              <p className="mb-8 max-w-[620px] text-[15px] leading-relaxed text-body">
                {current.intro}
              </p>
              <p className="mb-4 flex items-center gap-2 text-[14.5px] font-bold text-ink">
                What&apos;s Included
                <span className="rounded-full bg-maroon/10 px-2.5 py-0.5 text-[11px] font-bold text-maroon">
                  {current.features.length} items
                </span>
              </p>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {current.features.map((item, index) => (
                  <li
                    key={item}
                    style={{ animation: "panelIn 400ms ease-out both", animationDelay: `${120 + index * 40}ms` }}
                    className="flex items-start gap-2 text-[13.5px] leading-snug text-body"
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
