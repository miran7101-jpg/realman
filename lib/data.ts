export interface Trainer {
  id: string
  name: string
  age: number
  height: string
  weight: string
  mainImage: string
  galleryImages: string[]
}

export interface Treatment {
  id: string
  name: string
  duration: string
  price: string
  description: string
  image: string
}

export interface Room {
  id: string
  name: string
  description: string
  image: string
}

export const trainers: Trainer[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    age: 34,
    height: "5'6\" (168 cm)",
    weight: "135 lbs (61 kg)",
    mainImage: "/professional-asian-female-massage-therapist.jpg",
    galleryImages: ["/massage-therapist-working.jpg", "/therapeutic-massage-session.jpg", "/spa-wellness-treatment.jpg"],
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    age: 29,
    height: "5'10\" (178 cm)",
    weight: "175 lbs (79 kg)",
    mainImage: "/professional-male-massage-therapist.jpg",
    galleryImages: ["/swedish-massage-technique.jpg", "/relaxation-therapy-session.jpg", "/aromatherapy-oils-preparation.jpg"],
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    age: 38,
    height: "5'5\" (165 cm)",
    weight: "128 lbs (58 kg)",
    mainImage: "/female-wellness-practitioner-with-hot-stones.jpg",
    galleryImages: ["/hot-stone-massage-therapy.jpg", "/aromatherapy-essential-oils.jpg", "/holistic-spa-treatment.jpg"],
  },
  {
    id: "james-thompson",
    name: "James Thompson",
    age: 42,
    height: "6'1\" (185 cm)",
    weight: "190 lbs (86 kg)",
    mainImage: "/experienced-male-rehabilitation-therapist.jpg",
    galleryImages: [
      "/rehabilitation-massage-therapy.jpg",
      "/pain-management-treatment.jpg",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "lily-nakamura",
    name: "Lily Nakamura",
    age: 31,
    height: "5'4\" (163 cm)",
    weight: "120 lbs (54 kg)",
    mainImage: "/placeholder.svg?height=600&width=400",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

export const treatments: Treatment[] = [
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    duration: "60 / 90 minutes",
    price: "$95 / $135",
    description:
      "Classic relaxation massage using gentle, flowing strokes to ease tension and promote overall wellness.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    duration: "60 / 90 minutes",
    price: "$110 / $155",
    description: "Therapeutic massage targeting deep muscle layers to release chronic tension and knots.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Therapy",
    duration: "90 minutes",
    price: "$165",
    description: "Heated stones placed on key points to melt away tension and promote deep relaxation.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Massage",
    duration: "60 / 90 minutes",
    price: "$105 / $145",
    description: "Massage enhanced with essential oils to harmonize body, mind, and spirit.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "sports-massage",
    name: "Sports Massage",
    duration: "60 / 90 minutes",
    price: "$115 / $160",
    description: "Specialized massage for athletes focusing on injury prevention and performance enhancement.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "prenatal-massage",
    name: "Prenatal Massage",
    duration: "60 minutes",
    price: "$100",
    description: "Gentle, nurturing massage designed specifically for expectant mothers.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export const rooms: Room[] = [
  {
    id: "treatment-room-1",
    name: "Tranquility Suite",
    description: "Our premium treatment room featuring soft lighting, heated massage table, and calming aromatherapy.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "treatment-room-2",
    name: "Harmony Chamber",
    description: "Spacious room with natural elements, perfect for couples massage and extended therapy sessions.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "relaxation-lounge",
    name: "Relaxation Lounge",
    description: "Unwind before or after your treatment in our peaceful lounge with herbal tea and soft seating.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "shower-facilities",
    name: "Shower Facilities",
    description: "Private shower rooms with premium amenities, towels, and complimentary toiletries.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "meditation-garden",
    name: "Meditation Garden",
    description: "Serene outdoor space with water features and comfortable seating for quiet reflection.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "consultation-room",
    name: "Consultation Room",
    description: "Private space for wellness consultations and personalized treatment planning.",
    image: "/placeholder.svg?height=400&width=600",
  },
]
