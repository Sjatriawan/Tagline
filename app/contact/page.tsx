"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { sendContactEmail } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success?: boolean
    message?: string
    errors?: any[]
  } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormResponse(null)

    const formData = new FormData(event.currentTarget)
    const response = await sendContactEmail(formData)

    setFormResponse(response)
    setIsSubmitting(false)

    if (response.success) {
      // Reset form on success
      ;(event.target as HTMLFormElement).reset()
    }
  }

  return (
    <div className="container px-6 sm:px-8 md:px-12 lg:px-16 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center gap-2">
          &larr; Back to Home
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-6">
            Have questions about Tagline? We'd love to hear from you. Fill out the form and we'll get back to you as
            soon as possible.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:mysatriawan21@gmail.com" className="text-primary hover:underline">
                mysatriawan21@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-medium">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          {formResponse && (
            <Alert
              className={`mb-6 ${formResponse.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}
            >
              {formResponse.success ? (
                <CheckCircle2 className="h-4 w-4 mr-2" />
              ) : (
                <AlertCircle className="h-4 w-4 mr-2" />
              )}
              <AlertDescription>{formResponse.message}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your email address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

