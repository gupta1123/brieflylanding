'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StickyNav from '../components/StickyNav';
import PrimaryFooter from '../components/PrimaryFooter';

const heroIndustries = [
  'Steel & Manufacturing',
  'Trading & Logistics',
  'Police & Public Safety',
  'Legal & Compliance Teams',
];

const partnerLogos = [
  { src: '/MEPL.png', alt: 'MEPL' },
  { src: '/SRJ.png', alt: 'SRJ' },
  { src: '/polaad.png', alt: 'Polaad' },
  { src: '/rajuri.png', alt: 'Rajuri' },
  { src: '/Gajkesari.jpeg', alt: 'Gajkesari' },
  { src: '/Kalika.jpeg', alt: 'Kalika' },
  { src: '/Icon.jpeg', alt: 'Icon' },
];

const securityItems = [
  { label: 'Encryption in Transit & at Rest', icon: 'lock-closed' },
  { label: 'Per-Workspace Data Isolation', icon: 'shield-check' },
  { label: 'Role-Based Access Control (RBAC)', icon: 'building-library' },
  { label: 'Granular Document Permissions', icon: 'building-library' },
  { label: 'Query & Document Access Logs', icon: 'globe-alt' },
  { label: 'No Training on Your Private Docs', icon: 'trash' },
  { label: 'Configurable Data Retention Policies', icon: 'trash' },
  { label: 'Retrieval-First (RAG) with Citations', icon: 'shield-check' },
  { label: 'Private Cloud / VPC Deployments (Enterprise)', icon: 'shield-check' },
  { label: 'SAML SSO (Roadmap)', icon: 'key' },
];

const benefits = [
  {
    title: 'Search 1000s of PDFs',
    body: 'Instant semantic search across massive, unstructured data repositories. Stop digging, start finding.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Cited & Trustworthy',
    body: 'Every AI answer links directly to the source page and paragraph. No hallucinations, only facts.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: 'Faster Audits',
    body: 'Cut review times by 80%. Extract tables, compare clauses, and generate compliance summaries instantly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Vertical AI',
    body: 'Pre-trained models for specialized industries. We speak the language of manufacturing and law.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    title: 'Ingest & OCR',
    text: 'Upload any scanned PDF, image, or Word doc. We use high-quality OCR to digitize printed text and complex tables, with support for many real-world forms.',
    accent: '#EB4B2B',
  },
  {
    title: 'Query & Extract',
    text: 'Ask questions in plain English. "What is the liability cap?" or "List all steel grade specifications."',
    accent: '#3D5A80',
  },
  {
    title: 'Verify & Understand',
    text: 'Get grounded answers with side-by-side citations. Inspect the exact source, view extracted values in context, and build intelligence from your documents without manual searching.',
    accent: '#000',
  },
];

const industryCases = [
  {
    badge: { text: 'Case 01', color: '#EB4B2B' },
    title: 'Steel & Manufacturing QA',
    text: 'Compare Mill Test Certificates to purchase specs, auto-flag tensile anomalies, and push clean data to SAP.',
    link: 'View Manufacturing Case Study →',
    url: '/manufacturing',
    bg: 'bg-white',
    border: 'border-b md:border-b-0 md:border-r border-black',
  },
  {
    badge: { text: 'Case 02', color: '#3D5A80' },
    title: 'Legal & Compliance',
    text: 'Compare redlines, track liability caps, and keep master contracts audit-ready with cite-backed answers.',
    link: 'Review Legal Workflow →',
    url: '/legal',
    bg: 'bg-[#F9F9F9]',
    border: 'border-b border-black',
  },
  {
    badge: { text: 'Case 03', color: '#000' },
    title: 'Logistics & Trade Compliance',
    text: 'Extract HS codes, reconcile invoices, and keep customs packets synchronized across ports and forwarders.',
    link: 'See Logistics Case Study →',
    url: '/logistics',
    bg: 'bg-[#F9F9F9]',
    border: 'border-b md:border-b-0 md:border-r border-black',
  },
  {
    badge: { text: 'Case 04', color: '#FF6700' },
    title: 'Construction & Engineering',
    text: 'Turn CSI specs, submittals, and change orders into structured workflows. Catch scope creep before concrete is poured.',
    link: 'Explore Construction Workflow →',
    url: '/construction',
    bg: 'bg-white',
    border: '',
  },
];

const faqItems = [
  {
    question: 'Does Briefly work on scanned or messy PDFs?',
    answer:
      'Yes. Briefly handles scanned PDFs and most printed documents well. Clear handwriting on structured forms is often recognized, but heavily cursive or noisy documents may still require manual review.'
  },
  {
    question: 'Is my data used to train your AI models?',
    answer:
      'No. Your workspace data is not used to train our models. Enterprise deployments can be configured with strict no-retention settings or deployed inside your private cloud/VPC for complete control.'
  },
  {
    question: 'How does Briefly ensure accuracy in answers?',
    answer:
      'Briefly uses a retrieval-first (RAG) pipeline combined with our in-house agent architecture. Answers are grounded strictly in your documents and include citations so you can verify the source. This significantly reduces hallucinations.'
  },
  {
    question: 'What file types does Briefly support today?',
    answer:
      'Briefly works with PDFs, scanned PDFs, images (JPG/PNG), and Word documents. Additional formats can be added depending on your workflow requirements.'
  },
  {
    question: 'Can Briefly be deployed inside our own infrastructure?',
    answer:
      'Yes. Briefly offers private cloud and VPC deployments for enterprise clients who require full data governance and internal compliance alignment.'
  }
];

const platformTabs = [
  {
    id: 'audit',
    title: 'Audit Trails',
    description:
      'Click a sentence in the AI summary, and the document viewer jumps to the exact source coordinates. Complete transparency.',
  },
  {
    id: 'table',
    title: 'Table Extraction',
    description: 'Locked tables in PDFs are converted to clean CSV/Excel formats, preserving row/column logic.',
  },
  {
    id: 'redline',
    title: 'Smart Redlining (Coming Soon) ',
    description: 'Compare two versions of a contract instantly. Highlight added clauses, removed liabilities, and subtle wording shifts.',
  },
];

const chatSlides = [
  {
    question: 'Summarize the liability limits.',
    answer: (
      <>
        <p className="text-sm mb-3">I found 3 distinct liability caps across the vendor contracts:</p>
        <ul className="text-xs space-y-2 list-disc pl-4 mb-3">
          <li>
            <strong>Vendor A:</strong> Cap at $1M per incident.
          </li>
          <li>
            <strong>Vendor B:</strong> Cap at 2x total contract value.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
          <span className="text-[10px] bg-[#EB4B2B]/10 text-[#EB4B2B] border border-[#EB4B2B] px-2 py-1 rounded-sm">Doc A, p.12</span>
        </div>
      </>
    ),
  },
  {
    question: 'Extract Q3 financial figures as a table.',
    answer: (
      <>
        <p className="text-sm mb-3 text-gray-500">Generated Table:</p>
        <div className="overflow-hidden border border-gray-300 rounded-sm text-xs">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="p-2 font-bold">Metric</th>
                <th className="p-2 font-bold">Q3 2025</th>
                <th className="p-2 font-bold">YoY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2">Revenue</td>
                <td className="p-2">$1.2M</td>
                <td className="p-2 text-green-600">+12%</td>
              </tr>
              <tr>
                <td className="p-2">OpEx</td>
                <td className="p-2">$850k</td>
                <td className="p-2 text-red-600">+4%</td>
              </tr>
              <tr>
                <td className="p-2">Net Income</td>
                <td className="p-2">$350k</td>
                <td className="p-2 text-green-600">+22%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="text-[10px] border border-black px-2 py-1 hover:bg-gray-100">Copy to Excel</button>
        </div>
      </>
    ),
  },
  {
    question: 'Visualize expense trends by category.',
    answer: (
      <>
        <p className="text-sm mb-4 text-gray-500">Expenses by Category (2025)</p>
        <div className="flex items-end justify-between h-32 px-2 gap-4 border-b border-black pb-1">
          {[
            { label: 'R&D', color: 'bg-black', height: 'h-[60%]' },
            { label: 'Mktg', color: 'bg-[#EB4B2B]', height: 'h-[85%]' },
            { label: 'Ops', color: 'bg-[#3D5A80]', height: 'h-[40%]' },
            { label: 'Legal', color: 'bg-gray-400', height: 'h-[20%]' },
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center gap-1 w-1/4">
              <div className={`w-full ${bar.color} ${bar.height}`} />
              <span className="text-[10px] mono">{bar.label}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('audit');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-hero').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        );
      });

      gsap.utils.toArray('.reveal-card').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.2)',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      gsap.utils.toArray('.reveal-row').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      gsap.utils.toArray('.partner-logo').forEach((logo: any, idx: number) => {
        gsap.fromTo(
          logo,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: idx * 0.05,
            ease: 'power2.out',
            scrollTrigger: { trigger: logo, start: 'top 90%' },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % chatSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <StickyNav
        links={[
          { label: 'Process', href: '#how-it-works', className: 'hover:text-[#EB4B2B] text-sm font-medium' },
          { label: 'Solutions', href: '#solutions', className: 'hover:text-[#EB4B2B] text-sm font-medium' },
          { label: 'Platform', href: '#platform', className: 'hover:text-[#EB4B2B] text-sm font-medium' },
        ]}
        rightSlot={
          <a
            href="https://calendly.com/team-briefly-docs/30min"
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-5 py-2 text-sm font-medium rounded-sm"
          >
            Book a Demo
          </a>
        }
      />

      <main className="flex-1">
        <section className="relative pt-20 pb-24 border-b border-black overflow-hidden">
          <div className="hero-border absolute top-4 right-4 w-24 h-24 border-t border-r border-black/20 opacity-50" />
          <div className="hero-border absolute bottom-4 left-4 w-24 h-24 border-b border-l border-black/20 opacity-50" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="reveal-hero inline-flex items-center gap-2 border border-black px-3 py-1 rounded-full mb-8 bg-white">
              <span className="w-2 h-2 bg-[#EB4B2B] rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider mono">Document intelligence for serious, messy workflows</span>
            </div>

            <h1 className="reveal-hero text-5xl md:text-7xl font-bold leading-tight mb-6 grotesk text-balance">
              Turn chaotic PDFs into <br />
              <span className="text-[#3D5A80] inline-block">instant, reliable answers.</span>
            </h1>

            <p className="reveal-hero text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The precise AI layer over your high-stakes documentation. Process contracts, FIRs, technical reports, and invoices with audit-grade
              accuracy.
            </p>

            <div className="reveal-hero flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://calendly.com/team-briefly-docs/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-8 py-4 text-lg font-medium rounded-sm text-center"
            >
              Book a demo
            </a>
              <Link
                href="/blog"
                className="btn-secondary px-8 py-4 text-lg font-medium rounded-sm text-center flex items-center justify-center gap-2 group"
              >
                Browse the blog
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="reveal-hero border-t border-black/10 pt-8">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Industries we power today</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-left">
                {heroIndustries.map((label) => (
                  <div key={label} className="flex flex-col items-start text-gray-800">
                    <span className="font-bold text-xl grotesk">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white overflow-hidden py-3 border-b border-black">
          <div className="marquee security-marquee">
            <div className="marquee-track">
              {securityItems.concat(securityItems).map((item, idx) => (
                <div key={`${item.label}-${idx}`} className="flex items-center gap-2 px-6">
                  <span className="w-4 h-4 text-[#EB4B2B]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          item.icon === 'shield-check'
                            ? 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                            : item.icon === 'building-library'
                            ? 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                            : item.icon === 'lock-closed'
                            ? 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                            : item.icon === 'trash'
                            ? 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            : item.icon === 'key'
                            ? 'M15 7a5 5 0 00-4-4.9V1a1 1 0 10-2 0v1.1A5 5 0 005 7c0 2.21 1.79 4 4 4h.05a3.5 3.5 0 103.9 0H11c-2.21 0-4-1.79-4-4'
                            : 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        }
                      />
                    </svg>
                  </span>
                  <span className="mono text-sm font-medium whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="grid-bordered grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="reveal-card p-10 hover:bg-[#F9F9F9] transition-colors group">
                <div className="w-10 h-10 border border-black flex items-center justify-center mb-6 text-[#EB4B2B] group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="py-24 dot-pattern border-b border-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 grotesk reveal-row">System Architecture.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {processSteps.map((step, index) => (
                <div key={step.title} className="group reveal-row">
                  <div className="text-6xl font-bold text-[#D4D4D0] mb-4 grotesk transition-colors duration-500">{`0${index + 1}`}</div>
                  <h4 className="text-lg font-bold border-t border-black pt-4 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {industryCases.map((item) => (
              <div key={item.title} className={`reveal-card p-12 ${item.bg} ${item.border} flex flex-col justify-between min-h-[300px]`}>
                <div className="mb-8">
                  <span
                    className="mono text-xs uppercase border px-2 py-1 rounded-sm"
                    style={{ color: item.badge.color, borderColor: item.badge.color }}
                  >
                    {item.badge.text}
                  </span>
                  <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                  <p className="mt-2 text-gray-600 max-w-sm">{item.text}</p>
                </div>
                <Link href={item.url} className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-[#EB4B2B]">
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="py-24 bg-[#F4F4F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 reveal-row">
                <h2 className="text-4xl font-bold mb-8 grotesk">Built for the details.</h2>
                <div className="space-y-2">
                  {platformTabs.map((tab) => (
                    <div
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`platform-tab pl-6 py-4 border-l-2 cursor-pointer transition-all hover:bg-white/50 ${
                        activeTab === tab.id ? 'active' : ''
                      }`}
                    >
                      <h4 className={`font-bold text-lg ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'}`}>{tab.title}</h4>
                      <p className={`text-sm mt-1 ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'}`}>{tab.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-white border border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] reveal-row min-h-[400px] relative overflow-hidden">
                <div className="border-b border-gray-200 pb-2 mb-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-black" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                </div>
                {activeTab === 'audit' && (
                  <div className="flex gap-4">
                    <div className="w-1/2 bg-gray-100 p-4 space-y-2 relative">
                      {[1, 2, 3, 4].map((line) => (
                        <div key={line} className="h-2 bg-gray-300 animate-pulse" />
                      ))}
                      <div className="mt-4 h-24 bg-white border border-gray-300 relative">
                        <div className="absolute top-4 left-2 right-2 h-4 bg-[#EB4B2B]/20 border border-[#EB4B2B]" />
                      </div>
                      <div className="h-2 bg-gray-300" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="bg-gray-100 p-3 rounded-sm text-xs text-gray-600">
                          <span className="font-bold text-black block mb-1">Q: What is the termination clause?</span>
                          Analyzing Document...
                        </div>
                        <div className="border border-black p-3 rounded-sm text-xs">
                          <span className="font-bold text-[#3D5A80] block mb-1">A: 60 days notice required.</span>
                          Found in section 4.2.
                          <span className="text-[10px] text-gray-500 mt-2 block">[Source Citation Linked]</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <div className="h-8 bg-gray-50 border border-gray-300 rounded-sm" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'table' && (
                  <div className="border border-dashed border-gray-300 p-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#3D5A80] shadow-[0_0_10px_#3D5A80]" />
                    <p className="text-xs text-gray-400 mb-2 font-mono uppercase">Detected Table Structure...</p>
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-100 text-xs uppercase">
                        <tr>
                          <th className="p-2 border border-gray-200">Item Description</th>
                          <th className="p-2 border border-gray-200">Qty</th>
                          <th className="p-2 border border-gray-200">Unit Price</th>
                          <th className="p-2 border border-gray-200">Total</th>
                        </tr>
                      </thead>
                      <tbody className="font-mono text-xs">
                        <tr>
                          <td className="p-2 border border-gray-200">Steel Grade A4</td>
                          <td className="p-2 border border-gray-200">500</td>
                          <td className="p-2 border border-gray-200">$42.00</td>
                          <td className="p-2 border border-gray-200">$21,000</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-200">Copper Wire 2mm</td>
                          <td className="p-2 border border-gray-200">1200</td>
                          <td className="p-2 border border-gray-200">$1.50</td>
                          <td className="p-2 border border-gray-200">$1,800</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-200">Industrial Solvent</td>
                          <td className="p-2 border border-gray-200">50</td>
                          <td className="p-2 border border-gray-200">$120.00</td>
                          <td className="p-2 border border-gray-200">$6,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4 flex justify-end">
                      <div className="px-3 py-1 bg-[#3D5A80] text-white text-xs font-bold">Export to CSV ↓</div>
                    </div>
                  </div>
                )}
                {activeTab === 'redline' && (
                  <div className="w-full h-full p-6 border border-gray-200 bg-[#fffcfc] font-serif text-sm leading-loose text-gray-800 relative">
                    <h5 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-4">Diff View: V1 vs V2</h5>
                    <p>
                      12.1 <strong>Indemnification.</strong> The Supplier agrees to indemnify{' '}
                      <span className="bg-red-100 text-red-600 line-through decoration-red-500 px-1">and hold harmless</span> the Buyer against any{' '}
                      <span className="bg-green-100 text-green-700 font-semibold border-b-2 border-green-500 px-1">direct</span> losses arising from negligence.
                    </p>
                    <p className="mt-4">
                      12.2 <strong>Liability Cap.</strong> The total liability shall not exceed{' '}
                      <span className="bg-red-100 text-red-600 line-through decoration-red-500 px-1">$1,000,000</span>{' '}
                      <span className="bg-green-100 text-green-700 font-semibold border-b-2 border-green-500 px-1">200% of the Contract Price</span> per
                      calendar year.
                    </p>
                    <div className="absolute bottom-6 right-6 flex gap-4 text-xs font-bold">
                      <span className="flex items-center gap-1 text-red-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        2 Deletions
                      </span>
                      <span className="flex items-center gap-1 text-green-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        2 Additions
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal-row">
                <span className="mono text-xs font-bold text-[#EB4B2B] tracking-widest mb-4 block">THE INTERFACE</span>
                <h2 className="text-4xl font-bold mb-6 grotesk">A chat that actually understands your documents.</h2>
                <p className="text-gray-600 mb-6">
                  Get answers in the format that makes sense for the data—whether that's a legal summary, a structured table, or a visual chart.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Focus Context', text: 'See which documents were used to answer each question.' },
                    { title: 'Inline Citations', text: 'Click a citation to open the relevant PDF page.' },
                    { title: 'Exportable Tables', text: 'Extract structured tables that you can copy straight into Excel.' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 rounded-full border border-black flex items-center justify-center text-[10px]">✓</div>
                      <p className="text-sm">
                        <strong>{item.title}:</strong> {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal-row border border-black bg-[#F4F4F0] h-[450px] flex flex-col relative shadow-[10px_10px_0px_0px_#111]">
                <div className="h-12 border-b border-black bg-white flex items-center px-4 justify-between">
                  <div className="text-sm font-bold">Project: Annual Audit</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex-1 relative overflow-hidden">
                  {chatSlides.map((slide, index) => (
                    <div
                      key={slide.question}
                      className={`absolute inset-0 p-6 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="self-end bg-black text-white p-3 rounded-tl-lg rounded-bl-lg rounded-tr-lg max-w-[80%] text-sm mb-4 ml-auto">
                        {slide.question}
                      </div>
                      <div className="bg-white border border-black p-4 rounded-tr-lg rounded-br-lg rounded-tl-lg max-w-[95%] shadow-sm">{slide.answer}</div>
                    </div>
                  ))}
                </div>
                <div className="h-14 bg-white border-t border-black p-3 flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-100 rounded-sm overflow-hidden">
                    <div key={currentSlide} className="h-full bg-[#EB4B2B] animate-chat-progress" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % chatSlides.length)}
                    className="w-20 h-8 bg-black text-white text-xs font-bold uppercase tracking-wide rounded-sm flex items-center justify-center hover:bg-[#EB4B2B] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111111] text-[#F4F4F0] border-t border-white/20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mono text-[#EB4B2B] mb-6">OUR MISSION</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 grotesk">"Good enough" AI doesn't cut it when accuracy is the law.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Briefly Docs isn't for summarizing blog posts. It is engineered for the unglamorous, messy, high-volume reality of enterprise workflows. We
              built this because we were tired of AI that hallucinates on contracts.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-black">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 grotesk text-center">Common Questions.</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="border-b border-black pb-4 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-lg">
                    <span>{item.question}</span>
                    <span className="text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F4F4F0] border-b border-black">
          <div className="max-w-6xl mx-auto px-6">
            <p className="mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-6 text-center">Trusted by accuracy-obsessed teams</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="partner-logo bg-white border border-black/10 h-28 flex items-center justify-center px-6 grayscale opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-black relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#F4F4F0] -skew-x-12 translate-x-20 z-0" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6 grotesk">Stop drowning in documents.</h2>
            <p className="text-gray-600 mb-10 text-lg">Start getting answers today. No credit card required for the pilot.</p>
            <div className="flex flex-col justify-center items-center gap-4">
              <a
                href="https://calendly.com/team-briefly-docs/30min"
                target="_blank"
                rel="noreferrer"
                className="btn-primary bg-[#EB4B2B] text-white border-[#EB4B2B] px-10 py-5 text-xl font-bold rounded-sm hover:bg-[#d13f21] shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]"
              >
                Book a Demo
              </a>
              <p className="text-xs text-gray-400 mt-4">Private cloud deployments • Zero data retention • Enterprise security reviews</p>
            </div>
          </div>
        </section>

      </main>

      <PrimaryFooter />
    </div>
  );
}

