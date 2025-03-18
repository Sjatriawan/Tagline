"use server"

import { z } from "zod"

// Define a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    const validatedData = contactFormSchema.parse({
      name,
      email,
      message,
    })

    // In a real application, you would use a service like Nodemailer, SendGrid, or Resend
    // to send the email. For this example, we'll simulate a successful email send.

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the email data (in a real app, you would send the email here)
    console.log("Email would be sent to: mysatriawan21@gmail.com")
    console.log("From:", validatedData.name, "(", validatedData.email, ")")
    console.log("Message:", validatedData.message)

    return {
      success: true,
      message: "Your message has been sent. We'll get back to you soon!",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your input and try again.",
        errors: error.errors,
      }
    }

    // Return generic error
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

