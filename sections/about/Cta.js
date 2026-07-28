import CtaContact from "@/components/sections/CtaContact";

export default function Cta() {
  return (
    <CtaContact
      bgImage="/assets/leadership-cta-bg2.png"
      archImage={{
        src: "/assets/leadership-cta-arch4.png",
        alt: "Marble archway with staircase opening onto a sunset Dubai skyline",
      }}
      heading={
        <>
          Great People. <span className="text-gold">Stronger Together.</span>
        </>
      }
      description="We’re here to help you achieve your goals with clarity, confidence and care."
      panelTitle="Let’s Work Together"
      panelDescription="Have a project in mind or want to learn more about our team?"
      buttonLabel="Contact Us"
      buttonHref="/contact"
    />
  );
}
