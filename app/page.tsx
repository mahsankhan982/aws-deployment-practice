
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-400">
        AWS Deployment Practice
      </h1>

      <p className="mt-4 text-lg text-slate-300">
        Learning Next.js, GitHub, Docker and AWS Deployment.
      </p>

      <div className="mt-8 rounded-xl bg-slate-800 p-6">
        <h2 className="text-2xl font-semibold">
          Deployment Status
        </h2>

        <p className="mt-3 text-green-400">
          Application is running successfully!
        </p>
      </div>
    </main>
  );
}
