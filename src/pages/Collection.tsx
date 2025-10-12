import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import CategorySidebar from "../components/CategorySidebar";

const Collection = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

  const filteredProducts = products.filter(product => 
    categoryFilter === "all" || product.category.toLowerCase() === categoryFilter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Our Collection</h1>
            <p className="text-muted-foreground">Browse our complete range of premium products</p>
          </div>
        </section>

        <section className="mx-auto px-4 py-12">
          <div className="flex gap-8">
            <div className="hidden lg:block w-64 flex-shrink-0">
              <CategorySidebar />
            </div>

            {showMobileSidebar && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden">
                <div className="fixed left-0 top-0 bottom-0 w-80 bg-background shadow-xl overflow-y-auto animate-slide-in-right p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg">Categories</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowMobileSidebar(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <CategorySidebar />
                </div>
              </div>
            )}

            <div className="flex-1">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setShowMobileSidebar(true)}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    badge={product.badge}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;