import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import product5 from "../assets/product-5.jpg";
import product6 from "../assets/product-6.jpg";
import product7 from "../assets/product-7.jpg";
import product8 from "../assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  badge?: string;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for all-day listening.",
    price: 199.99,
    originalPrice: 299.99,
    image: product1,
    images: [product1, product1, product1],
    category: "Electronics",
    badge: "Best Seller",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Premium leather cushions",
      "Foldable design with carry case",
    ],
  },
  {
    id: "2",
    name: "Luxury Leather Backpack",
    description: "Handcrafted genuine leather backpack with multiple compartments. Perfect for work, travel, or everyday use. Features padded laptop sleeve and water-resistant coating.",
    price: 159.99,
    originalPrice: 229.99,
    image: product2,
    images: [product2, product2, product2],
    category: "Bags",
    badge: "New",
    inStock: true,
    features: [
      "Genuine full-grain leather",
      "Fits 15-inch laptop",
      "Water-resistant coating",
      "YKK zippers",
      "Adjustable padded straps",
    ],
  },
  {
    id: "3",
    name: "Smart Watch Pro",
    description: "Stay connected with our feature-packed smartwatch. Track your fitness, receive notifications, and monitor your health with advanced sensors.",
    price: 249.99,
    image: product3,
    images: [product3, product3, product3],
    category: "Electronics",
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "7-day battery life",
      "Water resistant 50m",
      "Multiple sport modes",
    ],
  },
  {
    id: "4",
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these premium designer sunglasses. UV400 protection with polarized lenses and lightweight titanium frame.",
    price: 129.99,
    originalPrice: 179.99,
    image: product4,
    images: [product4, product4, product4],
    category: "Accessories",
    inStock: true,
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Titanium frame",
      "Anti-scratch coating",
      "Includes luxury case",
    ],
  },
  {
    id: "5",
    name: "Premium Running Sneakers",
    description: "Engineered for performance with responsive cushioning and breathable mesh upper. Perfect for runners of all levels.",
    price: 139.99,
    originalPrice: 189.99,
    image: product5,
    images: [product5, product5, product5],
    category: "Footwear",
    badge: "Sale",
    inStock: true,
    features: [
      "Responsive foam cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Lightweight design",
      "Available in multiple colors",
    ],
  },
  {
    id: "6",
    name: "Minimalist Leather Wallet",
    description: "Slim, sleek design crafted from premium leather. Holds all your essentials without the bulk. RFID blocking technology included.",
    price: 49.99,
    originalPrice: 79.99,
    image: product6,
    images: [product6, product6, product6],
    category: "Accessories",
    inStock: true,
    features: [
      "RFID blocking technology",
      "Premium Italian leather",
      "Slim profile design",
      "Holds 8-10 cards",
      "Built-in money clip",
    ],
  },
  {
    id: "7",
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this powerful portable speaker. Waterproof design with 360-degree sound and 20-hour battery.",
    price: 89.99,
    image: product7,
    images: [product7, product7, product7],
    category: "Electronics",
    inStock: true,
    features: [
      "IPX7 waterproof",
      "360-degree sound",
      "20-hour battery",
      "Bluetooth 5.0",
      "Built-in microphone",
    ],
  },
  {
    id: "8",
    name: "Luxury Perfume",
    description: "Sophisticated fragrance with notes of bergamot, jasmine, and sandalwood. Long-lasting eau de parfum in an elegant bottle.",
    price: 119.99,
    originalPrice: 159.99,
    image: product8,
    images: [product8, product8, product8],
    category: "Beauty",
    badge: "Limited Edition",
    inStock: true,
    features: [
      "Eau de Parfum concentration",
      "Long-lasting formula",
      "Elegant glass bottle",
      "50ml / 1.7 fl oz",
      "Gift-ready packaging",
    ],
  },
];
