import { Routes, Route } from 'react-router-dom';
import { RealEstateHome } from './RealEstateHome';
import { RealEstateListings } from './RealEstateListings';
import { RealEstateDetail } from './RealEstateDetail';
import { RealEstateNavbar } from '../components/RealEstateNavbar';

export function RealEstateApp() {
  return (
    <div className="min-h-screen bg-surface-950">
      <RealEstateNavbar />
      <Routes>
        <Route index element={<RealEstateHome />} />
        <Route path="listings" element={<RealEstateListings />} />
        <Route path="property/:id" element={<RealEstateDetail />} />
      </Routes>
    </div>
  );
}
