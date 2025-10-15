import headphonesWireless from "../assets/headphones-wireless.jpg";
import smartwatchPro from "../assets/smartwatch-pro.jpg";
import speakerBluetooth from "../assets/speaker-bluetooth.jpg";
import earbudsWireless from "../assets/earbuds-wireless.jpg";
import actionCamera4k from "../assets/action-camera-4k.jpg";
import keyboardGaming from "../assets/keyboard-gaming.jpg";
import backpackLeather from "../assets/backpack-leather.jpg";
import crossbodyBag from "../assets/crossbody-bag.jpg";
import sunglassesDesigner from "../assets/sunglasses-designer.jpg";
import walletLeather from "../assets/wallet-leather.jpg";
import necklaceSilver from "../assets/necklace-silver.jpg";
import sneakersRunning from "../assets/sneakers-running.jpg";
import loafersLeather from "../assets/loafers-leather.jpg";
import perfumeLuxury from "../assets/perfume-luxury.jpg";
import skincareSet from "../assets/skincare-set.jpg";
import plantersCeramic from "../assets/planters-ceramic.jpg";
import tshirtOrganic from "../assets/tshirt-organic.jpg";
import yogaMat from "../assets/yoga-mat.jpg";
import buildingBlocks from "../assets/building-blocks.jpg";

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
  tags: string[];
  vendor: string;
  sku: string;
  weight?: string;
  dimensions?: string;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // Electronics (12 products)
  {
    id: "ELEC-001",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for all-day listening.",
    price: 199.99,
    originalPrice: 299.99,
    image: headphonesWireless,
    images: [headphonesWireless, headphonesWireless, headphonesWireless],
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
    tags: ["audio", "wireless", "noise-cancelling", "premium"],
    vendor: "AudioTech Pro",
    sku: "AUD-WH-001",
    weight: "0.45kg",
    dimensions: "18x15x8cm",
    rating: 4.8,
    reviewCount: 1247
  },
  {
    id: "ELEC-002",
    name: "Smart Watch Pro",
    description: "Stay connected with our feature-packed smartwatch. Track your fitness, receive notifications, and monitor your health with advanced sensors.",
    price: 249.99,
    image: smartwatchPro,
    images: [smartwatchPro, smartwatchPro, smartwatchPro],
    category: "Electronics",
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "7-day battery life",
      "Water resistant 50m",
      "Multiple sport modes",
    ],
    tags: ["wearable", "fitness", "smartwatch", "health"],
    vendor: "TechWear Inc",
    sku: "SW-PRO-2024",
    weight: "0.12kg",
    dimensions: "4x4x1cm",
    rating: 4.6,
    reviewCount: 892
  },
  {
    id: "ELEC-003",
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this powerful portable speaker. Waterproof design with 360-degree sound and 20-hour battery.",
    price: 89.99,
    image: speakerBluetooth,
    images: [speakerBluetooth, speakerBluetooth, speakerBluetooth],
    category: "Electronics",
    inStock: true,
    features: [
      "IPX7 waterproof",
      "360-degree sound",
      "20-hour battery",
      "Bluetooth 5.0",
      "Built-in microphone",
    ],
    tags: ["portable", "waterproof", "speaker", "outdoor"],
    vendor: "SoundMax Audio",
    sku: "SPK-BT-045",
    weight: "0.68kg",
    dimensions: "15x15x8cm",
    rating: 4.4,
    reviewCount: 567
  },
  {
    id: "ELEC-004",
    name: "Wireless Earbuds Pro",
    description: "True wireless earbuds with superior sound quality and comfortable fit. Perfect for workouts and daily commutes.",
    price: 129.99,
    originalPrice: 179.99,
    image: earbudsWireless,
    images: [earbudsWireless, earbudsWireless, earbudsWireless],
    category: "Electronics",
    badge: "New",
    inStock: true,
    features: [
      "True wireless stereo",
      "24-hour total battery",
      "IPX5 sweat resistant",
      "Touch controls",
      "Noise isolation",
    ],
    tags: ["earbuds", "wireless", "sport", "audio"],
    vendor: "AudioTech Pro",
    sku: "EB-TWS-2024",
    weight: "0.08kg",
    dimensions: "6x4x3cm",
    rating: 4.5,
    reviewCount: 334
  },
  {
    id: "ELEC-005",
    name: "4K Action Camera",
    description: "Capture your adventures in stunning 4K resolution. Waterproof, shockproof, and packed with professional features.",
    price: 299.99,
    originalPrice: 399.99,
    image: actionCamera4k,
    images: [actionCamera4k, actionCamera4k, actionCamera4k],
    category: "Electronics",
    badge: "Sale",
    inStock: true,
    features: [
      "4K 60fps video",
      "Waterproof to 40m",
      "Electronic image stabilization",
      "Voice control",
      "Wi-Fi & Bluetooth",
    ],
    tags: ["camera", "action", "4k", "outdoor"],
    vendor: "AdventureCam Co",
    sku: "AC-4K-PRO",
    weight: "0.15kg",
    dimensions: "6x4x3cm",
    rating: 4.7,
    reviewCount: 678
  },
  {
    id: "ELEC-006",
    name: "Gaming Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys and fast response time. Perfect for gaming and productivity.",
    price: 149.99,
    image: keyboardGaming,
    images: [keyboardGaming, keyboardGaming, keyboardGaming],
    category: "Electronics",
    inStock: true,
    features: [
      "Cherry MX switches",
      "RGB backlighting",
      "N-key rollover",
      "Aluminum frame",
      "Detachable USB-C cable",
    ],
    tags: ["gaming", "keyboard", "mechanical", "rgb"],
    vendor: "GameTech Gear",
    sku: "KB-MECH-GAM",
    weight: "1.2kg",
    dimensions: "44x14x4cm",
    rating: 4.6,
    reviewCount: 445
  },

  // Bags & Luggage (8 products)
  {
    id: "BAG-001",
    name: "Luxury Leather Backpack",
    description: "Handcrafted genuine leather backpack with multiple compartments. Perfect for work, travel, or everyday use.",
    price: 159.99,
    originalPrice: 229.99,
    image: backpackLeather,
    images: [backpackLeather, backpackLeather, backpackLeather],
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
    tags: ["backpack", "leather", "laptop", "premium"],
    vendor: "LeatherCraft Studios",
    sku: "BP-LEATHER-001",
    weight: "1.1kg",
    dimensions: "30x40x15cm",
    rating: 4.7,
    reviewCount: 556
  },
  {
    id: "BAG-002",
    name: "Minimalist Crossbody Bag",
    description: "Sleek crossbody bag made from vegan leather. Compact yet spacious enough for daily essentials.",
    price: 79.99,
    image: crossbodyBag,
    images: [crossbodyBag, crossbodyBag, crossbodyBag],
    category: "Bags",
    inStock: true,
    features: [
      "Vegan leather",
      "Adjustable strap",
      "Multiple compartments",
      "RFID blocking pocket",
      "Lightweight design",
    ],
    tags: ["crossbody", "vegan", "minimalist", "everyday"],
    vendor: "Urban Carry Co",
    sku: "CB-VEGAN-MIN",
    weight: "0.4kg",
    dimensions: "20x15x5cm",
    rating: 4.3,
    reviewCount: 289
  },

  // Accessories (10 products)
  {
    id: "ACC-001",
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these premium designer sunglasses. UV400 protection with polarized lenses.",
    price: 129.99,
    originalPrice: 179.99,
    image: sunglassesDesigner,
    images: [sunglassesDesigner, sunglassesDesigner, sunglassesDesigner],
    category: "Accessories",
    inStock: true,
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Titanium frame",
      "Anti-scratch coating",
      "Includes luxury case",
    ],
    tags: ["sunglasses", "designer", "polarized", "uv-protection"],
    vendor: "VisionStyle Optics",
    sku: "SG-DESIGNER-01",
    weight: "0.05kg",
    dimensions: "15x6x2cm",
    rating: 4.5,
    reviewCount: 678
  },
  {
    id: "ACC-002",
    name: "Minimalist Leather Wallet",
    description: "Slim, sleek design crafted from premium leather. Holds all your essentials without the bulk.",
    price: 49.99,
    originalPrice: 79.99,
    image: walletLeather,
    images: [walletLeather, walletLeather, walletLeather],
    category: "Accessories",
    inStock: true,
    features: [
      "RFID blocking technology",
      "Premium Italian leather",
      "Slim profile design",
      "Holds 8-10 cards",
      "Built-in money clip",
    ],
    tags: ["wallet", "leather", "minimalist", "rfid"],
    vendor: "LeatherCraft Studios",
    sku: "WL-MINIMAL-01",
    weight: "0.08kg",
    dimensions: "10x7x1cm",
    rating: 4.4,
    reviewCount: 445
  },
  {
    id: "ACC-003",
    name: "Silver Chain Necklace",
    description: "Elegant sterling silver necklace with adjustable length. Perfect for everyday wear or special occasions.",
    price: 89.99,
    originalPrice: 129.99,
    image: necklaceSilver,
    images: [necklaceSilver, necklaceSilver, necklaceSilver],
    category: "Accessories",
    badge: "Best Seller",
    inStock: true,
    features: [
      "925 Sterling silver",
      "Adjustable 16-20 inch",
      "Hypoallergenic",
      "Secure lobster clasp",
      "Gift box included",
    ],
    tags: ["necklace", "silver", "jewelry", "elegant"],
    vendor: "SilverCraft Jewelry",
    sku: "NK-SILVER-001",
    weight: "0.02kg",
    dimensions: "5x5x1cm",
    rating: 4.6,
    reviewCount: 892
  },

  // Footwear (8 products)
  {
    id: "SHOE-001",
    name: "Premium Running Sneakers",
    description: "Engineered for performance with responsive cushioning and breathable mesh upper.",
    price: 139.99,
    originalPrice: 189.99,
    image: sneakersRunning,
    images: [sneakersRunning, sneakersRunning, sneakersRunning],
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
    tags: ["sneakers", "running", "athletic", "comfort"],
    vendor: "ActiveFootwear Co",
    sku: "SN-RUN-PRO",
    weight: "0.32kg",
    dimensions: "30x15x10cm",
    rating: 4.5,
    reviewCount: 1123
  },
  {
    id: "SHOE-002",
    name: "Classic Leather Loafers",
    description: "Timeless leather loafers perfect for business casual or smart casual occasions.",
    price: 119.99,
    originalPrice: 159.99,
    image: loafersLeather,
    images: [loafersLeather, loafersLeather, loafersLeather],
    category: "Footwear",
    inStock: true,
    features: [
      "Genuine leather upper",
      "Cushioned insole",
      "Flexible rubber sole",
      "Classic penny loafer design",
      "Available in multiple sizes",
    ],
    tags: ["loafers", "leather", "classic", "business"],
    vendor: "ClassicShoes Ltd",
    sku: "LF-LEATHER-CL",
    weight: "0.45kg",
    dimensions: "30x12x8cm",
    rating: 4.4,
    reviewCount: 667
  },

  // Beauty & Personal Care (8 products)
  {
    id: "BEAU-001",
    name: "Luxury Perfume",
    description: "Sophisticated fragrance with notes of bergamot, jasmine, and sandalwood.",
    price: 119.99,
    originalPrice: 159.99,
    image: perfumeLuxury,
    images: [perfumeLuxury, perfumeLuxury, perfumeLuxury],
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
    tags: ["perfume", "fragrance", "luxury", "limited"],
    vendor: "ScentCraft Paris",
    sku: "PER-LUX-50ML",
    weight: "0.25kg",
    dimensions: "8x8x15cm",
    rating: 4.7,
    reviewCount: 778
  },
  {
    id: "BEAU-002",
    name: "Anti-Aging Skincare Set",
    description: "Complete skincare routine with serum, moisturizer, and eye cream for radiant, youthful skin.",
    price: 149.99,
    originalPrice: 199.99,
    image: skincareSet,
    images: [skincareSet, skincareSet, skincareSet],
    category: "Beauty",
    badge: "Best Seller",
    inStock: true,
    features: [
      "Vitamin C serum",
      "Hyaluronic acid moisturizer",
      "Caffeine eye cream",
      "Dermatologist tested",
      "Cruelty-free formula",
    ],
    tags: ["skincare", "anti-aging", "vitamin-c", "beauty"],
    vendor: "SkinScience Labs",
    sku: "SKIN-SET-PRO",
    weight: "0.6kg",
    dimensions: "20x10x10cm",
    rating: 4.8,
    reviewCount: 1345
  },

  // Home & Garden (6 products)
  {
    id: "HOME-001",
    name: "Ceramic Planter Set",
    description: "Beautiful handcrafted ceramic planters perfect for indoor plants and succulents.",
    price: 69.99,
    originalPrice: 99.99,
    image: plantersCeramic,
    images: [plantersCeramic, plantersCeramic, plantersCeramic],
    category: "Home & Garden",
    badge: "New",
    inStock: true,
    features: [
      "Handcrafted ceramic",
      "Drainage holes included",
      "Set of 3 different sizes",
      "Natural earth tones",
      "Suitable for indoor/outdoor",
    ],
    tags: ["planters", "ceramic", "home-decor", "gardening"],
    vendor: "HomeGarden Co",
    sku: "PLANTER-SET3",
    weight: "2.5kg",
    dimensions: "Various sizes",
    rating: 4.4,
    reviewCount: 334
  },

  // Clothing (6 products)
  {
    id: "CLOTH-001",
    name: "Organic Cotton T-Shirt",
    description: "Soft, comfortable organic cotton t-shirt available in multiple colors. Perfect for everyday wear.",
    price: 29.99,
    originalPrice: 39.99,
    image: tshirtOrganic,
    images: [tshirtOrganic, tshirtOrganic, tshirtOrganic],
    category: "Clothing",
    inStock: true,
    features: [
      "100% organic cotton",
      "Reinforced neckline",
      "Pre-shrunk fabric",
      "Available in 8 colors",
      "Machine washable",
    ],
    tags: ["t-shirt", "organic", "cotton", "casual"],
    vendor: "EcoWear Apparel",
    sku: "TS-ORG-COTTON",
    weight: "0.18kg",
    dimensions: "One Size",
    rating: 4.3,
    reviewCount: 889
  },

  // Sports & Outdoors (4 products)
  {
    id: "SPORT-001",
    name: "Yoga Mat Premium",
    description: "Eco-friendly yoga mat with superior grip and cushioning for all types of yoga practice.",
    price: 59.99,
    originalPrice: 79.99,
    image: yogaMat,
    images: [yogaMat, yogaMat, yogaMat],
    category: "Sports & Outdoors",
    inStock: true,
    features: [
      "Non-slip surface",
      "Eco-friendly TPE material",
      "6mm thickness",
      "Includes carrying strap",
      "Easy to clean",
    ],
    tags: ["yoga", "fitness", "eco-friendly", "exercise"],
    vendor: "ActiveLife Gear",
    sku: "YG-MAT-PRO",
    weight: "1.2kg",
    dimensions: "183x61x0.6cm",
    rating: 4.6,
    reviewCount: 556
  },

  // Kids & Toys (4 products)
  {
    id: "KIDS-001",
    name: "Educational Building Blocks",
    description: "STEM educational building blocks set that encourages creativity and learning through play.",
    price: 49.99,
    originalPrice: 69.99,
    image: buildingBlocks,
    images: [buildingBlocks, buildingBlocks, buildingBlocks],
    category: "Kids & Toys",
    badge: "Educational",
    inStock: true,
    features: [
      "158 pieces set",
      "STEM learning",
      "Safe non-toxic materials",
      "Storage box included",
      "Ages 3+",
    ],
    tags: ["toys", "educational", "stem", "kids"],
    vendor: "LearnPlay Toys",
    sku: "TOY-BLOCKS-158",
    weight: "1.8kg",
    dimensions: "30x20x15cm",
    rating: 4.7,
    reviewCount: 445
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge === "Best Seller" || product.badge === "New");
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.originalPrice && product.originalPrice > product.price);
};