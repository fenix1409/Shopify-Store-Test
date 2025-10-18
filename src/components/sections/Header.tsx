import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Phone, Truck, User, Heart, Package } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { categoryLinks, links, phoneNumber } from "../../data/navigations";
import { Button } from "../ui/button";
import HeaderMenu from "../HeaderMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [headerMenuTimeout, setHeaderMenuTimeout] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const headerMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleHeaderMenuEnter = () => {
    if (headerMenuTimeout) {
      clearTimeout(headerMenuTimeout);
    }
    setHeaderMenuOpen(true);
  };

  const handleHeaderMenuLeave = () => {
    const timeout = setTimeout(() => {
      setHeaderMenuOpen(false);
    }, 200);
    setHeaderMenuTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerMenuRef.current &&
        !headerMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setHeaderMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top Announcement Bar */}
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Free shipping $50+</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">30-day returns</span>
              </div>
            </div>
            <div className="hidden md:block">
              <a href={`tel:${phoneNumber}`} className="hover:text-blue-200 transition-colors flex items-center space-x-2 text-xs sm:text-sm">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Help: {phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between ${isScrolled ? 'h-14' : 'h-16 sm:h-20'}`}>
            
            {/* Logo & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-600 hover:text-blue-600 flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>

              {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center min-w-0 flex-shrink-0 group"
              >
                <span className={`font-black text-gray-900 tracking-tight truncate ${isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} group-hover:text-blue-600 transition-colors`}>
                  {isScrolled ? 'SHOPMART' : 'SHOPMART'}
                </span>
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:block flex-1 mx-4 xl:mx-8 max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                />
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              
              {/* Mobile Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-600 hover:text-blue-600"
                onClick={() => document.getElementById('mobile-search')?.focus()}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex text-gray-600 hover:text-red-600 relative"
                asChild
              >
                <Link to="/wishlist">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-medium">
                    3
                  </span>
                </Link>
              </Button>

              {/* User Account */}
              <Button
                variant="ghost"
                className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                asChild
              >
                <Link to="/account">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm font-medium whitespace-nowrap">Account</span>
                </Link>
              </Button>

              {/* Shopping Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-blue-600 relative flex-shrink-0"
                asChild
              >
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className={`absolute rounded-full bg-blue-600 text-white flex items-center justify-center font-bold ${isScrolled ? 'h-4 w-4 text-[10px] -top-1 -right-1' : 'h-5 w-5 text-xs -top-1 -right-1 sm:h-6 sm:w-6'} transition-colors hover:bg-blue-700`}>
                    9
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Search - Below main header */}
          <div className="lg:hidden pb-3">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="mobile-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'py-3'}`}>
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hide">
              {links.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group flex-shrink-0"
                  onMouseEnter={item.hasDropdown ? handleHeaderMenuEnter : undefined}
                  onMouseLeave={item.hasDropdown ? handleHeaderMenuLeave : undefined}
                >
                  {item.hasDropdown ? (
                    <button
                      ref={menuButtonRef}
                      className={`text-white hover:text-blue-300 transition-colors whitespace-nowrap font-semibold flex items-center space-x-1 ${isScrolled ? 'text-xs py-1' : 'text-sm py-2'}`}
                    >
                      <span>{item.name}</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white hover:text-blue-300 transition-colors whitespace-nowrap font-semibold ${isScrolled ? 'text-xs py-1' : 'text-sm py-2'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Sale Badge - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                SALE
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Quick Categories Bar */}
      <div className={`bg-gray-50 border-b border-gray-200 transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 py-2 overflow-x-auto scrollbar-hide">
            {categoryLinks.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap flex-shrink-0 hover:underline"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        onMouseEnter={handleHeaderMenuEnter}
        onMouseLeave={handleHeaderMenuLeave}
        ref={headerMenuRef}
      >
        <HeaderMenu isOpen={headerMenuOpen} onClose={() => setHeaderMenuOpen(false)} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-black text-xl text-gray-900">SHOPMART</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full flex items-center space-x-2 justify-center py-3" asChild>
                    <Link to="/account" onClick={() => setMobileMenuOpen(false)}>
                      <User className="h-4 w-4" />
                      <span className="text-sm">Account</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center space-x-2 justify-center py-3" asChild>
                    <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">Wishlist</span>
                    </Link>
                  </Button>
                </div>

                {/* Main Navigation */}
                <div className="space-y-1">
                  {links.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-3 px-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Quick Categories */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Shop Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categoryLinks.slice(0, 6).map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="text-gray-600 hover:text-blue-600 py-2 px-2 bg-gray-50 rounded text-xs"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact & Support */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 text-sm">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">{phoneNumber}</span>
                    </a>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>24/7 Customer Support</p>
                      <p>Free shipping on orders over $50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;