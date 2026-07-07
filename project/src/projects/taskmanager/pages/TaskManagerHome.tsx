import { Link } from 'react-router-dom';
import { Plus, ArrowUp, ArrowDown, Clock, CheckCircle2, AlertTriangle, Users, FolderKanban, TrendingUp, Calendar } from 'lucide-react';

const stats = [
  { label: 'Active Tasks', value: '32', change: '+12%', trend: 'up', icon: FolderKanban, color: 'from-blue-500 to-cyan-500' },
  { label: 'Completed', value: '24', change: '+8%', trend: 'up', icon: CheckCircle2, color: 'from-emerald-500 to-green-500' },
  { label: 'In Progress', value: '14', change: '-3%', trend: 'down', icon: Clock, color: 'from-amber-500 to-orange-500' },
  { label: 'Overdue', value: '5', change: '+2', trend: 'down', icon: AlertTriangle, color: 'from-rose-500 to-red-500' },
];

const recentActivity = [
  { user: 'Sarah Chen', action: 'completed task', target: 'UI Design Review', time: '2 min ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' },
  { user: 'Alex Rivera', action: 'commented on', target: 'API Integration', time: '15 min ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
  { user: 'Emily Zhang', action: 'created task', target: 'Mobile Layout', time: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop' },
  { user: 'Marcus Johnson', action: 'moved to Done', target: 'User Testing', time: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' },
];

const upcomingDeadlines = [
  { name: 'Website Redesign', deadline: 'Jul 15, 2024', priority: 'high', progress: 75 },
  { name: 'Mobile App MVP', deadline: 'Jul 22, 2024', priority: 'medium', progress: 45 },
  { name: 'API Documentation', deadline: 'Jul 30, 2024', priority: 'low', progress: 30 },
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Designer', tasks: 8, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' },
  { name: 'Alex Rivera', role: 'Developer', tasks: 12, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
  { name: 'Emily Zhang', role: 'PM', tasks: 6, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop' },
  { name: 'Marcus Johnson', role: 'QA', tasks: 4, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' },
];

export function TaskManagerHome() {
  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-surface-400">Welcome back! Here's your project overview.</p>
        </div>
        <Link to="/projects/taskmanager/board" className="btn-primary bg-gradient-to-r from-amber-500 to-orange-500">
          <Plus className="w-4 h-4" /> New Task
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, trend, icon: Icon, color }) => (
          <div key={label} className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">{value}</h3>
            <p className="text-sm text-surface-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Deadlines */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Upcoming Deadlines</h2>
            <Calendar className="w-5 h-5 text-surface-400" />
          </div>
          <div className="space-y-4">
            {upcomingDeadlines.map((project) => (
              <div key={project.name} className="p-4 rounded-lg bg-surface-700/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-white">{project.name}</h3>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        project.priority === 'high'
                          ? 'bg-rose-500/20 text-rose-400'
                          : project.priority === 'medium'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-surface-600/50 text-surface-300'
                      }`}
                    >
                      {project.priority}
                    </span>
                  </div>
                  <span className="text-sm text-surface-400">Due {project.deadline}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-surface-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-white font-medium">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            <TrendingUp className="w-5 h-5 text-surface-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={activity.avatar} alt={activity.user} className="w-8 h-8 rounded-full" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-surface-300">
                    <span className="font-medium text-white">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="text-amber-400">{activity.target}</span>
                  </p>
                  <p className="text-xs text-surface-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" /> Team Members
          </h2>
          <button className="text-sm text-amber-400 hover:text-amber-300">View All</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="p-4 rounded-lg bg-surface-700/30 flex items-center gap-3">
              <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium text-white">{member.name}</p>
                <p className="text-sm text-surface-400">{member.role}</p>
                <p className="text-xs text-amber-400">{member.tasks} active tasks</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
