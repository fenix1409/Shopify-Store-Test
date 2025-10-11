import { Package, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber && email) {
      toast.info("Searching for your order...");
      setTimeout(() => {
        toast.error("Order not found. Please check your order number and email.");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Enter your order number and email to track your shipment
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-8 w-8 text-primary" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Order Number</label>
                  <input
                    type="text"
                    required
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., #ORD-123456"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    You can find this in your order confirmation email
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Enter the email used when placing the order
                  </p>
                </div>

                <Button type="submit" size="lg" variant="accent" className="w-full gap-2">
                  <Search className="h-5 w-5" />
                  Track Order
                </Button>
              </form>
            </div>

            <div className="mt-12 bg-secondary/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Can't find your order number?</strong><br />
                  Check your email inbox for the order confirmation. The subject line should be "Order Confirmation - EliteStore"
                </p>
                <p>
                  <strong>Still having trouble?</strong><br />
                  Contact our support team at support@elitestore.com or call us at +1 (555) 123-4567
                </p>
                <p>
                  <strong>Order not showing up?</strong><br />
                  Please allow up to 24 hours after placing your order for tracking information to become available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
