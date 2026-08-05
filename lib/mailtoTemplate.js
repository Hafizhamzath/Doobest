const DIVIDER = "━".repeat(36);
const RULE = "─".repeat(36);

const DEFAULT_ICONS = ["👤", "🛠", "💬", "📎", "📌"];

/**
 * Builds a mailto: link with a structured, emoji-accented plain-text body.
 * mailto bodies are plain text only (no HTML/colour), so this uses emoji +
 * box-drawing characters to create visual hierarchy instead.
 * sections: [{ heading, icon?, fields: [{ label, value }] }]
 */
export function buildMailtoLink({ to, title, titleIcon = "📩", formName, sections }) {
  const lines = [`${titleIcon} ${title.toUpperCase()}`, DIVIDER, ""];

  sections.forEach((section, index) => {
    const icon = section.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
    lines.push(`${icon}  ${section.heading.toUpperCase()}`);
    lines.push(RULE);
    const labelWidth = Math.max(...section.fields.map((f) => f.label.length));
    section.fields.forEach(({ label, value }) => {
      lines.push(`${label.padEnd(labelWidth)}  :  ${value || "-"}`);
    });
    lines.push("");
  });

  lines.push(DIVIDER);
  lines.push("✅ Submitted via doobestco.com");
  if (formName) lines.push(`✨ ${formName}`);

  const body = lines.join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
