import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../../types';
import { useCart } from '../../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/projects/ecommerce/products/${product.id}`}
      className="group block"
    >
      <div className="card-hover overflow-hidden bg-surface-800/50">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-rose-500 text-white text-xs font-semibold">
              -{discount}%
            </div>
          )}

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur text-surface-700 flex items-center justify-center hover:bg-white hover:text-rose-500 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-surface-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 rounded-lg bg-white text-surface-900 font-semibold text-sm hover:bg-surface-100 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-surface-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-white">{product.rating}</span>
            <span className="text-xs text-surface-500">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-surface-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
