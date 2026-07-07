import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, Minus, Plus, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../../../data/products';
import { useCart } from '../../../hooks/useCart';
import { ProductCard } from '../components/ProductCard';

export function EcommerceProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-surface-400">Product not found</p>
        <Link to="/projects/ecommerce/products" className="text-blue-400 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-surface-400 mb-8">
          <Link to="/projects/ecommerce" className="hover:text-white">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/projects/ecommerce/products" className="hover:text-white">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-800">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {discount > 0 && (
                <span className="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 text-sm font-medium">
                  {discount}% OFF
                </span>
              )}
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                In Stock
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-surface-600'}`}
                  />
                ))}
              </div>
              <span className="text-white font-medium">{product.rating}</span>
              <span className="text-surface-400">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-surface-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-surface-400 mb-8">{product.description}</p>

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white mb-3">
                  Color: <span className="text-surface-400">{selectedColor}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-colors ${
                        selectedColor === color.name ? 'border-blue-500' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                          : 'border-surface-600 text-surface-400 hover:border-surface-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-white mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-surface-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-surface-400 hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-white font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-surface-400 hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button onClick={handleAddToCart} className="btn-primary flex-1 bg-gradient-to-r from-blue-500 to-cyan-500">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button className="btn-ghost">
                <Heart className="w-4 h-4" />
              </button>
              <button className="btn-ghost">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-surface-700 pt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-surface-300">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-surface-300">Estimated delivery: 3-5 business days</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-surface-300">2-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <span className="text-surface-300">30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        {product.features && (
          <div className="mt-16 p-6 rounded-2xl bg-surface-800/50 border border-surface-700">
            <h2 className="text-xl font-semibold text-white mb-4">Product Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-surface-700/30">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-surface-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
