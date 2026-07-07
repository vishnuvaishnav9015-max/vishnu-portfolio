import { FileText, Download, Calendar, Eye, Printer, Share2, Plus } from 'lucide-react';

const reports = [
  {
    id: '1',
    name: 'Monthly Revenue Report',
    type: 'Financial',
    date: 'Jun 30, 2024',
    status: 'ready',
    size: '2.4 MB',
  },
  {
    id: '2',
    name: 'User Engagement Analysis',
    type: 'Analytics',
    date: 'Jun 28, 2024',
    status: 'ready',
    size: '1.8 MB',
  },
  {
    id: '3',
    name: 'Product Performance Q2',
    type: 'Sales',
    date: 'Jun 25, 2024',
    status: 'processing',
    size: '-',
  },
  {
    id: '4',
    name: 'Customer Acquisition Report',
    type: 'Marketing',
    date: 'Jun 20, 2024',
    status: 'ready',
    size: '3.1 MB',
  },
  {
    id: '5',
    name: 'Support Tickets Summary',
    type: 'Support',
    date: 'Jun 15, 2024',
    status: 'ready',
    size: '0.9 MB',
  },
];

const scheduled = [
  { name: 'Weekly Summary', frequency: 'Every Monday', nextRun: 'Jul 8, 2024' },
  { name: 'Monthly Revenue', frequency: '1st of month', nextRun: 'Aug 1, 2024' },
  { name: 'Quarterly Review', frequency: 'Every quarter', nextRun: 'Oct 1, 2024' },
];

export function DashboardReports() {
  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports</h1>
          <p className="text-surface-400">Generate and download detailed reports</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <Calendar className="w-4 h-4" /> Schedule Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium">
            <Plus className="w-4 h-4" /> Generate Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="text-2xl font-bold text-white">24</div>
          <p className="text-sm text-surface-400">Reports Generated</p>
        </div>
        <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="text-2xl font-bold text-white">8</div>
          <p className="text-sm text-surface-400">This Month</p>
        </div>
        <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="text-2xl font-bold text-white">3</div>
          <p className="text-sm text-surface-400">Scheduled</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
          All Reports
        </button>
        {['Financial', 'Analytics', 'Sales', 'Marketing'].map((type) => (
          <button
            key={type}
            className="px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-surface-400 text-sm hover:text-white hover:border-surface-600"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div className="rounded-xl bg-surface-800/50 border border-surface-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-700 text-left text-xs text-surface-400 uppercase tracking-wider">
                <th className="px-5 py-4 font-medium">Report Name</th>
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium">Date</th>
                <th className="px-5 py-4 font-medium">Size</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-700">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-surface-700/30">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-sm text-white font-medium">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-surface-300">{report.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-surface-400">{report.date}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-surface-400">{report.size}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        report.status === 'ready'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-700">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-700">
                        <Printer className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-700">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="p-5 rounded-xl bg-surface-800/50 border border-surface-700">
        <h2 className="text-lg font-semibold text-white mb-4">Scheduled Reports</h2>
        <div className="space-y-3">
          {scheduled.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg bg-surface-700/30"
            >
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-sm text-surface-400">{item.frequency}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-surface-400">Next run</p>
                <p className="text-sm text-white">{item.nextRun}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
