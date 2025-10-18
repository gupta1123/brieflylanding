import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Lock, Server, Eye, FileCheck, Users, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
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
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="rounded-full">Security</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Security & Compliance</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Enterprise-grade security built for regulated industries. Your data stays private, secure, and compliant.
          </p>
        </div>

        {/* Key Security Principles */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Lock className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>End-to-End Encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                TLS 1.3 in transit, AES-256 at rest. Your documents are encrypted at every stage.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Eye className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>Zero Model Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                Your data is never used to train AI models. Complete data isolation guaranteed.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <Server className="h-8 w-8 text-neutral-900 mb-2" />
              <CardTitle>Flexible Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                SaaS, VPC, on-premises, or air-gapped deployment to meet your security requirements.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Security Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Security Standards & Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Enterprise-Grade Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Industry-standard security controls covering data encryption, access management, and regular security audits.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  GDPR Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Full compliance with EU General Data Protection Regulation, including data subject rights and processing agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Data Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Your data is never used for model training. Complete data isolation and secure processing for all customers.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Regular Security Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Continuous security monitoring, vulnerability assessments, and penetration testing to maintain high security standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Infrastructure Security</h2>
          <div className="space-y-6">
            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Data Encryption
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">In Transit</p>
                    <p className="text-sm text-neutral-600">TLS 1.3 encryption for all data transmission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">At Rest</p>
                    <p className="text-sm text-neutral-600">AES-256 encryption for stored documents and databases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Backups</p>
                    <p className="text-sm text-neutral-600">Encrypted, geographically distributed backups with 30-day retention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Deployment Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Cloud (SaaS)</p>
                    <p className="text-sm text-neutral-600">Multi-tenant, fully managed service with enterprise-grade security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">VPC (Single Tenant)</p>
                    <p className="text-sm text-neutral-600">Dedicated infrastructure in your own Virtual Private Cloud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">On-Premises</p>
                    <p className="text-sm text-neutral-600">Deploy within your own data centers for maximum control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Air-Gapped</p>
                    <p className="text-sm text-neutral-600">Fully isolated environment for the highest security requirements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Access Control */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Access Control & Authentication</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Identity Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>SSO integration (SAML, OAuth, OIDC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Multi-factor authentication (MFA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Directory sync (SCIM, LDAP, Active Directory)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Session management and automatic timeout</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Role-Based Access Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Granular permissions and role management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Document-level access controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Team and project-based permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Audit logs for all access and changes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security Operations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Security Operations</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <FileCheck className="h-6 w-6 text-neutral-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Regular Security Audits</h3>
                <p className="text-sm text-neutral-600">
                  Annual third-party penetration testing and vulnerability assessments. Continuous internal security reviews.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <AlertTriangle className="h-6 w-6 text-neutral-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Incident Response</h3>
                <p className="text-sm text-neutral-600">
                  24/7 security monitoring with documented incident response procedures. Immediate notification of security events.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <Eye className="h-6 w-6 text-neutral-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Audit Logging</h3>
                <p className="text-sm text-neutral-600">
                  Comprehensive audit trails for all user actions, document access, and system events. Tamper-proof log storage with 1-year retention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <Shield className="h-6 w-6 text-neutral-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Vulnerability Management</h3>
                <p className="text-sm text-neutral-600">
                  Automated security scanning, dependency monitoring, and prompt patching. Security-first development lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Privacy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Data Privacy</h2>
          <Card className="rounded-2xl border-neutral-200">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Zero Model Training</p>
                    <p className="text-sm text-neutral-600">
                      Your documents and data are never used to train or improve AI models. Complete data isolation between customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Data Residency</p>
                    <p className="text-sm text-neutral-600">
                      Choose where your data is stored. Options for India, EU, US, or other regions to meet compliance requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Data Deletion</p>
                    <p className="text-sm text-neutral-600">
                      Complete data deletion within 30 days of account closure. Permanent and irreversible removal from all systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Data Processing Agreement</p>
                    <p className="text-sm text-neutral-600">
                      Standard DPAs available for all customers. Custom agreements for enterprise requirements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enterprise Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Enterprise Security Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Available Now</h3>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>IP whitelisting and network restrictions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Custom retention policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Advanced threat protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>DLP (Data Loss Prevention) integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Custom SLAs with uptime guarantees</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Compliance Support</h3>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Security questionnaire assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Compliance documentation and reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>BAA and DPA execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Security training for your team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Dedicated security advisor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 border-t">
          <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            We’re happy to answer your security questions and provide additional documentation.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild className="rounded-xl" size="lg">
              <a href="https://calendly.com/solutionnyx/30min" target="_blank" rel="noopener noreferrer">
                Schedule Security Review
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl" size="lg">
              <a href="mailto:team@briefly-docs.com">Contact Us</a>
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
