import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Share2, Star, Check, Truck, RefreshCw, Shield } from "lucide-react";
import { products } from "../data/products";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import ProductCard from "../components/ProductCard";
import ProductSubcategories from "../components/ProductSubcategories";

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
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
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-primary transition-colors">Collection</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Subcategories Sidebar */}
            <div className="hidden lg:block w-56 flex-shrink-0">
              <ProductSubcategories category={product.category} />
            </div>

            {/* Main Product Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-badge text-badge-foreground">
                    {product.badge}
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="absolute top-4 right-4 bg-sale text-white">
                    -{discount}% OFF
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images?.map((img, index) => (
                  <div key={index} className="aspect-square bg-secondary/20 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  {product.inStock && (
                    <Badge className="bg-success text-success-foreground">
                      <Check className="h-3 w-3 mr-1" />
                      In Stock
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-price">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button size="lg" variant="accent" className="flex-1 gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button size="lg" className="w-full" variant="default">
                  Buy Now
                </Button>
              </div>

              <Separator />

              {/* Trust Icons */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                  <Truck className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Secure Payment</span>
                </div>
              </div>
            </div>
              </div>

              {/* Product Details Tabs */}
              <div className="mt-16">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger value="features" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                  Features
                </TabsTrigger>
                <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                  Description
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Customer reviews will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
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
                    rating={relatedProduct.rating}
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