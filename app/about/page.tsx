export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-semibold mb-4">
          ABOUT OUR COMPANY
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Building Digital Experiences
        </h1>

        <p className="text-lg text-slate-300 leading-8 mb-8">
          We build modern websites and software solutions
          that help businesses grow.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-slate-300">
              To create useful, reliable and modern digital solutions.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-slate-300">
              To make technology simple and accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
