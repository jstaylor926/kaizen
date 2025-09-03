import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="mt-2">
        <h1 className="text-3xl font-semibold tracking-tight">Kaizen</h1>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Continuous improvement, shipped in tiny steps. This portfolio shows each project’s small wins as they happen.
        </p>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <a className="text-sm underline decoration-dotted underline-offset-4" href="/projects">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Latest improvements</h2>
        <ul className="space-y-3">
          {projects
            .flatMap(p => p.steps.map(s => ({ ...s, slug: p.slug, titleWithProject: `${p.title}: ${s.title}` })))
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 6)
            .map((s, i) => (
              <li key={i} className="text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">{s.titleWithProject}</span>
                {s.summary && <span className="text-zinc-500"> — {s.summary}</span>}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
