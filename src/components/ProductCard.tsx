// src/components/ProductCard.tsx
import Link from "next/link";

export interface ProductCardProps {
  id: number | string;
  name: string;
  price: number;
  rating: number;
}

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductCard({ id, name, price, rating }: ProductCardProps) {
  const titleId = `prod-${id}-title`;

  return (
    <article className="hh-card p-4 hover:shadow-md transition" aria-labelledby={titleId}>
      {/* Image placeholder (replace with <Image /> later if you add real images) */}
      <div
        className="aspect-square bg-zinc-100 rounded-xl mb-3"
        role="img"
        aria-label={`${name} image placeholder`}
      />

      <h3 id={titleId} className="font-medium text-zinc-900">
        {name}
      </h3>

      <div className="flex items-center justify-between mt-1">
        <span className="text-violet-600 font-semibold">{formatUSD(price)}</span>
        <span className="text-amber-500" aria-label={`rating ${rating}`}>
          ★ {rating}
        </span>
      </div>

      <Link
        href={`/product/${id}`}
        className="hh-btn hh-btn-primary w-full mt-3 text-center"
        aria-label={`View details for ${name}`}
      >
        View details
      </Link>
    </article>
  );
}
