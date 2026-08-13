import { cn } from "@/lib/cn";
import Icon from "@/components/ui/Icon";

function fieldClasses(hasError) {
  return cn(
    "w-full rounded-[10px] border bg-white px-3.5 py-3 font-sans text-[13.5px] text-ink placeholder:text-muted transition-colors duration-150 focus:outline-none",
    hasError
      ? "border-[#D64545] focus:border-[#D64545]"
      : "border-ink/[0.14] focus:border-maroon"
  );
}

export default function FormField({
  label,
  required,
  as = "input",
  type = "text",
  options,
  className,
  error,
  ...props
}) {
  const id = props.id ?? props.name;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-[12.5px] font-bold text-[#333]">
          {label} {required && <span className="text-maroon">*</span>}
        </label>
      )}
      {as === "select" ? (
        <select
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          aria-required={required}
          className={cn(fieldClasses(error), "text-muted")}
          {...props}
        >
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
          aria-invalid={!!error}
          aria-describedby={errorId}
          aria-required={required}
          rows={props.rows ?? 4}
          className={cn(fieldClasses(error), "min-h-[110px] resize-y")}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          aria-required={required}
          className={fieldClasses(error)}
          {...props}
        />
      )}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#B33636]"
        >
          <Icon
            paths={["M12 9v4", "M12 16.5h.01"]}
            circles={[{ cx: 12, cy: 12, r: 9 }]}
            size={13}
            strokeWidth={2}
            className="shrink-0"
          />
          {error}
        </p>
      )}
    </div>
  );
}
