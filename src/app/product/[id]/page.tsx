import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products as PRODUCTS, type Product } from "@/lib/products";

// Format currency
function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Next.js 15: params es un Promise
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const idNum = Number(id);
  const product = PRODUCTS.find((p) => p.id === idNum);

  return {
    title: product ? `${product.name} – Handcrafted Haven` : "Product – Handcrafted Haven",
    description: product
      ? `Details for ${product.name}. Price ${formatUSD(product.price)}, rating ${product.rating}.`
      : "Product details",
  };
}

// Next.js 15: params es un Promise también en la página
export default async function ProductDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idNum = Number(id);

  const found = PRODUCTS.find((p) => p.id === idNum);
  if (!found) {
    notFound();
  }
  // A partir de aquí tenemos un Product garantizado
  const product = found as Product;

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
          aria-label={`${product.name} image placeholder`}
        />

        {/* Details */}
        <div>
          <h1 id="product-title" className="text-2xl font-semibold">
            {product.name}
          </h1>

          {product.description && (
            <p className="mt-2 text-gray-600">{product.description}</p>
          )}

          <dl className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Price</dt>
              <dd className="font-semibold text-violet-700">
                {formatUSD(product.price)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Rating</dt>
              <dd aria-label={`rating ${product.rating}`}>★ {product.rating}</dd>
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
