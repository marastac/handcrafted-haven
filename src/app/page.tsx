"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, CATEGORIES } from "@/lib/products";

type SortKey = "priceAsc" | "priceDesc" | "ratingDesc";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortKey>("priceAsc");

  const filtered = useMemo(() => {
    // text search
    const q = query.trim().toLowerCase();
    let list = products.filter((p) =>
      q ? p.name.toLowerCase().includes(q) : true
    );

    // category filter
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    // sorting
    switch (sortBy) {
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "ratingDesc":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }

    return list;
  }, [query, category, sortBy]);

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

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <div className="flex gap-3">
              {/* Category filter */}
              <label className="inline-flex items-center gap-2">
                <span className="text-sm text-gray-700">Category</span>
                <select
                  className="border rounded-xl px-3 py-2 bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  aria-label="Filter by category"
                >
                  <option value="All">All</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              {/* Sort */}
              <label className="inline-flex items-center gap-2">
                <span className="text-sm text-gray-700">Sort</span>
                <select
                  className="border rounded-xl px-3 py-2 bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  aria-label="Sort products"
                >
                  <option value="priceAsc">Price (low → high)</option>
                  <option value="priceDesc">Price (high → low)</option>
                  <option value="ratingDesc">Rating (high → low)</option>
                </select>
              </label>
            </div>

            {/* Results count (announced for screen readers) */}
            <p role="status" aria-live="polite" className="text-sm text-gray-600">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {query ? ` for “${query}”` : ""}{" "}
              {category !== "All" ? `in ${category}` : ""}
            </p>
          </div>

          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {filtered.map((p) => (
              <li key={p.id}>
                <ProductCard
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  rating={p.rating}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
