export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black px-6 text-white">
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-extrabold tracking-tight sm:text-9xl" style={{ color: "#4B5320" }}>
          Wicked Gecko
        </h1>
        <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Coming Soon
        </h2>
        <p className="mt-6 max-w-md text-lg text-zinc-400">
          We are working on something awesome. Stay tuned!
        </p>
      </main>

      <footer className="w-full border-t border-zinc-800 py-8 text-center">
        <p className="text-zinc-400">Contact Us</p>
        <a
          href="mailto:info@wickedgecko.com"
          className="mt-2 inline-block text-lg font-medium text-white hover:text-emerald-400 transition-colors"
        >
          info@wickedgecko.com
        </a>
      </footer>
    </div>
  );
}
