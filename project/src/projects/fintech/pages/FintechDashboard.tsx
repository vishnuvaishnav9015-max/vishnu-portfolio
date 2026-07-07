import { Link } from 'react-router-dom';
import { Send, Download, CreditCard, Wallet, TrendingUp, PiggyBank, ChevronRight, MoreHorizontal } from 'lucide-react';
import { BarChart } from '../../dashboard/components/Charts';

const accounts = [
  { name: 'Checking', balance: 24567.32, type: 'checking', color: 'from-blue-500 to-cyan-500', icon: Wallet },
  { name: 'Savings', balance: 12850.00, type: 'savings', color: 'from-emerald-500 to-green-500', icon: PiggyBank },
  { name: 'Investment', balance: 48200.00, type: 'investment', color: 'from-purple-500 to-violet-500', icon: TrendingUp },
];

const quickTransferRecipients = [
  { name: 'Sarah Chen', username: '@sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' },
  { name: 'Alex Kim', username: '@alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
  { name: 'Emily Liu', username: '@emily', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop' },
];

const recentTransactions = [
  { name: 'Netflix Subscription', amount: -14.99, type: 'expense', category: 'Entertainment', date: 'Today', icon: '🎬' },
  { name: 'Salary Deposit', amount: 5400.00, type: 'income', category: 'Income', date: 'Yesterday', icon: '💰' },
  { name: 'Starbucks', amount: -6.50, type: 'expense', category: 'Food', date: 'Yesterday', icon: '☕' },
  { name: 'Amazon Purchase', amount: -89.99, type: 'expense', category: 'Shopping', date: 'Jul 1', icon: '📦' },
  { name: 'Transfer to Savings', amount: -500.00, type: 'transfer', category: 'Transfer', date: 'Jul 1', icon: '↗️' },
];

export function FintechDashboard() {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="pt-20 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-surface-400">Welcome back,</p>
          <h1 className="text-2xl font-bold text-white">Vishnu</h1>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-800 border border-surface-700 text-white text-sm">
            <Download className="w-4 h-4" /> Top Up
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-medium">
            <Send className="w-4 h-4" /> Send Money
          </button>
        </div>
      </div>

      {/* Total Balance */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600">
        <p className="text-indigo-100 text-sm">Total Balance</p>
        <p className="text-4xl font-bold text-white mt-1">${totalBalance.toLocaleString()}</p>
        <p className="text-indigo-200 text-sm mt-1 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" /> +12.5% from last month
        </p>
      </div>

      {/* Accounts */}
      <div className="grid sm:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div key={account.name} className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center`}>
                <account.icon className="w-6 h-6 text-white" />
              </div>
              <button className="p-2 rounded-lg text-surface-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-surface-400">{account.name}</p>
            <p className="text-2xl font-bold text-white">${account.balance.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Quick Transfer */}
      <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Quick Transfer</h2>
          <Link to="#" className="text-sm text-indigo-400 hover:text-indigo-300">View All</Link>
        </div>
        <div className="flex items-center gap-6 overflow-x-auto pb-2">
          {/* Add New */}
          <button className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-surface-600 flex items-center justify-center text-surface-400">
              +
            </div>
            <span className="text-xs text-surface-400">Add New</span>
          </button>
          {quickTransferRecipients.map((recipient) => (
            <button key={recipient.username} className="flex flex-col items-center gap-2 flex-shrink-0 group">
              <div className="relative">
                <img src={recipient.avatar} alt={recipient.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="absolute inset-0 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-colors" />
              </div>
              <span className="text-xs text-surface-400 group-hover:text-white transition-colors">{recipient.name}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <input type="number" placeholder="Enter amount" className="flex-1 input" />
          <button className="btn-primary bg-gradient-to-r from-indigo-500 to-violet-500">
            Send <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-2 p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <Link to="/projects/fintech/transactions" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-700 flex items-center justify-center text-lg">
                    {tx.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white">{tx.name}</p>
                    <p className="text-xs text-surface-400">{tx.category} • {tx.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${tx.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spending by Category */}
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <h2 className="text-lg font-semibold text-white mb-4">Spending</h2>
          <BarChart />
          <div className="mt-4 space-y-2">
            {[
              { label: 'Shopping', percent: 35, color: 'bg-indigo-500' },
              { label: 'Food', percent: 25, color: 'bg-emerald-500' },
              { label: 'Transport', percent: 20, color: 'bg-amber-500' },
              { label: 'Entertainment', percent: 20, color: 'bg-rose-500' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="flex-1 text-sm text-surface-400">{item.label}</span>
                <span className="text-sm text-white">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credit Card Preview */}
      <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Your Cards</h2>
          <Link to="/projects/fintech/cards" className="text-sm text-indigo-400 hover:text-indigo-300">Manage</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { type: 'Platinum Card', number: '•••• 4582', balance: 12450.00, expiry: '12/26', color: 'from-indigo-600 to-violet-600' },
            { type: 'Travel Card', number: '•••• 7891', balance: 5680.00, expiry: '08/25', color: 'from-amber-500 to-orange-500' },
          ].map((card) => (
            <div key={card.number} className={`p-5 rounded-xl bg-gradient-to-br ${card.color}`}>
              <div className="flex items-center justify-between mb-6">
                <CreditCard className="w-8 h-8 text-white" />
                <span className="text-white/80 text-sm font-medium">{card.type}</span>
              </div>
              <p className="text-2xl font-mono text-white mb-4">{card.number}</p>
              <div className="flex items-center justify-between text-white/80 text-sm">
                <span>Balance: ${card.balance.toLocaleString()}</span>
                <span>Exp: {card.expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
