import { Container } from "@/components/ui/Container";

export default function Loading() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <div className="animate-pulse">

          <div className="h-14 w-80 rounded-xl bg-[#E5E5E5]" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {Array.from({
              length: 3,
            }).map((_, index) => (

              <div
                key={index}
                className="h-64 rounded-2xl bg-white"
              />

            ))}

          </div>

        </div>

      </Container>

    </main>
  );
}