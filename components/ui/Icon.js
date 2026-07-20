const ICONS = {
  close: {
    paths: ["M6 6l12 12", "M18 6L6 18"],
  },
  facebook: {
    paths: [
      "M14 9h3V6h-3a4 4 0 00-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z",
    ],
  },
  instagram: {
    paths: ["M4 4h16v16H4z", "M16.5 7.5h.01"],
    circles: [{ cx: 12, cy: 12, r: 4 }],
  },
  linkedin: {
    paths: ["M4 4h4v16H4z", "M12 9v11h4v-6a2 2 0 014 0v6h4v-7a5 5 0 00-9-3V9z"],
  },
  twitter: {
    paths: ["M18 6L6 18", "M6 6l12 12"],
  },
  mapPin: {
    paths: ["M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"],
    circles: [{ cx: 12, cy: 10, r: 2.5 }],
  },
  phone: {
    paths: [
      "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.9.5 2.9.6a2 2 0 011.7 2.1z",
    ],
  },
  mail: {
    paths: ["M2 4h20v16H2z", "M2 6l10 7 10-7"],
  },
  arrowRight: {
    paths: ["M5 12h14", "M13 5l7 7-7 7"],
  },
  calendar: {
    rects: [{ x: 3, y: 5, width: 18, height: 16, rx: 2 }],
    paths: ["M3 10h18", "M8 3v4", "M16 3v4"],
  },
};

export default function Icon({
  name,
  paths,
  circles,
  rects,
  size = 20,
  strokeWidth = 1.6,
  className,
  ...props
}) {
  const glyph = name ? ICONS[name] : { paths, circles, rects };
  if (!glyph || (!glyph.paths?.length && !glyph.circles?.length && !glyph.rects?.length)) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {glyph.rects?.map((r, i) => <rect key={i} {...r} />)}
      {glyph.circles?.map((c, i) => <circle key={i} {...c} />)}
      {glyph.paths?.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
