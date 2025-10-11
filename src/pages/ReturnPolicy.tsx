import { RefreshCw, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Return Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Your satisfaction is our priority. Easy returns within 30 days.
            </p>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <RefreshCw className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">
                Return any unused item within 30 days for a full refund
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Free Return Shipping</h3>
              <p className="text-sm text-muted-foreground">
                We provide a prepaid shipping label for all returns
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <AlertCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                100% satisfaction guaranteed or your money back
              </p>
            </div>
          </div>

          {/* Policy Details */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Return Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                To be eligible for a return, your item must meet the following conditions:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Item must be unused and in the same condition that you received it</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Item must be in original packaging with all tags attached</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Return must be initiated within 30 days of delivery</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Proof of purchase (receipt or order confirmation) must be provided</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Non-Returnable Items</h2>
              <p className="text-muted-foreground mb-4">
                The following items cannot be returned:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Gift cards</p>
                </div>
                <div className="flex gap-3 items-start">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Personal care items (perfumes, cosmetics)</p>
                </div>
                <div className="flex gap-3 items-start">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Items marked as final sale or clearance</p>
                </div>
                <div className="flex gap-3 items-start">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Items that have been used, worn, or altered</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Us</h3>
                    <p className="text-muted-foreground">
                      Email support@elitestore.com or call +1 (555) 123-4567 to initiate your return. 
                      Please provide your order number and reason for return.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receive Return Label</h3>
                    <p className="text-muted-foreground">
                      We'll email you a prepaid return shipping label within 24 hours. Print the label 
                      and attach it to your package.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ship Your Return</h3>
                    <p className="text-muted-foreground">
                      Pack your item securely in its original packaging. Drop off your package at any 
                      authorized shipping location.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receive Your Refund</h3>
                    <p className="text-muted-foreground">
                      Once we receive and inspect your return, we'll process your refund within 5-7 
                      business days. The refund will be issued to your original payment method.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                If you received a defective or damaged item, we'll gladly exchange it for a new one. 
                Contact our customer service team, and we'll expedite the exchange process at no 
                additional cost to you.
              </p>
              <p className="text-muted-foreground">
                For size or color exchanges, we recommend returning your original item for a refund 
                and placing a new order to ensure the fastest processing time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Refund Processing Time</h2>
              <p className="text-muted-foreground mb-4">
                After we receive your return:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Inspection: 1-2 business days</li>
                <li>Refund processing: 3-5 business days</li>
                <li>Bank processing: 5-10 business days (varies by financial institution)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You'll receive an email confirmation once your refund has been processed.
              </p>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Questions?</h3>
              <p className="text-muted-foreground">
                If you have any questions about our return policy, please don't hesitate to contact us 
                at support@elitestore.com or call +1 (555) 123-4567. We're here to help!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
