import Navbar from "@/components/navbar";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl" />

      <div className="relative z-10">
        <Navbar />

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl font-bold text-white">{username}&apos;s Profile</h1>
          <p className="mt-2 text-slate-300">
            User profile details and posts will appear here.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-400 shadow-xl backdrop-blur-md">
            This profile is not set up yet.
          </div>
        </section>
      </div>
    </main>
  );
}