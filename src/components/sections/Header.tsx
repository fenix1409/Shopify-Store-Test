import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Phone, MapPin, Truck, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { categoryLinks, links, phoneNumber } from "../../data/navigations";
import { Button } from "../ui/button";
import HeaderMenu from "../HeaderMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [headerMenuTimeout, setHeaderMenuTimeout] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className={`bg-black text-white transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Truck className="h-3 w-3" />
                <span>Exchange of products within 30 days</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Pickup in 16 stores international</span>
              </div>
              <div className="hidden md:block">
                <span>Premium brand products for an affordable price</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <span className="text-gray-300">Customer service TT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto px-4 ${isScrolled ? 'py-2' : ''}`}>
          <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'h-14' : 'h-20'}`}>
            <Link to="/" className="flex items-center min-w-0 flex-shrink-0">
              <span className={`font-black text-gray-900 tracking-tight transition-all duration-500 ease-in-out truncate ${isScrolled ? 'text-xl' : 'text-3xl'}`}>
                {isScrolled ? 'LOGO MARKET' : 'LOGO'}
              </span>
            </Link>

            <div className={`flex-1 mx-8 transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-xl mx-4' : 'max-w-2xl opacity-100'}`}>
              <div className="relative max-sm:hidden">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-lg transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 flex-shrink-0">
              <Button
                variant="ghost"
                className={`hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 max-w-0 overflow-hidden'}`}
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium whitespace-nowrap">Login</span>
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative flex-shrink-0">
                <ShoppingCart className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
                <span className={`absolute rounded-full bg-red-500 text-white flex items-center justify-center font-bold transition-all duration-500 ease-in-out ${isScrolled ? 'h-4 w-4 text-[10px] -top-1 -right-1' : 'h-6 w-6 text-xs -top-2 -right-2'}`}>
                  9
                </span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-600 hover:text-gray-900 flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
                ) : (
                  <Menu className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className={`flex items-center justify-between overflow-x-auto transition-all duration-500 ease-in-out ${isScrolled ? 'py-2' : 'py-3'}`}>
            <div className="flex items-center space-x-6">
              {links.map((item, index) => (
                <div key={item.name} className="relative group flex-shrink-0">
                  {index >= 2 && index <= 4 ? (
                    <button className={`text-white hover:text-blue-300 transition-colors whitespace-nowrap font-medium ${isScrolled ? 'text-xs py-1' : 'text-sm py-2'}`}>
                      {item.name} ↓
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white hover:text-blue-300 transition-colors whitespace-nowrap font-medium ${isScrolled ? 'text-xs py-1' : 'text-sm py-2'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className={`bg-gray-50 border-b border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {categoryLinks.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap flex-shrink-0"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        onMouseEnter={handleHeaderMenuEnter}
        onMouseLeave={handleHeaderMenuLeave}
      >
        <HeaderMenu isOpen={headerMenuOpen} onClose={() => setHeaderMenuOpen(false)} />
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-black text-2xl text-gray-900">LOGO MARKET</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <Button className="w-full flex items-center space-x-2 justify-center">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>

                <div className="space-y-2">
                  {links.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-3 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{phoneNumber}</span>
                    </a>
                    <div className="text-sm text-gray-500">
                      <p>Customer service TT</p>
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