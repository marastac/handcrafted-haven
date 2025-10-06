// src/app/product/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ---- Mock data (same ids/names used on the home page) ----
type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  artisan: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Andean Ceramic Mug",
    price: 45,
    rating: 4.8,
    description:
      "Hand-thrown ceramic mug inspired by Andean motifs. Durable and perfect for daily use.",
    artisan: "Ana Quispe",
  },
  {
    id: 2,
    name: "Silver Bracelet 950",
    price: 120,
    rating: 4.6,
    description:
      "Sterling silver (950) bracelet crafted using traditional filigree techniques.",
    artisan: "Luis Paredes",
  },
  {
    id: 3,
    name: "Hand-embroidered Textile",
    price: 80,
    rating: 4.9,
    description:
      "Cotton textile hand-embroidered with geometric patterns and natural dyes.",
    artisan: "María Huamán",
  },
];

// Small helper to format currency
function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Generate <title> dynamically
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const idNum = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === idNum);
  return {
    title: product ? `${product.name} – Handcrafted Haven` : "Product – Handcrafted Haven",
    description: product
      ? `Details for ${product.name}. Price ${formatUSD(product.price)}, rating ${product.rating}.`
      : "Product details",
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const idNum = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === idNum);

  if (!product) {
    notFound();
  }

  return (
    <main id="main" className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb / back link */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <Link
          href="/#catalog"
          className="inline-flex items-center gap-2 text-violet-700 hover:underline"
        >
          ← Back to catalog
        </Link>
      </nav>

      <section
        aria-labelledby="product-title"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border rounded-2xl p-6 shadow-sm"
      >
        {/* Image placeholder */}
        <div
          className="aspect-square bg-gray-100 rounded-xl"
          role="img"
          aria-label={`${product!.name} image placeholder`}
        />

        {/* Details */}
        <div>
          <h1 id="product-title" className="text-2xl font-semibold">
            {product!.name}
          </h1>

          <p className="mt-2 text-gray-600">{product!.description}</p>

          <dl className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Artisan</dt>
              <dd className="font-medium">{product!.artisan}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Price</dt>
              <dd className="font-semibold text-violet-700">
                {formatUSD(product!.price)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Rating</dt>
              <dd aria-label={`rating ${product!.rating}`}>★ {product!.rating}</dd>
            </div>
          </dl>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="bg-violet-600 text-white px-5 py-2 rounded-xl hover:bg-violet-700"
              aria-label="Contact the artisan (placeholder)"
            >
              Contact artisan
            </button>
            <Link
              href="/"
              className="px-5 py-2 rounded-xl border hover:bg-gray-50"
              aria-label="Return to homepage"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
