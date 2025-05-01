import "./globals.css"
import type { Metadata } from "next"
import ClientLayout from "@/components/client-layout"
import { SiteFooter } from "@/components/site-footer"
import StructuredData from "@/components/structured-data"
import Head from 'next/head'

export const metadata: Metadata = {
  title: "DMT Acres - Sustainable Farming for a Thriving Future",
  description:
    "DMT Acres is a dynamic farming enterprise in Ntcheu and Kasungu, Malawi, specializing in poultry farming, crop production, and organic fertilizer manufacturing.",
  robots: {
    index: true,
    follow: true,
  },
};

const galleryImages = [
  '/images/chicken1.jpg',
  '/images/chicken2.jpg',
  '/images/chicken3.jpg',
  '/images/chicken4.jpg',
  '/images/chicken5.jpg',
  '/images/chicken6.jpg',
  '/images/maize.jpg',
  '/images/maize3.jpg',
  '/images/maize2.jpg',
  '/images/banana1.jpg',
  '/images/banana2.jpg',
  '/images/banana3.jpg',
  '/images/banana4.jpg',
  '/images/irrigation.jpg',
  '/images/organic.jpg',
  '/images/organic2.jpg',
  '/images/organic3.jpg',
  '/images/organic4.jpg',
  '/images/organic5.jpg',
  '/images/organic6.jpg',
  '/images/organic7.jpg',
  '/images/cattle.jpg',
  '/images/cattle1.jpg',
  '/images/cattle3.jpg',
];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {galleryImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <StructuredData />
      </head>
      <body>
        <ClientLayout>
          <div className="flex flex-col min-h-screen">
            {/* This is where the main content will go */}
            <main className="flex-1">{children}</main>
            {/* Add the footer here */}
            <SiteFooter />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
