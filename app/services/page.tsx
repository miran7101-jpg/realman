import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { treatments } from "@/lib/data"
import { Clock, DollarSign } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - All service descriptions */}
              <div className="space-y-8">
                {treatments.map((treatment) => (
                  <div key={treatment.id} className="border-b border-border pb-8 last:border-0">
                    <h3 className="text-2xl font-serif font-semibold mb-3">{treatment.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{treatment.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{treatment.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-lg">{treatment.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side - Single large image */}
              <div className="sticky top-24">
                <div className="relative h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/luxury-massage-spa-interior-dark-ambient-lighting.jpg"
                    alt="Massage Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
