import Link from 'next/link';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', to: '/' },
      { label: 'Feature Deep-Dive', to: '/features' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Blog', to: '/blog' },
      { label: 'Case Study', to: '/case/apollo-steel' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Get Support',
    links: [
      { label: 'team@briefly-docs.com', href: 'mailto:team@briefly-docs.com' },
    ],
  },
];

const PrimaryFooter = () => (
  <footer className="bg-[#F4F4F0] py-12 border-t border-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-black" />
            <span className="text-lg font-bold grotesk">Briefly Docs.</span>
          </div>
          <p className="text-sm text-gray-500">
            The accuracy layer for high-stakes paperwork. Structured data from the most chaotic PDF workflows.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h5 className="font-bold mb-4 text-xs uppercase tracking-wider">{column.title}</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {column.links.map((link) => {
                if ('to' in link && link.to) {
                  return (
                    <li key={link.label}>
                      <Link href={link.to} className="hover:text-black transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <a
                      href={'href' in link ? link.href : '#'}
                      className="hover:text-black transition-colors"
                      target={('external' in link && link.external) ? '_blank' : undefined}
                      rel={('external' in link && link.external) ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 mono">
        <div>&copy; {new Date().getFullYear()} Briefly Docs Inc. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default PrimaryFooter;

