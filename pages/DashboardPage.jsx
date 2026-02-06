import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  DollarSign,
  Users as UsersIcon,
  ShoppingBag,
  TrendingUp,
  Monitor,
  Loader2,
} from "lucide-react";
import { mockApi } from "../services/api";

const StatCard = ({ label, value, icon, color, trend }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div
        className={`p-3 rounded-xl ${color} bg-opacity-10 text-${color.split("-")[1]}-600`}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-bold px-2 py-1 rounded-full ${trend.startsWith("+") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {trend}
      </span>
    </div>
    <div className="mt-4">
      <h3 className="text-slate-500 text-sm font-medium">{label}</h3>
      <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
    </div>
  </div>
);

const DashboardPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mockApi.getStats();
      setStats(data);
    };
    fetchData();
  }, []);

  if (!stats)
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 text-sm">
            Welcome back, here's what's happening today.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
          Download Report
        </button>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">System Insights</h2>
              <div className="mt-1 text-blue-100 text-sm italic">
                Revenue is up 12% compared to last month. Keep up the great
                work!
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -top-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={<DollarSign />}
          color="bg-blue-500"
          trend="+12.5%"
        />
        <StatCard
          label="New Users"
          value={stats.totalUsers.toString()}
          icon={<UsersIcon />}
          color="bg-purple-500"
          trend="+3.2%"
        />
        <StatCard
          label="Sales"
          value={stats.totalSales.toString()}
          icon={<ShoppingBag />}
          color="bg-orange-500"
          trend="+18.7%"
        />
        <StatCard
          label="Conversion"
          value={`${stats.conversionRate}%`}
          icon={<TrendingUp />}
          color="bg-green-500"
          trend="-1.5%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Revenue Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.revenueHistory}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  cursor={{ stroke: "#2563eb", strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">
            Activity by Category
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: "Electro", val: 400 },
                  { name: "Home", val: 300 },
                  { name: "Beauty", val: 200 },
                  { name: "Sports", val: 278 },
                ]}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{ borderRadius: "12px" }}
                />
                <Bar
                  dataKey="val"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
