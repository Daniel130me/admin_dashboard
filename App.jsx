import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  Monitor,
} from "lucide-react";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import SettingsPage from "./pages/SettingsPage";

const SidebarLink = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
    </Link>
  );
};

const Sidebar = ({ isOpen, onClose }) => (
  <aside
    className={`
    fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
  >
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
          <Monitor className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <SidebarLink
          to="/"
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
        />
        <SidebarLink
          to="/users"
          icon={<Users className="w-5 h-5" />}
          label="Users"
        />
        <SidebarLink
          to="/products"
          icon={<Package className="w-5 h-5" />}
          label="Products"
        />
        <SidebarLink
          to="/settings"
          icon={<Settings className="w-5 h-5" />}
          label="Settings"
        />
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <p className="text-sm font-semibold text-slate-700">Dashboard Live</p>
          <p className="text-xs text-slate-500 mt-1">Real-time data active</p>
        </div>
      </div>
    </div>
  </aside>
);

const Header = ({ onToggleSidebar }) => (
  <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
    <div className="flex items-center space-x-4">
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-80">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Quick search..."
          className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-slate-600"
        />
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <div className="h-8 w-px bg-slate-200 mx-2"></div>
      <div className="flex items-center space-x-3 cursor-pointer group">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
            Alex Rivers
          </p>
          <p className="text-xs text-slate-500">Administrator</p>
        </div>
        <img
          src="https://picsum.photos/seed/admin/40/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-slate-100 group-hover:border-blue-400 transition-all"
        />
      </div>
    </div>
  </header>
);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col min-w-0">
          <Header onToggleSidebar={() => setIsSidebarOpen(true)} />

          <main className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
