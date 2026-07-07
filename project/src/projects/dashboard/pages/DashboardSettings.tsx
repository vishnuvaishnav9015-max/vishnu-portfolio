import { useState } from 'react';
import { User, Lock, Bell, Palette, Shield, CreditCard } from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

export function DashboardSettings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-surface-400">Manage your account preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-colors ${
                  activeTab === id
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    : 'text-surface-400 hover:text-white hover:bg-surface-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700 space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Vishnu Vaishnav</h2>
                  <p className="text-surface-400">vishnu@example.com</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-surface-400 mb-2">First Name</label>
                  <input type="text" defaultValue="Vishnu" className="input" />
                </div>
                <div>
                  <label className="block text-sm text-surface-400 mb-2">Last Name</label>
                  <input type="text" defaultValue="Vaishnav" className="input" />
                </div>
                <div>
                  <label className="block text-sm text-surface-400 mb-2">Email</label>
                  <input type="email" defaultValue="vishnu@example.com" className="input" />
                </div>
                <div>
                  <label className="block text-sm text-surface-400 mb-2">Phone</label>
                  <input type="tel" defaultValue="+91 8875717771" className="input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-surface-400 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Full Stack Developer passionate about building great web experiences."
                    className="input resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button className="btn-ghost">Cancel</button>
                <button className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" /> Security Settings
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-surface-400 mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="input" />
                </div>
                <div>
                  <label className="block text-sm text-surface-400 mb-2">New Password</label>
                  <input type="password" placeholder="••••••••" className="input" />
                </div>
                <div>
                  <label className="block text-sm text-surface-400 mb-2">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="input" />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface-700/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-surface-400">Add extra security to your account</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium">
                    Enable
                  </button>
                </div>
              </div>

              <button className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Update Password</button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-400" /> Notification Preferences
              </h2>

              <div className="space-y-4">
                {[
                  { label: 'Email notifications', desc: 'Receive updates via email' },
                  { label: 'Push notifications', desc: 'Browser push notifications' },
                  { label: 'Weekly digest', desc: 'Weekly summary of activity' },
                  { label: 'New user alerts', desc: 'When new users sign up' },
                  { label: 'Order notifications', desc: 'New order alerts' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-lg bg-surface-700/30">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-surface-400">{item.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                  </div>
                ))}
              </div>

              <button className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Save Preferences</button>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" /> Appearance Settings
              </h2>

              <div>
                <label className="block text-sm text-surface-400 mb-3">Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Light', 'Dark', 'System'].map((theme) => (
                    <button
                      key={theme}
                      className={`p-4 rounded-lg border text-sm font-medium ${
                        theme === 'Dark'
                          ? 'bg-purple-500/10 border-purple-500 text-purple-400'
                          : 'bg-surface-700/30 border-surface-600 text-surface-300'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-surface-400 mb-3">Accent Color</label>
                <div className="flex gap-3">
                  {['#a855f7', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e'].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-lg transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <button className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Save Theme</button>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-400" /> Billing & Subscription
              </h2>

              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-400">Current Plan</p>
                    <p className="text-2xl font-bold text-white">Pro Plan</p>
                    <p className="text-sm text-surface-400">$29/month</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium">
                    Upgrade
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-4">Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-surface-700/30">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-surface-400" />
                      <div>
                        <p className="text-white">•••• •••• •••• 4242</p>
                        <p className="text-sm text-surface-400">Expires 12/2025</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">Default</span>
                  </div>
                </div>
              </div>

              <button className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500">Manage Billing</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
