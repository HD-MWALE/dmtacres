import Image from "next/image"
import TeamSection from "@/components/team-section";

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/banana4.jpg?height=400&width=1200" alt="DMT Acres Farm" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Team Structure</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            DMT Acres is led by a dedicated team of professionals committed to excellence in agriculture.
          </p>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <TeamSection />
        </div>
      </section>
    </div>
  )
}