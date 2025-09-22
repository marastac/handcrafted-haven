export default function Home() {
  const products = [
    { id: 1, name: "Andean Ceramic Mug", price: 45, rating: 4.8 },
    { id: 2, name: "Silver Bracelet 950", price: 120, rating: 4.6 },
    { id: 3, name: "Hand-embroidered Textile", price: 80, rating: 4.9 },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white border rounded-2xl p-4 shadow-sm">
        <span className="font-semibold">Handcrafted Haven</span>
        <input
          placeholder="Search products…"
          aria-label="Search products"
          className="w-64 border rounded-xl px-3 py-2 outline-none"
        />
      </nav>

      {/* Catalog */}
      <section className="mt-6">
        <h1 className="text-2xl font-semibold mb-4">New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white border rounded-2xl p-4 shadow-sm"
            >
              {/* Placeholder for image */}
              <div
                className="aspect-square bg-gray-100 rounded-xl mb-3"
                role="img"
                aria-label={`${p.name} image placeholder`}
              />
              <h3 className="font-medium">{p.name}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-violet-600 font-semibold">${p.price}</span>
                <span aria-label={`rating ${p.rating}`}>★ {p.rating}</span>
              </div>
              <button className="mt-3 w-full bg-violet-600 text-white py-2 rounded-xl hover:bg-violet-700">
                View details
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
