import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const dynamic = "force-static";

export default async function ProjectsPage() {
  const publishedProjects = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? 0).getTime() -
        new Date(a.date ?? 0).getTime()
    );

  const featured = publishedProjects[0];
  const top2 = publishedProjects[1];
  const top3 = publishedProjects[2];
  const sorted = publishedProjects.slice(3);

  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Selected engineering and machine learning work.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {featured && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="text-xs text-zinc-100">
                    {featured.date && (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    )}
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
                    {featured.title}
                  </h2>

                  <p className="mt-4 leading-8 text-zinc-400">
                    {featured.description}
                  </p>
                </article>
              </Link>
            </Card>

            <div className="flex flex-col gap-8">
              {[top2, top3]
                .filter(Boolean)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sorted.map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={0} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
