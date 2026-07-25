import CtaSplit from "@/components/sections/CtaSplit";

export default function Cta() {
  return (
    <CtaSplit
      image={{
        src: "/assets/contact-cta-arch.png",
        alt: "Marble archway opening onto a sunset Dubai skyline",
      }}
      imageFade
      heading={
        <>
          Ready to Simplify <span className="text-gold">Your Finances?</span>
        </>
      }
      description="Let Doobest handle your numbers, so you can focus on growing your business."
      icon={{
        paths: ["M3 9h18", "M8 3v4", "M16 3v4"],
        rects: [{ x: 3, y: 5, width: 18, height: 16, rx: 2 }],
      }}
      panelTitle="Book a Free Consultation"
      panelDescription="Talk to our experts and discover how we can help you succeed."
      buttonLabel="Book Now"
      buttonHref="/contact"
    />
  );
}
