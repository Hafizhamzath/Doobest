import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaContact({
  bgImage,
  archImage,
  heading,
  description,
  panelTitle,
  panelDescription,
  buttonLabel = "Contact Us",
  buttonHref = "/contact",
}) {
  return (
    <Container as="section" size="default" className="pb-16 md:pb-20">
      <div className="relative overflow-hidden rounded-3xl">
        <Image src={bgImage} alt="" fill className="object-cover" />

        <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[28%_38%_1px_1fr] lg:items-stretch">
          <div className="relative h-56 w-full sm:h-72 lg:h-auto">
            <Image
              src={archImage.src}
              alt={archImage.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,4,4,0)_55%,rgba(20,4,4,0.85)_100%)]" />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-10">
            <h2 className="mb-3.5 font-serif text-[26px] leading-snug font-semibold text-white sm:text-[28px]">
              {heading}
            </h2>
            <p className="text-[13.5px] leading-relaxed text-white/75">{description}</p>
          </div>

          <div className="hidden bg-white/15 lg:block" aria-hidden="true" />

          <div className="flex flex-col justify-center border-t border-white/15 px-6 py-8 lg:border-t-0 lg:px-10 lg:py-10">
            <p className="mb-2 font-serif text-lg font-bold text-white">{panelTitle}</p>
            <p className="mb-4.5 max-w-[280px] text-[13px] leading-relaxed text-white/70">
              {panelDescription}
            </p>
            <Button href={buttonHref} variant="inverse" size="sm" className="self-start">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
