import { cn } from "@/lib/cn";
import Icon from "@/components/ui/Icon";

export default function FeatureCard({
  feature,
  variant = "detailed",
  showDivider = false,
  className,
}) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "text-center",
        isCompact ? "px-3 pb-8" : "px-4 transition-transform duration-300 hover:-translate-y-1",
        showDivider && "lg:border-r lg:border-ink/[0.08]",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-center text-maroon",
          isCompact
            ? "mb-3.5"
            : "mb-5 h-20 w-20 rounded-full border border-ink/[0.12]"
        )}
      >
        <Icon
          paths={feature.icon.paths}
          circles={feature.icon.circles}
          size={26}
          strokeWidth={1.5}
        />
      </div>
      <div
        className={cn(
          "font-semibold",
          isCompact ? "mb-1 text-[14.5px]" : "mb-2.5 font-serif text-[17px]"
        )}
      >
        {feature.title}
      </div>
      <span
        aria-hidden="true"
        className={cn(
          "mx-auto block h-0.5 bg-maroon",
          isCompact ? "w-5" : "mb-3.5 w-[18px]"
        )}
      />
      {!isCompact && (
        <p className="text-[13.5px] leading-relaxed text-muted">
          {feature.desc}
        </p>
      )}
    </div>
  );
}
