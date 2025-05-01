"use client"

import React from "react"

export default function StructuredData() {
  const employees = [
    { name: "Daniel Tsonga", role: "Managing Director", url: "https://dmtacres.com/team/daniel-tsonga" },
    { name: "Mwayi Tsonga", role: "Deputy Director", url: "https://dmtacres.com/team/mwayi-tsonga" },
    { name: "Sylvester Maluku", role: "Administrator", url: "https://dmtacres.com/team/sylvester-maluku" },
    { name: "Tears Bisani", role: "Human Resource Manager", url: "https://dmtacres.com/team/tears-bisani" },
    { name: "Angela Chinyama", role: "Accountant", url: "https://dmtacres.com/team/angela-chinyama" },
    { name: "Edward Mbesa", role: "Operations Manager", url: "https://dmtacres.com/team/edward-mbesa" },
    { name: "Peace Msoza", role: "Transport and Logistics Manager", url: "https://dmtacres.com/team/peace-msoza" },
    { name: "Francisco Jonas", role: "Quality Assurance Manager", url: "https://dmtacres.com/team/francisco-jonas" },
    { name: "Rabson Mvula", role: "Productions Manager", url: "https://dmtacres.com/team/rabson-mvula" },
    { name: "Omega Tsonga", role: "Safety and Environmental Manager", url: "https://dmtacres.com/team/omega-tsonga" },
    { name: "Carol Chingwalu", role: "Marketing Manager", url: "https://dmtacres.com/team/carol-chingwalu" },
    { name: "Pauline Makhalira", role: "Trade Execution Manager", url: "https://dmtacres.com/team/pauline-makhalira" },
    { name: "Dr. Wisdom Malata", role: "Research Consultant", url: "https://dmtacres.com/team/dr.-wisdom-malata" },
    { name: "Joseph Kaphesi", role: "Scientific Analyst", url: "https://dmtacres.com/team/joseph-kaphesi" },
    { name: "Freddie Oliver Kokha", role: "Agriculture Manager - Crops", url: "https://dmtacres.com/team/freddie-oliver-kokha" },
    { name: "Martha Kamchepera", role: "Veterinary Manager", url: "https://dmtacres.com/team/martha-kamchepera" },
    { name: "Chikondi Lifa", role: "Agro-Spatial Analyst", url: "https://dmtacres.com/team/chikondi-lifa" },
    { name: "Louis Makhiringa", role: "Irrigation Engineer", url: "https://dmtacres.com/team/louis-makhiringa" },
    { name: "Chipiliro Chingwembere", role: "Farm Manager", url: "https://dmtacres.com/team/chipiliro-chingwembere" }
  ]

  const galleryImages = [
    { src: "https://dmtacres.com/images/chicken1.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/chicken2.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/chicken3.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/chicken4.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/chicken5.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/chicken6.jpg?height=300&width=400", alt: "Poultry Farm" },
    { src: "https://dmtacres.com/images/maize.jpg?height=300&width=400", alt: "Maize Field" },
    { src: "https://dmtacres.com/images/maize3.jpg?height=300&width=400", alt: "Maize Field" },
    { src: "https://dmtacres.com/images/maize2.jpg?height=300&width=400", alt: "Farm Workers" },
    { src: "https://dmtacres.com/images/banana1.jpg?height=300&width=400", alt: "Banana Field" },
    { src: "https://dmtacres.com/images/banana2.jpg?height=300&width=400", alt: "Banana Field" },
    { src: "https://dmtacres.com/images/banana3.jpg?height=300&width=400", alt: "Banana Field" },
    { src: "https://dmtacres.com/images/banana4.jpg?height=300&width=400", alt: "Banana Field" },
    { src: "https://dmtacres.com/images/irrigation.jpg?height=300&width=400", alt: "Irrigation" },
    { src: "https://dmtacres.com/images/organic.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic2.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic3.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic4.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic5.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic6.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/organic7.jpg?height=300&width=400", alt: "Organic Fertilizer" },
    { src: "https://dmtacres.com/images/cattle.jpg?height=300&width=400", alt: "Cattle Farming" },
    { src: "https://dmtacres.com/images/cattle1.jpg?height=300&width=400", alt: "Cattle Farming" },
    { src: "https://dmtacres.com/images/cattle3.jpg?height=300&width=400", alt: "Cattle Farming" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DMT Acres",
    url: "https://dmtacres.com",
    logo: "https://dmtacres.com/logo/dmt_acres_logo_white_background.png",
    sameAs: [
      "https://www.linkedin.com/company/dmtacres",
      "https://twitter.com/dmtacres",
      "https://web.facebook.com/profile.php?id=61574754666450"
    ],
    employee: employees.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      url: member.url
    })),
    hasPart: {
      "@type": "ImageGallery",
      name: "DMT Acres Gallery",
      url: "https://dmtacres.com/gallery",
      image: galleryImages.map((img) => ({
        "@type": "ImageObject",
        contentUrl: img.src,
        caption: img.alt
      }))
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
