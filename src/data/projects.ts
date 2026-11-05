import weightlyIcon from "../assets/projects/weightly/icon.png";
import weightlyBanner from "../assets/projects/weightly/banner.jpg";
import finlyIcon from "../assets/projects/finly/icon.png";
import finlyBanner from "../assets/projects/finly/banner.jpg";
import lunaviaIcon from "../assets/projects/lunavia/icon.png";
import lunaviaBanner from "../assets/projects/lunavia/banner.jpg";
import atlevaIcon from "../assets/projects/atleva/icon.png";
import atlevaBanner from "../assets/projects/atleva/banner.jpg";
import howWellIcon from "../assets/projects/howwell/icon.png";
import howWellBanner from "../assets/projects/howwell/banner.jpg";
import kickoffIcon from "../assets/projects/kickoff/icon.png";
import kickoffBanner from "../assets/projects/kickoff/banner.jpg";
import elemixIcon from "../assets/projects/elemix/icon.png";
import elemixBanner from "../assets/projects/elemix/banner.jpg";
import vitrinIcon from "../assets/projects/vitrin/icon.png";
import vitrinBanner from "../assets/projects/vitrin/banner.jpg";
import remoteCodeIcon from "../assets/projects/remote-code/icon.png";
import remoteCodeBanner from "../assets/projects/remote-code/banner.jpg";
import promoStudioIcon from "../assets/projects/promo-studio/icon.png";
import promoStudioBanner from "../assets/projects/promo-studio/banner.jpg";
import promoTemplatesIcon from "../assets/projects/promo-templates/icon.png";
import promoTemplatesBanner from "../assets/projects/promo-templates/banner.jpg";
import polylocalIcon from "../assets/projects/polylocal/icon.png";
import polylocalBanner from "../assets/projects/polylocal/banner.jpg";
import kadrajIcon from "../assets/projects/kadraj/icon.png";
import kadrajBanner from "../assets/projects/kadraj/banner.jpg";
import videoCompressorIcon from "../assets/projects/video-compressor/icon.png";
import videoCompressorBanner from "../assets/projects/video-compressor/banner.jpg";
import a11yIcon from "../assets/projects/a11y/icon.png";
import a11yBanner from "../assets/projects/a11y/banner.jpg";
import pinGeneratorIcon from "../assets/projects/pin-generator/icon.png";
import pinGeneratorBanner from "../assets/projects/pin-generator/banner.jpg";

export type ProjectStatus = "live" | "comingSoon" | "openSource";

export interface Project {
  // Key of the texts under projects.items in the locale files
  id: string;
  name: string;
  status: ProjectStatus;
  icon: string;
  banner: string;
  technologies: string[];
  // Takes a whole row of the grid
  featured?: boolean;
  version?: string;
  // Release date of `version` (YYYY-MM-DD); projects with one appear under updates
  updatedAt?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  testFlightUrl?: string;
  downloadUrl?: string;
}

export const CLAIM_URL = "https://claim.ardasnturk.com";
export const GITHUB_URL = "https://github.com/ardasnturk";
export const EMAIL = "hello@ardasnturk.com";

export const projects: Project[] = [
  {
    id: "atleva",
    name: "Atleva",
    status: "live",
    icon: atlevaIcon,
    banner: atlevaBanner,
    featured: true,
    version: "1.0.0",
    updatedAt: "2026-11-04",
    technologies: ["Swift", "SwiftUI", "HealthKit", "CloudKit", "WidgetKit"],
    appStoreUrl: "https://apps.apple.com/app/id6823949585",
    websiteUrl: "https://atleva.ardasnturk.com",
  },
  {
    id: "weightly",
    name: "Weightly",
    status: "live",
    icon: weightlyIcon,
    banner: weightlyBanner,
    version: "2.0.2",
    updatedAt: "2026-10-29",
    technologies: ["Swift", "SwiftUI", "SwiftData", "HealthKit", "watchOS"],
    appStoreUrl: "https://apps.apple.com/app/id6746693008",
    websiteUrl: "https://weightly.ardasnturk.com",
  },
  {
    id: "finly",
    name: "Finly",
    status: "live",
    icon: finlyIcon,
    banner: finlyBanner,
    version: "2.0.4",
    updatedAt: "2026-11-03",
    technologies: ["Swift", "SwiftUI", "watchOS", "WidgetKit", "App Intents"],
    appStoreUrl: "https://apps.apple.com/app/id6747941491",
    websiteUrl: "https://finly.ardasnturk.com",
  },
  {
    id: "lunavia",
    name: "Lunavia",
    status: "live",
    icon: lunaviaIcon,
    banner: lunaviaBanner,
    version: "1.0.1",
    updatedAt: "2026-11-04",
    technologies: ["Swift", "SwiftUI", "HealthKit", "WidgetKit", "On-device AI"],
    appStoreUrl: "https://apps.apple.com/app/id6823805889",
    websiteUrl: "https://lunavia.ardasnturk.com",
  },
  {
    id: "howWell",
    name: "How Well?",
    status: "live",
    icon: howWellIcon,
    banner: howWellBanner,
    technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
    appStoreUrl: "https://apps.apple.com/app/id6747012384",
  },
  {
    id: "kickoff",
    name: "Kickoff",
    status: "comingSoon",
    icon: kickoffIcon,
    banner: kickoffBanner,
    technologies: ["Swift", "SwiftUI", "Supabase", "Live Activities", "AI"],
    websiteUrl: "https://kickoff.ardasnturk.com",
  },
  {
    id: "elemix",
    name: "Elemix",
    status: "comingSoon",
    icon: elemixIcon,
    banner: elemixBanner,
    technologies: ["Swift", "SwiftUI", "RevenueCat"],
    websiteUrl: "https://elemix.ardasnturk.com",
  },
  {
    id: "vitrin",
    name: "Vitrin",
    status: "openSource",
    icon: vitrinIcon,
    banner: vitrinBanner,
    featured: true,
    version: "2.3.1",
    updatedAt: "2026-11-04",
    technologies: ["TypeScript", "Claude Code", "Playwright", "Remotion", "macOS"],
    githubUrl: "https://github.com/ardasnturk/vitrin",
    websiteUrl: "https://vitrin.ardasnturk.com",
  },
  {
    id: "remoteCode",
    name: "Remote Code",
    status: "openSource",
    icon: remoteCodeIcon,
    banner: remoteCodeBanner,
    version: "1.7.0",
    updatedAt: "2026-11-04",
    technologies: ["Swift", "SwiftUI", "macOS", "iOS", "E2E encryption"],
    githubUrl: "https://github.com/ardasnturk/remote-code",
    websiteUrl: "https://rcode.ardasnturk.com",
    testFlightUrl: "https://testflight.apple.com/join/6CE4VRRE",
  },
  {
    id: "promoStudio",
    name: "Promo Studio",
    status: "openSource",
    icon: promoStudioIcon,
    banner: promoStudioBanner,
    version: "1.6.2",
    updatedAt: "2026-11-04",
    technologies: ["Swift", "macOS", "Claude Code", "Remotion", "Gemini"],
    githubUrl: "https://github.com/ardasnturk/promo-studio",
    websiteUrl: "https://promo.ardasnturk.com",
  },
  {
    id: "promoTemplates",
    name: "Promo Templates",
    status: "openSource",
    icon: promoTemplatesIcon,
    banner: promoTemplatesBanner,
    version: "1.3.0",
    updatedAt: "2026-11-03",
    technologies: ["TypeScript", "React", "Remotion", "Claude Code"],
    githubUrl: "https://github.com/ardasnturk/promo-templates",
  },
  {
    id: "polylocal",
    name: "Polylocal",
    status: "openSource",
    icon: polylocalIcon,
    banner: polylocalBanner,
    version: "0.6.1",
    updatedAt: "2026-11-02",
    technologies: ["Swift", "macOS", "Local AI", "Apple Silicon"],
    githubUrl: "https://github.com/ardasnturk/polylocal",
    downloadUrl: "https://github.com/ardasnturk/polylocal/releases",
  },
  {
    id: "kadraj",
    name: "Kadraj",
    status: "openSource",
    icon: kadrajIcon,
    banner: kadrajBanner,
    version: "0.3.1",
    technologies: ["Swift", "AppKit", "SwiftUI", "macOS"],
    githubUrl: "https://github.com/ardasnturk/kadraj",
    downloadUrl: "https://github.com/ardasnturk/kadraj/releases/latest",
  },
  {
    id: "videoCompressor",
    name: "Video Compressor",
    status: "openSource",
    icon: videoCompressorIcon,
    banner: videoCompressorBanner,
    version: "0.0.2",
    updatedAt: "2026-10-31",
    technologies: ["Swift", "SwiftUI", "AVFoundation", "ffmpeg"],
    githubUrl: "https://github.com/ardasnturk/video-compressor",
    downloadUrl: "https://github.com/ardasnturk/video-compressor/releases/latest",
  },
  {
    id: "a11y",
    name: "RN Accessibility Automation",
    status: "openSource",
    icon: a11yIcon,
    banner: a11yBanner,
    technologies: ["TypeScript", "Appium", "Next.js", "React Native", "WCAG"],
    githubUrl: "https://github.com/ardasnturk/react-native-accessibility-automation",
  },
  {
    id: "pinGenerator",
    name: "Map Pin Generator",
    status: "openSource",
    icon: pinGeneratorIcon,
    banner: pinGeneratorBanner,
    technologies: ["TypeScript", "Node.js", "SVG"],
    githubUrl: "https://github.com/ardasnturk/pin-generator",
  },
];

export const countByStatus = (status: ProjectStatus) =>
  projects.filter((project) => project.status === status).length;

export const findProject = (id: string) =>
  projects.find((project) => project.id === id)!;
