"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Organic Roma Tomatoes", farm: "Sunrise Valley Farm", location: "California, USA", price: 2.40, unit: "kg", minOrder: "500 kg", category: "Vegetables", organic: true, harvest: "2026-03-15", rating: 4.8, reviews: 42, image: "🍅" },
  { id: 2, name: "Premium Basmati Rice", farm: "Golden Fields Co-op", location: "Punjab, India", price: 1.80, unit: "kg", minOrder: "1 ton", category: "Grains", organic: false, harvest: "2026-02-28", rating: 4.9, reviews: 67, image: "🌾" },
  { id: 3, name: "Free-Range Chicken Breast", farm: "Heritage Poultry Ltd", location: "Texas, USA", price: 6.50, unit: "kg", minOrder: "200 kg", category: "Meat", organic: true, harvest: "2026-03-20", rating: 4.7, reviews: 31, image: "🍗" },
  { id: 4, name: "Atlantic Salmon Fillet", farm: "Nordic Fisheries", location: "Bergen, Norway", price: 12.00, unit: "kg", minOrder: "100 kg", category: "Seafood", organic: false, harvest: "2026-03-18", rating: 4.6, reviews: 28, image: "🐟" },
  { id: 5, name: "Organic Fuji Apples", farm: "Mountain Orchard Estate", location: "Washington, USA", price: 1.90, unit: "kg", minOrder: "300 kg", category: "Fruits", organic: true, harvest: "2026-03-10", rating: 4.8, reviews: 55, image: "🍎" },
  { id: 6, name: "Fresh Whole Milk", farm: "Green Pastures Dairy", location: "Wisconsin, USA", price: 0.95, unit: "liter", minOrder: "500 liters", category: "Dairy", organic: true, harvest: "2026-03-22", rating: 4.9, reviews: 73, image: "🥛" },
  { id: 7, name: "Yellow Sweet Corn", farm: "Heartland Farms", location: "Iowa, USA", price: 0.80, unit: "kg", minOrder: "1 ton", category: "Vegetables", organic: false, harvest: "2026-03-12", rating: 4.5, reviews: 38, image: "🌽" },
  { id: 8, name: "Organic Blueberries", farm: "Berry Hills Farm", location: "Oregon, USA", price: 8.50, unit: "kg", minOrder: "50 kg", category: "Fruits", organic: true, harvest: "2026-03-19", rating: 4.7, reviews: 44, image: "🫐" },
];

const categoryFilters = ["All", "Vegetables", "Fruits", "Grains", "Dairy", "Meat", "Seafood"];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [organicOnly, setOrganicOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const filtered = products
    .filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (organicOnly && !p.organic) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.farm.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Marketplace</h1>
          <p className="text-slate-500">Browse live listings from verified agricultural producers worldwide.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h2 className="font-semibold text-slate-800 mb-4">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="text-sm text-slate-600 mb-1 block">Search</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Product or farm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="text-sm text-slate-600 mb-2 block">Category</label>
                <div className="space-y-1">
                  {categoryFilters.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        category === c ? "bg-agri-50 text-agri-700 font-medium" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Organic */}
              <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                    className="w-4 h-4 text-agri-600 rounded border-slate-300 focus:ring-agri-500"
                  />
                  <span className="text-sm text-slate-600">Organic Certified Only</span>
                </label>
              </div>

              {/* Sort */}
              <div>
                <label htmlFor="sort" className="text-sm text-slate-600 mb-1 block">Sort By</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">{filtered.length} products found</p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                  {/* Product Image Placeholder */}
                  <div className="bg-slate-50 h-40 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-800 text-sm leading-tight">{product.name}</h3>
                      {product.organic && (
                        <span className="shrink-0 ml-2 px-2 py-0.5 bg-agri-50 text-agri-700 text-xs font-medium rounded-full">Organic</span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mb-1">{product.farm}</p>
                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {product.location}
                    </p>

                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-xs font-medium text-slate-700">{product.rating}</span>
                      <span className="text-xs text-slate-400">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-lg font-bold text-agri-700">${product.price.toFixed(2)}<span className="text-xs font-normal text-slate-400">/{product.unit}</span></div>
                        <div className="text-xs text-slate-400">Min: {product.minOrder}</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-agri-700 border border-agri-200 rounded-lg hover:bg-agri-50 transition-colors">
                          Get Quote
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-white bg-agri-600 rounded-lg hover:bg-agri-700 transition-colors">
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No products found</h3>
                <p className="text-slate-500 text-sm">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
