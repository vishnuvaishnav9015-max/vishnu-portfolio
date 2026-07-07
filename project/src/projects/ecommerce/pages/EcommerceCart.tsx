import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useCart } from '../../../hooks/useCart';

export function EcommerceCart() {
  const { items, removeFromCart, updateQuantity, subtotal, discount, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 rounded-full bg-surface-800 flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-surface-600" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Your cart is empty</h1>
        <p className="text-surface-400 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/projects/ecommerce/products" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500">
          Start Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/projects/ecommerce/products/${item.id}`}
                    className="font-semibold text-white hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>

                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-surface-400">
                    {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                    {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-surface-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-white font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-surface-400 hover:text-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
                  {item.originalPrice && (
                    <div className="text-sm text-surface-500 line-through">
                      ${(item.originalPrice * item.quantity).toFixed(2)}
                    </div>
                  )}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 text-surface-400 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-xl bg-surface-800/50 border border-surface-700">
              <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm text-surface-400 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 rounded-lg bg-surface-700 border border-surface-600 text-white placeholder-surface-400 text-sm focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600">
                    <Tag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-surface-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-400">Discount</span>
                    <span className="text-emerald-400">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-surface-400">Shipping</span>
                  <span className="text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-surface-400">Tax</span>
                  <span className="text-white">${(subtotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-surface-700 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-white">${(total + subtotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/projects/ecommerce/checkout"
                className="btn-primary w-full bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects/ecommerce/products"
                className="block text-center text-blue-400 hover:text-blue-300 text-sm mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
