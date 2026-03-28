const values = [
  {
    icon: "🌱",
    title: "Empowering Local Farmers",
    description: "We give agricultural producers direct access to commercial markets, ensuring fair prices and eliminating exploitative middlemen.",
  },
  {
    icon: "🔗",
    title: "Supply Chain Transparency",
    description: "Every product on AgriLink is traceable from seed to shelf. Buyers know exactly where their food comes from.",
  },
  {
    icon: "🌍",
    title: "Sustainable Agriculture",
    description: "We promote sustainable farming practices by giving organic and eco-certified producers premium visibility.",
  },
  {
    icon: "🤝",
    title: "Fair Trade Principles",
    description: "Our platform ensures equitable pricing that benefits both producers and buyers, building long-term partnerships.",
  },
];

const team = [
  { name: "Elena Rodriguez", role: "CEO & Co-Founder", bio: "Former agricultural economist with 15 years in supply chain optimization." },
  { name: "James Okafor", role: "CTO & Co-Founder", bio: "Ex-Google engineer passionate about using technology to solve food system challenges." },
  { name: "Priya Sharma", role: "VP of Operations", bio: "Logistics expert who previously managed distribution for a major grocery chain." },
  { name: "David Kim", role: "Head of Partnerships", bio: "Built agricultural cooperative networks across three continents." },
];

const milestones = [
  { year: "2022", event: "AgriLink founded with a mission to connect farms directly to businesses." },
  { year: "2023", event: "Launched marketplace with 200 verified farms and 50 business buyers." },
  { year: "2024", event: "Expanded to 1,500 farms across 12 countries. Raised Series A funding." },
  { year: "2025", event: "Introduced logistics tracking and quality assurance certification program." },
  { year: "2026", event: "Serving 2,500+ farms and 800+ businesses with $45M+ monthly trade volume." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-agri-700 to-agri-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-agri-100 leading-relaxed max-w-3xl mx-auto">
            AgriLink exists to create a fairer, more transparent agricultural supply chain. 
            We believe every farmer deserves direct market access, and every business deserves 
            to know exactly where their food comes from.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Journey</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-agri-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-agri-200 my-1" />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-bold text-agri-600 mb-1">{m.year}</div>
                  <p className="text-slate-600">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-agri-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="font-semibold text-slate-800">{t.name}</h3>
                <div className="text-sm text-agri-600 font-medium mb-2">{t.role}</div>
                <p className="text-xs text-slate-500">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
