import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-neutral mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              At Briefly Docs (operated by Nyx Solutions), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our document intelligence platform.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              By using Briefly Docs, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring that your privacy is protected and that we comply with all applicable data protection regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Personal Information</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              When you register for Briefly Docs or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Account credentials and authentication information</li>
              <li>Billing and payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Document Data</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              When you use our service, we process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Documents you upload to our platform</li>
              <li>Metadata associated with your documents</li>
              <li>Questions and queries you submit</li>
              <li>Usage patterns and interaction data</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Log data and analytics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our document intelligence services</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical support</li>
              <li><strong>Account Management:</strong> To manage your account and process payments</li>
              <li><strong>Platform Improvements:</strong> To analyze usage patterns and improve our platform</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and industry regulations</li>
              <li><strong>Communications:</strong> To send you service updates, security alerts, and administrative messages</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Used for Model Training</h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-900 font-medium mb-2">
                ✓ Your data is NEVER used for model training
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We do not use customer documents, queries, or any proprietary information to train our AI models. Your data remains private and is used solely to provide services to you.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms (SSO, MFA)</li>
              <li>Industry-standard security practices and controls</li>
              <li>Data segregation and tenant isolation</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              For enterprise customers, we offer VPC, on-premises, and air-gapped deployment options for enhanced security and compliance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
              <li><strong>Closed Accounts:</strong> Data is deleted within 90 days of account closure, unless required by law</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal, tax, or regulatory requirements</li>
              <li><strong>Backup Systems:</strong> Data in backup systems is deleted according to our backup retention schedule (maximum 30 days)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our platform (cloud hosting, payment processing)</li>
              <li><strong>Legal Compliance:</strong> When required by law or to respond to legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restrict Processing:</strong> Request limitation of how we use your data</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:team@briefly-docs.com" className="text-neutral-900 underline">team@briefly-docs.com</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p className="text-neutral-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Maintain your session and preferences</li>
              <li>Analyze platform usage and performance</li>
              <li>Improve user experience</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-neutral-700 leading-relaxed">
              Briefly Docs is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete that information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-neutral-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-2">
              <p className="text-neutral-900"><strong>Nyx Solutions</strong></p>
              <p className="text-neutral-700">Email: <a href="mailto:team@briefly-docs.com" className="underline">team@briefly-docs.com</a></p>
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
