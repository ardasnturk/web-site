import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CLAIM_URL, EMAIL, GITHUB_URL } from "../data/projects";
import Reveal from "./Reveal";

const socialLinks = [
  { name: "GitHub", url: GITHUB_URL },
  { name: "LinkedIn", url: "https://linkedin.com/in/ardasnturk" },
  { name: "X", url: "https://twitter.com/ardasnturk" },
];

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-line px-4 pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-4xl text-balance font-display text-5xl font-bold tracking-tight md:text-7xl">
            {t("contact.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            {t("contact.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${EMAIL}`}
            dir="ltr"
            className="font-display text-[clamp(1.6rem,6vw,4rem)] font-bold tracking-tight text-ember underline decoration-2 underline-offset-[0.2em] transition-opacity hover:opacity-80"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-paper"
          >
            <span aria-live="polite">
              {copied ? t("contact.copied") : t("contact.copy")}
            </span>
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 font-semibold text-paper transition-colors hover:border-paper"
            >
              {link.name}
            </a>
          ))}
        </Reveal>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Arda Sentürk · {t("contact.location")}
          </p>
          <a
            href={CLAIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            {t("nav.promo")}
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
