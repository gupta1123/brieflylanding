"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Check,
  FileText,
  Search,
  ShieldCheck,
  GitCompare,
  Languages,
  Network,
  ScrollText,
  Quote,
  Building2,
  Factory,
  Gavel,
  Banknote,
  Server,
  Lock,
  ArrowRight,
  Sparkles,
  Boxes,
  Workflow,
  Copy,
  Link as LinkIcon,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// NOTE: Single-file page for Next.js + shadcn. Drop in as app/(marketing)/page.tsx

export default function BrieflyLanding() {
  return (
    <main className="bg-white text-neutral-900 antialiased">
      <NavBar />
      <Hero />
      <SectionDivider />
      <ProblemOutcome />
      <BentoCapabilities />
      <UseCases />
      <HowItWorks />
      <Security />
      <Proof />
      <FAQ />
      <FinalCTA />
      <ClientsSection />
      <Footer />
    </main>
  );
}

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>;
}

function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-neutral-900" />
          <span className="font-semibold tracking-tight">Briefly Docs</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          <a className="hover:text-neutral-900" href="#product">Product</a>
          <a className="hover:text-neutral-900" href="#solutions">Use Cases</a>
          <a className="hover:text-neutral-900" href="#how-it-works">How it Works</a>
          <a className="hover:text-neutral-900" href="/security">Security</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild className="rounded-xl">
            <a href="https://calendly.com/team-briefly-docs/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button size="icon" variant="ghost" aria-label="Open menu" className="rounded-xl">
            <Boxes className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" className="relative">
          <motion.h1 variants={item} className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Ask your documents. <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">Get cited answers.</span> Instantly.
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg text-neutral-600">
            Briefly Docs turns scattered PDFs and scans into <span className="font-medium text-neutral-900">version-aware, citation-backed answers</span> your teams can trust.
            Built for regulated, document-heavy organizations.
          </motion.p>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-xl">
              <a href="https://calendly.com/team-briefly-docs/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <a href="mailto:team@briefly-docs.com">Contact Us</a>
            </Button>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <ShieldCheck className="h-4 w-4" />
              <span>No data used for model training</span>
            </div>
          </motion.div>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
            <Badge variant="secondary" className="rounded-full">On‑Prem Ready</Badge>
            <Badge variant="secondary" className="rounded-full">SSO / RBAC</Badge>
            <Badge variant="secondary" className="rounded-full">Audit Evidence</Badge>
          </motion.div>

          {/* Floating sparkles */}
          <motion.div aria-hidden className="pointer-events-none absolute -top-6 -left-6 hidden md:block" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Sparkles className="h-6 w-6 text-neutral-300" />
          </motion.div>
          <motion.div aria-hidden className="pointer-events-none absolute -bottom-8 left-24 hidden md:block" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkles className="h-5 w-5 text-neutral-300" />
          </motion.div>
        </motion.div>

        {/* Improved Hero Visual — Chat-like streaming with citations & evidence panel */}
        <motion.div className="relative" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] as any, delay: 0.2 }}>
          <HeroChatVisual />
        </motion.div>
      </Container>
    </section>
  );
}

function ClientsSection() {
  const clients = [
    { name: "Gajkesari", logo: "/Gajkesari.jpeg" },
    { name: "Kalika", logo: "/Kalika.jpeg" },
    { name: "MEPL", logo: "/MEPL.png" },
    { name: "Polaad", logo: "/polaad.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From Fortune 500 companies to growing enterprises, organizations worldwide rely on Briefly Docs 
            to transform their document workflows and unlock the power of their knowledge.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-neutral-500">
            And many more organizations across healthcare, finance, legal, and manufacturing sectors
          </p>
        </div>
      </Container>
    </section>
  );
}

function SectionDivider() {
  return <div className="mx-auto my-2 h-px w-full max-w-6xl bg-neutral-200" />;
}

function SectionHeading({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      {overline && <div className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">{overline}</div>}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-neutral-600">{subtitle}</p>}
    </div>
  );
}

/**
 * HERO CHAT VISUAL
 * A calm, Notion-white chat panel that:
 * 1) shows a user question
 * 2) streams an assistant answer with structure
 * 3) fades-in citation chips and a tappable “Evidence Panel” drawer
 * 4) reveals page-level references
 */
function HeroChatVisual() {
  const question = "What changed in the travel policy regarding hotel caps?";
  const answerBlocks = useMemo(
    () => [
      { t: "**Summary** — Hotel cap updated from ₹3,000 to **₹3,500** per night for Tier‑2 cities.", delay: 0.15 },
      { t: "**Effective From** — 01 Aug 2025 (applicable to on‑site staff & approved vendors).", delay: 0.35 },
      { t: "**Exceptions** — Conference bookings follow event budget; HOD pre‑approval required for override.", delay: 0.55 },
    ],
    []
  );

  const citations = [
    { label: "Travel_Policy_v7.pdf • p.12", href: "#" },
    { label: "Diff vs v6", href: "#" },
    { label: "Evidence panel", href: "#evidence" },
  ];

  const [streamIndex, setStreamIndex] = useState(0);
  const [showCitations, setShowCitations] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);

  // Stream blocks sequentially
  useEffect(() => {
    if (streamIndex < answerBlocks.length) {
      const id = setTimeout(() => setStreamIndex((i) => i + 1), 600);
      return () => clearTimeout(id);
    } else {
      const id2 = setTimeout(() => setShowCitations(true), 400);
      return () => clearTimeout(id2);
    }
  }, [streamIndex, answerBlocks.length]);

  return (
    <Card className="rounded-2xl border-neutral-200 shadow-sm">
      <CardContent className="p-0">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Live • Evidence‑backed
          </div>
          <div className="text-xs text-neutral-500">Workspace: Policies</div>
        </div>

        {/* Chat Area */}
        <div className="space-y-3 p-4">
          {/* User bubble */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl border bg-neutral-50 px-3 py-2 text-sm text-neutral-800 shadow">
              <div className="mb-1 flex items-center gap-2 text-[11px] text-neutral-500"><Search className="h-3.5 w-3.5" /> You</div>
              {`“${question}”`}
            </div>
          </div>

          {/* Assistant bubble */}
          <div className="flex justify-start">
            <div className="relative max-w-[92%] rounded-2xl border px-3 py-2 text-sm shadow">
              <div className="mb-1 flex items-center gap-2 text-[11px] text-neutral-500">
                <ShieldCheck className="h-3.5 w-3.5" />
                Answer • Cited
              </div>

              {/* Streaming blocks */}
              <div className="prose prose-neutral prose-sm max-w-none">
                <AnimatePresence initial={false}>
                  {answerBlocks.slice(0, streamIndex).map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as any }}
                      className="mb-2"
                      dangerouslySetInnerHTML={{ __html: mdToHtml(b.t) }}
                    />
                  ))}
                </AnimatePresence>

                {/* Typing dots while streaming */}
                {streamIndex < answerBlocks.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="mt-2 inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2 py-1 text-[11px] text-neutral-500"
                  >
                    <span className="inline-block animate-bounce">•</span>
                    <span className="inline-block animate-bounce [animation-delay:120ms]">•</span>
                    <span className="inline-block animate-bounce [animation-delay:240ms]">•</span>
                  </motion.div>
                )}
              </div>

              {/* Citations fade-in */}
              <AnimatePresence>
                {showCitations && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 flex flex-wrap items-center gap-2"
                  >
                    {citations.map((c, i) => (
                      <motion.a
                        key={c.label}
                        href={c.href}
                        className="inline-flex items-center gap-1 rounded-full border bg-white px-2.5 py-1 text-[11px] text-neutral-700 hover:bg-neutral-50"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i }}
                        onClick={(e) => {
                          e.preventDefault();
                          setEvidenceOpen(true);
                        }}
                      >
                        <LinkIcon className="h-3 w-3" /> {c.label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Evidence drawer */}
              <AnimatePresence>
                {evidenceOpen && (
                  <motion.div
                    id="evidence"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-3 overflow-hidden rounded-xl border bg-neutral-50"
                  >
                    <div className="flex items-center justify-between border-b px-3 py-2 text-[12px] text-neutral-600">
                      <div className="flex items-center gap-2">
                        <ScrollText className="h-3.5 w-3.5" /> Evidence Panel
                      </div>
                      <button
                        className="inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-neutral-100"
                        onClick={() => setEvidenceOpen(false)}
                      >
                        Hide <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="grid gap-2 p-3 text-[12px] text-neutral-700">
                      <div className="rounded-lg border bg-white p-2">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="font-medium">Travel_Policy_v7.pdf</div>
                          <Badge variant="outline" className="rounded-full text-[10px]">p.12</Badge>
                        </div>
                        <p className="text-neutral-600">“Hotel cap revised to ₹3,500 for Tier‑2 cities effective 01 Aug 2025.”</p>
                      </div>
                      <div className="rounded-lg border bg-white p-2">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="font-medium">Diff vs v6</div>
                          <Badge variant="outline" className="rounded-full text-[10px]">Δ</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="rounded bg-red-50 px-1.5 py-0.5 text-red-700 line-through">₹3,000</span>
                          <ArrowRight className="h-3 w-3 text-neutral-400" />
                          <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">₹3,500</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Input bar mock */}
          <div className="mt-2 flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm">
            <Search className="h-4 w-4 text-neutral-500" />
            <span className="text-neutral-500">Ask a question about your policies…</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// --- UTIL: tiny markdown -> HTML (bold + dashes only for visual richness, no external deps) ---
function mdToHtml(s: string) {
  return s
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/—/g, '&mdash;');
}

function ProblemOutcome() {
  return (
    <section id="product" className="py-14 md:py-20">
      <Container>
        <SectionHeading
          overline="Why Briefly Docs"
          title="From PDF chaos to provable answers"
          subtitle="Slow search, version confusion, and risky guesses give way to instant, cited, audit‑ready answers."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <CardTitle className="text-lg">The problem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-neutral-700">
              <ListItem text="Endless PDFs and scans slow everyone down." />
              <ListItem text="Versions change; answers don’t—risk creeps in." />
              <ListItem text="AI guesses sound confident… and fail audits." />
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-neutral-200">
            <CardHeader>
              <CardTitle className="text-lg">The outcome with Briefly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-neutral-700">
              <ListItem text="Instant answers across policies, tenders, contracts, SOPs." />
              <ListItem text="Every answer cited with page‑level evidence." />
              <ListItem text="Version‑aware so you always act on the latest change." />
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-full bg-neutral-900 p-1"><Check className="h-3 w-3 text-white" /></div>
      <p>{text}</p>
    </div>
  );
}

// --- Lightweight animated SVG visuals for bento tiles ---
function VisualDocQA() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="10" y="10" width="60" height="60" rx="6" className="fill-white"/>
      <rect x="10" y="10" width="60" height="60" rx="6" className="stroke-neutral-200" fill="none"/>
      <motion.rect x="16" y="18" width="48" height="8" rx="4" className="fill-neutral-200" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}/>
      <rect x="16" y="32" width="38" height="6" rx="3" className="fill-neutral-100"/>
      <rect x="16" y="44" width="28" height="6" rx="3" className="fill-neutral-100"/>
      <circle cx="90" cy="40" r="16" className="fill-white stroke-neutral-200"/>
      <motion.circle cx="90" cy="40" r="7" className="fill-neutral-300" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity }}/>
      <motion.line x1="98" y1="48" x2="108" y2="58" className="stroke-neutral-300" strokeWidth="3" animate={{ x2: [108, 112, 108], y2: [58, 62, 58] }} transition={{ duration: 2, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualDiff() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="10" y="12" width="40" height="56" rx="6" className="fill-white stroke-neutral-200"/>
      <rect x="70" y="12" width="40" height="56" rx="6" className="fill-white stroke-neutral-200"/>
      <motion.line x1="35" y1="40" x2="85" y2="40" className="stroke-neutral-300" strokeWidth="2" strokeDasharray="6 6" animate={{ pathLength: [0.1, 1, 0.1] }} transition={{ duration: 3, repeat: Infinity }}/>
      <motion.circle cx="60" cy="40" r="5" className="fill-neutral-300" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualOCR() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="18" y="20" width="84" height="40" rx="6" className="fill-white stroke-neutral-200"/>
      <motion.rect x="24" y="26" width="40" height="6" rx="3" className="fill-neutral-200" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }}/>
      <motion.rect x="24" y="36" width="56" height="6" rx="3" className="fill-neutral-100" animate={{ x: [24, 28, 24] }} transition={{ duration: 2.2, repeat: Infinity }}/>
      <motion.rect x="24" y="46" width="48" height="6" rx="3" className="fill-neutral-100" animate={{ x: [24, 30, 24] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}/>
      <motion.rect x="18" y="20" width="84" height="40" rx="6" className="stroke-neutral-300" fill="none" strokeDasharray="6 6" animate={{ pathOffset: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualGraph() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <motion.circle cx="28" cy="40" r="6" className="fill-neutral-300" animate={{ y: [40, 38, 40] }} transition={{ duration: 3, repeat: Infinity }}/>
      <motion.circle cx="60" cy="28" r="6" className="fill-neutral-300" animate={{ y: [28, 26, 28] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}/>
      <motion.circle cx="92" cy="44" r="6" className="fill-neutral-300" animate={{ y: [44, 42, 44] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}/>
      <line x1="28" y1="40" x2="60" y2="28" className="stroke-neutral-300"/>
      <line x1="60" y1="28" x2="92" y2="44" className="stroke-neutral-300"/>
    </motion.svg>
  );
}
function VisualExtract() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="12" y="18" width="96" height="44" rx="6" className="fill-white stroke-neutral-200"/>
      <rect x="18" y="24" width="36" height="8" rx="4" className="fill-neutral-100"/>
      <rect x="18" y="38" width="56" height="8" rx="4" className="fill-neutral-100"/>
      <motion.rect x="78" y="24" width="24" height="22" rx="4" className="fill-neutral-200" animate={{ y: [24, 20, 24] }} transition={{ duration: 2, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualAudit() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="16" y="16" width="56" height="48" rx="6" className="fill-white stroke-neutral-200"/>
      <motion.rect x="22" y="24" width="44" height="6" rx="3" className="fill-neutral-100" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.6, repeat: Infinity }}/>
      <rect x="22" y="36" width="32" height="6" rx="3" className="fill-neutral-100"/>
      <circle cx="92" cy="44" r="12" className="fill-white stroke-neutral-200"/>
      <motion.path d="M86 44 l4 4 l8 -8" className="stroke-neutral-300" strokeWidth="3" fill="none" strokeLinecap="round" animate={{ pathLength: [0.2, 1, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualLang() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <motion.circle cx="40" cy="40" r="18" className="fill-white stroke-neutral-200"/>
      <motion.line x1="22" y1="40" x2="58" y2="40" className="stroke-neutral-200"/>
      <motion.path d="M40 22 a18 18 0 0 0 0 36" className="stroke-neutral-200" fill="none"/>
      <motion.text x="72" y="44" className="fill-neutral-400" style={{ fontSize: 10 }} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }}>अ/க/क</motion.text>
    </motion.svg>
  );
}
function VisualSecure() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <rect x="18" y="22" width="84" height="36" rx="6" className="fill-white stroke-neutral-200"/>
      <motion.rect x="30" y="30" width="24" height="12" rx="3" className="fill-neutral-100" animate={{ y: [30, 28, 30] }} transition={{ duration: 3, repeat: Infinity }}/>
      <motion.rect x="76" y="30" width="12" height="12" rx="3" className="fill-neutral-300" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}/>
    </motion.svg>
  );
}
function VisualDeploy() {
  return (
    <motion.svg viewBox="0 0 120 80" className="h-24 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <motion.circle cx="28" cy="46" r="10" className="fill-white stroke-neutral-200" animate={{ y: [0, -1, 0] }} transition={{ duration: 4, repeat: Infinity }}/>
      <motion.circle cx="60" cy="34" r="10" className="fill-white stroke-neutral-200" animate={{ y: [0, -2, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}/>
      <motion.circle cx="92" cy="46" r="10" className="fill-white stroke-neutral-200" animate={{ y: [0, -1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}/>
      <line x1="38" y1="46" x2="50" y2="34" className="stroke-neutral-300"/>
      <line x1="70" y1="34" x2="82" y2="46" className="stroke-neutral-300"/>
    </motion.svg>
  );
}

function BentoCapabilities() {
  const tiles = [
    { icon: ScrollText, title: "Evidence‑Backed Q&A", desc: "Ask naturally. Get answers with citations and page snippets.", visual: <VisualDocQA /> },
    { icon: GitCompare, title: "Version & Policy Diff", desc: "See changes across circulars and SOPs instantly.", visual: <VisualDiff /> },
    { icon: FileText, title: "OCR‑First Ingestion", desc: "Scans, stamps, low‑quality PDFs—parsed and indexed.", visual: <VisualOCR /> },
    { icon: Network, title: "Graph‑RAG & Acronyms", desc: "Understands entities, aliases, and domain shortforms.", visual: <VisualGraph /> },
    { icon: Workflow, title: "Structured Extraction", desc: "Pull clauses, KYC fields, line items—export anywhere.", visual: <VisualExtract /> },
    { icon: ShieldCheck, title: "Evidence Panel & Audit Trail", desc: "Verify the path from question to source.", visual: <VisualAudit /> },
    { icon: Languages, title: "Multilingual Support", desc: "Across English + Indian languages used in govt/industry.", visual: <VisualLang /> },
    { icon: Lock, title: "Secure by Design", desc: "SaaS / VPC / On‑Prem / Air‑gapped with SSO & RBAC.", visual: <VisualSecure /> },
    { icon: Server, title: "Deploy Anywhere", desc: "SaaS, VPC, On‑Prem, or Air‑Gapped—your call.", visual: <VisualDeploy /> },
  ];

  const grid = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
  const tile = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any } } };

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading
          overline="Capabilities"
          title="Signature features in a calm bento"
          subtitle="Now with living visuals—clean, lightweight SVG animations that explain at a glance."
        />
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              variants={tile}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group rounded-2xl border border-neutral-200 bg-white shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border bg-neutral-50 p-2"><t.icon className="h-5 w-5 text-neutral-700" /></div>
                  <h3 className="text-base font-medium">{t.title}</h3>
                </div>
                <div className="mt-3">{t.visual}</div>
                <p className="mt-3 text-sm text-neutral-600">{t.desc}</p>
                <Button variant="ghost" className="mt-3 h-8 rounded-lg px-2 text-xs text-neutral-700 hover:text-neutral-900">
                  View example <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function UseCases() {
  const functions = [
    { icon: Gavel, title: "Legal & Compliance", desc: "Clause lookup, policy diffs, regulatory Q&A with citations.", q: "What clause governs vendor termination?", a: "Termination may be invoked under Section 9.3 subject to 30‑day notice.", c: "Master_Contract_v4.pdf • p.22" },
    { icon: Workflow, title: "Operations", desc: "SOP answers, exception handling, safety/QA references.", q: "What’s the PPE requirement for kiln maintenance?", a: "Category‑A PPE incl. FR suit + full respirator is mandatory.", c: "Kiln_SOP_v7.pdf • p.8" },
    { icon: Banknote, title: "Procurement & Finance", desc: "Tender terms, contract comparisons, payment limits, vendor KYC.", q: "What’s the cap for petty cash in Tier‑2?", a: "₹7,500 per expense; monthly limit ₹25,000.", c: "Finance_Policy_2024_v3.pdf • p.11" },
    { icon: Building2, title: "HR & Admin", desc: "Policy clarifications and summaries with sources.", q: "How is on‑site travel reimbursed?", a: "Hotel cap is ₹3,500/night; meal cap ₹800/day in Tier‑2.", c: "Travel_Policy_v7.pdf • p.12" },
    { icon: Server, title: "IT & Support", desc: "Policy routing and standard replies with embedded evidence.", q: "Who can approve VPN exceptions?", a: "Only IT Sec Lead via ticket with HOD co‑approval.", c: "IT_Security_Controls_v2.pdf • p.5" },
  ];

  const industries = [
    { icon: Factory, title: "BFSI & NBFCs", desc: "RBI circulars → compliant actions with cited rules.", q: "What’s the latest KYC risk threshold?", a: "Transfers over ₹50,000 cash trigger enhanced KYC.", c: "RBI_Circular_2025-01-12.pdf • p.3" },
    { icon: Factory, title: "Government & PSUs", desc: "Scanned office orders → searchable, answerable, auditable.", q: "Which format for file notings?", a: "eOffice Note Sheet Form‑B mandated for inter‑dept memos.", c: "eOffice_GUIDE_v9.pdf • p.4" },
    { icon: Factory, title: "Manufacturing / Steel / Cement", desc: "SOPs, safety manuals, QA standards → fast floor answers.", q: "Max moisture tolerance in clinker?", a: "≤ 0.5% by mass during storage.", c: "QA_Manual_v11.pdf • p.18" },
    { icon: Factory, title: "Healthcare", desc: "Protocols, consents, compliance guidelines—diffs and citations.", q: "Antibiotic pre‑op timing?", a: "Administer 30–60 minutes prior to incision.", c: "Surgery_Protocol_v5.pdf • p.6" },
    { icon: Factory, title: "Energy & Utilities", desc: "Technical standards, SLAs, outage SOPs—retrieved reliably.", q: "Feeder outage escalation window?", a: "Escalate to L2 NOC after 15 minutes unresolved.", c: "SLAs_GridOps_v3.pdf • p.9" },
  ];

  return (
    <section id="solutions" className="py-14 md:py-20">
      <Container>
        <SectionHeading
          overline="Use Cases"
          title="Built for functions. Tuned for industries."
          subtitle="Pick your lane—every answer is evidence‑backed and version‑aware."
        />

        {/* Tabs: Functions vs Industries */}
        <Tabs defaultValue="functions" className="w-full">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="bg-neutral-50">
              <TabsTrigger value="functions" className="data-[state=active]:bg-white data-[state=active]:text-neutral-900">By Function</TabsTrigger>
              <TabsTrigger value="industries" className="data-[state=active]:bg-white data-[state=active]:text-neutral-900">By Industry</TabsTrigger>
            </TabsList>
            <div className="text-xs text-neutral-500">Hover a card → preview • Click “Sample” → micro‑demo</div>
          </div>

          <TabsContent value="functions" className="mt-6">
            <AnimatedGrid items={functions} />
          </TabsContent>
          <TabsContent value="industries" className="mt-6">
            <AnimatedGrid items={industries} />
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}

function AnimatedGrid({ items }: { items: any[] }) {
  const grid = { show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
  const card = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22,1,0.36,1] as any } } };
  return (
    <motion.div variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 md:grid-cols-3">
      {items.map((f, i) => (
        <motion.div key={i} variants={card} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="rounded-2xl border border-neutral-200 bg-white">
          <UseCaseCard title={f.title} desc={f.desc} Icon={f.icon} q={f.q} a={f.a} c={f.c} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function UseCaseCard({ title, desc, Icon, q, a, c }: { title: string; desc: string; Icon: any; q: string; a: string; c: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="rounded-2xl border-0">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-lg border bg-neutral-50 p-2"><Icon className="h-4 w-4 text-neutral-700" /></div>
          <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="mt-1 text-xs text-neutral-600">{desc}</div>
          </div>
        </div>
        {/* Animated preview ribbon */}
        <motion.div aria-hidden className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200" animate={{ backgroundPositionX: [0, 120, 0] }} transition={{ duration: 2.4, repeat: Infinity }} style={{ backgroundSize: "200% 100%" }} />

        {/* Micro demo */}
        <div className="mt-3">
          <Button variant="ghost" className="h-7 rounded-lg px-2 text-xs" onClick={() => setOpen((v) => !v)}>
            {open ? "Hide sample" : "See a sample answer →"}
          </Button>
          <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
            <div className="mt-2 rounded-xl border bg-neutral-50 p-3">
              <div className="flex items-center gap-2 text-xs text-neutral-600"><Search className="h-3.5 w-3.5" /> {q}</div>
              <div className="mt-2 text-sm text-neutral-900">{a}</div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="rounded-full text-[10px]">{c}</Badge>
                <Badge variant="outline" className="rounded-full text-[10px]">Evidence panel →</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Ingest", desc: "Drop PDFs and folders. We OCR, index, and map versions.", Icon: Boxes },
    { title: "Ask", desc: "Use natural language. Get answers with inline citations.", Icon: Search },
    { title: "Audit", desc: "Open the Evidence Panel to verify pages, diffs, and source context.", Icon: ShieldCheck },
  ];
  return (
    <section id="how-it-works" className="py-14 md:py-20">
      <Container>
        <SectionHeading overline="How it works" title="From ingestion to audit—simple and strong" />
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Card key={i} className="rounded-2xl border-neutral-200">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border bg-neutral-50 p-2"><s.Icon className="h-5 w-5 text-neutral-700" /></div>
                  <div className="text-base font-medium">{s.title}</div>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="rounded-xl">Explore the Evidence Panel</Button>
        </div>
      </Container>
    </section>
  );
}

function Security() {
  const items = [
    { title: "Deployment Options", desc: "SaaS, VPC, On‑Prem, Air‑Gapped.", Icon: Server },
    { title: "Access Controls", desc: "SSO (Okta/AD), RBAC, least‑privilege.", Icon: Lock },
    { title: "Data Controls", desc: "Redaction, regional residency, private networking.", Icon: ShieldCheck },
    { title: "Auditability", desc: "Full logs and evidence chain for every answer.", Icon: ScrollText },
  ];
  return (
    <section id="security" className="py-14 md:py-20">
      <Container>
        <SectionHeading overline="Security & Deployment" title="Your data, your rules" subtitle="Engineered for regulated environments with strict privacy and audit needs." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((s, i) => (
            <Card key={i} className="rounded-2xl border-neutral-200">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border bg-neutral-50 p-2"><s.Icon className="h-5 w-5 text-neutral-700" /></div>
                  <div className="text-base font-medium">{s.title}</div>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="rounded-xl">Review Security Overview</Button>
        </div>
      </Container>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading overline="Proof" title="What changes when Briefly ships" />
        <div className="grid items-stretch gap-4 md:grid-cols-2">
          <Card className="rounded-2xl border-neutral-200">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Metric kpi="90%" label="↓ time to first answer" />
                <Metric kpi="3×" label="↑ policy adoption with diffs" />
                <Metric kpi="100%" label="answers with evidence" />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-xl border bg-neutral-50 p-2"><Quote className="h-5 w-5 text-neutral-700" /></div>
                <div>
                  <p className="text-neutral-800">
                    “Briefly Docs reduced policy lookup time from <span className="font-semibold">15 minutes to 30 seconds</span> with
                    <span className="font-semibold"> fully cited answers</span> our auditors accept.”
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">Head of Compliance, Leading NBFC</p>
                </div>
              </div>
              <Button variant="ghost" className="mt-4 rounded-xl px-3">Read the Story →</Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Metric({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-3xl font-semibold">{kpi}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}


function FAQ() {
  const faqs = [
    { q: "How accurate are answers?", a: "Every answer links to sources; you can verify the exact page/snippet in the Evidence Panel." },
    { q: "Can it handle scanned PDFs?", a: "Yes—OCR‑first pipeline supports low‑quality scans, stamps, and handwriting variations." },
    { q: "Will it learn our acronyms?", a: "Yes—Graph‑RAG maps entities, aliases, and domain shortforms over time." },
    { q: "Can we deploy on‑prem?", a: "Yes. VPC, On‑Prem, and Air‑Gapped are supported for strict environments." },
    { q: "Which languages are supported?", a: "English plus common Indian languages used in government and industry documents." },
    { q: "How do we migrate content?", a: "Drag‑and‑drop, folder sync, or API ingestion; we help you bootstrap repositories." },
  ];
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeading overline="FAQ" title="Answers, with evidence—about Briefly itself" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-neutral-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-2xl border p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Turn PDFs into provable answers—across your org.</h3>
              <p className="mt-2 text-neutral-600">No credit card. No data used for model training.</p>
            </div>
            <form className="flex w-full flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="work@email.com" className="h-11 rounded-xl" />
              <Button asChild className="h-11 rounded-xl">
                <a href="https://calendly.com/team-briefly-docs/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-xl">
                <a href="mailto:team@briefly-docs.com">Contact Us</a>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-neutral-900" />
            <span className="font-semibold tracking-tight">Briefly Docs</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-neutral-600">
            Evidence‑backed answers with version diffs and OCR. Built for regulated teams.
          </p>
          <div className="mt-4 space-y-2 text-sm text-neutral-600">
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
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Nyx Solutions</span>
            </div>
          </div>
        </div>
        <div>
          <FooterCol title="Product" links={[
            { label: "Overview", href: "#product" },
            { label: "Capabilities", href: "#capabilities" },
            { label: "Use Cases", href: "#solutions" }
          ]} />
        </div>
        <div>
          <FooterCol title="Company" links={[
            { label: "Security", href: "/security" },
            { label: "Contact", href: "/contact" }
          ]} />
        </div>
        <div>
          <FooterCol title="Resources" links={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Contact Us", href: "/contact" }
          ]} />
        </div>
      </Container>
      <Container className="mt-8 flex items-center justify-between border-t pt-6 text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Briefly Docs • Nyx Solutions</span>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-neutral-900">Privacy</a>
          <a href="/security" className="hover:text-neutral-900">Security</a>
          <a href="/terms" className="hover:text-neutral-900">Terms</a>
        </div>
      </Container>
      </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-sm font-medium text-neutral-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-600">
        {links.map((l) => (
          <li key={l.label}><a className="hover:text-neutral-900" href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
