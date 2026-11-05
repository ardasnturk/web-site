import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import {
  countByStatus,
  GITHUB_URL,
  projects,
  type ProjectStatus,
} from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

type Filter = "all" | ProjectStatus;

const filters: Filter[] = ["all", "live", "comingSoon", "openSource"];

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = projects.filter(
    (project) => filter === "all" || project.status === filter
  );

  return (
    <section id="work" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-display text-5xl font-bold tracking-tight md:text-7xl">
            {t("projects.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            {t("projects.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "border-transparent text-ink"
                  : "border-line text-muted hover:text-paper"
              }`}
            >
              {filter === item && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-paper"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">
                {t(`projects.filters.${item}`)}
                <span className="ms-1.5 opacity-60">
                  {item === "all" ? projects.length : countByStatus(item)}
                </span>
              </span>
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-8 grid grid-flow-dense grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {(filter === "all" || filter === "openSource") && (
              <motion.a
                key="all-repos"
                layout
                href={`${GITHUB_URL}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group flex min-h-56 flex-col justify-between rounded-3xl border border-dashed border-line p-6 transition-colors hover:border-ember"
              >
                <span
                  aria-hidden="true"
                  className="text-4xl text-ember transition-transform duration-300 group-hover:translate-x-2 rtl:-scale-x-100 rtl:group-hover:-translate-x-2"
                >
                  →
                </span>
                <span className="font-display text-3xl font-bold leading-tight tracking-tight">
                  {t("projects.allRepos")}
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
