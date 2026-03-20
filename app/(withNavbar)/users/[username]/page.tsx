type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold text-white">
        {username}&apos;s Profile
      </h1>
      <p className="mt-2 text-slate-300">
        User profile details and posts will appear here.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-400 shadow-xl backdrop-blur-md">
        This profile is not set up yet.
      </div>
    </section>
  );
}