import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
  descriptionClassName,
}) {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-bold tracking-[0.2em] uppercase",
            isDark ? "text-gold" : "text-maroon"
          )}
        >
          {eyebrow}
        </span>
      )}
      <span
        aria-hidden="true"
        className={cn("my-4 h-0.5 w-9", isDark ? "bg-gold" : "bg-maroon")}
      />
      <h2
        className={cn(
          "font-serif text-3xl leading-tight font-semibold md:text-4xl",
          isDark ? "text-white" : "text-ink",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-relaxed",
            isDark ? "text-white/70" : "text-muted",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
