import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AppScreenshots() {
  const screenshots = [
    {
      src: "/placeholder.svg?height=600&width=300&text=Home+Screen",
      alt: "Home Screen",
      title: "Caption Dashboard",
    },
    {
      src: "/placeholder.svg?height=600&width=300&text=Calendar+View",
      alt: "Calendar View",
      title: "Content Calendar",
    },
    {
      src: "/placeholder.svg?height=600&width=300&text=Task+List",
      alt: "Caption Generator",
      title: "Caption Generator",
    },
    {
      src: "/placeholder.svg?height=600&width=300&text=Statistics",
      alt: "Analytics",
      title: "Engagement Analytics",
    },
    {
      src: "/placeholder.svg?height=600&width=300&text=Settings",
      alt: "Settings",
      title: "Preferences",
    },
  ]

  return (
    <div className="mt-12 relative">
      <div className="flex overflow-x-auto gap-6 py-8 px-4 snap-x snap-mandatory scrollbar-hide">
        {screenshots.map((screenshot, index) => (
          <Card key={index} className="min-w-[280px] snap-center border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="relative h-[500px] w-[250px]">
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  fill
                  className="object-cover rounded-[24px] border-8 border-foreground/10"
                />
              </div>
              <h3 className="mt-4 font-medium text-lg">{screenshot.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block">
        <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block">
        <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

