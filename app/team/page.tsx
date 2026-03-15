import Image from "next/image";

const founders = [
  {
    name: "Muhammet Ince",
    role: "Developer",
    photo: "/team/muhammet.jpg",
    linkedin: "https://www.linkedin.com/in/muhammetincedeveloper/",
  },
  {
    name: "Enes Akif Kaplan",
    role: "Developer",
    photo: "/team/enes.jpg",
    linkedin: "https://www.linkedin.com/in/enes-akif-kaplan-b8b6b31b1/",
  },
  {
    name: "Eray Yesilyurt",
    role: "Artist",
    photo: "/team/eray.jpg",
    linkedin: "https://www.linkedin.com/in/erayslyrt/",
  },
  {
    name: "Kaan Bektasoglu",
    role: "Marketing",
    photo: "/team/kaan.jpg",
    linkedin: "https://www.linkedin.com/in/kaan-bektasoglu-b11062210/",
  },
];

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-zinc-900 to-black px-6 text-white">
      <main className="flex flex-1 flex-col items-center justify-center text-center pt-24 pb-16">
        <h1
          className="text-7xl font-extrabold tracking-tight sm:text-9xl"
          style={{ color: "#4B5320" }}
        >
          Wicked Gecko
        </h1>

        <h2 className="mt-16 text-3xl font-bold tracking-wide text-zinc-300 sm:text-4xl">
          Founders
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-zinc-700/50 bg-zinc-800/40 px-8 py-10 transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/70 hover:shadow-lg hover:shadow-zinc-900/50"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-600 transition-colors group-hover:border-zinc-400">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{member.role}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-zinc-800 py-8 text-center">
        <p className="text-zinc-400">Contact Us</p>
        <a
          href="mailto:info@wickedgecko.com"
          className="mt-2 inline-block text-lg font-medium text-white transition-colors hover:text-emerald-400"
        >
          info@wickedgecko.com
        </a>
      </footer>
    </div>
  );
}
