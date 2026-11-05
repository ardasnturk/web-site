import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";
import profileImage from "../assets/Profil.jpeg";
import Reveal from "./Reveal";

const skills = [
  "Swift",
  "SwiftUI",
  "SwiftData",
  "HealthKit",
  "WidgetKit",
  "watchOS",
  "macOS",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Unity",
  "Python",
  "AI/ML",
  "Claude Code",
  "Remotion",
  "Git",
];

const About = () => {
  const { t } = useTranslation();
  const photo = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photo,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="overflow-hidden border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <div
            ref={photo}
            className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem]"
          >
            <motion.img
              src={profileImage}
              alt="Arda Sentürk"
              loading="lazy"
              style={{ y: imageY, scale: 1.2 }}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              {t("about.title")}
            </h2>
          </Reveal>
          <div className="mt-7 space-y-4 text-lg leading-relaxed text-muted">
            {["p1", "p2", "p3"].map((key, index) => (
              <Reveal key={key} delay={0.05 * index}>
                <p>{t(`about.${key}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20" dir="ltr">
        <h3 className="sr-only">{t("about.skills")}</h3>
        <div className="[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="marquee gap-3">
            {[...skills, ...skills].map((skill, index) => (
              <li
                key={index}
                aria-hidden={index >= skills.length}
                className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 font-display text-lg font-semibold text-paper/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
