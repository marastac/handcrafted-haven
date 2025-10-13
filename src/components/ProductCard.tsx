// src/components/ProductCard.tsx
import Link from "next/link";

export interface ProductCardProps {
  id: number | string;
  name: string;
  price: number;
  rating: number;
}

export default function ProductCard({ id, name, price, rating }: ProductCardProps) {
  const titleId = `prod-${id}-title`;

  return (
    <article className="bg-white border rounded-2xl p-4 shadow-sm" aria-labelledby={titleId}>
      {/* Image placeholder */}
      <div
        className="aspect-square bg-gray-100 rounded-xl mb-3"
        role="img"
        aria-label={`${name} image placeholder`}
      />

      <h3 id={titleId} className="font-medium">
        {name}
      </h3>

      <div className="flex items-center justify-between mt-1">
        <span className="text-violet-600 font-semibold">${price}</span>
        <span aria-label={`rating ${rating}`}>★ {rating}</span>
      </div>

      <Link
        href={`/product/${id}`}
        className="mt-3 block w-full bg-violet-600 text-center text-white py-2 rounded-xl hover:bg-violet-700"
        aria-label={`View details for ${name}`}
      >
        View details
      </Link>
    </article>
  );
}
