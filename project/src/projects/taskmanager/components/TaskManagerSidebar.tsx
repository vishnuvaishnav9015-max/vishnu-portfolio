import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, LayoutDashboard, Plus, Calendar, Users, Settings, Search, Menu, X,
  ChevronLeft, FolderKanban,
} from 'lucide-react';

const navItems = [
  { path: '/projects/taskmanager', label: 'Dashboard', icon: Home, exact: true },
  { path: '/projects/taskmanager/board', label: 'Kanban Board', icon: LayoutDashboard },
  { path: '/projects/taskmanager/timeline', label: 'Timeline', icon: Calendar },
  { path: '/projects/taskmanager/team', label: 'Team', icon: Users },
  { path: '/projects/taskmanager/settings', label: 'Settings', icon: Settings },
];

const projects = [
  { id: '1', name: 'Website Redesign', color: 'bg-blue-500', tasks: 24 },
  { id: '2', name: 'Mobile App', color: 'bg-emerald-500', tasks: 18 },
  { id: '3', name: 'API Development', color: 'bg-amber-500', tasks: 12 },
];

export function TaskManagerSidebar() {
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
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-surface-900 border-b border-surface-800">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-surface-400">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <span className="font-bold text-white">TaskFlow Pro</span>
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
              <Link to="/projects/taskmanager" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <FolderKanban className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">TaskFlow</span>
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
                  placeholder="Search tasks..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm placeholder-surface-400 focus:outline-none focus:border-amber-500"
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
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {(!collapsed || mobileOpen) && <span className="font-medium">{label}</span>}
              </Link>
            ))}

            {/* Projects */}
            {(!collapsed || mobileOpen) && (
              <div className="pt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-xs uppercase tracking-wider text-surface-500">Projects</span>
                  <button className="p-1 rounded text-surface-400 hover:text-white">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/taskmanager/board/${project.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-surface-400 hover:text-white hover:bg-surface-800"
                  >
                    <div className={`w-3 h-3 rounded ${project.color}`} />
                    <span className="flex-1 truncate">{project.name}</span>
                    <span className="text-xs text-surface-500">{project.tasks}</span>
                  </Link>
                ))}
              </div>
            )}
          </nav>

          {/* Quick Stats */}
          {(!collapsed || mobileOpen) && (
            <div className="p-4 border-t border-surface-800">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-surface-800">
                  <p className="text-lg font-bold text-white">54</p>
                  <p className="text-xs text-surface-400">Tasks</p>
                </div>
                <div className="p-3 rounded-lg bg-surface-800">
                  <p className="text-lg font-bold text-white">12</p>
                  <p className="text-xs text-surface-400">Completed</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
