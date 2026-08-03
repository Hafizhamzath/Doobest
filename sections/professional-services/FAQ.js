"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { professionalServicesFaq } from "@/constants/professionalServicesFaq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container as="section" size="narrow" className="py-20 md:py-24">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        align="center"
        title="Answers to Common Questions"
        description="Everything you need to know before getting started. Can't find what you're looking for? Reach out and we'll be happy to help."
      />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
        {professionalServicesFaq.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <Reveal key={item.question} delay={index * 60}>
            <div
              className={cn(
                "overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
                isOpen ? "border-maroon/30 shadow-[0_14px_30px_rgba(100,16,16,0.1)]" : "border-ink/[0.08]"
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
              >
                <span
                  className={cn(
                    "text-[14.5px] font-bold transition-colors duration-300",
                    isOpen ? "text-maroon" : "text-ink"
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-maroon bg-maroon text-white"
                      : "border-ink/15 text-ink"
                  )}
                >
                  <Icon paths={["M12 5v14", "M5 12h14"]} size={14} strokeWidth={2} />
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
