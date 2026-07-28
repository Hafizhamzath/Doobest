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
              <div
                key={course.title}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(17,17,17,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`flex h-[150px] w-full items-center justify-center rounded-t-2xl ${course.bgClass}`}>
                  <Icon paths={course.icon.paths} size={26} strokeWidth={1.5} className="text-maroon" />
                </div>
                <div className="min-h-[104px] p-3.5 pb-[18px]">
                  <p className="mb-2.5 text-[13px] leading-snug font-bold text-[#222]">
                    {course.title}
                  </p>
                  <span className="block h-0.5 w-4 bg-gold" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {courses.map((course, index) => (
              <span
                key={course.title}
                aria-hidden="true"
                className={`h-1.5 rounded-full ${
                  index === 0 ? "w-5 bg-maroon" : "w-1.5 bg-ink/15"
                }`}
              />
            ))}
            <span className="mx-4 h-5 w-px bg-ink/10" aria-hidden="true" />
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-ink/15 bg-white transition-colors hover:border-maroon hover:bg-maroon hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-ink/15 bg-white transition-colors hover:border-maroon hover:bg-maroon hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
