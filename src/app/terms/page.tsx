import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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

      <div className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-neutral mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Nyx Solutions ("Company," "we," "us," or "our") concerning your access to and use of the Briefly Docs platform and related services (collectively, the "Service").
            </p>
            <p className="text-neutral-700 leading-relaxed">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Briefly Docs is a document intelligence platform that provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>AI-powered document analysis and Q&A capabilities</li>
              <li>Citation-backed answers with source traceability</li>
              <li>OCR processing for scanned documents</li>
              <li>Version tracking and document comparison</li>
              <li>Document extraction and summarization</li>
              <li>Multilingual support for document processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Account Creation</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              To use the Service, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Be at least 18 years of age</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Account Responsibilities</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>All activities that occur under your account</li>
              <li>Maintaining the confidentiality of your password</li>
              <li>Ensuring your use complies with these Terms</li>
              <li>Notifying us of any security breaches</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Permitted Use</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You may use the Service for lawful business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Document analysis and information retrieval</li>
              <li>Compliance and regulatory research</li>
              <li>Contract and legal document review</li>
              <li>Internal knowledge management</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Prohibited Use</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Reverse engineer or decompile the Service</li>
              <li>Use the Service to process illegal or harmful content</li>
              <li>Resell or redistribute the Service without authorization</li>
              <li>Interfere with or disrupt the Service's operation</li>
              <li>Violate the privacy or rights of other users</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Content and Data Ownership</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Your Content</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You retain all ownership rights to the documents, data, and content you upload to the Service ("Your Content"). By uploading Your Content, you grant us a limited license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Process and analyze Your Content to provide the Service</li>
              <li>Store Your Content securely on our servers</li>
              <li>Create derivative works (summaries, extractions) as part of the Service</li>
            </ul>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mt-4">
              <p className="text-neutral-900 font-medium mb-2">
                Important: Your data is NEVER used to train AI models
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We do not use customer documents or proprietary information to improve our models or services for other customers.
              </p>
            </div>

            <h3 className="text-xl font-medium mb-3 mt-6">Our Service</h3>
            <p className="text-neutral-700 leading-relaxed">
              The Service, including its software, algorithms, design, and underlying technology, is owned by Nyx Solutions and protected by intellectual property laws. These Terms do not grant you any ownership rights in the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Subscription and Payment</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Subscription Plans</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We offer various subscription tiers with different storage limits, user seats, and features. Pricing and plan details are available on our website or by contacting our sales team.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Subscriptions are billed monthly or annually in advance</li>
              <li>All fees are in Indian Rupees (INR) unless otherwise specified</li>
              <li>Payment is due upon invoice receipt</li>
              <li>Late payments may result in service suspension</li>
              <li>All fees are non-refundable except as required by law</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Price Changes</h3>
            <p className="text-neutral-700 leading-relaxed">
              We reserve the right to change our prices with 30 days' notice. Price changes will not affect your current subscription term but will apply upon renewal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Service Level and Availability</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We strive to provide reliable service with minimal downtime:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Target Uptime:</strong> 99.9% availability (excluding scheduled maintenance)</li>
              <li><strong>Maintenance:</strong> Scheduled maintenance will be announced in advance</li>
              <li><strong>Support:</strong> Support response times vary by subscription tier</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              Enterprise customers may be eligible for custom Service Level Agreements (SLAs) with guaranteed uptime and support commitments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security and Privacy</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls with SSO and multi-factor authentication</li>
              <li>Industry-standard security practices and controls</li>
              <li>Optional VPC, on-premises, or air-gapped deployment</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              For details on how we collect and use your data, please see our <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">By You</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You may cancel your subscription at any time through your account settings or by contacting us. Cancellation will be effective at the end of your current billing period. No refunds will be provided for partial periods.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">By Us</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We may suspend or terminate your access to the Service if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>You violate these Terms</li>
              <li>Your account has unpaid fees</li>
              <li>Your use poses a security risk</li>
              <li>We are required to do so by law</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Effect of Termination</h3>
            <p className="text-neutral-700 leading-relaxed">
              Upon termination, your right to access the Service will cease immediately. We will retain Your Content for 30 days after termination, during which you may request a data export. After this period, Your Content will be permanently deleted.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Warranties of merchantability, fitness for a particular purpose</li>
              <li>Warranties of accuracy, completeness, or reliability of results</li>
              <li>Warranties that the Service will be uninterrupted or error-free</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              While we strive for accuracy, AI-generated answers may contain errors. You should verify important information independently.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NYX SOLUTIONS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Service interruptions or data loss</li>
              <li>Third-party conduct or content</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-neutral-700 leading-relaxed">
              You agree to indemnify and hold harmless Nyx Solutions, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-4">
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or third-party rights</li>
              <li>Your Content or use of the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Governing Law</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">Arbitration</h3>
            <p className="text-neutral-700 leading-relaxed">
              Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English and take place in India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-neutral-700 leading-relaxed">
              We may modify these Terms at any time. We will notify you of material changes by email or through the Service at least 30 days before the changes take effect. Continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">General Provisions</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right does not waive that right</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
              <li><strong>Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our control</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-2">
              <p className="text-neutral-900"><strong>Nyx Solutions</strong></p>
              <p className="text-neutral-700">Email: <a href="mailto:team@briefly-docs.com" className="underline">team@briefly-docs.com</a></p>
              <p className="text-neutral-700">Phone: <a href="tel:+919765723830" className="underline">+91 97657 23830</a></p>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t py-8">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Briefly Docs • Nyx Solutions</p>
        </div>
      </footer>
    </main>
  );
}

