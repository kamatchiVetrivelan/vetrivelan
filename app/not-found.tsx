import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        {" "}
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-red-700 hover text-white rounded hover:bg-white hover:text-black hover:border-2 
      border-red-700 font-semibold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
