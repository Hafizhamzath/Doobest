"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const VARIANTS = {
  up: { hidden: "translate-y-7 opacity-0", shown: "translate-y-0 opacity-100" },
  down: { hidden: "-translate-y-7 opacity-0", shown: "translate-y-0 opacity-100" },
  left: { hidden: "-translate-x-8 opacity-0", shown: "translate-x-0 opacity-100" },
  right: { hidden: "translate-x-8 opacity-0", shown: "translate-x-0 opacity-100" },
  scale: { hidden: "scale-90 opacity-0", shown: "scale-100 opacity-100" },
  fade: { hidden: "opacity-0", shown: "opacity-100" },
};

export default function Reveal({ children, delay = 0, variant = "up", className, as: As = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { hidden, shown } = VARIANTS[variant] ?? VARIANTS.up;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={cn(
        "transition-[transform,opacity] duration-700 ease-out",
        visible ? shown : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}
