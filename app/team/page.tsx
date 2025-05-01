import Image from "next/image"
import TeamSection from "@/components/team-section";
import type { Metadata } from "next";
import Script from "next/script";
import { teamData } from "@/data/team";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://dmtacres.com");
  const structuredData = generateTeamSchema();

  return {
    metadataBase,
    structuredData,
    title: "Meet the DMT Acres Team",
    description:
      "Get to know the passionate and skilled professionals driving sustainable agriculture at DMT Acres.",
    openGraph: {
      title: "Meet the DMT Acres Team",
      description:
        "Explore the profiles of our dedicated team working in poultry farming, crop production, and organic manure innovation.",
      url: "https://dmtacres.com/team",
      type: "website",
      images: [
        {
          url: "https://dmtacres.com/images/banner.jpg",
          width: 1200,
          height: 630,
          alt: "DMT Acres Team",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const generateTeamSchema = () => {
  const employees = teamData.flatMap((department) =>
    department.members.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      url: `https://dmtacres.com/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`,
      image: `https://dmtacres.com${member.imageSrc}`,
      email: member.isEmail ? member.email : undefined,
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DMT Acres",
    url: "https://dmtacres.com",
    logo: "https://dmtacres.com/logo/dmt_acres_logo_white_background.png",
    sameAs: [
      "https://www.linkedin.com/company/dmtacres",
      "https://twitter.com/dmtacres",
    ],
    employee: employees,
  };
};

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