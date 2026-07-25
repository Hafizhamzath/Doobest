import CtaSplit from "@/components/sections/CtaSplit";

export default function Cta() {
  return (
    <CtaSplit
      image={{
        src: "/assets/about-cta-arch.png",
        alt: "Marble archway opening onto a sunset city skyline with lit staircase",
      }}
      heading={
        <>
          Let&rsquo;s Build a Stronger
          <br />
          <span className="text-gold">Future</span> Together.
        </>
      }
      description="We’re here to help you achieve your goals with clarity, confidence and care."
      icon={{ paths: ["M9 14l2 2 4-4"], rects: [{ x: 3, y: 5, width: 18, height: 16, rx: 2 }] }}
      panelTitle="Book a Free Consultation"
      panelDescription="Talk to our experts and discover how we can support your business."
      buttonLabel="Book Now"
      buttonHref="/contact"
    />
  );
}
