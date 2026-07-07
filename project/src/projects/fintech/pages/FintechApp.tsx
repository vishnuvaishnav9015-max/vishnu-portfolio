import { Routes, Route } from 'react-router-dom';
import { FintechDashboard } from './FintechDashboard';
import { FintechTransactions } from './FintechTransactions';
import { FintechCards } from './FintechCards';
import { FintechNavbar } from '../components/FintechNavbar';

export function FintechApp() {
  return (
    <div className="min-h-screen bg-surface-950">
      <FintechNavbar />
      <Routes>
        <Route index element={<FintechDashboard />} />
        <Route path="transactions" element={<FintechTransactions />} />
        <Route path="cards" element={<FintechCards />} />
      </Routes>
    </div>
  );
}
