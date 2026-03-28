const verificationSteps = [
  {
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Identity Verification",
    description: "Every supplier undergoes KYC (Know Your Customer) verification. We validate business registrations, farm ownership documents, and personal identification.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Farm Location Audit",
    description: "We use satellite imagery and on-ground inspections to verify farm locations, acreage, and production capacity claims.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Certification Validation",
    description: "Organic, Fair Trade, GAP, and other certifications are independently verified with issuing authorities before being displayed on profiles.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Quality Testing",
    description: "Random product samples are tested at accredited laboratories for pesticide residues, contaminants, and nutritional accuracy.",
  },
];

const safetyStandards = [
  { name: "HACCP Compliance", description: "All listed food products must meet Hazard Analysis Critical Control Point standards." },
  { name: "Cold Chain Monitoring", description: "Temperature-sensitive products are tracked with IoT sensors throughout transit." },
  { name: "Traceability Codes", description: "Every batch has a unique QR code linking to its complete journey from farm to delivery." },
  { name: "Dispute Resolution", description: "Our dedicated team mediates any quality disputes within 48 hours with fair outcomes for both parties." },
  { name: "Escrow Payments", description: "Buyer payments are held in escrow until delivery is confirmed and quality is verified." },
  { name: "Insurance Coverage", description: "All shipments above $1,000 are automatically insured against damage and loss." },
];

const certifications = [
  { name: "USDA Organic", icon: "🌿" },
  { name: "Fair Trade Certified", icon: "🤝" },
  { name: "GlobalG.A.P.", icon: "🌍" },
  { name: "Rainforest Alliance", icon: "🐸" },
  { name: "Non-GMO Project", icon: "🦋" },
  { name: "Food Safety (ISO 22000)", icon: "🔬" },
];

export default function TrustPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-agri-600/10 border border-agri-500/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-agri-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-agri-400 text-sm font-medium">Your trust is our foundation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trust &amp; Safety</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            We take food safety and business integrity seriously. Every supplier is verified, 
            every product is traceable, and every transaction is protected.
          </p>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">How We Verify Suppliers</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Every farm and producer on AgriLink goes through our rigorous 4-step verification process before they can list products.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="bg-agri-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-agri-600 mb-2">STEP {String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Safety &amp; Protection Standards</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            From payment protection to quality assurance, we have multiple layers of safety built into every transaction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyStandards.map((s) => (
              <div key={s.name} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-10 h-10 bg-agri-50 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-agri-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{s.name}</h3>
                <p className="text-sm text-slate-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognized Certifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Recognized Certifications</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            We validate and display these industry-standard certifications on verified supplier profiles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="text-sm font-medium text-slate-700">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-agri-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions About Our Safety Standards?</h2>
          <p className="text-agri-100 mb-8">Our trust and safety team is available to answer any questions about our verification process.</p>
          <button className="px-8 py-4 bg-white text-agri-700 font-semibold rounded-xl hover:bg-agri-50 transition-colors">
            Contact Trust &amp; Safety Team
          </button>
        </div>
      </section>
    </div>
  );
}
