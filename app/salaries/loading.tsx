import { Container } from "@/components/ui/Container";

export default function Loading() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <div className="animate-pulse">

          <div className="h-12 w-80 rounded-xl bg-[#E5E5E5]" />

          <div className="mt-4 h-6 w-[500px] rounded-xl bg-[#E5E5E5]" />

          <div className="mt-10 rounded-2xl border border-[#EBEBEB] bg-white p-6">

            <div className="space-y-4">

              {Array.from({
                length: 8,
              }).map((_, index) => (

                <div
                  key={index}
                  className="h-16 rounded-xl bg-[#F3F4F6]"
                />

              ))}

            </div>

          </div>

        </div>

      </Container>

    </main>
  );
}