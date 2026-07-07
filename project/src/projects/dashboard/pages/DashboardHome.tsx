import { ArrowUp, ArrowDown, Users, DollarSign, ShoppingBag, Activity, TrendingUp, MoreHorizontal } from 'lucide-react';
import { LineChart, BarChart, DonutChart } from '../components/Charts';

const stats = [
  { label: 'Total Revenue', value: '$52,444', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
  { label: 'Active Users', value: '2,444', change: '+8.2%', trend: 'up', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { label: 'Orders', value: '1,248', change: '-3.1%', trend: 'down', icon: ShoppingBag, color: 'from-amber-500 to-orange-500' },
  { label: 'Growth Rate', value: '23.5%', change: '+4.3%', trend: 'up', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
];

const recentOrders = [
  { id: '#12345', customer: 'John Doe', product: 'Premium Headphones', amount: '$299', status: 'completed' },
  { id: '#12346', customer: 'Jane Smith', product: 'Smart Watch', amount: '$449', status: 'processing' },
  { id: '#12347', customer: 'Bob Wilson', product: 'Wireless Speaker', amount: '$149', status: 'completed' },
  { id: '#12348', customer: 'Alice Brown', product: 'Mechanical Keyboard', amount: '$199', status: 'pending' },
  { id: '#12349', customer: 'Charlie Davis', product: 'Standing Desk', amount: '$699', status: 'completed' },
];

const topProducts = [
  { name: 'Premium Wireless Headphones', sales: 1245, revenue: '$372,515', trend: '+12%', image: 'https://images.unsplash.com/photo-1505740420928-5d5faab2dc92?w=80&auto=format&fit=crop' },
  { name: 'Smart Watch Ultra Pro', sales: 892, revenue: '$400,340', trend: '+8%', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&auto=format&fit=crop' },
  { name: 'Minimalist Backpack', sales: 567, revenue: '$107,163', trend: '+15%', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&auto=format&fit=crop' },
];

export function DashboardHome() {
  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-surface-400">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-600">
            Export
          </button>
        </div>
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

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm text-surface-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <span className="text-sm text-surface-400">Expenses</span>
              </div>
            </div>
          </div>
          <LineChart />
        </div>

        {/* Traffic Sources */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Traffic Sources</h2>
          <DonutChart />
          <div className="mt-4 space-y-2">
            {[
              { label: 'Organic Search', value: '45%', color: 'bg-purple-500' },
              { label: 'Direct', value: '25%', color: 'bg-cyan-500' },
              { label: 'Referral', value: '20%', color: 'bg-amber-500' },
              { label: 'Social', value: '10%', color: 'bg-rose-500' },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${color}`} />
                  <span className="text-surface-400">{label}</span>
                </div>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Sales by Category */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Sales by Category</h2>
          <BarChart />
        </div>

        {/* Activity */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            <Activity className="w-5 h-5 text-surface-400" />
          </div>
          <div className="space-y-4">
            {[
              { text: 'New user registered', time: '2 min ago', type: 'user' },
              { text: 'Order #12345 completed', time: '15 min ago', type: 'order' },
              { text: 'Server CPU at 85%', time: '1 hour ago', type: 'alert' },
              { text: 'New product added', time: '2 hours ago', type: 'product' },
              { text: 'Backup completed', time: '4 hours ago', type: 'system' },
            ].map(({ text, time }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{text}</p>
                  <p className="text-xs text-surface-400">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Recent Orders */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Orders</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-surface-400 uppercase tracking-wider">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-700">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-3 text-sm text-white font-mono">{order.id}</td>
                    <td className="py-3 text-sm text-surface-300">{order.customer}</td>
                    <td className="py-3 text-sm text-surface-300">{order.product}</td>
                    <td className="py-3 text-sm text-white font-medium">{order.amount}</td>
                    <td className="py-3">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          order.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : order.status === 'processing'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-amber-500/10 text-amber-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Top Products</h2>
            <button className="text-surface-400 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{product.name}</p>
                  <p className="text-xs text-surface-400">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white font-medium">{product.revenue}</p>
                  <p className="text-xs text-emerald-400">{product.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
