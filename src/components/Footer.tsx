import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-agri-800 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center border border-white/20">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">AGRI<span className="font-light">LINK</span></span>
            </div>
            <p className="text-sm text-white/50">Direct farm-to-business sourcing. Connecting agricultural producers with commercial buyers.</p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/marketplace" className="hover:text-agri-300 transition-colors">Marketplace</Link></li>
              <li><Link href="/dashboard/supplier" className="hover:text-agri-300 transition-colors">Supplier Portal</Link></li>
              <li><Link href="/dashboard/buyer" className="hover:text-agri-300 transition-colors">Buyer Portal</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-agri-300 transition-colors">About Us</Link></li>
              <li><Link href="/trust" className="hover:text-agri-300 transition-colors">Trust &amp; Safety</Link></li>
              <li><Link href="#" className="hover:text-agri-300 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>[email]</li>
              <li>[phone_number]</li>
              <li>[address]</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} AgriLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
