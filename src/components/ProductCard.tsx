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
  rating?: number;
}

const ProductCard = ({ id, name, price, originalPrice, image, badge, rating = 5 }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-product hover:shadow-lg transition-all duration-300 animate-fade-in">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-secondary/20 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <Badge className="absolute top-3 left-3 bg-badge text-badge-foreground">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-sale text-white">
              -{discount}%
            </Badge>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="accent" size="lg" className="gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-base mb-2 hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-xs text-muted-foreground ml-1">(124)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
      >
        <Heart className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ProductCard;
