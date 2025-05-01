import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TeamSection from "@/components/team-section";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://dmtacres.com");

  return {
    metadataBase,
    title: "About DMT Acres",
    description:
      "DMT Acres is a registered and dynamic farming enterprise based in Ntcheu and Kasungu Districts, Malawi. Founded in 2019, this agriculture farming enterprise was officially registered in April 2024, specializing in poultry farming, crop production and organic fertilizer manufacturing.",
    openGraph: {
      title: "About DMT Acres",
      description:
        "Our operations are guided by a passion for food security, environmental sustainability and economic empowerment. Our focus is on cultivating high-quality crops and livestock while implementing innovative and eco-friendly farming techniques.",
      url: "https://dmtacres.com/about",
      type: "website",
      images: [
        {
          url: "https://dmtacres.com/images/banner.jpg",
          width: 1200,
          height: 630,
          alt: "About DMT Acres"
        },
        {
          url: "https://dmtacres.com/images/chicken1.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/chicken2.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/chicken3.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/chicken4.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/chicken5.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/chicken6.jpg",
          width: 400,
          height: 300,
          alt: "Poultry Farm"
        },
        {
          url: "https://dmtacres.com/images/maize.jpg",
          width: 400,
          height: 300,
          alt: "Maize Field"
        },
        {
          url: "https://dmtacres.com/images/maize3.jpg",
          width: 400,
          height: 300,
          alt: "Maize Field"
        },
        {
          url: "https://dmtacres.com/images/maize2.jpg",
          width: 400,
          height: 300,
          alt: "Farm Workers"
        },
        {
          url: "https://dmtacres.com/images/banana1.jpg",
          width: 400,
          height: 300,
          alt: "Banana Field"
        },
        {
          url: "https://dmtacres.com/images/banana2.jpg",
          width: 400,
          height: 300,
          alt: "Banana Field"
        },
        {
          url: "https://dmtacres.com/images/banana3.jpg",
          width: 400,
          height: 300,
          alt: "Banana Field"
        },
        {
          url: "https://dmtacres.com/images/banana4.jpg",
          width: 400,
          height: 300,
          alt: "Banana Field"
        },
        {
          url: "https://dmtacres.com/images/irrigation.jpg",
          width: 400,
          height: 300,
          alt: "Irrigation"
        },
        {
          url: "https://dmtacres.com/images/organic.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic2.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic3.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic4.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic5.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic6.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/organic7.jpg",
          width: 400,
          height: 300,
          alt: "Organic Fertilizer"
        },
        {
          url: "https://dmtacres.com/images/cattle.jpg",
          width: 400,
          height: 300,
          alt: "Cattle Farming"
        },
        {
          url: "https://dmtacres.com/images/cattle1.jpg",
          width: 400,
          height: 300,
          alt: "Cattle Farming"
        },
        {
          url: "https://dmtacres.com/images/cattle3.jpg",
          width: 400,
          height: 300,
          alt: "Cattle Farming"
        }
      ]
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/banana4.jpg?height=400&width=1200" alt="DMT Acres Farm" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About DMT Acres</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            Learn about our journey, mission, and commitment to sustainable agriculture
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
              <p className="text-gray-600">
                DMT Acres is a registered and dynamic farming enterprise based in Ntcheu and Kasungu Districts, Malawi. Founded in
                2019, this agriculture farming enterprise was officially registered in April 2024, specializing in
                poultry farming, crop production and organic fertilizer manufacturing.
              </p>
              <p className="text-gray-600">
                Our operations are guided by a passion for food security, environmental sustainability and economic
                empowerment. Our focus is on cultivating high-quality crops and livestock while implementing innovative
                and eco-friendly farming techniques.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/chicken3.jpg?height=400&width=600" alt="DMT Acres Farm" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Operations</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres embraces a sustainable and symbiotic farming system where our poultry and crop production
              complement each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Agro Dealing</h3>
              <p className="text-gray-600">
                We supply quality agricultural inputs seeds, fertilizers, crop protection, and tools to support sustainable and productive farming for small to medium-scale farmers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Poultry Farming</h3>
              <p className="text-gray-600">
                We focus primarily on chicken farming, ensuring high-quality, nutritious poultry products for local
                markets. Our approach emphasizes proper animal husbandry, biosecurity and ethical farming practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌽</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Crop Production</h3>
              <p className="text-gray-600">
                We cultivate a variety of staple and high value crops including Bananas, Plantains, Sugarcane, legumes (cowpeas), maize and cassava and
                other seasonal produce like tomato and garlic. We use sustainable farming techniques to maximize yield
                while preserving soil health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Organic Fertilizer Production</h3>
              <p className="text-gray-600">
                As part of our commitment to environmental conservation, we produce organic fertilizer to enhance soil
                fertility and reduce reliance on chemical fertilizers, promoting eco-friendly and cost-effective manure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🐄</span> {/* Or use 🐐 depending on your livestock */}
              </div>
              <h3 className="text-xl font-semibold mb-4">Livestock Farming</h3>
              <p className="text-gray-600">
                We raise goats, cattle, and other livestock using sustainable and integrated farming practices. Our animals contribute 
                to food production and organic manure, supporting soil health and community livelihoods.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600">
              The nutrient-rich manure from our chickens is carefully processed into organic fertilizer, which enriches
              the soil and enhances crop yields. In return, the crops provide a natural and sustainable source of feed
              for the poultry, creating a balanced ecosystem that minimizes waste and promote environmental
              sustainability. This integrated approach not only improves productivity but also supports long-term soil
              health, reducing the need for synthetic fertilizers while ensuring high quality produce.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Commitment */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading agricultural enterprise in Malawi, driving sustainable farming practices and
                contributing to national food security and economic growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality agricultural products through sustainable farming, advanced techniques, and
                community engagement, ensuring growth for both our business and the local farming sector.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Commitment</h3>
              <p className="text-gray-600">
                We believe in sustainable agriculture that not only feeds communities but also nurtures the environment.
                Through innovative farming methods, responsible resource management, and continuous improvement, we
                strive to contribute to Malawi's growth and food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Goals */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Business Goals</h2>
            <p className="mx-auto max-w-[700px] text-gray-200">
              DMT Acres is committed to growth, innovation, and sustainability in all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increase Production Capacity</h3>
                <p className="text-gray-300">
                  Expand farming operations and improve crop yields through efficient farming techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Strengthen Distribution Channels</h3>
                <p className="text-gray-300">
                  Build reliable partnerships with local markets, retailers and bulk buyers to expand product reach.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Achieve Financial Sustainability</h3>
                <p className="text-gray-300">
                  Optimize cost management, improve operational efficiency, and secure funding or grants for business
                  growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement Advanced Techniques</h3>
                <p className="text-gray-300">
                  Adopt precision farming, irrigation systems, and improved poultry housing for increased efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Diversify Product Offerings</h3>
                <p className="text-gray-300">
                  Introduce additional poultry breeds, new crop varieties, and value-added products such as packaged
                  organic fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team Structure</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres is led by a dedicated team of professionals committed to excellence in agriculture.
            </p>
          </div>
          <TeamSection />
        </div>
      </section>
    </div>
  )
}
