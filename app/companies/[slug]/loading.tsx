import { Container } from "@/components/ui/Container";

export default function Loading() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <div className="animate-pulse">

          <div className="h-14 w-72 rounded-xl bg-[#E5E5E5]" />

          <div className="mt-4 h-6 w-[600px] rounded-xl bg-[#E5E5E5]" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {Array.from({
              length: 3,
            }).map((_, index) => (

              <div
                key={index}
                className="h-40 rounded-2xl bg-white"
              />

            ))}

          </div>

        </div>

      </Container>

    </main>
  );
}