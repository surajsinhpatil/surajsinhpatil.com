import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";

export const dynamic = "force-static";

type Project = {
  title: string;
  tagline: string;
  period: string;
  tags: string[];
  description: string;
  liveUrl?: string;
  codeUrl: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Mini Coding Platform",
    tagline: "Full-Stack Online Judge",
    period: "May 2026 — Jul 2026",
    tags: ["React", "Node.js / Express", "PostgreSQL", "C++", "Docker"],
    description:
      "A full-stack, LeetCode-style online coding judge that compiles, executes, and evaluates C++ submissions against hidden test cases through an automated verdict pipeline (Accepted, Wrong Answer, TLE, Runtime & Compilation errors), with an optional Docker sandbox for isolated execution. Deployed across Vercel, Render, and Neon.",
    liveUrl: "https://mini-coding-platform-yqdd.vercel.app",
    codeUrl: "https://github.com/surajsinhpatil/mini-coding-platform",
    featured: true,
  },
  {
    title: "Distributed Movie Ticket Booking System",
    tagline: "Distributed Systems",
    period: "Sep 2025 — Dec 2025",
    tags: ["Python", "Raft Consensus", "gRPC", "Protocol Buffers"],
    description:
      "A fault-tolerant distributed booking system built on the Raft consensus algorithm for leader election and log replication, with six gRPC microservices communicating over Protocol Buffers and concurrent seat reservation that prevents double booking under simultaneous requests.",
    codeUrl: "https://github.com/surajsinhpatil/distributed-movie-ticket-booking",
  },
  {
    title: "Explainable Banana Leaf Disease Diagnosis",
    tagline: "Machine Learning / Explainable AI",
    period: "Jan 2026 — May 2026",
    tags: ["LLaVA-1.5-7B", "LoRA", "EfficientNet-B0", "Grad-CAM"],
    description:
      "A multimodal disease-diagnosis system pairing a LoRA fine-tuned vision-language model with an EfficientNet-B0 + Grad-CAM explainability pipeline to produce human-verifiable visual and textual explanations. Submitted to the ICML 2026 AI4GOOD Workshop.",
    codeUrl: "https://github.com/surajsinhpatil/explainable-banana-leaf-diagnosis",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 text-xs">
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-900/10 p-8 transition duration-300 hover:border-zinc-600 hover:from-zinc-900 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="uppercase tracking-[0.2em] text-[11px] text-zinc-500">
          {project.tagline}
        </p>
        <p className="text-xs text-zinc-500">{project.period}</p>
      </div>

      <h3
        className={`mt-4 font-bold text-zinc-100 ${
          project.featured ? "text-3xl md:text-4xl" : "text-2xl"
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400 max-w-3xl">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Live Demo <ArrowUpRight size={16} />
          </a>
        )}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
        >
          <Github size={16} /> View Code
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={180}
      />
      <Navigation />

      <section className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Projects
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Selected engineering and machine learning work — from full-stack
            systems to distributed infrastructure and explainable AI.
          </p>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
