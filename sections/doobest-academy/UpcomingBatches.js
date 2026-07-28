import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const batches = [
  {
    day: "05",
    month: "JUN",
    title: "Junior Accountant Program",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "10:00 AM - 01:00 PM",
    location: "Dubai, UAE",
  },
  {
    day: "10",
    month: "JUN",
    title: "Accounting Software Courses",
    type: "Evening Batch",
    days: "Mon - Fri",
    time: "07:00 PM - 09:00 PM",
    location: "Online / Live",
  },
  {
    day: "15",
    month: "JUN",
    title: "Accountant Program",
    type: "Weekend Batch",
    days: "Sat & Sun",
    time: "02:00 PM - 05:00 PM",
    location: "Dubai, UAE",
  },
  {
    day: "20",
    month: "JUN",
    title: "Advanced Excel Programs",
    type: "Evening Batch",
    days: "Mon - Fri",
    time: "07:00 PM - 09:00 PM",
    location: "Online / Live",
  },
];

export default function UpcomingBatches() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <Container className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[260px] lg:max-w-[280px]">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Upcoming Batches
          </p>
          <h2 className="mb-5 font-serif text-2xl leading-snug font-semibold text-white">
            Start Your Learning Journey Today
          </h2>
          <Button href="#" variant="text" tone="gold">
            View All Batches
          </Button>
        </div>

        <div className="grid flex-1 basis-[600px] grid-cols-1 gap-5 sm:grid-cols-2">
          {batches.map((batch) => (
            <div key={batch.title} className="rounded-2xl bg-cream px-5 py-6">
              <div className="mb-4 flex items-center gap-3.5">
                <div className="text-center">
                  <p className="font-serif text-xl leading-none font-bold text-maroon">
                    {batch.day}
                  </p>
                  <p className="text-[10.5px] font-bold tracking-wide text-maroon">
                    {batch.month}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-tight font-bold text-ink">{batch.title}</p>
                  <p className="text-[11.5px] text-faint">{batch.type}</p>
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-2.5 text-[12.5px] text-body">
                <div className="flex items-center gap-2">
                  <Icon name="calendar" size={14} strokeWidth={2} className="text-maroon" />
                  {batch.days}
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    paths={["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 7v5l3 3"]}
                    size={14}
                    strokeWidth={2}
                    className="text-maroon"
                  />
                  {batch.time}
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="mapPin" size={14} strokeWidth={2} className="text-maroon" />
                  {batch.location}
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink hover:text-maroon"
              >
                Enroll Now <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
