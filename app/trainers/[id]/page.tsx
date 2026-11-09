import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { trainers } from "@/lib/data"
import { ArrowLeft, User, Ruler, Weight } from "lucide-react"

export function generateStaticParams() {
  return trainers.map((trainer) => ({
    id: trainer.id,
  }))
}

export default function TrainerProfilePage({ params }: { params: { id: string } }) {
  const trainer = trainers.find((t) => t.id === params.id)

  if (!trainer) {
    notFound()
  }

  const lineUrl = "https://line.me/ti/p/YOUR_LINE_ID"
  const telegramUrl = "https://t.me/YOUR_TELEGRAM_USERNAME"

  return (
    <>
      <Navigation />
      <main>
        {/* Back Button */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/trainers">
                <ArrowLeft className="h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </div>
        </section>

        {/* Profile Header */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Main Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-border/50">
                <Image
                  src={trainer.mainImage || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">{trainer.name}</h1>

                <div className="space-y-4 mb-8">
                  <Card className="border-border/50">
                    <CardContent className="p-4 flex items-start gap-3">
                      <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Age</p>
                        <p className="text-muted-foreground">{trainer.age} years old</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Ruler className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Height</p>
                        <p className="text-muted-foreground">{trainer.height}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Weight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Weight</p>
                        <p className="text-muted-foreground">{trainer.weight}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full">
                    <a href={lineUrl} target="_blank" rel="noopener noreferrer">
                      Book via LINE
                    </a>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="w-full bg-transparent">
                    <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                      Book via Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainer.galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group border border-border/50">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${trainer.name} gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
