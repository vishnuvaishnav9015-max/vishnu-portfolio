import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';
import { products } from '../../../data/products';
import { ProductCard } from '../components/ProductCard';

const categories = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1756705533779-105bf34e0722?w=400&auto=format&fit=crop', count: 156 },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&auto=format&fit=crop', count: 234 },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&auto=format&fit=crop', count: 89 },
  { name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&auto=format&fit=crop', count: 67 },
];

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
  { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support' },
  { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
];

export function EcommerceHome() {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/90 to-surface-950/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <Sparkles className="w-4 h-4" /> New Collection 2024
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover the
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
              {' '}of Shopping
            </h1>

            <p className="text-lg text-surface-300 mb-8">
              Premium products curated for the modern lifestyle. Experience shopping like never before with our AI-powered recommendations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects/ecommerce/products" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/projects/ecommerce/products" className="btn-ghost">
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-surface-400">Explore our curated collection</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/projects/ecommerce/products"
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                  <p className="text-sm text-surface-400">{cat.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-y border-surface-800 bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-sm text-surface-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Products</h2>
              <p className="text-surface-400">Hand-picked favorites</p>
            </div>
            <Link
              to="/projects/ecommerce/products"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12">
            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                Limited Time
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Summer Sale Up to 50% Off
              </h2>
              <p className="text-white/80 mb-6">
                Don't miss out on amazing deals on electronics, fashion, and more.
              </p>
              <Link
                to="/projects/ecommerce/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-surface-100 transition-colors"
              >
                Shop the Sale <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">New Arrivals</h2>
              <p className="text-surface-400">Latest in our collection</p>
            </div>
            <Link
              to="/projects/ecommerce/products"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
