import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=64&width=64&text=SJ",
      content:
        "This app has completely transformed how I manage my day. The intuitive interface and smart features make staying organized effortless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      avatar: "/placeholder.svg?height=64&width=64&text=MC",
      content:
        "As someone who juggles multiple projects, this app has been a lifesaver. The cloud sync works flawlessly across all my devices.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      avatar: "/placeholder.svg?height=64&width=64&text=ER",
      content:
        "I've tried many productivity apps, but this one stands out. The customization options let me set it up exactly how I need it for my studies.",
      rating: 4,
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      avatar: "/placeholder.svg?height=64&width=64&text=DK",
      content:
        "The time tracking feature has been eye-opening. I now have a clear picture of where my time goes and how to optimize my business operations.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Healthcare Professional",
      avatar: "/placeholder.svg?height=64&width=64&text=LT",
      content:
        "With my unpredictable schedule, I need something reliable. This app adapts to my changing shifts and keeps me on track.",
      rating: 4,
    },
    {
      name: "James Wilson",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=64&width=64&text=JW",
      content:
        "The offline mode is perfect for when I'm traveling or in areas with poor connectivity. I can still access all my important information.",
      rating: 5,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base italic">"{testimonial.content}"</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

