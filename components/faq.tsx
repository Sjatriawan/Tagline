import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Is the app free to download?",
      answer:
        "Yes, Tagline is free to download with basic features. Premium features are available through in-app purchases or subscription.",
    },
    {
      question: "How many captions can I generate with the free version?",
      answer:
        "The free version allows you to generate up to 20 captions per day. Premium subscribers get unlimited caption generation.",
    },
    {
      question: "Can I customize the captions for different social platforms?",
      answer:
        "Absolutely! Tagline lets you specify which platform you're creating content for, and adjusts the caption style accordingly.",
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, Tagline works offline for basic features. AI-powered generation requires an internet connection.",
    },
    {
      question: "How do I get support if I have an issue?",
      answer:
        "You can reach our support team through the app by going to Settings > Help & Support, or by emailing support@taglineapp.com.",
    },
    {
      question: "Are there any limits to the free version?",
      answer:
        "The free version includes essential features with some usage limits. Premium subscriptions remove these limits and add advanced features like analytics and bulk generation.",
    },
    {
      question: "How often do you release updates?",
      answer:
        "We typically release updates every 2-4 weeks with new caption styles and performance improvements. Major feature updates are released quarterly.",
    },
    {
      question: "Can I request new caption styles or features?",
      answer:
        "We love hearing from our users. You can suggest features through the app in Settings > Feedback or by joining our beta testing program.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

