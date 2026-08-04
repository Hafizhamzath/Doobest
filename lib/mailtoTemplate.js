const DIVIDER = "=".repeat(38);
const RULE = "-".repeat(38);

/**
 * Builds a mailto: link with a formatted, professional plain-text body.
 * sections: [{ heading, fields: [{ label, value }] }]
 */
export function buildMailtoLink({ to, title, formName, sections }) {
  const lines = [title.toUpperCase(), DIVIDER, ""];

  sections.forEach((section) => {
    lines.push(section.heading.toUpperCase());
    lines.push(RULE);
    section.fields.forEach(({ label, value }) => {
      lines.push(`${label}: ${value || "-"}`);
    });
    lines.push("");
  });

  lines.push(DIVIDER);
  lines.push("Submitted via doobestco.com");
  if (formName) lines.push(formName);

  const body = lines.join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
