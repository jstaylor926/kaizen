"use client";

import { motion } from "motion/react";
import { ArrowRight, GitCommit, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { format } from "date-fns";

export default function ProjectCard({ project }: { project: Project }) {
  const latest = [...project.steps].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-xs rounded-full border px-2 py-0.5 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700">
          {project.status}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.blurb}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-xs rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
            {t}
          </span>
        ))}
      </div>

      {latest && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          <GitCommit className="h-4 w-4" />
          <span className="font-medium">Latest improvement:</span>
          <span className="text-zinc-600 dark:text-zinc-400">{latest.title}</span>
          <span aria-hidden>·</span>
          <time className="text-zinc-500">{format(new Date(latest.date), "MMM d")}</time>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <a
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium"
        >
          View project
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
        <div className="flex items-center gap-1 text-zinc-500">
          <Star className="h-4 w-4" />
          <span className="text-xs">Kaizen-friendly</span>
        </div>
      </div>
    </motion.article>
  );
}
