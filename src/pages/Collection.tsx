import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
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
        <section className="bg-gray-50 py-12 border-b border-gray-200" data-aos="fade-down" data-aos-duration="800">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" data-aos="fade-up" data-aos-delay="200">
              Our Collection
            </h1>
            <p className="text-gray-600" data-aos="fade-up" data-aos-delay="300">
              Browse our complete range of premium products
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="hidden lg:block w-64 flex-shrink-0">
              <CategorySidebar />
            </div>

            {showMobileSidebar && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden">
                <div className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto p-4" data-aos="fade-right" data-aos-duration="500">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg text-gray-900">Categories</h2>
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
              <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="relative" data-aos="fade-right" data-aos-delay="300">
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative" data-aos="fade-right" data-aos-delay="400">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="lg:hidden border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowMobileSidebar(true)}
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
                <p className="text-sm text-gray-600">
                  Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
                  {categoryFilter !== 'all' && ` in ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}`}
                </p>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product, index) => (
                    <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="600">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        image={product.image}
                        badge={product.badge}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12" data-aos="fade-up" data-aos-delay="200">
                  <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                  <Button
                    onClick={() => setCategoryFilter('all')}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;