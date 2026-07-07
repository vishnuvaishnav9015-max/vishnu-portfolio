import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock, Check, Truck } from 'lucide-react';
import { useCart } from '../../../hooks/useCart';

export function EcommerceCheckout() {
  const { items, subtotal, discount, total } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirm'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const tax = subtotal * 0.08;
  const grandTotal = total + tax;

  const handlePlaceOrder = () => {
    setStep('confirm');
  };

  if (items.length === 0) {
    navigate('/projects/ecommerce/cart');
    return null;
  }

  return (
    <div className="pt-20 min-h-screen bg-surface-950">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/projects/ecommerce/cart"
            className="inline-flex items-center gap-2 text-surface-400 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-4 mb-8">
          {['shipping', 'payment', 'confirm'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === s
                    ? 'bg-blue-500 text-white'
                    : i < ['shipping', 'payment', 'confirm'].indexOf(step)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-surface-700 text-surface-400'
                }`}
              >
                {i < ['shipping', 'payment', 'confirm'].indexOf(step) ? (
                  <Check className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-sm ${step === s ? 'text-white' : 'text-surface-400'}`}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
              {i < 2 && <div className="w-12 h-px bg-surface-700 mx-2" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2">
            {step === 'confirm' ? (
              <div className="p-8 rounded-2xl bg-surface-800/50 border border-surface-700 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h2>
                <p className="text-surface-400 mb-6">
                  Thank you for your purchase. Your order #12345 has been placed successfully.
                </p>
                <p className="text-surface-400 mb-8">
                  We'll send you an email confirmation with tracking details.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/projects/ecommerce" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {step === 'shipping' && (
                  <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700">
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-blue-400" /> Shipping Information
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-surface-400 mb-1">First Name</label>
                        <input type="text" className="input" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm text-surface-400 mb-1">Last Name</label>
                        <input type="text" className="input" placeholder="Doe" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm text-surface-400 mb-1">Email</label>
                        <input type="email" className="input" placeholder="john@example.com" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm text-surface-400 mb-1">Address</label>
                        <input type="text" className="input" placeholder="123 Main Street" />
                      </div>
                      <div>
                        <label className="block text-sm text-surface-400 mb-1">City</label>
                        <input type="text" className="input" placeholder="New York" />
                      </div>
                      <div>
                        <label className="block text-sm text-surface-400 mb-1">ZIP Code</label>
                        <input type="text" className="input" placeholder="10001" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm text-surface-400 mb-1">Phone</label>
                        <input type="tel" className="input" placeholder="+1 234 567 8900" />
                      </div>
                    </div>
                    <button onClick={() => setStep('payment')} className="btn-primary w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500">
                      Continue to Payment
                    </button>
                  </div>
                )}

                {step === 'payment' && (
                  <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700">
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-400" /> Payment Method
                    </h2>

                    {/* Payment Options */}
                    <div className="space-y-3 mb-6">
                      {[
                        { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                        { id: 'paypal', label: 'PayPal', icon: Lock },
                      ].map(({ id, label, icon: Icon }) => (
                        <button
                          key={id}
                          onClick={() => setPaymentMethod(id)}
                          className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                            paymentMethod === id
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-surface-600 hover:border-surface-500'
                          }`}
                        >
                          <Icon className={paymentMethod === id ? 'text-blue-400' : 'text-surface-400'} />
                          <span className={paymentMethod === id ? 'text-white' : 'text-surface-300'}>
                            {label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-surface-400 mb-1">Card Number</label>
                          <input type="text" className="input" placeholder="4242 4242 4242 4242" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-surface-400 mb-1">Expiry Date</label>
                            <input type="text" className="input" placeholder="MM/YY" />
                          </div>
                          <div>
                            <label className="block text-sm text-surface-400 mb-1">CVV</label>
                            <input type="text" className="input" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <button onClick={() => setStep('shipping')} className="btn-ghost flex-1">
                        Back
                      </button>
                      <button onClick={handlePlaceOrder} className="btn-primary flex-1 bg-gradient-to-r from-blue-500 to-cyan-500">
                        Place Order
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-surface-400">
                      <Lock className="w-4 h-4" /> Secure checkout powered by Stripe
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-xl bg-surface-800/50 border border-surface-700">
              <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                {items.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white line-clamp-1">{item.name}</p>
                      <p className="text-xs text-surface-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                {items.length > 3 && (
                  <p className="text-xs text-surface-400">+{items.length - 3} more items</p>
                )}
              </div>

              <div className="border-t border-surface-700 pt-4 space-y-2">
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
                  <span className="text-surface-400">Tax</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-surface-400">Shipping</span>
                  <span className="text-emerald-400">Free</span>
                </div>
              </div>

              <div className="border-t border-surface-700 pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-white">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
