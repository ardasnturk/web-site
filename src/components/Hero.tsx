import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { countByStatus, findProject } from "../data/projects";
import { ease } from "../data/motion";

// The launch announced above the name
const latestLaunch = findProject("atleva");

const firstName = "Arda";
const lastName = "Sentürk";

// Real app icons scattered around the name; deeper ones react more to the pointer
const floatingIcons = [
  { id: "atleva", left: "7%", top: "20%", size: 92, depth: 34, tilt: -8, wide: false },
  { id: "finly", left: "85%", top: "16%", size: 80, depth: 26, tilt: 7, wide: false },
  { id: "vitrin", left: "86%", top: "66%", size: 92, depth: 40, tilt: -6, wide: false },
  { id: "lunavia", left: "4%", top: "62%", size: 72, depth: 22, tilt: 9, wide: false },
  { id: "weightly", left: "21%", top: "10%", size: 60, depth: 16, tilt: 5, wide: true },
  { id: "kickoff", left: "68%", top: "9%", size: 62, depth: 18, tilt: -5, wide: true },
  { id: "remoteCode", left: "90%", top: "42%", size: 66, depth: 20, tilt: 6, wide: true },
  { id: "polylocal", left: "16%", top: "76%", size: 58, depth: 14, tilt: -7, wide: true },
  { id: "promoStudio", left: "72%", top: "72%", size: 56, depth: 12, tilt: 8, wide: true },
];

interface FloatingIconProps {
  icon: (typeof floatingIcons)[number];
  index: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scrollY: MotionValue<number>;
}

const FloatingIcon = ({ icon, index, pointerX, pointerY, scrollY }: FloatingIconProps) => {
  const project = findProject(icon.id);
  const x = useTransform(pointerX, (value) => value * icon.depth);
  const y = useTransform(
    [pointerY, scrollY],
    ([pointer, scroll]: number[]) => pointer * icon.depth - scroll * (icon.depth / 60)
  );

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute ${icon.wide ? "hidden lg:block" : "hidden sm:block"}`}
      style={{ left: icon.left, top: icon.top, x, y }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.5 + index * 0.07 }}
    >
      <img
        src={project.icon}
        alt=""
        width={icon.size}
        height={icon.size}
        className="drift rounded-[22%] shadow-2xl shadow-black/60"
        style={
          {
            "--tilt": `${icon.tilt}deg`,
            "--drift": `${6 + index * 0.7}s`,
          } as React.CSSProperties
        }
      />
    </motion.div>
  );
};

const AnimatedName = ({ text, delay }: { text: string; delay: number }) => (
  <span className="block overflow-hidden pb-[0.06em] pt-[0.14em]">
    {text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease, delay: delay + index * 0.045 }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
);

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const startedAt = performance.now() + 900;
    const duration = 1400;

    // A timer rather than animation frames, so the real numbers still appear in a background tab
    const timer = window.setInterval(() => {
      const progress = Math.min((performance.now() - startedAt) / duration, 1);
      if (progress <= 0) return;
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress === 1) window.clearInterval(timer);
    }, 40);
    return () => window.clearInterval(timer);
  }, [isInView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const pointerY = useSpring(rawY, { stiffness: 50, damping: 18 });
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(640px at ${spotX}% ${spotY}%, rgba(255, 106, 61, 0.16), transparent 70%)`;
  const { scrollY } = useScroll();
  const nameY = useTransform(scrollY, [0, 700], [0, -90]);
  const nameOpacity = useTransform(scrollY, [0, 600], [1, 0.15]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    rawX.set(x - 0.5);
    rawY.set(y - 0.5);
    spotX.set(x * 100);
    spotY.set(y * 100);
  };

  const stats = [
    { value: countByStatus("live"), label: t("hero.stats.apps") },
    { value: countByStatus("comingSoon"), label: t("hero.stats.soon") },
    { value: countByStatus("openSource"), label: t("hero.stats.openSource") },
    { value: 15, suffix: "+", label: t("hero.stats.years") },
  ];

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-10 pt-28"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: spotlight }}
      />

      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={icon.id}
          icon={icon}
          index={index}
          pointerX={pointerX}
          pointerY={pointerY}
          scrollY={scrollY}
        />
      ))}

      <motion.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl text-center"
      >
        <motion.a
          href={latestLaunch.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 py-1.5 pe-4 ps-1.5 text-sm text-paper backdrop-blur transition-colors hover:border-ember"
        >
          <img src={latestLaunch.icon} alt="" className="h-6 w-6 rounded-md" />
          <span>{t("hero.shipped", { name: latestLaunch.name })}</span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
        </motion.a>

        <h1
          dir="ltr"
          className="font-display text-[clamp(4.2rem,min(17vw,20svh),12.5rem)] font-extrabold leading-[0.84] tracking-tighter"
        >
          <AnimatedName text={firstName} delay={0.15} />
          <AnimatedName text={lastName} delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted md:text-xl"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.05 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
          >
            {t("hero.ctaWork")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3.5 font-semibold text-paper transition-colors hover:border-paper"
          >
            {t("hero.ctaContact")}
          </a>
        </motion.div>

        <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-4xl font-bold">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
};

export default Hero;
