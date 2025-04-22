"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/banner.jpg?height=600&width=1200"
            alt="DMT Acres Farm"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Sustainable Farming for a Thriving Future
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
              DMT Acres is a dynamic farming enterprise in Ntcheu and Kasungu, Malawi, specializing in poultry farming,
              crop production, and organic fertilizer manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10 text-green-600" />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="relative h-[600px] w-full z-0 text-green-600"
        >
          {['/images/banner.jpg', '/images/cattle3.jpg', '/images/banana3.jpg'].map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[600px] w-full text-green-600">
                <Image
                  src={`${src}?height=600&width=1200`}
                  alt={`Slide ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Sustainable Farming for a Thriving Future
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
              DMT Acres is a dynamic farming enterprise in Ntcheu and Kasungu, Malawi, specializing in poultry farming,
              crop production, and organic fertilizer manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              Founded in 2019 and officially registered in April 2024, DMT Acres is committed to food security,
              environmental sustainability, and economic empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To become a leading agricultural enterprise in Malawi, driving sustainable farming practices and
                  contributing to national food security and economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To provide high-quality agricultural products through sustainable farming, advanced techniques, and
                  community engagement, ensuring growth for both our business and the local farming sector.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We believe in sustainable agriculture that not only feeds communities but also nurtures the
                  environment through innovative farming methods and responsible resource management.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild variant="outline" className="gap-2 text-green-700 border-green-700 hover:bg-green-50">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products & Services Preview */}
      <section className="py-16">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products & Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres offers a variety of high-quality agricultural products through our sustainable and integrated
              farming approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/organic4.jpg?height=200&width=400"
                  alt="Poultry Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Agro Dealing</CardTitle>
                <CardDescription>Trusted inputs for successful farming</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Certified seeds & fertilizers</li>
                  <li>Pesticides & herbicides</li>
                  <li>Farm tools & equipment</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#agro-dealing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/chicken3.jpg?height=200&width=400"
                  alt="Poultry Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Poultry Farming</CardTitle>
                <CardDescription>Healthy and well-raised poultry including Kroilers and local breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Live Chickens</li>
                  <li>Dressed Chicken</li>
                  <li>Day-old to months-old chicks</li>
                  <li>Fresh farm eggs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#poultry">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/maize2.jpg?height=200&width=400"
                  alt="Crop Production"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Crop Production</CardTitle>
                <CardDescription>Sustainable cultivation of staple and high-value crops</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maize</li>
                  <li>Cowpeas</li>
                  <li>Cassava</li>
                  <li>Bananas</li>
                  <li>Plantains</li>
                  <li>Sugarcane</li>
                  <li>Tomatoes and Garlic</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#crops">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/organic7.jpg?height=200&width=400"
                  alt="Organic Manure"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Organic Fertilizer</CardTitle>
                <CardDescription>Eco-friendly and cost-effective fertilizer production</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nutrient-rich organic fertilizer</li>
                  <li>Soil health enhancement</li>
                  <li>Training and consultancy</li>
                  <li>Sustainable farming inputs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#manure">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/cattle.jpg?height=200&width=400"
                  alt="Livestock Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Livestock Farming</CardTitle>
                <CardDescription>Resilient and profitable livestock rearing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Goats and Cattle</li>
                  <li>Local and improved breeds</li>
                  <li>Grazing & zero-grazing systems</li>
                  <li>Manure integration into crop farming</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#livestock">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
              <Link href="/products">
                View All Products & Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose DMT Acres?</h2>
            <p className="mx-auto max-w-[700px] text-gray-200">
              Our unique approach to farming sets us apart and ensures the highest quality products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Modern & Sustainable Farming</h3>
              <p>
                Our unique model of combining poultry farming with crop production creates a natural ecosystem where
                chicken manure enriches the soil, reducing reliance on synthetic fertilizers and improving yields.
              </p>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
              <p>
                We prioritize natural farming practices, ensuring our crops and poultry products are free from harmful
                chemicals and antibiotics. This appeals to health-conscious consumers looking for organic and
                sustainable options.
              </p>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Environmental Conservation</h3>
              <p>
                By minimizing waste and using eco-friendly farming techniques, we contribute to sustainable agriculture
                while aligning with global trends in green and regenerative farming.
              </p>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community-Focused Initiatives</h3>
              <p>
                We aim to empower local farmers and businesses through knowledge sharing, partnerships, and access to
                sustainable farming inputs, strengthening both our brand and the agricultural sector in Malawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-green-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-gray-600">
                  We welcome partnerships, investment opportunities, and collaborations to further our vision of
                  agricultural growth and food security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-700" />
                    <span>0999498162</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-700" />
                    <span>dmtacresmw@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <span >
                      Ntcheu and Kasungu, Malawi
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button asChild size="lg" className="gap-2 bg-green-700 hover:bg-green-800">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
