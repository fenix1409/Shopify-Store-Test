import { Link } from "react-router-dom";
import { Star, ChevronRight } from "lucide-react";
import type { Product } from "../data/products";

interface BestSellerSectionProps {
  title: string;
  products: Product[];
  category?: string;
}

const BestSellerSection = ({ title, products, category }: BestSellerSectionProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          to={`/collection${category ? `?category=${encodeURIComponent(category)}` : ""}`}
          className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium transition-colors"
        >
          See More
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.slice(0, 6).map((product, index) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-background border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative mb-3">
              {index < 3 && (
                <div className="absolute -top-2 -left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded z-10">
                  #{index + 1}
                </div>
              )}
              <div className="aspect-square bg-secondary/10 rounded overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h3 className="text-sm font-medium line-clamp-2 mb-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
              {product.name}
            </h3>
            
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < product.rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                {product.reviews.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-price">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;