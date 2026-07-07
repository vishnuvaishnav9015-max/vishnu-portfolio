import { Routes, Route } from 'react-router-dom';
import { SocialHome } from './SocialHome';
import { SocialProfile } from './SocialProfile';
import { SocialMessages } from './SocialMessages';
import { SocialNavbar } from '../components/SocialNavbar';

export function SocialApp() {
  return (
    <div className="min-h-screen bg-surface-950">
      <SocialNavbar />
      <Routes>
        <Route index element={<SocialHome />} />
        <Route path="profile/:username" element={<SocialProfile />} />
        <Route path="messages" element={<SocialMessages />} />
      </Routes>
    </div>
  );
}
