import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { academyCourses } from "@/constants/academyCourses";

export default function OurPrograms() {
  return (
    <section id="our-programs" className="bg-ink py-16 md:py-20">
      <Container className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[260px] lg:max-w-[360px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Courses and Programs
          </p>
          <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
            Introducing the Department of Career{" "}
            <em className="text-[#d99a9a]">Booster</em> with Master Classes
          </h2>
          <p className="mb-4 max-w-[360px] text-sm leading-relaxed text-white/60">
            The Department of Career Development at Doobest Consultancy is
            established to empower individuals with practical knowledge,
            professional coaching, and industry-relevant skills required to
            build successful careers in accounting and finance. The
            department focuses on bridging the gap between theoretical
            learning and real-world business practices by developing
            technical, analytical, and professional capabilities.
          </p>
          <p className="mb-6 max-w-[360px] text-sm leading-relaxed text-white/60">
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
              <div className="group flex h-full min-h-[450px] flex-col overflow-hidden rounded-2xl border border-gold/25 bg-cream transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
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
                  <p className="mb-2.5 font-serif text-[17px] leading-tight font-bold text-ink">
                    {course.title}
                  </p>
                  <p className="mb-3 text-[12.5px] leading-relaxed text-muted">
                    {course.desc}
                  </p>
                  {course.items && (
                    <ul className="mb-4 flex flex-col gap-1.5">
                      {course.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-[11.5px] leading-snug text-ink/75"
                        >
                          <span className="mt-0.5 shrink-0 text-maroon" aria-hidden="true">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors duration-200 hover:text-maroon"
                  >
                    Learn More{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
