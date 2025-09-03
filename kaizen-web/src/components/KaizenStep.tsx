"use client";

import { motion } from "motion/react";
import type { KaizenStep } from "@/data/projects";
import { format } from "date-fns";

const colors: Record<KaizenStep["type"], string> = {
  design: "bg-fuchsia-500",
  refactor: "bg-amber-500",
  docs: "bg-sky-500",
  perf: "bg-emerald-500",
  feature: "bg-indigo-500",
  test: "bg-rose-500",
};

export function KaizenStepItem({ step }: { step: KaizenStep }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-6"
    >
      <span className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${colors[step.type]}`} />
      <div className="text-sm">
        <span className="font-medium">{step.title}</span>{" "}
        {step.summary && <span className="text-zinc-600 dark:text-zinc-400">— {step.summary}</span>}
      </div>
      <div className="mt-0.5 text-xs text-zinc-500">
        <time dateTime={step.date}>{format(new Date(step.date), "PPP")}</time>
        {step.impact && <span className="ml-2 rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">{step.impact}</span>}
        {step.link && (
          <a className="ml-2 underline decoration-dotted underline-offset-4" href={step.link} target="_blank">
            details
          </a>
        )}
      </div>
    </motion.li>
  );
}
