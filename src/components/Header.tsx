import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { headerNavItems, phoneNumber } from "../data/navigations";
import MegaMenu from "./HeaderMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<any>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    setMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
    setMegaMenuTimeout(timeout);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
    setMegaMenuTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header data-aos="fade-down" className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-sm">
            <div className="flex items-center space-x-6">
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact us
              </Link>
              <Link to="/track-order" className="text-gray-700 hover:text-gray-900">
                Track my order
              </Link>
            </div>
            <Link to={`tel:${phoneNumber}`} className="text-gray-700 hover:text-gray-900 font-medium">
              {phoneNumber}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-gray-900">Logo</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {headerNavItems.map((item) => (
              <div key={item.path} className="relative" onMouseEnter={item.hasDropdown ? handleMenuEnter : undefined} onMouseLeave={item.hasDropdown ? handleMenuLeave : undefined} ref={item.hasDropdown ? megaMenuRef : undefined}>
                {item.hasDropdown ? (
                  <button
                    ref={menuButtonRef}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
        className="duration-300"
      >
        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {headerNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">Popular Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {headerNavItems.slice(0, 6).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;