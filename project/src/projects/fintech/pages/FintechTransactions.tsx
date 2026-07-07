import { useState } from 'react';
import { ArrowUp, ArrowDown, Search, Download, ArrowLeftRight, Calendar } from 'lucide-react';

const transactions = [
  { id: 't1', name: 'Netflix Subscription', amount: -14.99, type: 'expense', category: 'Entertainment', date: 'Jul 4, 2024', account: 'Checking', icon: '🎬', status: 'completed' },
  { id: 't2', name: 'Salary Deposit', amount: 5400.00, type: 'income', category: 'Income', date: 'Jul 3, 2024', account: 'Checking', icon: '💰', status: 'completed' },
  { id: 't3', name: 'Starbucks', amount: -6.50, type: 'expense', category: 'Food', date: 'Jul 3, 2024', account: 'Credit Card', icon: '☕', status: 'completed' },
  { id: 't4', name: 'Amazon Purchase', amount: -89.99, type: 'expense', category: 'Shopping', date: 'Jul 2, 2024', account: 'Credit Card', icon: '📦', status: 'completed' },
  { id: 't5', name: 'Transfer to Savings', amount: -500.00, type: 'transfer', category: 'Transfer', date: 'Jul 2, 2024', account: 'Savings', icon: '↗️', status: 'completed' },
  { id: 't6', name: 'Apple Music', amount: -9.99, type: 'expense', category: 'Entertainment', date: 'Jul 1, 2024', account: 'Checking', icon: '🎵', status: 'completed' },
  { id: 't7', name: 'Gym Membership', amount: -49.99, type: 'expense', category: 'Health', date: 'Jun 28, 2024', account: 'Checking', icon: '🏋️', status: 'completed' },
  { id: 't8', name: 'Freelance Payment', amount: 1200.00, type: 'income', category: 'Income', date: 'Jun 27, 2024', account: 'Checking', icon: '💻', status: 'completed' },
  { id: 't9', name: 'Grocery Store', amount: -156.78, type: 'expense', category: 'Food', date: 'Jun 26, 2024', account: 'Credit Card', icon: '🛒', status: 'completed' },
  { id: 't10', name: 'Uber Ride', amount: -23.50, type: 'expense', category: 'Transport', date: 'Jun 25, 2024', account: 'Credit Card', icon: '🚗', status: 'pending' },
];

const categories = ['All', 'Income', 'Food', 'Shopping', 'Entertainment', 'Transport', 'Health', 'Transfer'];

export function FintechTransactions() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [transactionType, setTransactionType] = useState('all');

  const filteredTransactions = transactions.filter((tx) => {
    if (filter !== 'All' && tx.category !== filter) return false;
    if (transactionType !== 'all' && tx.type !== transactionType) return false;
    if (searchQuery && !tx.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalIncome = transactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
  const totalExpenses = Math.abs(transactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0));

  return (
    <div className="pt-20 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Transactions</h1>
          <p className="text-surface-400">{filteredTransactions.length} transactions</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <Calendar className="w-4 h-4" /> This Month
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-surface-400">Income</span>
          </div>
          <p className="text-2xl font-bold text-emerald-400">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-rose-400" />
            </div>
            <span className="text-surface-400">Expenses</span>
          </div>
          <p className="text-2xl font-bold text-rose-400">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <ArrowLeftRight className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="text-surface-400">Net</span>
          </div>
          <p className="text-2xl font-bold text-white">${(totalIncome - totalExpenses).toLocaleString()}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-surface-700 border border-surface-600 text-white placeholder-surface-400 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'income', 'expense'].map((type) => (
              <button
                key={type}
                onClick={() => setTransactionType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  transactionType === type
                    ? 'bg-indigo-500 text-white'
                    : 'bg-surface-700 text-surface-300 hover:text-white'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === cat
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  : 'bg-surface-700/50 text-surface-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="rounded-xl bg-surface-800/50 border border-surface-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-700 text-left text-xs text-surface-400 uppercase tracking-wider">
                <th className="px-5 py-4 font-medium">Transaction</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Date</th>
                <th className="px-5 py-4 font-medium">Account</th>
                <th className="px-5 py-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-700">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-700/30">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tx.icon}</span>
                      <span className="font-medium text-white">{tx.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="px-2 py-1 rounded bg-surface-700 text-surface-300 text-xs">{tx.category}</span>
                  </td>
                  <td className="px-5 py-4 text-surface-400 text-sm">{tx.date}</td>
                  <td className="px-5 py-4 text-surface-400 text-sm">{tx.account}</td>
                  <td className="px-5 py-4 text-right">
                    <span className={`font-semibold ${tx.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
