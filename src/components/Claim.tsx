import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { CLAIM_URL, findProject } from "../data/projects";
import Reveal from "./Reveal";

const claimApps = ["finly", "weightly", "lunavia", "atleva"].map(findProject);

const Claim = () => {
  const { t } = useTranslation();

  return (
    <section id="promo" className="px-4 pb-24 md:pb-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-ember px-6 py-12 text-ink md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="shine absolute inset-y-0 start-0 w-1/4 bg-white/20 blur-xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">
                {t("claim.eyebrow")}
              </p>
              <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
                {t("claim.title")}
              </h2>
              <p className="mt-4 max-w-xl text-lg font-medium text-ink/75">
                {t("claim.text")}
              </p>
              <a
                href={CLAIM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-transform hover:scale-105"
              >
                {t("claim.button")}
              </a>
            </div>

            <ul className="grid max-w-xs grid-cols-2 gap-4 justify-self-center">
              {claimApps.map((app, index) => (
                <motion.li
                  key={app.id}
                  initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: index % 2 === 0 ? -4 : 4,
                  }}
                  whileHover={{ scale: 1.08, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                    delay: index * 0.08,
                  }}
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    loading="lazy"
                    className="h-24 w-24 rounded-[22%] shadow-xl shadow-black/30 md:h-28 md:w-28"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Claim;
