import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function RealEstateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-xl border-b border-surface-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/projects/realestate" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white">HomeFind</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/projects/realestate"
              className={`text-sm font-medium ${isActive('/projects/realestate') ? 'text-white' : 'text-surface-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/projects/realestate/listings"
              className={`text-sm font-medium ${isActive('/projects/realestate/listings') ? 'text-white' : 'text-surface-400 hover:text-white'}`}
            >
              Buy
            </Link>
            <Link
              to="/projects/realestate/listings"
              className={`text-sm font-medium ${isActive('/projects/realestate/listings') ? 'text-white' : 'text-surface-400 hover:text-white'}`}
            >
              Rent
            </Link>
            <Link to="#" className="text-sm font-medium text-surface-400 hover:text-white">
              Agents
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600">
              <User className="w-4 h-4" /> Sign In
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-surface-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-surface-700">
            <div className="flex flex-col gap-2">
              <Link to="/projects/realestate" className="px-4 py-2 text-white">Home</Link>
              <Link to="/projects/realestate/listings" className="px-4 py-2 text-surface-400 hover:text-white">Buy</Link>
              <Link to="/projects/realestate/listings" className="px-4 py-2 text-surface-400 hover:text-white">Rent</Link>
              <Link to="#" className="px-4 py-2 text-surface-400 hover:text-white">Agents</Link>
              <button className="mx-4 mt-2 py-2 rounded-lg bg-teal-500 text-white">Sign In</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
