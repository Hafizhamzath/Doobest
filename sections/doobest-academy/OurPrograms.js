import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { academyCourses } from "@/constants/academyCourses";

export default function OurPrograms() {
  return (
    <section id="our-programs" className="bg-ink py-16 md:py-20">
      <Container className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[260px] lg:max-w-[300px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Our Programs
          </p>
          <h2 className="mb-5 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
            Learn. Practice. <em className="text-[#d99a9a]">Grow.</em>
          </h2>
          <p className="mb-6 max-w-[280px] text-sm leading-relaxed text-white/60">
            Industry-relevant courses designed to sharpen your skills and
            accelerate your professional growth.
          </p>
          <Button href="#" variant="text" tone="gold">
            View All Courses
          </Button>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academyCourses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl border border-gold/25 bg-cream"
            >
              <div
                className={`flex h-[150px] items-center justify-center font-mono text-[10px] text-ink/35 ${course.bgClass}`}
              >
                {course.title} preview
              </div>
              <div className="p-4">
                <Icon paths={course.icon.paths} size={24} strokeWidth={1.5} className="mb-3.5 text-maroon" />
                <p className="mb-2.5 font-serif text-[17px] leading-tight font-bold text-ink">
                  {course.title}
                </p>
                <p className="mb-4 text-[12.5px] leading-relaxed text-muted">
                  {course.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink hover:text-maroon"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
