import Link from "next/link";
import { cn } from "@/lib/cn";

const VARIANT_CLASSES = {
  primary: "rounded-full bg-maroon text-white hover:bg-maroon-dark",
  inverse: "rounded-full bg-white text-maroon hover:bg-cream",
  outline:
    "rounded-full border border-maroon bg-transparent text-maroon hover:bg-maroon hover:text-white",
};

const TEXT_TONE_CLASSES = {
  ink: "text-ink hover:text-maroon",
  maroon: "text-maroon hover:text-maroon-dark",
  gold: "text-gold hover:text-white",
};

const SIZE_CLASSES = {
  sm: "px-5 py-3 text-[13.5px]",
  md: "px-7 py-4 text-[14.5px]",
};

export default function Button({
  href,
  variant = "primary",
  tone = "ink",
  size = "md",
  arrow = true,
  icon,
  className,
  children,
  ...props
}) {
  const isPill = variant !== "text";

  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-200 ease-out",
    isPill
      ? cn(SIZE_CLASSES[size], "hover:-translate-y-0.5")
      : "text-[14.5px] font-bold",
    isPill ? VARIANT_CLASSES[variant] : TEXT_TONE_CLASSES[tone],
    className
  );

  const content = (
    <>
      {children}
      {icon ?? (arrow && <span aria-hidden="true">→</span>)}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} prefetch={false} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
