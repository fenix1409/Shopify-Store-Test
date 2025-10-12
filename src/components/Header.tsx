import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const navItems = [
  { path: "/collection", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/track-order", label: "Track Order" }
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline-block">Logo</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;