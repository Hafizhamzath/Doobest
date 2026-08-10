"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { useEnrollModal } from "@/sections/doobest-academy/EnrollModalProvider";

const batches = [
  {
    title: "Junior Accountant Program",
    course: "Practical Accounting Training & Coaching",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "Flexible Timing",
    location: "Online / Offline",
  },
  {
    title: "Accounting Software Courses",
    course: "Accounting Software Courses",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "Flexible Timing",
    location: "Online / Offline",
  },
  {
    title: "Accountant Program",
    course: "Practical Accounting Training & Coaching",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "Flexible Timing",
    location: "Online / Offline",
  },
  {
    title: "Advanced Excel Programs",
    course: "MS Excel Programs",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "Flexible Timing",
    location: "Online / Offline",
  },
];

export default function UpcomingBatches() {
  const { openEnroll } = useEnrollModal();

  return (
    <section className="bg-ink py-16 md:py-20">
      <Container className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[260px] text-center lg:max-w-[280px] lg:text-left">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Upcoming Batches
          </p>
          <h2 className="mb-5 font-serif text-2xl leading-snug font-semibold text-white">
            Start Your Learning Journey Today
          </h2>
          <Button href="#" variant="text" tone="gold">
            View All Batches
          </Button>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-1 gap-5 sm:grid-cols-2">
          {batches.map((batch, index) => (
            <Reveal key={batch.title} delay={index * 90} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border-l-[3px] border-transparent bg-cream px-6 py-7 transition-all duration-300 hover:border-l-gold hover:shadow-[0_18px_36px_rgba(100,16,16,0.14)]">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-base leading-tight font-bold text-ink">{batch.title}</p>
                  <span className="inline-block rounded-full bg-maroon/10 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-maroon uppercase">
                    {batch.type}
                  </span>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon transition-all duration-300 group-hover:scale-110 group-hover:bg-maroon group-hover:text-white">
                  <Icon
                    paths={["M22 10L12 5 2 10l10 5 10-5z", "M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"]}
                    size={20}
                    strokeWidth={1.6}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 text-[13px] text-body">
                <div className="flex items-center gap-2.5">
                  <Icon name="calendar" size={15} strokeWidth={2} className="shrink-0 text-maroon" />
                  {batch.days}
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    paths={["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 7v5l3 3"]}
                    size={15}
                    strokeWidth={2}
                    className="shrink-0 text-maroon"
                  />
                  {batch.time}
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="mapPin" size={15} strokeWidth={2} className="shrink-0 text-maroon" />
                  {batch.location}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                <button
                  type="button"
                  onClick={() => openEnroll(batch.course)}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors duration-200 hover:text-maroon"
                >
                  Enroll Now{" "}
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
