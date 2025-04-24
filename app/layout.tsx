import "./globals.css"
import type { Metadata } from "next"
import ClientLayout from "@/components/client-layout"
import { SiteFooter } from "@/components/site-footer" // Import the SiteFooter component

export const metadata: Metadata = {
  title: "DMT Acres - Sustainable Farming for a Thriving Future",
  description:
    "DMT Acres is a registered and dynamic farming enterprise based in Ntcheu District, Malawi, specializing in poultry farming, crop production, and organic manure manufacturing.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
