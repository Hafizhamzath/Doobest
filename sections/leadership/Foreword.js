import Container from "@/components/ui/Container";

const sections = [
  {
    title: "Introduction to Our Mission",
    desc: "At Doobest, we believe financial excellence is the foundation of business success. Our mission is to provide reliable accounting, advisory, taxation, and company secretarial services that help businesses achieve compliance, efficiency, and sustainable growth.",
  },
  {
    title: "Our Expertise and Global Reach",
    desc: "Registered under the Companies Act of 2007 and operating in both Sri Lanka and the UAE, Doobest delivers professional solutions aligned with SLFRS, IFRS, and IAS standards. We support businesses with accounting, financial reporting, taxation, advisory, and company secretarial services tailored to their needs.",
  },
  {
    title: "Embracing Change and Innovation",
    desc: "The business environment is constantly evolving. By combining technical expertise, digital solutions, and industry best practices, Doobest helps clients navigate regulatory changes, improve financial performance, and make informed business decisions.",
  },
  {
    title: "Commitment to Long-Term Success",
    desc: "Our focus extends beyond meeting current financial requirements. We are committed to helping businesses build strong financial foundations, enhance operational efficiency, and achieve long-term growth through practical and strategic solutions.",
  },
  {
    title: "Gratitude and Commitment to Excellence",
    desc: "We sincerely thank our clients, partners, and team members for their continued trust and support. At Doobest, we remain dedicated to excellence, integrity, and innovation, delivering services that help businesses stay compliant, competitive, and successful.",
  },
];

export default function Foreword() {
  return (
    <Container as="section" className="pb-20 md:pb-24">
      <div className="relative mx-auto max-w-[720px] overflow-hidden rounded-[28px] border border-ink/[0.08] bg-white px-6 py-12 shadow-[0_25px_60px_rgba(17,17,17,0.1)] sm:px-12 sm:py-14">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-4 left-6 font-serif text-[110px] leading-none font-bold text-maroon/[0.06] select-none sm:text-[140px]"
        >
          &ldquo;
        </span>

        <div className="relative z-[1] text-center">
          <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
            A Message From Our Founder
          </p>
          <h2 className="mb-3 font-serif text-3xl leading-snug font-semibold text-ink">
            Foreword to the Clients
          </h2>
          <span className="mx-auto mb-9 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        </div>

        <div className="relative z-[1] flex flex-col gap-6">
          {sections.map((item) => (
            <div key={item.title}>
              <p className="mb-1.5 font-serif text-base font-bold text-maroon">{item.title}</p>
              <p className="text-sm leading-relaxed text-body">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative z-[1] mt-9 border-t border-ink/[0.08] pt-7 text-center">
          <p className="mb-1 font-serif text-2xl font-bold text-maroon">Mohamed Amjath</p>
          <p className="text-[13px] font-semibold text-ink">Director/Founder and CEO</p>
          <p className="text-[12.5px] text-muted">Doobest Consultancy (Pvt) Ltd</p>
        </div>
      </div>
    </Container>
  );
}
