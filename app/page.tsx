import Link from "next/link";
import Image from "next/image";
import Particles from "./components/particles";
import { Card } from "./components/card";
import Spotlight from "./components/spotlight";

const skills = {
  backend: ["Java", "Python", "C++", "REST APIs", "gRPC"],
  systems: ["Distributed Systems", "Raft Consensus", "Concurrency", "Fault Tolerance", "System Design"],
  ml: ["PyTorch", "OpenCV", "CNNs", "Vision-Language Models", "Explainable AI"],
};

const projects = [
  {
    title: "Explainable Banana Leaf Disease Diagnosis",
    subtitle: "Vision-Language Models • Explainable AI • Computer Vision",
    description:
      "A lightweight explainable plant disease diagnosis framework using visual chain-of-thought reasoning with Vision-Language Models on real-field agricultural imagery.",
    link: "/projects/banana-leaf-ai",
  },
  {
    title: "Distributed Movie Ticket Booking System",
    subtitle: "Raft Consensus • gRPC • Distributed Systems",
    description:
      "A fault-tolerant distributed ticket booking platform implementing leader election, replicated state machines, and strong consistency under concurrent access.",
    link: "/projects/distributed-ticket-booking",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden isolate">
      <Particles
        className="absolute inset-0 -z-0 animate-fade-in"
        quantity={250}
      />

      {/* NAV */}
      <nav className="relative z-50 border-b border-zinc-800 bg-black/70 backdrop-blur animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-end">
          

          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <a href="/Surajsinh_Patil_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Resume
            </a>
            <a
              href="https://github.com/surajsinhpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/surajpatil12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="hidden w-screen h-px md:block animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0" />
      <Spotlight className="rounded-3xl">
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in">
            <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
              BITS PILANI • M.E. COMPUTER SCIENCE 27'
            </p>

            <h1 className="mt-6 py-3 text-5xl md:text-7xl font-bold leading-tight text-transparent bg-white bg-clip-text animate-title animate-fade-in">
            Surajsinh Patil
            </h1>

            <h2 className="mt-6 text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Software Engineer | Distributed Systems | Algorithms | Applied Machine Learning
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
            Final-year M.E. Computer Science student at BITS Pilani focused on distributed systems, backend engineering, and practical machine learning for real-world applications.            </p>

            <div className="mt-10 flex gap-4">
  <a
    href="/Surajsinh_Patil_Resume.pdf"
    target="_blank"
    className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
  >
    Resume
  </a>

  <Link
    href="/projects"
    className="px-8 py-4 border border-zinc-700 rounded-xl hover:border-zinc-500 transition"
  >
    View Projects
  </Link>

  <a
    href="mailto:h20250058@pilani.bits-pilani.ac.in"
    className="px-8 py-4 border border-zinc-700 rounded-xl hover:border-zinc-500 transition"
  >
    Contact
  </a>
</div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-zinc-700/20 rounded-full" />

              <Image
                src="/photo.jpg"
                alt="Surajsinh Patil"
                width={420}
                height={420}
                className="relative rounded-3xl border border-zinc-800 shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>
        </Spotlight>
      
      <div className="hidden w-screen h-px md:block animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0" />

      {/* ABOUT */}
      <Spotlight className="rounded-3xl">
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h3 className="text-3xl font-bold mb-8">About</h3>

        <p className="max-w-4xl text-zinc-400 text-lg leading-relaxed">
            I’m a Computer Science graduate student at BITS Pilani focused on building scalable backend systems and intelligent software for real-world applications.
          <br />
          <br />
            My experience spans distributed systems, fault-tolerant architecture design, networking, and applied machine learning, with projects ranging from consensus-driven distributed platforms to explainable computer vision systems.
          <br />
          <br />
            I’m particularly interested in engineering reliable systems where performance, scalability, and practical impact matter.
        </p>
      </section>
      </Spotlight>

      {/* PROJECTS */}
      <Spotlight className="rounded-3xl">
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h3 className="text-3xl font-bold mb-10">Featured Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 hover:bg-zinc-950 transition"
            >
              <p className="text-zinc-500 text-sm">{project.subtitle}</p>

              <h4 className="text-2xl font-bold mt-4 group-hover:text-zinc-100">
                {project.title}
              </h4>

              <p className="text-zinc-400 mt-6 leading-relaxed">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      </Spotlight>

      {/* SKILLS */}
      <Spotlight className="rounded-3xl">
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h3 className="text-3xl font-bold mb-10">Skills</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Backend" items={skills.backend} />
          <SkillCard title="Systems" items={skills.systems} />
          <SkillCard title="Machine Learning" items={skills.ml} />
        </div>
      </section>
      </Spotlight>

      {/* EXPERIENCE */}
      <Spotlight className="rounded-3xl">
<section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
  <h3 className="text-3xl font-bold mb-10">Experience</h3>

  <div className="space-y-8">
    <div className="border border-zinc-800 rounded-3xl p-8">
      <h4 className="text-2xl font-semibold">
        Teaching Assistant — Machine Learning
      </h4>
      <p className="text-zinc-500 mt-2">BITS Pilani</p>

      <p className="text-zinc-400 mt-6 leading-relaxed">
        Supported implementation, experimentation, and evaluation of machine learning workflows,
        assisting students with applied machine learning concepts, model development,
        and experimental analysis.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-3xl p-8">
      <h4 className="text-2xl font-semibold">
        Teaching Assistant — Computer Networks
      </h4>
      <p className="text-zinc-500 mt-2">BITS Pilani</p>

      <p className="text-zinc-400 mt-6 leading-relaxed">
        Conducted lab sessions for the complete Computer Networks curriculum,
        guiding students through practical implementation of networking concepts,
        protocol analysis, and systems-level problem solving.
      </p>
    </div>
  </div>
</section>
      </Spotlight>

      {/* CONTACT */}
      <Spotlight className="rounded-3xl">
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 pb-24">
        <h3 className="text-3xl font-bold mb-8">Contact</h3>

        
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:h20250058@pilani.bits-pilani.ac.in"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/surajsinhpatil"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/surajpatil12/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
          >
            LinkedIn
          </a>
        </div>
        
      </section>
      </Spotlight>
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-zinc-800 rounded-3xl p-8">
      <h4 className="text-xl font-semibold mb-6">{title}</h4>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
