import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container px-6 sm:px-8 md:px-12 lg:px-16 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center gap-2">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Tagline application ("App"), you agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
          <p>
            Tagline is an iOS application that uses AI to generate social media captions. The App provides users with
            caption suggestions for various social media platforms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
          <p>
            Some features of the App may require you to create an account. You are responsible for maintaining the
            confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. User Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the App. By submitting
            content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute
            your content in connection with the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Prohibited Uses</h2>
          <p>You agree not to use the App to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Generate content that is harmful, threatening, abusive, or otherwise objectionable</li>
            <li>Attempt to interfere with or disrupt the App or its servers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Subscription and Billing</h2>
          <p>
            The App offers both free and premium features. Premium features require a subscription. Subscriptions
            automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Modifications to the Service</h2>
          <p>
            We reserve the right to modify or discontinue the App at any time without notice. We shall not be liable to
            you or any third party for any modification, suspension, or discontinuance of the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Disclaimer of Warranties</h2>
          <p>
            The App is provided "as is" without warranties of any kind, either express or implied. We do not warrant
            that the App will be error-free or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:mysatriawan21@gmail.com" className="text-primary hover:underline">
              mysatriawan21@gmail.com
            </a>
          </p>
        </section>

        <div className="pt-4 border-t">
          <p className="text-sm">Last Updated: March 19, 2024</p>
        </div>
      </div>
    </div>
  )
}

