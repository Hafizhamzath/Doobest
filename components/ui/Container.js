import { cn } from "@/lib/cn";

const MAX_WIDTHS = {
  narrow: "max-w-[1400px]",
  medium: "max-w-[1500px]",
  default: "max-w-[1700px]",
  wide: "max-w-[1920px]",
};

export default function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-16",
        MAX_WIDTHS[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
