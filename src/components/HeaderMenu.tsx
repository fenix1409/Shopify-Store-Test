import { Link } from "react-router-dom";
import { menuCategories, menuCollections } from "../data/navigations";
import { X } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed lg:absolute inset-0 lg:inset-auto lg:top-full lg:left-0 w-full h-screen lg:h-auto bg-white border-t border-gray-200 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-bold text-gray-900">Menu</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-[calc(100vh-64px)] lg:h-auto overflow-y-auto lg:overflow-visible">
        <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg lg:text-lg">Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2">
                {menuCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.link}
                    className="text-gray-700 hover:text-blue-600 py-3 lg:py-2 px-2 lg:px-0 text-base lg:text-sm transition-all duration-200 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none"
                    onClick={onClose}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <h3 className="font-bold text-gray-900 mb-4 text-lg lg:text-lg">Collections</h3>
              <div className="space-y-3 lg:space-y-2">
                {menuCollections.map((collection) => (
                  <Link
                    key={collection.name}
                    to={collection.link}
                    className="block text-gray-700 hover:text-blue-600 py-3 lg:py-2 px-2 lg:px-0 text-base lg:text-sm transition-all duration-200 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none"
                    onClick={onClose}
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <h3 className="font-bold text-gray-900 mb-4 text-lg lg:text-lg">About us</h3>
              <p className="text-gray-600 text-base lg:text-sm leading-relaxed lg:leading-normal">Learn to know us by discovering our Vision and our Mission. We are committed to providing the best products and services to our valued customers.</p>
              <Link
                to="/about"
                className="inline-block mt-4 lg:mt-4 text-blue-600 hover:text-blue-700 font-medium text-base lg:text-sm py-2 px-4 lg:px-0 bg-blue-50 lg:bg-transparent hover:bg-blue-100 lg:hover:bg-transparent rounded-lg lg:rounded-none transition-all duration-200"
                onClick={onClose}
              >
                Learn more →
              </Link>
            </div>
          </div>

          <div className="h-8 lg:h-0"></div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10" onClick={onClose}/>
      
    </div>
  );
};

export default MegaMenu;