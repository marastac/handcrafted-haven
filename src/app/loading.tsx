export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-56 bg-gray-100 rounded-2xl" />
        ))}
      </div>
    </main>
  );
}
