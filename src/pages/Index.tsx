import { Link } from "react-router-dom";
import { ShoppingBag, Shield, Truck, Headphones } from "lucide-react";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import TrustBadges from "../components/TrustBadges";
import ProductCard from "../components/ProductCard";
import Footer from "../components/sections/Footer";
import BestSellerSection from "../components/BestSellerSection";
import SwiperHero from "../components/Swiper";

const CATEGORIES = [
  { name: "Electronics", key: "electronics" },
  { name: "Bags", key: "bags" },
  { name: "Accessories", key: "accessories" },
  { name: "Footwear", key: "footwear" }
]

const bestSellers = [
  { title: "Best Sellers in Beauty & Personal Care", category: "beauty" },
  { title: "Best Sellers in Electronics", category: "electronics" },
  { title: "Best Sellers in Clothing, Shoes & Jewelry", category: "accessories" },
  { title: "Best Sellers in Sports & Outdoors", category: "footwear" }
]

const FEATURES = [
  { icon: Truck, title: "Free Shipping", description: "Free delivery on orders over $50" },
  { icon: Shield, title: "Secure Payment", description: "100% secure payment processing" },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer service" },
  { icon: ShoppingBag, title: "Easy Returns", description: "30-day return policy" }
]

const Index: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  const getProductsByCategory = (category: string) => products.filter((p) => p.category.toLowerCase() === category);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <SwiperHero/>

        <section className="bg-white border-b border-gray-200" data-aos="fade-up" data-aos-delay="200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <TrustBadges />
          </div>
        </section>

        <section className="bg-white border-b border-gray-200" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-white rounded-lg p-6 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <feature.icon className="h-7 w-7 text-gray-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Curated selection of our most popular and trending items
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredProducts.map((product, index) => (
                <div key={product.id} data-aos="fade-up" data-aos-delay={index * 150}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-none">
                <Link to="/collection">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-50" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
            {bestSellers.map((item, index) => (
              <div key={item.category} data-aos="fade-up" data-aos-delay={index * 100}>
                <BestSellerSection
                  title={item.title}
                  products={getProductsByCategory(item.category)}
                  category={item.category}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((category, index) => (
                <Link
                  key={category.key}
                  to={`/collection?category=${category.key}`}
                  className="group relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                        Shop Now →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="100">
              Join Our Newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Get exclusive access to special offers, new arrivals, and insider updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault() }} data-aos="fade-up" data-aos-delay="300">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                required
                autoComplete="email"
              />
              <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 text-base font-semibold cursor-pointer whitespace-nowrap transition-all duration-300 rounded-lg">
                Subscribe
              </Button>
            </form>
            <p className="text-gray-400 text-sm mt-4" data-aos="fade-up" data-aos-delay="400">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;