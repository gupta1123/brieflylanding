import type { Metadata } from 'next'
import './globals.css'
import ScrollToTopWrapper from './ScrollToTopWrapper'

export const metadata: Metadata = {
  title: 'Briefly Docs - Document Intelligence for Serious Workflows',
  description: 'Turn chaotic PDFs into instant, reliable answers. The precise AI layer over your high-stakes documentation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollToTopWrapper />
        {children}
      </body>
    </html>
  )
}

