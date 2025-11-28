'use client';

import Link from 'next/link';
import LogoMark from './LogoMark';

interface NavLink {
  label: string;
  href?: string;
  to?: string;
  className?: string;
}

interface StickyNavProps {
  links?: NavLink[];
  rightSlot?: React.ReactNode;
  border?: boolean;
  backgroundClass?: string;
  className?: string;
}

const NavAnchor = ({ item }: { item: NavLink }) => {
  if (!item) return null;
  if (item.href) {
    return (
      <a
        href={item.href}
        className={item.className || 'hover:text-[#EB4B2B] transition-colors relative group text-sm font-medium'}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.to || '/'}
      className={item.className || 'hover:text-[#EB4B2B] transition-colors relative group text-sm font-medium'}
    >
      {item.label}
    </Link>
  );
};

const StickyNav = ({
  links = [],
  rightSlot,
  border = true,
  backgroundClass = 'bg-[rgba(244,244,240,0.95)]',
  className = '',
}: StickyNavProps) => (
  <nav
    className={`sticky top-0 z-50 ${border ? 'border-b border-black' : ''} ${backgroundClass} backdrop-blur-sm ${className}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-xl font-bold grotesk tracking-tight">Briefly Docs.</span>
        </Link>
        {links.length > 0 && (
          <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider mono">
            {links.map((link) => (
              <NavAnchor key={link.label} item={link} />
            ))}
          </div>
        )}
        <div className="flex items-center gap-4">{rightSlot}</div>
      </div>
    </div>
  </nav>
);

export default StickyNav;

