"use client";
import { useState } from "react";
import Link from "next/link";

const recentOrders = [
  { id: "ORD-2841", supplier: "Sunrise Valley Farm", items: "Roma Tomatoes (500kg)", total: "$1,200", status: "In Transit", eta: "Mar 28, 2026" },
  { id: "ORD-2838", supplier: "Golden Fields Co-op", items: "Basmati Rice (2 tons)", total: "$3,600", status: "Processing", eta: "Apr 1, 2026" },
  { id: "ORD-2832", supplier: "Green Pastures Dairy", items: "Whole Milk (1,000L)", total: "$950", status: "Delivered", eta: "Mar 22, 2026" },
  { id: "ORD-2828", supplier: "Heritage Poultry Ltd", items: "Chicken Breast (300kg)", total: "$1,950", status: "Delivered", eta: "Mar 19, 2026" },
];

const favoriteFarms = [
  { name: "Sunrise Valley Farm", location: "California, USA", rating: 4.8, products: 12, organic: true },
  { name: "Golden Fields Co-op", location: "Punjab, India", rating: 4.9, products: 8, organic: false },
  { name: "Green Pastures Dairy", location: "Wisconsin, USA", rating: 4.9, products: 6, organic: true },
  { name: "Berry Hills Farm", location: "Oregon, USA", rating: 4.7, products: 4, organic: true },
];

const shipments = [
  { id: "SHP-1042", order: "ORD-2841", from: "Sunrise Valley Farm, CA", to: "FreshMart Warehouse, NY", status: "In Transit", progress: 65, carrier: "AgriFreight Express" },
  { id: "SHP-1043", order: "ORD-2838", from: "Golden Fields Co-op, Punjab", to: "FreshMart Warehouse, NY", status: "Preparing", progress: 15, carrier: "Global Agri Logistics" },
];

const buyerStats = [
  { label: "Total Spent (Month)", value: "$18,420", change: "+8.2%", up: true },
  { label: "Active Orders", value: "2", change: "0", up: true },
  { label: "Favorite Farms", value: "4", change: "+1", up: true },
  { label: "Avg. Savings", value: "22%", change: "+3%", up: true },
];

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "tracking" | "favorites">("overview");

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">Buyer Dashboard</h1>
              <div className="w-12 h-1 bg-gold-500 mt-2 mb-1" />
              <p className="text-teal-200 text-sm">Welcome back, FreshMart Groceries</p>
            </div>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-brand-800 text-sm font-medium rounded-lg hover:bg-teal-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Browse Marketplace
            </Link>
          </div>

          <div className="flex gap-6 mt-6 -mb-px">
            {(["overview", "orders", "tracking", "favorites"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "border-brand-600 text-brand-700"
                    : "border-transparent text-teal-200/70 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {buyerStats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                  <div className="flex items-end gap-2">
                    <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                    <span className={`text-xs font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800">Recent Orders</h2>
                  <button onClick={() => setActiveTab("orders")} className="text-sm text-brand-700 font-medium">View All</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {recentOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">{order.id}</div>
                        <div className="text-xs text-slate-500">{order.supplier} &middot; {order.items}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-800">{order.total}</div>
                        <span className={`text-xs font-medium ${
                          order.status === "Delivered" ? "text-green-600" :
                          order.status === "In Transit" ? "text-blue-600" : "text-yellow-600"
                        }`}>{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Shipments */}
              <div className="bg-white rounded-xl border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800">Active Shipments</h2>
                  <button onClick={() => setActiveTab("tracking")} className="text-sm text-brand-700 font-medium">Track All</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {shipments.map((s) => (
                    <div key={s.id} className="px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-slate-800">{s.id}</div>
                        <span className={`text-xs font-medium ${s.status === "In Transit" ? "text-blue-600" : "text-yellow-600"}`}>{s.status}</span>
                      </div>
                      <div className="text-xs text-slate-500 mb-2">{s.from} → {s.to}</div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-brand-600 h-2 rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{s.progress}% complete &middot; {s.carrier}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Order History</h2>
              <button className="text-sm text-brand-700 font-medium hover:text-brand-800">Download Invoices</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Supplier</th>
                    <th className="px-6 py-3">Items</th>
                    <th className="px-6 py-3">Total</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">ETA</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-brand-700">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{order.supplier}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{order.items}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">{order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === "Delivered" ? "bg-green-50 text-green-700" :
                          order.status === "In Transit" ? "bg-blue-50 text-blue-700" :
                          "bg-yellow-50 text-yellow-700"
                        }`}>{order.status}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{order.eta}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="text-sm text-brand-700 hover:text-brand-800 font-medium">View</button>
                        <button className="text-sm text-slate-500 hover:text-slate-700 font-medium">Invoice</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tracking Tab */}
        {activeTab === "tracking" && (
          <div className="space-y-4">
            {shipments.map((s) => (
              <div key={s.id} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-slate-800">{s.id}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        s.status === "In Transit" ? "bg-blue-50 text-blue-700" : "bg-yellow-50 text-yellow-700"
                      }`}>{s.status}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Order: {s.order} &middot; Carrier: {s.carrier}</p>
                  </div>
                </div>

                {/* Route visualization */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-sm text-slate-600 shrink-0 w-40 truncate" title={s.from}>📍 {s.from}</div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-100 rounded-full h-3 relative">
                      <div className="bg-brand-600 h-3 rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                      <div className="absolute top-1/2 -translate-y-1/2 transition-all" style={{ left: `${s.progress}%` }}>
                        <span className="text-lg -ml-2">🚛</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 shrink-0 w-40 truncate text-right" title={s.to}>📦 {s.to}</div>
                </div>
                <div className="text-sm text-slate-500">{s.progress}% complete</div>
              </div>
            ))}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === "favorites" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteFarms.map((farm) => (
              <div key={farm.name} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-3">🌱</div>
                <h3 className="font-semibold text-slate-800 text-sm">{farm.name}</h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {farm.location}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-500 text-xs">★ {farm.rating}</span>
                  <span className="text-xs text-slate-400">&middot; {farm.products} products</span>
                  {farm.organic && <span className="px-1.5 py-0.5 bg-teal-50 text-brand-700 text-xs rounded">Organic</span>}
                </div>
                <Link href="/marketplace" className="mt-3 block text-center text-sm text-brand-700 font-medium hover:text-brand-800 border border-brand-200 rounded-lg py-1.5">
                  View Products
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
