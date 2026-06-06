import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;

  title: string;

  description?: string;

  action?: ReactNode;

  centered?: boolean;

  compact?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
  compact = false,
}: SectionHeaderProps) {

  return (

    <div
      className={`
        flex
        flex-col
        gap-5
        md:flex-row
        md:items-end
        md:justify-between
        ${
          compact
            ? "mb-6"
            : "mb-8"
        }
        ${
          centered
            ? "items-center text-center"
            : ""
        }
      `}
    >

      {/* LEFT */}

      <div
        className={
          centered
            ? "max-w-3xl"
            : "max-w-2xl"
        }
      >

        {/* EYEBROW */}

        {eyebrow && (

          <p className="text-sm font-medium text-[#FF4D8D]">

            {eyebrow}

          </p>
        )}

        {/* TITLE */}

        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">

          {title}

        </h2>

        {/* DESCRIPTION */}

        {description && (

          <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">

            {description}

          </p>
        )}

      </div>

      {/* RIGHT ACTION */}

      {action && (

        <div className="shrink-0">

          {action}

        </div>
      )}

    </div>
  );
}