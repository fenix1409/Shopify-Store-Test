import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Category {
  name: string;
  subcategories?: string[];
}

const categories: Category[] = [
  { name: "Electronics", subcategories: ["TV & Video", "Home Audio", "Camera & Photo", "Cell Phones", "Computers"] },
  { name: "Clothing", subcategories: ["Women", "Men", "Girls", "Boys", "Baby"] },
  { name: "Home & Kitchen", subcategories: ["Furniture", "Bedding", "Kitchen & Dining", "Home Decor", "Storage"] },
  { name: "Beauty", subcategories: ["Makeup", "Skincare", "Hair Care", "Fragrance", "Tools & Accessories"] },
  { name: "Sports", subcategories: ["Exercise & Fitness", "Outdoor Recreation", "Sports", "Fan Shop"] },
  { name: "Books" },
  { name: "Toys & Games" },
  { name: "Automotive" },
  { name: "Pet Supplies" },
  { name: "Tools & Home Improvement" }
];

const CategorySidebar = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <aside className="bg-white border border-gray-200 rounded-lg p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <h2 className="font-bold text-lg text-gray-900 mb-4">Categories</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <div key={category.name}>
            <div
              className={`flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 cursor-pointer transition-colors ${
                expandedCategory === category.name ? "bg-blue-50 border border-blue-200" : ""
              }`}
              onClick={() => category.subcategories && toggleCategory(category.name)}
            >
              <Link
                to={`/collection?category=${encodeURIComponent(category.name.toLowerCase())}`}
                className={`flex-1 text-sm transition-colors ${
                  expandedCategory === category.name ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={(e) => {
                  if (category.subcategories) {
                    e.preventDefault();
                    toggleCategory(category.name);
                  }
                }}
              >
                {category.name}
              </Link>
              {category.subcategories && (
                <ChevronRight
                  className={`h-4 w-4 transition-transform text-gray-500 ${
                    expandedCategory === category.name ? "rotate-90 text-blue-600" : ""
                  }`}
                />
              )}
            </div>
            {category.subcategories && expandedCategory === category.name && (
              <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/collection?category=${encodeURIComponent(sub.toLowerCase())}`}
                    className="block py-1.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default CategorySidebar;