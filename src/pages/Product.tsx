import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Share2, Check, Truck, RefreshCw, Shield, Star } from "lucide-react";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import Footer from "../components/sections/Footer";
import ProductCard from "../components/ProductCard";
import ProductSubcategories from "../components/ProductSubcategories";

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button asChild>
              <Link to="/collection">Back to Collection</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/collection" className="hover:text-blue-600 transition-colors">Collection</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block w-64 flex-shrink-0">
              <ProductSubcategories category={product.category} />
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        -{discount}% OFF
                      </span>
                    )}
                  </div>
                  
                  {product.images && product.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-4">
                      {product.images.map((img, index) => (
                        <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all">
                          <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                      {product.inStock && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          In Stock
                        </span>
                      )}
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(128 reviews)</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Button size="lg" className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </Button>
                      <Button size="lg" variant="outline" className="border-gray-300">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="border-gray-300">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Buy Now
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                      <Truck className="h-6 w-6 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">Free Shipping</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                      <RefreshCw className="h-6 w-6 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">Easy Returns</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">Secure Payment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 border-t border-gray-200 pt-12">
                <div className="border-b border-gray-200">
                  <div className="flex space-x-8">
                    <button className="pb-4 px-1 border-b-2 border-blue-600 text-blue-600 font-medium">
                      Features
                    </button>
                    <button className="pb-4 px-1 text-gray-500 hover:text-gray-700 font-medium">
                      Description
                    </button>
                    <button className="pb-4 px-1 text-gray-500 hover:text-gray-700 font-medium">
                      Reviews (128)
                    </button>
                  </div>
                </div>

                <div className="py-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {relatedProducts.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((relatedProduct) => (
                      <ProductCard
                        key={relatedProduct.id}
                        id={relatedProduct.id}
                        name={relatedProduct.name}
                        price={relatedProduct.price}
                        originalPrice={relatedProduct.originalPrice}
                        image={relatedProduct.image}
                        badge={relatedProduct.badge}
                      />
                    ))}
                  </div>
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

export default Product;