import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { trainers } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export default function TrainersPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Trainers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((trainer) => (
                <Card
                  key={trainer.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={trainer.mainImage || "/placeholder.svg"}
                      alt={trainer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-serif font-semibold mb-4">{trainer.name}</h3>
                    <div className="space-y-2 mb-6 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Age:</span> {trainer.age}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Height:</span> {trainer.height}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Weight:</span> {trainer.weight}
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full group bg-transparent">
                      <Link href={`/trainers/${trainer.id}`} className="flex items-center justify-center gap-2">
                        View Profile
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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
