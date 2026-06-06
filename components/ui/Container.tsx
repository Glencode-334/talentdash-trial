import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;

  className?: string;

  narrow?: boolean;
}

export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {

  return (

    <div
      className={`
        mx-auto
        w-full
        px-4
        md:px-6
        ${
          narrow

            ? "max-w-5xl"

            : "max-w-7xl"
        }
        ${className}
      `}
    >

      {children}

    </div>
  );
}