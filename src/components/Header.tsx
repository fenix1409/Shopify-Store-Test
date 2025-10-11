import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline-block">EliteStore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/collection" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link to="/track-order" className="text-sm font-medium hover:text-primary transition-colors">
              Track Order
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t animate-fade-in">
            <Link
              to="/collection"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/track-order"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Track Order
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
