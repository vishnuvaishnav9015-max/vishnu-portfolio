import { CreditCard, Lock, Eye, Settings, Plus, ChevronRight, MoreHorizontal } from 'lucide-react';

const cards = [
  {
    id: 'card1',
    type: 'Platinum Card',
    number: '4582 •••• •••• 3456',
    fullNumber: '4582 1234 5678 3456',
    balance: 12450.00,
    limit: 50000.00,
    expiry: '12/26',
    cvv: '123',
    color: 'from-indigo-600 to-violet-600',
    status: 'active',
  },
  {
    id: 'card2',
    type: 'Travel Card',
    number: '7891 •••• •••• 2891',
    fullNumber: '7891 2345 6789 2891',
    balance: 5680.00,
    limit: 20000.00,
    expiry: '08/25',
    cvv: '456',
    color: 'from-amber-500 to-orange-500',
    status: 'active',
  },
  {
    id: 'card3',
    type: 'Business Card',
    number: '1234 •••• •••• 6912',
    fullNumber: '1234 5678 9012 6912',
    balance: 8750.00,
    limit: 30000.00,
    expiry: '03/27',
    cvv: '789',
    color: 'from-emerald-500 to-teal-500',
    status: 'inactive',
  },
];

const cardTransactions = [
  { name: 'Apple Store', amount: -199.99, date: 'Jul 3' },
  { name: 'Amazon', amount: -89.99, date: 'Jul 2' },
  { name: 'Netflix', amount: -14.99, date: 'Jul 1' },
];

export function FintechCards() {
  return (
    <div className="pt-20 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Cards</h1>
          <p className="text-surface-400">Manage your credit and debit cards</p>
        </div>
        <button className="btn-primary bg-gradient-to-r from-indigo-500 to-violet-500">
          <Plus className="w-4 h-4" /> Add Card
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="space-y-4">
            {/* Card */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-2 border-white" />
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-2 border-white" />
              </div>

              {/* Card Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <CreditCard className="w-8 h-8 text-white" />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    card.status === 'active' ? 'bg-white/20 text-white' : 'bg-surface-500/20 text-white/70'
                  }`}>
                    {card.status}
                  </span>
                </div>

                <p className="text-xl font-mono text-white mb-6 tracking-wider">{card.number}</p>

                <div className="flex items-center justify-between text-white/80 text-sm">
                  <div>
                    <p className="text-xs text-white/60">VALID THRU</p>
                    <p>{card.expiry}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">BALANCE</p>
                    <p className="font-semibold">${card.balance.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Info */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{card.type}</h3>
                <button className="p-2 rounded-lg text-surface-400 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-400">Credit Limit</span>
                  <span className="text-white">${card.limit.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-400">Available</span>
                  <span className="text-emerald-400">${(card.limit - card.balance).toLocaleString()}</span>
                </div>
                <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${card.color}`}
                    style={{ width: `${(card.balance / card.limit) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-surface-700">
                <button className="flex-1 btn-ghost text-sm flex items-center justify-center gap-1">
                  <Lock className="w-4 h-4" /> Lock
                </button>
                <button className="flex-1 btn-ghost text-sm flex items-center justify-center gap-1">
                  <Eye className="w-4 h-4" /> Details
                </button>
                <button className="flex-1 btn-ghost text-sm flex items-center justify-center gap-1">
                  <Settings className="w-4 h-4" /> Settings
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button className="h-full min-h-[300px] rounded-2xl border-2 border-dashed border-surface-600 flex flex-col items-center justify-center text-surface-400 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors">
          <Plus className="w-8 h-8 mb-2" />
          <span className="font-medium">Add New Card</span>
        </button>
      </div>

      {/* Recent Card Activity */}
      <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Card Activity</h2>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {cardTransactions.map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-700/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-700 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-surface-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{tx.name}</p>
                  <p className="text-xs text-surface-400">{tx.date}</p>
                </div>
              </div>
              <span className="font-semibold text-white">{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tips */}
      <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Security Tips</h3>
            <ul className="text-sm text-surface-300 space-y-1">
              <li>Never share your card details or CVV with anyone</li>
              <li>Lock your card immediately if you suspect unauthorized activity</li>
              <li>Enable transaction notifications to track real-time activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
