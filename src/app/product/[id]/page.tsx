// src/app/product/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById } from "@/lib/products";

// Currency formatter
function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Dynamic <title>/<meta> per product
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = getProductById(params.id);
  return {
    title: product ? `${product.name} – Handcrafted Haven` : "Product – Handcrafted Haven",
    description: product
      ? `Details for ${product.name}. Price ${formatUSD(product.price)}, rating ${product.rating}.`
      : "Product details",
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

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
        {/* Image placeholder (use real image if available in /public/images) */}
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

          {product!.category ? (
            <p className="mt-1 text-sm text-gray-500">Category: {product!.category}</p>
          ) : null}

          {product!.description ? (
            <p className="mt-3 text-gray-600">{product!.description}</p>
          ) : (
            <p className="mt-3 text-gray-600">
              No description provided for this item.
            </p>
          )}

          <dl className="mt-4 space-y-2">
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
