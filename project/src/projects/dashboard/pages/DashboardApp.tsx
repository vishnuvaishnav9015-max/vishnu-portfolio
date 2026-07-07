import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from './DashboardHome';
import { DashboardAnalytics } from './DashboardAnalytics';
import { DashboardReports } from './DashboardReports';
import { DashboardSettings } from './DashboardSettings';
import { DashboardSidebar } from '../components/DashboardSidebar';

export function DashboardApp() {
  return (
    <div className="min-h-screen bg-surface-950 flex">
      <DashboardSidebar />
      <div className="flex-1 ml-0 lg:ml-64">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="reports" element={<DashboardReports />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Routes>
      </div>
    </div>
  );
}
