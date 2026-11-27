import { cn } from "@/lib/utils";

export function Input({ label, error, hint, id, className, ...props }) {
  const inputId = id || props.name;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500",
          error ? "border-red-400" : "border-slate-300",
          className
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}