import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;

  className?: string;
};

export function Card({
  children,
  className,
}: CardProps) {

  return (

    <div
      className={cn(
        "rounded-3xl border border-[#ECF0EE] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >

      {children}

    </div>
  );
}