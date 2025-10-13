"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products"; // datos centralizados

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query, products]); // <- importante: incluir products

  return (
    <>
      {/* Header = site navigation + hero */}
      <header className="max-w-6xl mx-auto p-6" role="banner">
        {/* Nav */}
        <nav
          className="flex items-center justify-between bg-white border rounded-2xl p-4 shadow-sm"
          aria-label="Primary"
        >
          <a href="/" className="font-semibold">
            Handcrafted Haven
          </a>

          <label className="relative w-64" htmlFor="search">
            <span className="sr-only">Search products</span>
            <input
              id="search"
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full border rounded-xl px-3 py-2 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </nav>

        {/* Hero */}
        <div className="mt-6 rounded-2xl bg-white border p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">
            Discover unique, handcrafted items
          </h1>
          <p className="mt-2 text-gray-600">
            A curated marketplace where artisans share their craft. Browse
            categories, compare prices, and support local makers.
          </p>
          <div className="mt-4">
            <a
              href="#catalog"
              className="inline-block bg-violet-600 text-white px-5 py-2 rounded-xl hover:bg-violet-700"
            >
              Browse catalog
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main" className="max-w-6xl mx-auto p-6" role="main">
        {/* Catalog */}
        <section id="catalog" aria-labelledby="catalog-heading" className="mt-2">
          <h2 id="catalog-heading" className="text-2xl font-semibold mb-2">
            New Arrivals
          </h2>

          {/* Results count (announced for screen readers) */}
          <p role="status" aria-live="polite" className="text-sm text-gray-600 mb-4">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
            {query ? ` for “${query}”` : null}
          </p>

          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {filtered.map((p) => (
              <li key={p.id}>
                <ProductCard id={p.id} name={p.name} price={p.price} rating={p.rating} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
