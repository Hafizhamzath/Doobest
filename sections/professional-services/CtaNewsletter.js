import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function CtaNewsletter() {
  return (
    <section className="relative overflow-hidden bg-[#1a0808] py-16 md:py-20">
      <Image src="/assets/arch-bg-dark.png" alt="" fill className="object-cover opacity-90" />

      <Container size="medium" className="relative z-[1] flex flex-wrap items-center gap-10">
        <div className="flex-1 basis-[320px]">
          <h2 className="mb-4 font-serif text-3xl leading-tight font-semibold text-white md:text-4xl">
            Ready to Simplify Your Business{" "}
            <em className="font-bold text-gold not-italic">Finances?</em>
          </h2>
          <p className="mb-6 text-[14.5px] text-white/70">
            Let&rsquo;s build a stronger financial future together.
          </p>
          <Button href="/contact">Book a Consultation</Button>
        </div>

        <div className="hidden self-stretch bg-white/20 lg:block lg:w-px" aria-hidden="true" />

        <div className="flex-1 basis-[280px]">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold/50">
              <Icon name="mail" size={16} strokeWidth={2} className="text-gold" />
            </div>
            <p className="font-serif text-lg font-bold text-gold">Stay Updated</p>
          </div>
          <p className="mb-4.5 text-[13.5px] text-white/65">
            Subscribe to get the latest updates and insights.
          </p>
          <NewsletterForm className="max-w-[400px] border border-white/25" />
        </div>
      </Container>
    </section>
  );
}
