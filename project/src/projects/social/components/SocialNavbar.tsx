import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, MessageCircle, User, Bell } from 'lucide-react';

export function SocialNavbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-xl border-t sm:border-t-0 sm:border-b border-surface-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Desktop Only */}
          <Link to="/projects/social" className="hidden sm:flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white">ConnectHub</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center justify-around sm:justify-center sm:gap-8 w-full sm:w-auto">
            {[
              { path: '/projects/social', icon: Home, label: 'Home' },
              { path: '/projects/social/explore', icon: Search, label: 'Explore' },
              { path: '/projects/social/create', icon: PlusSquare, label: 'Create' },
              { path: '/projects/social/messages', icon: MessageCircle, label: 'Messages' },
              { path: '/projects/social/profile/me', icon: User, label: 'Profile' },
            ].map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 px-3 transition-colors ${
                  isActive(path)
                    ? 'text-white'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs sm:text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="relative p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-800">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
