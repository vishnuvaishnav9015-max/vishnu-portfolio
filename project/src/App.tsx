import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

// Project Apps
import { DashboardApp } from './projects/dashboard/pages/DashboardApp';
import { SocialApp } from './projects/social/pages/SocialApp';
import { TaskManagerApp } from './projects/taskmanager/pages/TaskManagerApp';
import { RealEstateApp } from './projects/realestate/pages/RealEstateApp';
import { FintechApp } from './projects/fintech/pages/FintechApp';

// E-commerce Pages
import { EcommerceNavbar } from './projects/ecommerce/components/EcommerceNavbar';
import { EcommerceHome } from './projects/ecommerce/pages/EcommerceHome';
import { EcommerceProducts } from './projects/ecommerce/pages/EcommerceProducts';
import { EcommerceProductDetail } from './projects/ecommerce/pages/EcommerceProductDetail';
import { EcommerceCart } from './projects/ecommerce/pages/EcommerceCart';
import { EcommerceCheckout } from './projects/ecommerce/pages/EcommerceCheckout';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Main Portfolio */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />

          {/* E-commerce Project */}
          <Route path="/projects/ecommerce/*" element={<EcommerceProjectRoutes />} />

          {/* Dashboard Project */}
          <Route path="/projects/dashboard/*" element={<DashboardApp />} />

          {/* Social Project */}
          <Route path="/projects/social/*" element={<SocialApp />} />

          {/* Task Manager Project */}
          <Route path="/projects/taskmanager/*" element={<TaskManagerApp />} />

          {/* Real Estate Project */}
          <Route path="/projects/realestate/*" element={<RealEstateApp />} />

          {/* Fintech Project */}
          <Route path="/projects/fintech/*" element={<FintechApp />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

// E-commerce Routes with its own navbar
function EcommerceProjectRoutes() {
  return (
    <>
      <EcommerceNavbar />
      <Routes>
        <Route index element={<EcommerceHome />} />
        <Route path="products" element={<EcommerceProducts />} />
        <Route path="products/:id" element={<EcommerceProductDetail />} />
        <Route path="cart" element={<EcommerceCart />} />
        <Route path="checkout" element={<EcommerceCheckout />} />
      </Routes>
    </>
  );
}

export default App;
