import { Link } from "react-router-dom";

interface Subcategory {
  name: string;
  count?: number;
}

interface ProductSubcategoriesProps {
  category: string;
}

const subcategoryMap: Record<string, Subcategory[]> = {
  "electronics": [
    { name: "TV & Video", count: 245 },
    { name: "Home Audio", count: 189 },
    { name: "Camera & Photo", count: 156 },
    { name: "Cell Phones & Accessories", count: 432 },
    { name: "Computers & Tablets", count: 287 },
    { name: "Video Games", count: 198 },
    { name: "Wearable Technology", count: 123 }
  ],
  "bags": [
    { name: "Backpacks", count: 156 },
    { name: "Laptop Bags", count: 89 },
    { name: "Travel Bags", count: 134 },
    { name: "Messenger Bags", count: 67 },
    { name: "Tote Bags", count: 98 }
  ],
  "accessories": [
    { name: "Sunglasses", count: 234 },
    { name: "Watches", count: 178 },
    { name: "Jewelry", count: 345 },
    { name: "Wallets", count: 156 },
    { name: "Belts", count: 89 }
  ],
  "footwear": [
    { name: "Running Shoes", count: 267 },
    { name: "Casual Sneakers", count: 234 },
    { name: "Boots", count: 145 },
    { name: "Sandals", count: 178 },
    { name: "Athletic Shoes", count: 298 }
  ],
  "beauty": [
    { name: "Makeup", count: 456 },
    { name: "Skincare", count: 389 },
    { name: "Fragrance", count: 234 },
    { name: "Hair Care", count: 267 },
    { name: "Tools & Accessories", count: 156 }
  ]
};

const ProductSubcategories = ({ category }: ProductSubcategoriesProps) => {
  const subcategories = subcategoryMap[category.toLowerCase()] || [];

  if (subcategories.length === 0) return null;

  return (
    <aside className="bg-background border rounded-lg p-4 sticky top-20">
      <h3 className="font-bold text-sm mb-4">{category}</h3>
      <nav className="space-y-1">
        {subcategories.map((sub) => (
          <Link
            key={sub.name}
            to={`/collection?category=${encodeURIComponent(sub.name.toLowerCase())}`}
            className="block py-2 px-3 text-sm hover:bg-secondary/50 rounded transition-colors hover:text-primary"
          >
            <div className="flex items-center justify-between">
              <span>{sub.name}</span>
              {sub.count && (
                <span className="text-xs text-muted-foreground">({sub.count})</span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default ProductSubcategories;