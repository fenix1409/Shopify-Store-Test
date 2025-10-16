import { Link } from "react-router-dom";
import { ChevronRight, Star, Zap, Crown } from "lucide-react";
import type { Product } from "../data/products";

interface BestSellerSectionProps {
  title: string;
  products: Product[];
  category?: string;
}

const BestSellerSection = ({ title, products, category }: BestSellerSectionProps) => {
  const getRankBadge = (index: number) => {
    if (index === 0) {
      return { bg: "bg-gradient-to-r from-yellow-500 to-orange-500", icon: Crown, text: "#1" };
    }
    if (index === 1) {
      return { bg: "bg-gradient-to-r from-gray-400 to-gray-600", icon: Zap, text: "#2" };
    }
    if (index === 2) {
      return { bg: "bg-gradient-to-r from-amber-600 to-amber-800", icon: Star, text: "#3" };
    }
    return null;
  };

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
        </div>
        <Link
          to={`/collection${category ? `?category=${encodeURIComponent(category)}` : ""}`}
          className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 hover:gap-3"
        >
          View All
          <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <ChevronRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.slice(0, 6).map((product, index) => {
          const rankBadge = getRankBadge(index);
          const discount = calculateDiscount(product.price, product.originalPrice);
          
          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white rounded-2xl p-4 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
            >
              {/* Rank Badge */}
              {rankBadge && (
                <div className={`absolute -top-2 -left-2 ${rankBadge.bg} text-white text-xs font-bold px-3 py-2 rounded-full z-10 shadow-lg flex items-center gap-1`}>
                  <rankBadge.icon className="h-3 w-3" />
                  {rankBadge.text}
                </div>
              )}

              {/* Product Badge */}
              {product.badge && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10 shadow-lg">
                  {product.badge}
                </div>
              )}

              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-lg">
                  -{discount}%
                </div>
              )}

              {/* Image Container */}
              <div className="relative mb-4">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden mb-3 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category Tag */}
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  
                  {/* Stock Status */}
                  <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">CAD</span>
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="pt-2 border-t border-gray-100">
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/10 to-purple-500/10 bg-origin-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-2xl bg-white h-full w-full" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default BestSellerSection;