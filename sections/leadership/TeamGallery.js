import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function TeamGallery() {
  return (
    <Container as="section" className="flex flex-wrap items-center gap-10 pb-20 md:pb-24">
      <div className="max-w-[300px] flex-1 basis-[260px]">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Our Team
        </p>
        <h2 className="mb-4 font-serif text-[28px] leading-snug font-semibold text-ink">
          A Team That Cares.
          <br />
          <span className="text-maroon">A Culture That Wins.</span>
        </h2>
        <span className="mb-5 block h-[3px] w-11 bg-maroon" aria-hidden="true" />
        <p className="mb-6 text-sm leading-relaxed text-body">
          From experienced professionals to emerging talents, every member of
          our team plays a vital role in delivering value to our clients.
        </p>
        <Button href="/contact" variant="text">
          Join Our Team
        </Button>
      </div>

      <div className="flex min-w-[280px] flex-1 basis-[600px] gap-4">
        <div className="relative min-h-[220px] flex-[1.7] overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(17,17,17,0.12)]">
          <Image
            src="/assets/leadership-team-group.png"
            alt="Full Doobest team group portrait in office"
            fill
            sizes="(min-width: 1024px) 28vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="relative min-h-[100px] flex-1 overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(17,17,17,0.12)]">
            <Image
              src="/assets/leadership-team-meeting1.png"
              alt="Team members collaborating around a laptop"
              fill
              sizes="(min-width: 1024px) 16vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[100px] flex-1 overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(17,17,17,0.12)]">
            <Image
              src="/assets/leadership-team-meeting2.png"
              alt="Team members in a discussion with skyline view"
              fill
              sizes="(min-width: 1024px) 16vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(17,17,17,0.12)]">
          <Image
            src="/assets/leadership-team-office.png"
            alt="Doobest office reception with illuminated logo"
            fill
            sizes="(min-width: 1024px) 16vw, 30vw"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
