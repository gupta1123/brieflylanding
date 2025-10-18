import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Building2, Calendar } from "lucide-react";

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
        <div className="grid gap-6 md:grid-cols-2 mb-16">
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

            <div className="mt-8 space-y-4 text-neutral-600">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>team@briefly-docs.com</span>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
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
