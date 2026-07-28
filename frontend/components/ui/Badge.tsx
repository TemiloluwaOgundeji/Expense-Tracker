interface BadgeProps {
  children: React.ReactNode;
  color?: "indigo" | "emerald" | "amber" | "red" | "slate";
}

export default function Badge({
  children,
  color = "slate",
}: BadgeProps) {
  const styles = {
    indigo:
      "bg-indigo-100 text-indigo-700",

    emerald:
      "bg-emerald-100 text-emerald-700",

    amber:
      "bg-amber-100 text-amber-700",

    red:
      "bg-red-100 text-red-700",

    slate:
      "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${styles[color]}`}
    >
      {children}
    </span>
  );
}