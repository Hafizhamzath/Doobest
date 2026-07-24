import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full rounded-[10px] border border-ink/[0.14] bg-white px-3.5 py-3 font-sans text-[13.5px] text-ink placeholder:text-faint focus:border-maroon focus:outline-none";

export default function FormField({
  label,
  required,
  as = "input",
  type = "text",
  options,
  className,
  ...props
}) {
  const id = props.id ?? props.name;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-[12.5px] font-bold text-[#333]">
          {label} {required && <span className="text-maroon">*</span>}
        </label>
      )}
      {as === "select" ? (
        <select id={id} required={required} className={cn(fieldClasses, "text-faint")} {...props}>
          <option value="">Select a service</option>
          {options?.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          rows={props.rows ?? 4}
          className={cn(fieldClasses, "min-h-[110px] resize-y")}
          {...props}
        />
      ) : (
        <input id={id} type={type} required={required} className={fieldClasses} {...props} />
      )}
    </div>
  );
}
