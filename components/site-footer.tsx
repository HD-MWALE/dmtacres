import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">DMT Acres</h3>
            <p className="text-gray-300">
              A registered and dynamic farming enterprise based in Ntcheu and Kasungu Districts, Malawi, specializing in poultry
              farming, crop production, and organic fertilizer manufacturing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white">
                Products & Services
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/products#poultry" className="text-gray-300 hover:text-white">
                Poultry Farming
              </Link>
              <Link href="/products#crops" className="text-gray-300 hover:text-white">
                Crop Production
              </Link>
              <Link href="/products#manure" className="text-gray-300 hover:text-white">
                Organic Fertilizer
              </Link>
              <Link href="/products#training" className="text-gray-300 hover:text-white">
                Training & Consultancy
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">0999498162</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">dmtacresmw@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  Ntcheu and Kasungu, Malawi
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} DMT Acres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}