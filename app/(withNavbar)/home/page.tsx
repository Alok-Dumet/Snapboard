export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold text-white">Your Feed</h1>
      <p className="mt-2 text-slate-300">
        Latest posts from the community will appear here.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-400 shadow-xl backdrop-blur-md">
        No posts yet.
      </div>
    </section>
  );
}