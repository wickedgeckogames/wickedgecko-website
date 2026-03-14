export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black px-6 text-white">
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
          Coming Soon
        </h1>
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
