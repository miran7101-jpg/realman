"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroImages = [
  {
    src: "/luxury-massage-spa-interior-dark-ambient-lighting.jpg",
    alt: "Luxury Spa Interior",
  },
  {
    src: "/professional-massage-therapy-room-calm-atmosphere.jpg",
    alt: "Massage Therapy Room",
  },
  {
    src: "/serene-wellness-spa-treatment-room-modern-design.jpg",
    alt: "Wellness Treatment Room",
  },
  {
    src: "/relaxation-spa-massage-bed-candles-peaceful.jpg",
    alt: "Peaceful Spa Environment",
  },
]

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-background/40 z-[1]" />
    </>
  )
}
