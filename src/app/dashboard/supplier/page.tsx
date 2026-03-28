"use client";
import { useState } from "react";

const inventory = [
  { id: 1, name: "Organic Roma Tomatoes", qty: "2,400 kg", price: "$2.40/kg", status: "Active", orders: 12 },
  { id: 2, name: "Sweet Yellow Corn", qty: "5,000 kg", price: "$0.80/kg", status: "Active", orders: 8 },
  { id: 3, name: "Fresh Basil Bunches", qty: "300 kg", price: "$12.00/kg", status: "Low Stock", orders: 5 },
  { id: 4, name: "Heirloom Carrots", qty: "1,800 kg", price: "$1.60/kg", status: "Active", orders: 15 },
];

const orders = [
  { id: "ORD-2841", buyer: "FreshMart Groceries", items: "Roma Tomatoes (500kg)", total: "$1,200", status: "Processing", date: "Mar 25, 2026" },
  { id: "ORD-2839", buyer: "Chef's Table Restaurant", items: "Basil (20kg), Carrots (50kg)", total: "$320", status: "Shipped", date: "Mar 23, 2026" },
  { id: "ORD-2835", buyer: "GreenLeaf Wholesale", items: "Sweet Corn (2,000kg)", total: "$1,600", status: "Delivered", date: "Mar 20, 2026" },
  { id: "ORD-2830", buyer: "Pacific Foods Inc", items: "Roma Tomatoes (1,000kg)", total: "$2,400", status: "Delivered", date: "Mar 18, 2026" },
];

const statsData = [
  { label: "Total Revenue", value: "$24,580", change: "+12.5%", up: true },
  { label: "Active Listings", value: "4", change: "+1", up: true },
  { label: "Pending Orders", value: "3", change: "-2", up: false },
  { label: "Avg. Rating", value: "4.8", change: "+0.1", up: true },
];

export default function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "inventory" | "orders" | "payouts">("overview");

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Supplier Dashboard</h1>
              <p className="text-slate-500 text-sm">Welcome back, Sunrise Valley Farm</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-agri-600 text-white text-sm font-medium rounded-lg hover:bg-agri-700 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Product
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 -mb-px">
            {(["overview", "inventory", "orders", "payouts"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "border-agri-600 text-agri-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statsData.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                  <div className="flex items-end gap-2">
                    <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                    <span className={`text-xs font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Buyer</th>
                      <th className="px-6 py-3">Items</th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-sm font-medium text-agri-600">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{order.buyer}</td>
                        <td className="px-6 py-4 text-sm text-slate-500">{order.items}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-800">{order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === "Delivered" ? "bg-green-50 text-green-700" :
                            order.status === "Shipped" ? "bg-blue-50 text-blue-700" :
                            "bg-yellow-50 text-yellow-700"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">My Inventory</h2>
              <button className="text-sm text-agri-600 font-medium hover:text-agri-700">+ Add Product</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Orders</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {inventory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.qty}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.price}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === "Active" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.orders}</td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-agri-600 hover:text-agri-700 font-medium mr-3">Edit</button>
                        <button className="text-sm text-red-500 hover:text-red-600 font-medium">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">All Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Buyer</th>
                    <th className="px-6 py-3">Items</th>
                    <th className="px-6 py-3">Total</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-agri-600">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{order.buyer}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{order.items}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">{order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === "Delivered" ? "bg-green-50 text-green-700" :
                          order.status === "Shipped" ? "bg-blue-50 text-blue-700" :
                          "bg-yellow-50 text-yellow-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-agri-600 hover:text-agri-700 font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Payouts Tab */}
        {activeTab === "payouts" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-sm text-slate-500 mb-1">Available Balance</div>
                <div className="text-2xl font-bold text-slate-800">$8,420.00</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-sm text-slate-500 mb-1">Pending Payouts</div>
                <div className="text-2xl font-bold text-slate-800">$3,520.00</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-sm text-slate-500 mb-1">Total Earned (This Month)</div>
                <div className="text-2xl font-bold text-slate-800">$24,580.00</div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-4">Payout History</h2>
              <div className="space-y-3">
                {[
                  { date: "Mar 15, 2026", amount: "$5,200.00", method: "Bank Transfer", status: "Completed" },
                  { date: "Mar 1, 2026", amount: "$7,340.00", method: "Bank Transfer", status: "Completed" },
                  { date: "Feb 15, 2026", amount: "$4,100.00", method: "Bank Transfer", status: "Completed" },
                ].map((payout, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-slate-800">{payout.amount}</div>
                      <div className="text-xs text-slate-500">{payout.method} &middot; {payout.date}</div>
                    </div>
                    <span className="px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">{payout.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
