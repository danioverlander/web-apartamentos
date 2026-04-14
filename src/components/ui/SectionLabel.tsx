import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-sans text-[10px] tracking-[0.25em] uppercase font-medium mb-6",
        light ? "text-earth-200/70" : "text-earth-500",
        className
      )}
    >
      {children}
    </span>
  );
}
