import Navbar from "@/components/navbar";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="relative z-10">
        <Navbar />
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl font-bold text-white">Your Feed</h1>
          <p className="mt-2 text-slate-300">
            Latest posts from the community will appear here.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-400 shadow-xl backdrop-blur-md">
            No posts yet.
          </div>
        </section>
      </div>
    </main>
  );
}
