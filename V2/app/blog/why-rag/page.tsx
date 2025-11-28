'use client';

import StickyNav from '../../../components/StickyNav';
import PrimaryFooter from '../../../components/PrimaryFooter';

export default function BlogWhyRag() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyNav
        links={[
          { label: 'Home', to: '/', className: 'hover:text-[#EB4B2B] text-sm font-medium' },
        ]}
      />
      <main className="flex-1 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 grotesk">Why RAG?</h1>
          <p className="text-lg text-gray-600">Blog post content coming soon...</p>
        </div>
      </main>
      <PrimaryFooter />
    </div>
  );
}

