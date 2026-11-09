import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { rooms } from "@/lib/data"

export default function RoomsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Facilities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-serif font-semibold mb-3">{room.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{room.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
