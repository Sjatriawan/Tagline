import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container px-6 sm:px-8 md:px-12 lg:px-16 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline flex items-center gap-2">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
          <p>
            At Tagline, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and safeguard your information when you use our mobile application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Personal information (such as name and email address) that you voluntarily provide when using our app
            </li>
            <li>Usage data and analytics to improve our services</li>
            <li>Device information including device type, operating system, and unique device identifiers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about updates, security alerts, and support</li>
            <li>Understand how users interact with our app to enhance user experience</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
          <p>
            Our app may use third-party services that collect information. These third parties have their own privacy
            policies addressing how they use such information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Children's Privacy</h2>
          <p>
            Our app is not intended for children under 13 years of age. We do not knowingly collect personal information
            from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

