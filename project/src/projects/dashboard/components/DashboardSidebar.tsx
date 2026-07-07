import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
  Users,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronLeft,
  LogOut,
} from 'lucide-react';

const navItems = [
  { path: '/projects/dashboard', label: 'Overview', icon: LayoutDashboard, exact: true },
  { path: '/projects/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/projects/dashboard/reports', label: 'Reports', icon: FileText },
  { path: '/projects/dashboard/users', label: 'Users', icon: Users },
  { path: '/projects/dashboard/products', label: 'Products', icon: ShoppingBag },
  { path: '/projects/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-surface-900 border-b border-surface-800 lg:hidden">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-surface-400">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <span className="font-bold text-white">Analytics Pro</span>
          <div className="w-10" />
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 bg-surface-900 border-r border-surface-800 transition-all duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="hidden lg:flex items-center justify-between h-16 px-4 border-b border-surface-800">
            {!collapsed && (
              <Link to="/projects/dashboard" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Analytics</span>
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Search */}
          {!collapsed && (
            <div className="hidden lg:block px-4 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm placeholder-surface-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map(({ path, label, icon: Icon, exact }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  isActive(path, exact)
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {(!collapsed || mobileOpen) && <span className="font-medium">{label}</span>}
              </Link>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-surface-800">
            <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              {(!collapsed || mobileOpen) && (
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white truncate">Vishnu</p>
                  <p className="text-xs text-surface-400 truncate">Admin</p>
                </div>
              )}
              {(!collapsed || mobileOpen) && (
                <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800">
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
