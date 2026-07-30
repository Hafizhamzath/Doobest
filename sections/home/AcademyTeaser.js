import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { courses } from "@/constants/courses";

export default function AcademyTeaser() {
  return (
    <Container as="section" size="medium" className="py-20 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.62fr_1.6fr]">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
            Doobest Academy
          </p>
          <span className="mb-4 block h-0.5 w-9 bg-maroon" aria-hidden="true" />
          <h2 className="mb-4 font-serif text-3xl leading-tight font-semibold text-ink md:text-4xl">
            Build Skills.
            <br className="hidden sm:block" /> Build Your{" "}
            <em className="text-maroon">Future.</em>
          </h2>
          <p className="mb-7 max-w-[300px] text-sm leading-relaxed text-muted">
            Our Career Development Department focuses on preparing
            individuals for successful accounting careers through practical
            learning and professional coaching.
          </p>
          <Button href="/doobest-academy">Explore Academy</Button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {courses.map((course) => (
              <Link
                key={course.title}
                href="/doobest-academy"
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(100,16,16,0.18)]"
              >
                <div className={`flex h-[150px] w-full items-center justify-center rounded-t-2xl ${course.bgClass}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-maroon shadow-sm transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                    <Icon paths={course.icon.paths} size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="min-h-[104px] p-3.5 pb-[18px]">
                  <p className="mb-2.5 text-[13px] leading-snug font-bold text-[#222] transition-colors duration-300 group-hover:text-maroon">
                    {course.title}
                  </p>
                  <span className="flex items-center gap-1.5 text-maroon">
                    <span className="block h-0.5 w-4 bg-gold transition-all duration-300 group-hover:w-7" aria-hidden="true" />
                    <Icon
                      paths={["M5 12h14", "M13 5l7 7-7 7"]}
                      size={11}
                      strokeWidth={2}
                      className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
