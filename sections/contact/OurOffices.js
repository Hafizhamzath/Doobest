import Image from "next/image";
import Container from "@/components/ui/Container";

const offices = [
  {
    name: "Sri Lanka (Head Office)",
    address: "148, Office 2, Eravur Town, Batticaloa. Postal Code: 30300",
    phone: "+94 74 041 0943",
    photo: "/assets/contact-office-srilanka.png",
  },
  {
    name: "UAE",
    address: "Remote & on-site support across the UAE",
    phone: "+971 54 374 8522",
    photo: "/assets/contact-office-uae.png",
  },
];

const mapPins = [
  { label: "Sri Lanka", top: "44%", left: "22%" },
  { label: "UAE", top: "34%", left: "55%" },
];

export default function OurOffices() {
  return (
    <Container as="section" className="flex flex-wrap items-center gap-10 py-16 md:py-20">
      <div className="max-w-[280px] flex-1 basis-[240px]">
        <h2 className="mb-4 font-serif text-3xl font-semibold text-ink">Our Offices</h2>
        <span className="mb-5 block h-[3px] w-11 bg-gold" aria-hidden="true" />
        <p className="mb-6 text-sm leading-relaxed text-body">
          We are proud to serve businesses across Sri Lanka and the UAE.
        </p>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border-[1.3px] border-maroon px-5 py-3 text-[13.5px] font-bold text-maroon transition-colors hover:bg-maroon hover:text-white"
        >
          View All Locations <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="grid flex-[3] basis-[600px] grid-cols-2 gap-5 sm:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.name}
            className="overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
          >
            <div className="relative aspect-[4/3.4] w-full">
              <Image
                src={office.photo}
                alt={`${office.name} office building`}
                fill
                sizes="(min-width: 640px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-4.5">
              <p className="mb-2.5 font-serif text-lg font-bold text-maroon">{office.name}</p>
              <p className="mb-3 flex gap-1.5 text-[12.5px] leading-snug text-muted">
                <span aria-hidden="true">📍</span>
                <span>{office.address}</span>
              </p>
              <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
                <span aria-hidden="true" className="text-maroon">☎</span>
                {office.phone}
              </p>
            </div>
          </div>
        ))}

        <div className="relative col-span-2 min-h-[260px] overflow-hidden rounded-2xl bg-[#E9DFCF] sm:col-span-1">
          <svg
            viewBox="0 0 300 340"
            preserveAspectRatio="xMidYMid slice"
            className="block h-full w-full"
            aria-hidden="true"
          >
            <rect width="300" height="340" fill="#E9DFCF" />
            <path
              d="M20 40 L80 60 L140 30 L200 70 L280 50 L260 140 L290 220 L220 260 L180 320 L100 300 L40 250 L10 160 Z"
              fill="none"
              stroke="rgba(109,20,20,0.18)"
              strokeWidth="2"
            />
          </svg>
          {mapPins.map((pin) => (
            <div
              key={pin.label}
              style={{ top: pin.top, left: pin.left }}
              className="absolute -translate-x-1/2 -translate-y-full text-center"
            >
              <svg width="24" height="30" viewBox="0 0 28 38" aria-hidden="true">
                <path d="M14 0C6 0 0 6 0 14c0 10 14 24 14 24s14-14 14-24C28 6 22 0 14 0z" fill="#6D1414" />
                <circle cx="14" cy="14" r="5" fill="#fff" />
              </svg>
              <p className="text-xs font-bold whitespace-nowrap text-ink">{pin.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
