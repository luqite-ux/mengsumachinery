"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitInquiry } from "@/lib/submit-inquiry"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Shanghai, China",
  },
  {
    icon: Globe,
    label: "Website",
    value: "msrobot-sh.com",
    href: "http://msrobot-sh.com/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mengsumachinery.com",
    href: "mailto:info@mengsumachinery.com",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const result = await submitInquiry({
      name: formState.name,
      email: formState.email,
      company: formState.company,
      message: formState.message,
      subject: "Homepage contact form",
    })

    setIsSubmitting(false)
    if (!result.ok) {
      setErrorMessage(result.error ?? "Submission failed, please try again.")
      return
    }
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            {"Let's Discuss Your Project"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to automate your production line? Get in touch with our team 
            for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center text-center py-12">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your inquiry. Our team will contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                    {errorMessage}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Ltd."
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your automation needs, production requirements, and timeline..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Shanghai Mengsu Automation Machinery Co., Ltd
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With our modern 3000㎡ facility and 4 production lines, we are ready to 
                meet your automation needs. Contact us today to discuss how we can help 
                optimize your production processes.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">8:00 AM - 6:00 PM (CST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">9:00 AM - 12:00 PM (CST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
