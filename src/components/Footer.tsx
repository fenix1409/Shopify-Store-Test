import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">EliteStore</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted destination for premium products. Quality guaranteed, customer satisfaction first.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EliteStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
