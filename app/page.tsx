import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Snapboard</h1>
        <p className="mt-3 text-slate-600">
          A small post-sharing app built with Next.js, Clerk, Prisma, and AWS.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="/sign-up"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Register
          </Link>

          <Link
            href="/sign-in"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}