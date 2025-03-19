import Link from "next/link"
import Image from "next/image"
import { Check, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import AppFeatures from "@/components/app-features"
import AppScreenshots from "@/components/app-screenshots"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Floating blue circle effect */}
      <div className="fixed -top-64 -left-64 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] animate-float" />
      
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Tagline Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Tagline - AI Captions Generator</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Features
            </Link>
            <Link href="#screenshots" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Screenshots
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-blue-500 transition-colors">
              FAQ
            </Link>
          </nav>
          <div>
            <Button asChild variant="ghost" className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20">
              <Link href="#download" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Tagline
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Social media captions generator with AI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20">
                    <Link href="#download" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>Download Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[600px] w-[300px] mx-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=300&text=App+Screenshot"
                    alt="App Screenshot"
                    fill
                    className="object-cover rounded-[32px] border-8 border-white/10 shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-500/10 border border-blue-500/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur">
                  New Version!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  This application is equipped with simple but very powerful features.
                </p>
              </div>
            </div>
            <AppFeatures />
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="py-20">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Screenshots</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a peek at the beautiful interface and intuitive design.
                </p>
              </div>
            </div>
            <AppScreenshots />
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 relative overflow-hidden">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Download Now
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Get started today and transform the way you organize your life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <div className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 p-4 rounded-lg transition-colors">
                      <Image
                        src="/placeholder.svg?height=60&width=200&text=App+Store"
                        alt="Download on App Store"
                        width={200}
                        height={60}
                        className="h-[60px] w-auto"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-2 pt-4 text-gray-400">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Free download, premium features available</span>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[500px] w-[250px] mx-auto">
                  <Image
                    src="/placeholder.svg?height=500&width=250&text=App+Preview"
                    alt="App Preview"
                    fill
                    className="object-cover rounded-[24px] border-8 border-white/10 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-muted/50">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our app.
                </p>
              </div>
            </div>
            <FAQ />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 md:py-0">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2024 Tagline. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

