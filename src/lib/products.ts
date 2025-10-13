// src/lib/products.ts

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description?: string;
  image?: string;
  category?: string;
};

// Available categories (used by the category filter UI)
export const CATEGORIES = [
  "Ceramics",
  "Jewelry",
  "Textiles",
  "Woodwork",
  "Accessories",
] as const;

export const products: Product[] = [
  {
    id: 1,
    name: "Andean Ceramic Mug",
    price: 45,
    rating: 4.8,
    category: "Ceramics",
    image: "/images/ceramic-mug.jpg",
    description:
      "Hand-thrown ceramic mug with traditional Andean motifs. Food safe, 350ml.",
  },
  {
    id: 2,
    name: "Silver Bracelet 950",
    price: 120,
    rating: 4.6,
    category: "Jewelry",
    image: "/images/silver-bracelet.jpg",
    description:
      "Sterling 950 silver bracelet with hammered finish. Adjustable clasp.",
  },
  {
    id: 3,
    name: "Hand-embroidered Textile",
    price: 80,
    rating: 4.9,
    category: "Textiles",
    image: "/images/embroidered-textile.jpg",
    description:
      "Cotton wall hanging featuring floral embroidery inspired by Andean flora.",
  },
  {
    id: 4,
    name: "Woven Alpaca Scarf",
    price: 65,
    rating: 4.7,
    category: "Textiles",
    image: "/images/alpaca-scarf.jpg",
    description:
      "Soft alpaca scarf, naturally dyed, warm and lightweight for daily wear.",
  },
  {
    id: 5,
    name: "Hand-carved Wooden Spoon",
    price: 25,
    rating: 4.5,
    category: "Woodwork",
    image: "/images/wooden-spoon.jpg",
    description:
      "Hardwood cooking spoon carved by hand and finished with food-safe oil.",
  },
  {
    id: 6,
    name: "Beaded Seed Bracelet",
    price: 22,
    rating: 4.4,
    category: "Accessories",
    image: "/images/beaded-bracelet.jpg",
    description:
      "Bracelet made from sustainable açaí seeds and glass beads. Elastic fit.",
  },
  {
    id: 7,
    name: "Ceramic Incense Holder",
    price: 30,
    rating: 4.6,
    category: "Ceramics",
    image: "/images/incense-holder.jpg",
    description:
      "Minimal incense holder with glaze speckles. Heat resistant and stable base.",
  },
  {
    id: 8,
    name: "Wooden Coaster Set (4)",
    price: 28,
    rating: 4.5,
    category: "Woodwork",
    image: "/images/wooden-coasters.jpg",
    description:
      "Set of four wooden coasters with carved geometric patterns and cork base.",
  },
];

// Helper used by the product detail page
export function getProductById(id: number | string) {
  const numeric = typeof id === "string" ? Number(id) : id;
  return products.find((p) => p.id === numeric) ?? null;
}
