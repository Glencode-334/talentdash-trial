type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {

  return (

    <div className="mb-10">

      <h1 className="text-5xl font-bold tracking-tight text-[#222222]">

        {title}

      </h1>

      {description && (

        <p className="mt-4 max-w-2xl text-lg text-[#6A6A6A]">

          {description}

        </p>

      )}

    </div>
  );
}