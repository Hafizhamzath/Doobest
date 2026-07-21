import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { industries } from "@/constants/industries";

export default function Industries() {
  return (
    <section className="bg-[linear-gradient(120deg,#1a0808,#3a0d0d_60%,#2a0909)] py-16">
      <Container className="flex flex-wrap items-center gap-10">
        <div className="flex-1 basis-[260px] lg:max-w-[300px]">
          <p className="mb-3.5 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Industries We Serve
          </p>
          <h2 className="font-serif text-xl leading-snug font-semibold text-white md:text-2xl">
            Solutions for Every Industry, Impact for Every Future.
          </h2>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-white/[0.08] px-2 py-4.5 transition-colors hover:bg-white/[0.08]"
            >
              <Icon
                paths={industry.icon.paths}
                size={22}
                strokeWidth={1.6}
                className="text-gold"
              />
              <p className="text-center text-[12.5px] font-semibold text-white">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
