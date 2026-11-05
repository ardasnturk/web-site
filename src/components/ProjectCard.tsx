import { forwardRef, type PointerEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { Project, ProjectStatus } from "../data/projects";

const statusStyle: Record<ProjectStatus, string> = {
  live: "bg-emerald-400/15 text-emerald-300",
  comingSoon: "bg-amber-400/15 text-amber-300",
  openSource: "bg-sky-400/15 text-sky-300",
};

const ProjectLink = ({ href, children, primary }: { href: string; children: ReactNode; primary?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      primary
        ? "bg-paper text-ink hover:bg-ember"
        : "border border-line text-paper hover:border-paper"
    }`}
  >
    {children}
  </a>
);

const ProjectCard = forwardRef<HTMLElement, { project: Project }>(({ project }, ref) => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22 };
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5, -5]), spring);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-5, 5]), spring);
  const glareX = useTransform(pointerX, [0, 1], [0, 100]);
  const glareY = useTransform(pointerY, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px at ${glareX}% ${glareY}%, rgba(245, 241, 232, 0.11), transparent 70%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={project.featured ? "md:col-span-2 lg:col-span-3" : undefined}
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-paper/30 ${
          project.featured ? "lg:grid lg:grid-cols-[3fr_2fr]" : ""
        }`}
      >
        <div className="relative aspect-[40/21] overflow-hidden bg-raised">
          <img
            src={project.banner}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3.5">
            <img
              src={project.icon}
              alt=""
              loading="lazy"
              className="h-12 w-12 rounded-[22%]"
            />
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight" dir="auto">
                {project.name}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                <span className={`rounded-full px-2 py-0.5 font-medium ${statusStyle[project.status]}`}>
                  {t(`projects.status.${project.status}`)}
                </span>
                {project.version && (
                  <span className="text-muted" dir="ltr">
                    v{project.version}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-muted">
            {t(`projects.items.${project.id}.description`)}
          </p>

          <ul className="mb-6 mt-4 flex flex-wrap gap-1.5" dir="ltr">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-line px-2 py-0.5 text-xs font-medium text-paper/80"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.appStoreUrl && (
              <ProjectLink href={project.appStoreUrl} primary>
                {t("projects.links.appStore")}
              </ProjectLink>
            )}
            {project.downloadUrl && (
              <ProjectLink href={project.downloadUrl} primary>
                {t("projects.links.download")}
              </ProjectLink>
            )}
            {project.githubUrl && (
              <ProjectLink href={project.githubUrl} primary={!project.downloadUrl}>
                {t("projects.links.github")}
              </ProjectLink>
            )}
            {project.websiteUrl && (
              <ProjectLink href={project.websiteUrl} primary={project.status === "comingSoon"}>
                {t("projects.links.website")}
              </ProjectLink>
            )}
            {project.testFlightUrl && (
              <ProjectLink href={project.testFlightUrl}>TestFlight</ProjectLink>
            )}
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />
      </motion.div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
