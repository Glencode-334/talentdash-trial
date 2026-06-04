type CardProps = {
  children: React.ReactNode;
};

export function Card({
  children,
}: CardProps) {

  return (

    <div className="rounded-2xl border border-[#EBEBEB] bg-white">

      {children}

    </div>
  );
}