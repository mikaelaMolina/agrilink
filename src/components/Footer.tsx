import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center border border-white/25">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-wide">AGRILINK</div>
                <div className="text-[10px] uppercase tracking-widest text-teal-300 font-medium">Farm to Business</div>
              </div>
            </div>
            <p className="text-sm text-teal-200/70">Direct farm-to-business sourcing. Connecting agricultural producers with commercial buyers.</p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/marketplace" className="text-teal-200/70 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/dashboard/supplier" className="text-teal-200/70 hover:text-white transition-colors">Supplier Portal</Link></li>
              <li><Link href="/dashboard/buyer" className="text-teal-200/70 hover:text-white transition-colors">Buyer Portal</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-teal-200/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/trust" className="text-teal-200/70 hover:text-white transition-colors">Trust &amp; Safety</Link></li>
              <li><Link href="#" className="text-teal-200/70 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-teal-200/70">[email]</li>
              <li className="text-teal-200/70">[phone_number]</li>
              <li className="text-teal-200/70">[address]</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-teal-200/50">
          &copy; {new Date().getFullYear()} AgriLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
