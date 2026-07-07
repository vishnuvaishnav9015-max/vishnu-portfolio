import { Routes, Route } from 'react-router-dom';
import { EcommerceHome } from './EcommerceHome';
import { EcommerceProducts } from './EcommerceProducts';
import { EcommerceProductDetail } from './EcommerceProductDetail';
import { EcommerceCart } from './EcommerceCart';
import { EcommerceCheckout } from './EcommerceCheckout';
import { EcommerceNavbar } from '../components/EcommerceNavbar';

export function EcommerceApp() {
  return (
    <div className="min-h-screen bg-surface-950">
      <EcommerceNavbar />
      <Routes>
        <Route index element={<EcommerceHome />} />
        <Route path="products" element={<EcommerceProducts />} />
        <Route path="products/:id" element={<EcommerceProductDetail />} />
        <Route path="cart" element={<EcommerceCart />} />
        <Route path="checkout" element={<EcommerceCheckout />} />
      </Routes>
    </div>
  );
}
