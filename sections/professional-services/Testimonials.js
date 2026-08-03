import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Doobest has transformed how we manage our finances. Their bookkeeping and compliance support gives us complete peace of mind every month.",
    name: "Nizam H.",
    role: "Business Owner",
    location: "Sri Lanka",
    initials: "NH",
    avatarClass: "bg-maroon",
  },
  {
    quote:
      "The team handled our VAT registration and filing seamlessly. Professional, responsive, and always on time.",
    name: "Priya S.",
    role: "Finance Manager",
    location: "Sri Lanka",
    initials: "PS",
    avatarClass: "bg-[#2a0808]",
  },
  {
    quote:
      "Outsourcing our payroll to Doobest saved us hours every month and eliminated errors completely. Highly recommend their services.",
    name: "Fazal R.",
    role: "Managing Director",
    location: "Sri Lanka",
    initials: "FR",
    avatarClass: "bg-[#8a1c1c]",
  },
];

export default function Testimonials() {
  return (
    <Container as="section" className="flex flex-wrap gap-10 pb-20 md:pb-24">
      <div className="flex-1 basis-[240px] lg:max-w-[260px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Client Success Stories
        </p>
        <h2 className="mb-4 font-serif text-2xl leading-snug font-semibold text-ink">
          Trusted By.
          <br />
          Loved <em className="font-bold text-maroon not-italic">By Clients.</em>
        </h2>
        <p className="mb-5 text-[13.5px] leading-relaxed text-muted">
          See how businesses across Sri Lanka and the UAE rely on Doobest for
          accurate, compliant, and stress-free accounting.
        </p>
        <Button href="#" variant="text">
          View All Reviews
        </Button>
      </div>

      <div className="grid flex-1 basis-[600px] grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 100}>
          <div
            className="rounded-2xl bg-white px-6 py-7 shadow-[0_14px_30px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(100,16,16,0.14)]"
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
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
