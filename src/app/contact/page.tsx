import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, Building2, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900 antialiased">
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-neutral-900" />
            <span className="font-semibold tracking-tight">Briefly Docs</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions about Briefly Docs? We're here to help. Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Mail className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 mb-4">
                For general inquiries and support
              </p>
              <a 
                href="mailto:team@briefly-docs.com" 
                className="text-neutral-900 font-medium hover:underline"
              >
                team@briefly-docs.com
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Phone className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 mb-4">
                Monday - Friday, 9 AM - 6 PM IST
              </p>
              <a 
                href="tel:+919765723830" 
                className="text-neutral-900 font-medium hover:underline"
              >
                +91 97657 23830
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Calendar className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>Book a Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 mb-4">
                Schedule a personalized demo
              </p>
              <a 
                href="https://calendly.com/solutionnyx/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 font-medium hover:underline"
              >
                Schedule Now →
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Company Information */}
        <section className="mb-16">
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="h-8 w-8 text-neutral-900 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Nyx Solutions</h2>
                <p className="text-neutral-600">
                  We build enterprise-grade document intelligence solutions for regulated industries.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:team@briefly-docs.com" className="hover:text-neutral-900">
                      team@briefly-docs.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+919765723830" className="hover:text-neutral-900">
                      +91 97657 23830
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Business Hours</h3>
                <div className="space-y-1 text-neutral-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-sm mt-2">Email support available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">What's the typical response time?</h3>
              <p className="text-neutral-600">
                We aim to respond to all inquiries within 1 business day. Sales and demo requests are typically handled within a few hours during business hours. Enterprise customers have access to priority support channels.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">Do you offer product demos?</h3>
              <p className="text-neutral-600">
                Yes! We offer personalized 30-minute product demos tailored to your use case. You can schedule a demo directly through our Calendly link or contact us to arrange a custom session.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">Can I request a security review?</h3>
              <p className="text-neutral-600">
                Absolutely. We're happy to provide security documentation, complete security questionnaires, and schedule dedicated security review calls. Our team can also assist with compliance requirements like DPAs and BAAs.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">Do you support international customers?</h3>
              <p className="text-neutral-600">
                Yes, we work with customers globally. While our primary office hours are IST, we accommodate different time zones for demos and support. We also offer data residency options in multiple regions.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">How do I become a partner?</h3>
              <p className="text-neutral-600">
                We're always interested in strategic partnerships. Email us at team@briefly-docs.com with "Partnership Inquiry" in the subject line, and our business development team will reach out to discuss opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 border-t">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            See how Briefly Docs can transform your document workflows. Schedule a demo or reach out to learn more.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild className="rounded-xl" size="lg">
              <a href="https://calendly.com/solutionnyx/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl" size="lg">
              <a href="mailto:team@briefly-docs.com">Send Us an Email</a>
            </Button>
          </div>
        </section>
      </div>

      <footer className="border-t py-8">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Briefly Docs • Nyx Solutions</p>
        </div>
      </footer>
    </main>
  );
}

