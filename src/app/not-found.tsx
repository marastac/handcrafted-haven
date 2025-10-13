import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-gray-600 mb-4">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="inline-block bg-violet-600 text-white px-4 py-2 rounded-xl">
        Go back home
      </Link>
    </main>
  );
}
