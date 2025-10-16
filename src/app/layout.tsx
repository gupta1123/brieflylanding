import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Briefly Docs - Ask Your Documents, Get Cited Answers",
  description: "Transform your scattered PDFs and documents into intelligent, citation-backed answers. Built for regulated, document-heavy organizations. Book a demo today.",
  keywords: ["document AI", "PDF search", "document management", "enterprise AI", "knowledge management", "document intelligence"],
  authors: [{ name: "Nyx Solutions" }],
  creator: "Briefly Docs",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Briefly Docs - Ask Your Documents, Get Cited Answers",
    description: "Transform your scattered PDFs and documents into intelligent, citation-backed answers. Built for regulated, document-heavy organizations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briefly Docs - Ask Your Documents, Get Cited Answers",
    description: "Transform your scattered PDFs and documents into intelligent, citation-backed answers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
