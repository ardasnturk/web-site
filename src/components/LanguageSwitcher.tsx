import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { languages } from "../i18n/languages";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const current = i18n.resolvedLanguage ?? "en";

  useEffect(() => {
    if (!isOpen) return;

    const close = (event: PointerEvent | KeyboardEvent) => {
      const clickedInside =
        event instanceof PointerEvent &&
        root.current?.contains(event.target as Node);
      const isOtherKey =
        event instanceof KeyboardEvent && event.key !== "Escape";
      if (!clickedInside && !isOtherKey) setIsOpen(false);
    };

    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={t("nav.language")}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-paper"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.500 5.600 12 3z" />
        </svg>
        <span className="uppercase">{current}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute end-0 top-full z-50 mt-3 grid w-72 grid-cols-2 gap-1 rounded-2xl border border-line bg-raised p-2 shadow-2xl"
          >
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  type="button"
                  lang={language.code}
                  aria-current={language.code === current}
                  onClick={() => {
                    i18n.changeLanguage(language.code);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-xl px-3 py-2 text-start text-sm transition-colors ${
                    language.code === current
                      ? "bg-ember font-semibold text-ink"
                      : "text-paper hover:bg-line"
                  }`}
                >
                  {language.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
