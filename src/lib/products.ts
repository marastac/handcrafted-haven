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

export const products: Product[] = [
  { id: 1, name: "Andean Ceramic Mug", price: 45, rating: 4.8 },
  { id: 2, name: "Silver Bracelet 950", price: 120, rating: 4.6 },
  { id: 3, name: "Hand-embroidered Textile", price: 80, rating: 4.9 },
  { id: 4, name: "Woven Alpaca Scarf", price: 65, rating: 4.7 },
  { id: 5, name: "Hand-carved Wooden Spoon", price: 25, rating: 4.5 }
];
