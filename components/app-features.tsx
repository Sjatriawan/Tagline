import { Bell, Calendar, Clock, Cloud, Lock, MessageSquare, Settings, Smartphone, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AppFeatures() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI-Powered Captions",
      description: "Generate engaging captions for any social media platform with our advanced AI.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Pepek",
      description: "Get caption suggestions in seconds, no more staring at a blank text field.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable Style",
      description: "Choose from professional, casual, funny, or inspirational tones to match your brand.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Support All Languages",
      description: "Available for all languages ​​and easy to understand",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Characteristics",
      description: "Captions according to social media characteristics",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saver",
      description: "Save hours each week on content creation with our efficient caption generator.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => (
        <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full text-primary">{feature.icon}</div>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

