import { Calendar, Download, TrendingUp, Users, Eye, Clock, Globe } from 'lucide-react';
import { LineChart, AreaChart, BarChart } from '../components/Charts';

export function DashboardAnalytics() {
  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-surface-400">Detailed insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <Calendar className="w-4 h-4" /> Jan 1 - Jun 30, 2024
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Page Views', value: '124,567', change: '+15.3%', icon: Eye },
          { label: 'Unique Visitors', value: '45,678', change: '+12.8%', icon: Users },
          { label: 'Bounce Rate', value: '32.4%', change: '-4.2%', icon: TrendingUp },
          { label: 'Avg. Session', value: '4m 32s', change: '+8.1%', icon: Clock },
        ].map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-surface-400">{label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <span className="text-sm text-emerald-400">{change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Website Traffic</h2>
          <LineChart />
        </div>

        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Weekly Active Users</h2>
          <AreaChart />
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Top Pages</h2>
            <button className="flex items-center gap-1 text-sm text-surface-400 hover:text-white">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-surface-400 uppercase tracking-wider border-b border-surface-700">
                  <th className="pb-3 font-medium">Page</th>
                  <th className="pb-3 font-medium">Views</th>
                  <th className="pb-3 font-medium">Unique</th>
                  <th className="pb-3 font-medium">Bounce</th>
                  <th className="pb-3 font-medium">Time on Page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-700">
                {[
                  { page: '/home', views: '45,234', unique: '32,456', bounce: '28%', time: '3m 45s' },
                  { page: '/products', views: '32,567', unique: '24,345', bounce: '35%', time: '4m 12s' },
                  { page: '/about', views: '18,765', unique: '15,432', bounce: '42%', time: '2m 18s' },
                  { page: '/contact', views: '12,456', unique: '10,234', bounce: '25%', time: '5m 32s' },
                  { page: '/blog', views: '9,876', unique: '8,765', bounce: '38%', time: '6m 45s' },
                ].map((row) => (
                  <tr key={row.page}>
                    <td className="py-3 text-sm text-purple-400 font-mono">{row.page}</td>
                    <td className="py-3 text-sm text-white">{row.views}</td>
                    <td className="py-3 text-sm text-surface-300">{row.unique}</td>
                    <td className="py-3 text-sm text-surface-300">{row.bounce}</td>
                    <td className="py-3 text-sm text-surface-300">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Locations */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold text-white">Top Locations</h2>
          </div>
          <div className="space-y-3">
            {[
              { country: 'United States', visitors: '24,567', percentage: 35 },
              { country: 'United Kingdom', visitors: '12,345', percentage: 18 },
              { country: 'Germany', visitors: '8,765', percentage: 12 },
              { country: 'India', visitors: '7,654', percentage: 11 },
              { country: 'Canada', visitors: '5,432', percentage: 8 },
            ].map(({ country, visitors, percentage }) => (
              <div key={country} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center">
                  <span className="text-xs text-white">{country.slice(0, 2)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white">{country}</span>
                    <span className="text-sm text-surface-400">{visitors}</span>
                  </div>
                  <div className="h-1.5 bg-surface-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device & Browser Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Device Types</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { device: 'Desktop', percent: 52, icon: '🖥️' },
              { device: 'Mobile', percent: 38, icon: '📱' },
              { device: 'Tablet', percent: 10, icon: '📟' },
            ].map(({ device, percent, icon }) => (
              <div key={device} className="text-center p-4 rounded-lg bg-surface-700/30">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-2xl font-bold text-white">{percent}%</div>
                <div className="text-sm text-surface-400">{device}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Browser Distribution</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
