import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-primary-foreground/80">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the website of Shanghai Mengsu Automation Machinery Co., Ltd. (&ldquo;MEROBOT&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Collect or harvest any information from the website without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of MEROBOT or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We make every effort to display accurate product information on our website. However, specifications, prices, and availability are subject to change without notice. Product images are for illustration purposes and may differ from actual products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Business Transactions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any business transactions, including purchase orders, custom manufacturing agreements, and service contracts, are subject to separate written agreements between MEROBOT and the customer. Terms discussed on this website are for informational purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              MEROBOT shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website. Our total liability for any claims arising under these terms shall not exceed the amount paid by you, if any, for accessing the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Shanghai, China.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">Shanghai Mengsu Automation Machinery Co., Ltd.</p>
              <p className="text-muted-foreground">Email: info@mengsumachinery.com</p>
              <p className="text-muted-foreground">Website: msrobot-sh.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
