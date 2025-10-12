import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-gray-100 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {badge && (
            <Badge className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </Badge>
          )}
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-base mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)} CAD</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)} CAD
            </span>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white"
        aria-label="Add to wishlist"
      >
        <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
      </Button>
    </div>
  );
};

export default ProductCard;