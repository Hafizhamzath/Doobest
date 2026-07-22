import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    quote:
      "Doobest Academy helped me build strong accounting skills and gave me the confidence to start my career. The practical approach is excellent!",
    name: "Fathima N.",
    role: "Junior Accountant",
    location: "Dubai, UAE",
    initials: "FN",
    avatarClass: "bg-maroon",
  },
  {
    quote:
      "The TallyPrime course was very practical and easy to understand. I could apply the knowledge immediately at my workplace.",
    name: "Rashid K.",
    role: "Accountant",
    location: "Sharjah, UAE",
    initials: "RK",
    avatarClass: "bg-[#2a0808]",
  },
  {
    quote:
      "Excel for Accountants course improved my reporting skills and saved me hours of work every week. Highly recommended!",
    name: "Areej M.",
    role: "Finance Executive",
    location: "Dubai, UAE",
    initials: "AM",
    avatarClass: "bg-[#8a1c1c]",
  },
];

export default function Testimonials() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pb-20 md:pb-24">
      <div className="flex-1 basis-[240px] lg:max-w-[260px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Student Success Stories
        </p>
        <h2 className="mb-4 font-serif text-2xl leading-snug font-semibold text-ink">
          Real People.
          <br />
          Real <em className="text-maroon">Growth.</em>
        </h2>
        <p className="mb-5 text-[13.5px] leading-relaxed text-muted">
          See how our students achieved their goals with the right guidance
          and support.
        </p>
        <Button href="#" variant="text">
          View All Testimonials
        </Button>
      </div>

      <div className="grid flex-1 basis-[600px] grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-2xl bg-white px-6 py-7 shadow-[0_14px_30px_rgba(17,17,17,0.06)]"
          >
            <p className="mb-3.5 font-serif text-4xl leading-[0.5] text-maroon" aria-hidden="true">
              &ldquo;
            </p>
            <p className="mb-5 text-[13.5px] leading-relaxed text-body">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.avatarClass}`}
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="text-[13.5px] font-bold text-ink">{testimonial.name}</p>
                <p className="text-xs text-faint">
                  {testimonial.role}, {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
