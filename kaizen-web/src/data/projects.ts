export type KaizenStep = {
  date: string;                 // ISO
  type: "design" | "refactor" | "docs" | "perf" | "feature" | "test";
  title: string;
  summary?: string;
  impact?: "low" | "medium" | "high";
  link?: string;                // commit, PR, or demo
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  status: "incubating" | "building" | "shipped";
  startedAt: string;
  updatedAt: string;
  steps: KaizenStep[];
};

export const projects: Project[] = [
  {
    slug: "study-assistant",
    title: "Study Assistant IDE",
    blurb: "Local-first notes + flashcards + code helpers.",
    tech: ["React", "FastAPI", "Postgres", "Ollama"],
    status: "building",
    startedAt: "2025-08-15",
    updatedAt: "2025-09-01",
    steps: [
      {
        date: "2025-09-01",
        type: "design",
        title: "Project card hover & motion",
        summary: "Subtle elevation + icon animation.",
        impact: "low",
      },
      {
        date: "2025-08-22",
        type: "feature",
        title: "Flashcard generator MVP",
        summary: "MDX section → cards pipeline.",
        impact: "medium",
      },
    ],
  },
];
