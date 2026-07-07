import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CreditCard, ArrowLeftRight, PieChart, Settings, Bell, Search, Menu, X, Wallet } from 'lucide-react';
import { useState } from 'react';

export function FintechNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/projects/fintech', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { path: '/projects/fintech/transactions', label: 'Transactions', icon: ArrowLeftRight },
    { path: '/projects/fintech/cards', label: 'Cards', icon: CreditCard },
    { path: '/projects/fintech/analytics', label: 'Analytics', icon: PieChart },
    { path: '/projects/fintech/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-xl border-b border-surface-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/projects/fintech" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white">PaySmart</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon, exact }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive(path, exact)
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800 hidden sm:flex">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-surface-400">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-surface-700">
            <div className="flex flex-col gap-1">
              {navItems.map(({ path, label, icon: Icon, exact }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium ${
                    isActive(path, exact)
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-surface-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" /> {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
