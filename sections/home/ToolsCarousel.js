import Image from "next/image";
import Container from "@/components/ui/Container";
import { tools } from "@/constants/tools";

export default function ToolsCarousel() {
  return (
    <section className="pb-20 md:pb-24">
      <Container>
        <p className="mb-6 text-center text-xs font-bold tracking-[0.2em] text-maroon uppercase">
          Software &amp; Tools You&rsquo;ll Master
        </p>
      </Container>

      <div className="group relative overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-cream to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-cream to-transparent sm:w-32" />

        <div
          className="flex w-max items-center gap-14 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] sm:gap-20"
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex shrink-0 flex-col items-center gap-2.5 transition-transform duration-300 hover:scale-110"
            >
              <div className="flex h-10 w-24 items-center justify-center sm:h-12 sm:w-28">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={tool.width}
                  height={tool.height}
                  className="h-8 w-auto object-contain sm:h-9"
                />
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-muted">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
