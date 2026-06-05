type CardProps = {
  children: React.ReactNode;
};

export function Card({
  children,
}: CardProps) {

  return (

    <div className=
      "rounded-2xl border border-[#E5E7EB] bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      {children}

    </div>
  );
}
