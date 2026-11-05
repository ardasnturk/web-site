import { useTranslation } from "react-i18next";
import { EMAIL } from "../data/projects";

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-paper">
      <div className="w-full max-w-lg rounded-3xl border border-line bg-surface p-10 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight">
          {t("support.title")}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {t("support.text")}
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block rounded-full bg-ember px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
        >
          {t("support.button")}
        </a>
        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Arda Sentürk
        </p>
      </div>
    </div>
  );
};

export default Support;
