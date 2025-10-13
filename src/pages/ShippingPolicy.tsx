import { Package, Truck, Globe2, Clock } from "lucide-react";
import Footer from "../components/sections/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Fast, reliable shipping to your doorstep
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Standard Shipping</h3>
              <p className="text-muted-foreground mb-4">5-7 business days</p>
              <p className="font-semibold text-xl text-price">Free on orders $50+</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Express Shipping</h3>
              <p className="text-muted-foreground mb-4">2-3 business days</p>
              <p className="font-semibold text-xl text-price">$15.99</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">International</h3>
              <p className="text-muted-foreground mb-4">10-15 business days</p>
              <p className="font-semibold text-xl text-price">Calculated at checkout</p>
            </div>
          </div>

          {/* Policy Details */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Store, we strive to deliver your orders as quickly and efficiently as possible. 
                  All orders are processed within 1-2 business days (excluding weekends and holidays).
                </p>
                <p>
                  You will receive a shipping confirmation email with tracking information once your 
                  order has been dispatched. Please allow 24 hours for tracking information to become 
                  active in the carrier's system.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Delivery Times</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Standard Shipping (5-7 Business Days)</h3>
                    <p className="text-muted-foreground">
                      Free for orders over $50. Orders under $50 are subject to a $5.99 shipping fee. 
                      Available for domestic orders within the continental United States.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Express Shipping (2-3 Business Days)</h3>
                    <p className="text-muted-foreground">
                      $15.99 flat rate. Guaranteed delivery within 2-3 business days. 
                      Orders placed before 2 PM EST will be shipped the same day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">International Shipping (10-15 Business Days)</h3>
                    <p className="text-muted-foreground">
                      We ship to over 50 countries worldwide. Shipping costs are calculated based on 
                      destination and package weight. Additional customs fees may apply and are the 
                      responsibility of the recipient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Restrictions</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>We currently do not ship to P.O. boxes for express shipping</li>
                <li>Some products may have shipping restrictions to certain countries</li>
                <li>Alaska and Hawaii orders may require additional shipping time</li>
                <li>Military APO/FPO addresses are supported with standard shipping</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Once your order ships, you'll receive a tracking number via email. You can track 
                your package using:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Our Track Order page</li>
                <li>The carrier's website directly</li>
                <li>The tracking link in your shipping confirmation email</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Issues</h2>
              <p className="text-muted-foreground mb-4">
                If your order hasn't arrived within the expected delivery time, please:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Check your tracking information for updates</li>
                <li>Verify your shipping address was entered correctly</li>
                <li>Contact our customer service team at support@shopifystore.com</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                We'll work with the carrier to locate your package and ensure delivery or provide 
                a full refund if the package is lost.
              </p>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-muted-foreground">
                Have questions about shipping? Contact our customer service team at 
                support@shopifystore.com or call +1 (555) 123-4567.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
