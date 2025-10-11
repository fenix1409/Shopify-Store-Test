import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Category {
  name: string;
  subcategories?: string[];
}

const categories: Category[] = [
  { name: "Apps & Games" },
  { name: "Arts, Crafts & Sewing" },
  { name: "Audible Books & Originals" },
  { name: "Automotive" },
  { name: "Baby" },
  { name: "Beauty & Personal Care", subcategories: ["Makeup", "Skincare", "Hair Care", "Fragrance", "Tools & Accessories"] },
  { name: "Books" },
  { name: "Camera & Photo Products" },
  { name: "CDs & Vinyl" },
  { name: "Cell Phones & Accessories" },
  { name: "Clothing, Shoes & Jewelry", subcategories: ["Women", "Men", "Girls", "Boys", "Baby"] },
  { name: "Collectible Coins" },
  { name: "Computer & Accessories" },
  { name: "Digital Educational Resources" },
  { name: "Digital Music" },
  { name: "Electronics", subcategories: ["TV & Video", "Home Audio", "Camera & Photo", "Cell Phones", "Computers"] },
  { name: "Entertainment Collectibles" },
  { name: "Gift Cards" },
  { name: "Grocery & Gourmet Food" },
  { name: "Handmade Products" },
  { name: "Health & Household", subcategories: ["Vitamins & Supplements", "Medical Supplies", "Personal Care", "Vision Care"] },
  { name: "Home & Kitchen", subcategories: ["Furniture", "Bedding", "Kitchen & Dining", "Home Decor", "Storage"] },
  { name: "Industrial & Scientific" },
  { name: "Kindle Store" },
  { name: "Kitchen & Dining" },
  { name: "Movies & TV" },
  { name: "Musical Instruments" },
  { name: "Office Products" },
  { name: "Patio, Lawn & Garden" },
  { name: "Pet Supplies" },
  { name: "Sports & Outdoors", subcategories: ["Exercise & Fitness", "Outdoor Recreation", "Sports", "Fan Shop"] },
  { name: "Sports Collectibles" },
  { name: "Tools & Home Improvement", subcategories: ["Power Tools", "Hand Tools", "Hardware", "Lighting", "Electrical"] },
  { name: "Toys & Games" },
  { name: "Unique Finds" },
  { name: "Video Games" }
];

interface CategorySidebarProps {
  compact?: boolean;
}

const CategorySidebar = ({ compact = false }: CategorySidebarProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <aside className="bg-background border rounded-lg p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <div key={category.name}>
            <div
              className={`flex items-center justify-between py-2 px-3 rounded hover:bg-secondary/50 cursor-pointer transition-colors ${
                expandedCategory === category.name ? "bg-secondary/30" : ""
              }`}
              onClick={() => category.subcategories && toggleCategory(category.name)}
            >
              <Link
                to={`/collection?category=${encodeURIComponent(category.name.toLowerCase())}`}
                className="flex-1 text-sm hover:text-primary transition-colors"
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
                  className={`h-4 w-4 transition-transform ${
                    expandedCategory === category.name ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>
            {category.subcategories && expandedCategory === category.name && (
              <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/collection?category=${encodeURIComponent(sub.toLowerCase())}`}
                    className="block py-1.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded transition-colors"
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