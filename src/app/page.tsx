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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-agri-600/10 border border-agri-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-agri-400 rounded-full animate-pulse" />
              <span className="text-agri-400 text-sm font-medium">Trusted by 800+ businesses nationwide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Direct Farm-to-Business{" "}
              <span className="text-agri-400">Sourcing</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              The B2B marketplace that connects agricultural producers directly with commercial buyers. 
              Cut out the middlemen, get fair prices, and build transparent supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard/supplier"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-agri-600 rounded-xl hover:bg-agri-700 transition-all shadow-lg shadow-agri-600/25"
              >
                Become a Supplier
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/dashboard/buyer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Start Buying
              </Link>
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
                <div className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Browse by Category</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Source fresh produce, grains, dairy, meat, and more directly from verified agricultural producers.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From farm to business in four simple steps. No middlemen, no hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-agri-100 -translate-x-1/2" />
                )}
                <div className="bg-agri-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-agri-600 mb-2">STEP {s.step}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Trusted by Industry Leaders</h2>
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
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-agri-700 bg-white rounded-xl hover:bg-agri-50 transition-all"
            >
              Become a Supplier
            </Link>
            <Link
              href="/dashboard/buyer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
            >
              Start Buying
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
