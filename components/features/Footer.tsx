import { Container } from "@/components/ui/Container";

export function Footer() {

  return (

    <footer className="mt-20 border-t border-[#E5E7EB] bg-white">

      <Container>

        <div className="flex flex-col gap-6 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          
          <div>

            <h3 className="text-xl font-bold">

              TalentDash

            </h3>

            <p className="mt-2 text-sm text-[#6A6A6A]">

              Salary intelligence and workplace insights for modern careers.

            </p>

          </div>

          <p className="text-sm text-[#6A6A6A]">

            Built with Next.js App Router and TailwindCSS.

          </p>

        </div>

      </Container>

    </footer>

  );
}