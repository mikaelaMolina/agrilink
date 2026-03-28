import Link from "next/link";

const stats = [
  { value: "2,500+", label: "Verified Farms" },
  { value: "800+", label: "Business Buyers" },
  { value: "$45M+", label: "Monthly Trade Volume" },
  { value: "98%", label: "On-Time Delivery" },
];

const categories = [
  { name: "Fresh Vegetables", icon: "🥬", count: 340 },
  { name: "Fruits & Berries", icon: "🍎", count: 215 },
  { name: "Grains & Cereals", icon: "🌾", count: 180 },
  { name: "Dairy & Eggs", icon: "🥛", count: 125 },
  { name: "Meat & Poultry", icon: "🥩", count: 95 },
  { name: "Seafood & Fish", icon: "🐟", count: 78 },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up as a supplier or buyer. Verify your business credentials and set your preferences.",
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Browse or List Products",
    description: "Suppliers list their harvest with pricing and certifications. Buyers browse and filter the catalog.",
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Negotiate & Order",
    description: "Request quotes, negotiate bulk pricing, and place orders directly with verified producers.",
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Track & Receive",
    description: "Monitor shipments in real-time from farm to your warehouse with full traceability.",
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "AgriLink cut our procurement costs by 30% and gave us direct access to organic farms we never knew existed.",
    name: "Sarah Chen",
    role: "Procurement Director, FreshMart Groceries",
  },
  {
    quote: "As a small cooperative, we finally have a platform where we can compete fairly and reach large buyers directly.",
    name: "Miguel Torres",
    role: "President, Valle Verde Cooperative",
  },
];

/* Top-requested service cards (icon-circle style from reference) */
const topServices = [
  {
    label: "Browse Marketplace",
    href: "/marketplace",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    label: "Become a Supplier",
    href: "/dashboard/supplier",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Start Buying",
    href: "/dashboard/buyer",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    label: "Quality Assurance",
    href: "/trust",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Track Shipments",
    href: "/dashboard/buyer",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    label: "About AgriLink",
    href: "/about",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — teal gradient overlay like reference */}
      <section className="relative overflow-hidden">
        {/* Background with teal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-agri-700/95 via-agri-600/90 to-agri-700/95" />
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0aDEydi0ySDI0djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16 md:py-24">
            {/* Left: Heading + gold underline */}
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tracking-tight">
                Top<br />Requested
              </h1>
              <div className="w-24 h-1.5 bg-gold-400 mt-4 mb-6 rounded-full" />
              <p className="text-lg text-white/80 max-w-md">
                The B2B marketplace connecting agricultural producers directly with commercial buyers. Fair prices, transparent supply chains.
              </p>
            </div>

            {/* Right: Icon service cards grid (reference style) */}
            <div className="grid grid-cols-3 gap-4">
              {topServices.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white/25 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="text-white text-xs font-medium text-center leading-tight">{svc.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-agri-700">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category — tab-style header like "Find City Services" */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Browse Products:</h2>
            <span className="text-sm font-bold uppercase tracking-wider text-agri-600 border-b-2 border-agri-600 pb-1">By Category</span>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-1 hover:text-agri-600 cursor-pointer transition-colors">By Region</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/marketplace"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-100 group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-slate-800 text-sm group-hover:text-agri-600 transition-colors">{cat.name}</div>
                <div className="text-xs text-slate-400 mt-1">{cat.count} listings</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">How It Works</h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto">From farm to business in four simple steps. No middlemen, no hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-agri-100 -translate-x-1/2" />
                )}
                <div className="bg-agri-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-agri-200">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-agri-600 mb-2 uppercase tracking-wider">Step {s.step}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Trusted by Industry Leaders</h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <svg className="w-8 h-8 text-agri-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-800">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agri-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Supply Chain?</h2>
          <p className="text-agri-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farms and businesses already trading on AgriLink. Get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/supplier"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-agri-700 bg-white rounded-lg hover:bg-agri-50 transition-all"
            >
              Become a Supplier
            </Link>
            <Link
              href="/dashboard/buyer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Start Buying
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
