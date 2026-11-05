import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

const latestUpdates = projects
  .filter((project) => project.updatedAt)
  .sort((a, b) => b.updatedAt!.localeCompare(a.updatedAt!))
  .slice(0, 7);

const Updates = () => {
  const { t, i18n } = useTranslation();

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(i18n.resolvedLanguage, {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));

  return (
    <section id="updates" className="overflow-x-clip border-t border-line px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-balance font-display text-5xl font-bold tracking-tight md:text-6xl">
            {t("updates.title")}
          </h2>
          <p className="mt-5 text-lg text-muted">{t("updates.subtitle")}</p>
        </Reveal>

        <ol>
          {latestUpdates.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="border-b border-line first:border-t"
            >
              <a
                href={
                  project.appStoreUrl ?? project.websiteUrl ?? project.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-5 transition-transform duration-300 hover:translate-x-2 rtl:hover:-translate-x-2"
              >
                <img
                  src={project.icon}
                  alt=""
                  loading="lazy"
                  className="mt-0.5 h-11 w-11 flex-none rounded-[22%]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-lg font-bold transition-colors group-hover:text-ember">
                      {project.name}{" "}
                      <span className="text-sm font-medium text-muted" dir="ltr">
                        v{project.version}
                      </span>
                    </h3>
                    <time dateTime={project.updatedAt} className="text-sm text-muted">
                      {formatDate(project.updatedAt!)}
                    </time>
                  </div>
                  <p className="mt-1 leading-relaxed text-muted">
                    {t(`projects.items.${project.id}.update`)}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Updates;
