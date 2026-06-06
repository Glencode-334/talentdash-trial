import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  gradient?: boolean;

  compact?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  gradient = false,
  compact = false,
}: CardProps) {

  return (

    <div
      className={`
        rounded-3xl
        border
        border-[#F1F1F1]
        ${
          gradient

            ? "bg-gradient-to-br from-white to-[#FFF8FB]"

            : "bg-white"
        }
        ${
          compact
            ? "p-4"
            : "p-6"
        }
        shadow-sm
        transition-all
        duration-200
        ${
          hover

            ? "hover:-translate-y-1 hover:shadow-md"

            : ""
        }
        ${className}
      `}
    >

      {children}

    </div>
  );
}