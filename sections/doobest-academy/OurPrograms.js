"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { academyCourses } from "@/constants/academyCourses";
import { useEnrollModal } from "@/sections/doobest-academy/EnrollModalProvider";

export default function OurPrograms() {
  const { openEnroll } = useEnrollModal();

  return (
    <section id="our-programs" className="bg-ink py-16 md:py-20">
      <Container className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[260px] text-center lg:text-left lg:max-w-[360px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Courses and Programs
          </p>
          <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
            Introducing the Department of Career{" "}
            <em className="font-bold text-[#d99a9a] not-italic">Booster</em> with Master Classes
          </h2>
          <p className="mx-auto mb-4 max-w-[360px] text-sm leading-relaxed text-white/60 lg:mx-0">
            The Department of Career Development at Doobest Consultancy is
            established to empower individuals with practical knowledge,
            professional coaching, and industry-relevant skills required to
            build successful careers in accounting and finance. The
            department focuses on bridging the gap between theoretical
            learning and real-world business practices by developing
            technical, analytical, and professional capabilities.
          </p>
          <p className="mx-auto mb-6 max-w-[360px] text-sm leading-relaxed text-white/60 lg:mx-0">
            Through practical accounting training, Microsoft Excel &amp;
            Office skill development, data analysis, professional reporting
            skills, and the effective use of modern AI-assisted tools, we aim
            to prepare future-ready professionals who can work efficiently,
            generate meaningful insights, support decision-making, and adapt
            to the evolving demands of the accounting and business
            environment.
          </p>
          <Button href="#" variant="text" tone="gold">
            View All Courses
          </Button>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-1 gap-5 sm:grid-cols-2">
          {academyCourses.map((course, index) => (
            <Reveal key={course.title} delay={index * 90} className="h-full">
              <div className="group flex h-full min-h-[560px] flex-col overflow-hidden rounded-2xl border border-gold/25 bg-cream transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-colors duration-300 group-hover:bg-maroon">
                    <Icon
                      paths={course.icon.paths}
                      size={19}
                      strokeWidth={1.5}
                      className="text-maroon transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2.5 flex items-start justify-between gap-2">
                    <p className="font-serif text-[17px] leading-tight font-bold text-ink">
                      {course.title}
                    </p>
                    {course.items && (
                      <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-maroon/10 px-2.5 py-1 text-[10px] font-bold whitespace-nowrap text-maroon uppercase">
                        {course.items.length} {course.items.length === 1 ? "Module" : "Modules"}
                      </span>
                    )}
                  </div>
                  <p className="mb-3.5 text-[12.5px] leading-relaxed text-muted">
                    {course.desc}
                  </p>
                  {course.items && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {course.items.map((item) =>
                        item.logo ? (
                          <span
                            key={item.label}
                            className="group/logo relative flex h-13 w-13 items-center justify-center rounded-full bg-white ring-1 ring-ink/10 transition-transform duration-200 hover:scale-110 hover:ring-maroon/30 active:scale-110 active:ring-maroon/30"
                          >
                            <span className="relative h-8 w-8">
                              <Image src={item.logo} alt={item.label} fill sizes="32px" className="object-contain" />
                            </span>
                            <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-ink px-2.5 py-1.5 text-[10.5px] font-semibold whitespace-nowrap text-white opacity-0 shadow-[0_10px_20px_rgba(17,17,17,0.25)] transition-all duration-200 group-hover/logo:-translate-y-0.5 group-hover/logo:opacity-100 group-active/logo:-translate-y-0.5 group-active/logo:opacity-100">
                              {item.label}
                            </span>
                          </span>
                        ) : (
                          <span
                            key={item.label}
                            className="inline-flex items-center gap-1 rounded-full bg-maroon/10 px-2.5 py-1 text-[10px] font-semibold text-maroon"
                          >
                            <span aria-hidden="true">✓</span>
                            {item.label}
                          </span>
                        )
                      )}
                    </div>
                  )}
                  {course.outcomes && (
                    <div className="flex flex-1 flex-col justify-center">
                      <p className="mb-2 text-[10px] font-bold tracking-wide text-maroon/70 uppercase">
                        What You&rsquo;ll Learn
                      </p>
                      <ul className="flex flex-col gap-2">
                        {course.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-[11.5px] leading-snug text-ink/75"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => openEnroll(course.title)}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors duration-200 hover:text-maroon"
                    >
                      Learn More{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
