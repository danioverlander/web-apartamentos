import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-12 h-px bg-earth-400",
        className
      )}
    />
  );
}
