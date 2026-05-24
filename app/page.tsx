import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900/20 to-black">
      <nav className="my-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={120}
      />

      <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text">
        Surajsinh Patil
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-10 text-center animate-fade-in max-w-3xl px-6">
        <h2 className="text-lg md:text-xl text-zinc-400 leading-relaxed">
          Development | Machine Learning | Distributed Systems
        </h2>

        <p className="mt-6 text-sm md:text-base text-zinc-500 leading-relaxed">
          Building fault-tolerant distributed systems and interpretable machine
          learning solutions for real-world impact.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-900 transition"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-900 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
