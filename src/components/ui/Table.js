import { cn } from "@/lib/utils";

export function Table({ className, ...props }) {
  return (
    <div className="overflow-x-auto">
      <table className={cn("w-full text-left text-sm", className)} {...props} />
    </div>
  );
}
export const THead = (p) => <thead className="border-b border-slate-200 bg-slate-50" {...p} />;
export const TBody = (p) => <tbody className="divide-y divide-slate-100" {...p} />;
export const TR = (p) => <tr className="hover:bg-slate-50/60" {...p} />;
export const TH = ({ className, ...p }) => (
  <th className={cn("px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500", className)} {...p} />
);
export const TD = ({ className, ...p }) => <td className={cn("px-4 py-3 text-slate-700", className)} {...p} />;