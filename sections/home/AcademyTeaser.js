import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { courses } from "@/constants/courses";

export default function AcademyTeaser() {
  return (
    <Container as="section" size="medium" className="py-20 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.62fr_1.6fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
            Doobest Academy
          </p>
          <span className="mx-auto mb-4 block h-0.5 w-9 bg-maroon lg:mx-0" aria-hidden="true" />
          <h2 className="mb-4 font-serif text-3xl leading-tight font-semibold text-ink md:text-4xl">
            Build Skills.
            <br className="hidden sm:block" /> Build Your{" "}
            <em className="font-bold text-maroon not-italic">Future.</em>
          </h2>
          <p className="mx-auto mb-7 max-w-[300px] text-sm leading-relaxed text-muted lg:mx-0">
            Our Career Development Department focuses on preparing
            individuals for successful accounting careers through practical
            learning and professional coaching.
          </p>
          <Button href="/doobest-academy">Explore Academy</Button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {courses.map((course, index) => (
              <Reveal key={course.title} delay={index * 70}>
              <Link
                href="/doobest-academy"
                className="group block overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(17,17,17,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(100,16,16,0.2)]"
              >
                <div className="relative h-[150px] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 16vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
