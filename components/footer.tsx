import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-primary">REAL MAN</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your sanctuary for relaxation and wellness. Experience premium massage services in a tranquil environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-muted-foreground hover:text-primary transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@serenityspa.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Wellness Avenue, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} REAL MAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
