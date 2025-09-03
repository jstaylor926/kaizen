import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { KaizenStepItem } from "@/components/KaizenStep";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.blurb}</p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Kaizen timeline</h2>
        <ol className="mt-4 space-y-4">
          {project.steps
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((step, idx) => <KaizenStepItem key={idx} step={step} />)}
        </ol>
      </section>
    </article>
  );
}
