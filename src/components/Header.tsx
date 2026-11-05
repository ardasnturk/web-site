import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import LanguageSwitcher from "./LanguageSwitcher";
import { CLAIM_URL } from "../data/projects";

const sections = ["work", "updates", "about", "contact"];

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ["home", ...sections].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 h-0.5 origin-left bg-ember rtl:origin-right"
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-surface/80 py-1.5 pe-2 ps-5 backdrop-blur-xl">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
          dir="ltr"
        >
          Arda<span className="text-ember">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section
                  ? "text-ink"
                  : "text-muted hover:text-paper"
              }`}
            >
              {activeSection === section && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-paper"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{t(`nav.${section}`)}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <a
            href={CLAIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105 sm:block"
          >
            {t("nav.promo")}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={t("nav.menu")}
            className="rounded-full p-2 text-paper md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-surface p-3 md:hidden"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-2xl font-semibold hover:bg-line"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
            <a
              href={CLAIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-2xl bg-ember px-4 py-3 text-center font-semibold text-ink"
            >
              {t("nav.promo")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
