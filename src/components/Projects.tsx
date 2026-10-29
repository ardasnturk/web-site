// No import needed for React 19 with new JSX transform
import { useTranslation } from "react-i18next";
import weightlyIcon from "../assets/projects/weightly/icon.png";
import weightlyBanner from "../assets/projects/weightly/banner.jpg";
import finlyIcon from "../assets/projects/finly/icon.png";
import finlyBanner from "../assets/projects/finly/banner.jpg";
import lunaviaIcon from "../assets/projects/lunavia/icon.png";
import lunaviaBanner from "../assets/projects/lunavia/banner.jpg";
import howWellIcon from "../assets/projects/howwell/icon.png";
import howWellBanner from "../assets/projects/howwell/banner.jpg";
import kickoffIcon from "../assets/projects/kickoff/icon.png";
import kickoffBanner from "../assets/projects/kickoff/banner.jpg";
import atlevaIcon from "../assets/projects/atleva/icon.png";
import atlevaBanner from "../assets/projects/atleva/banner.jpg";
import remoteCodeIcon from "../assets/projects/remote-code/icon.png";
import remoteCodeBanner from "../assets/projects/remote-code/banner.jpg";
import vitrinIcon from "../assets/projects/vitrin/icon.png";
import vitrinBanner from "../assets/projects/vitrin/banner.jpg";
import a11yBanner from "../assets/projects/a11y/banner.jpg";
import pinGeneratorBanner from "../assets/projects/pin-generator/banner.jpg";

type ProjectStatus = "live" | "comingSoon" | "openSource";

interface Project {
  id: string;
  status: ProjectStatus;
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  testFlightUrl?: string;
  icon?: string;
  // Wide 1200×630 preview banner, as used for the project's social preview
  banner?: string;
}

const projects: Project[] = [
  {
    id: "weightly",
    status: "live",
    technologies: ["Swift", "SwiftUI", "SwiftData", "HealthKit", "WidgetKit", "watchOS"],
    icon: weightlyIcon,
    banner: weightlyBanner,
    appStoreUrl: "https://apps.apple.com/app/id6746693008",
    websiteUrl: "https://weightly.ardasnturk.com",
  },
  {
    id: "finly",
    status: "live",
    technologies: ["Swift", "SwiftUI", "watchOS", "WidgetKit", "App Intents"],
    icon: finlyIcon,
    banner: finlyBanner,
    appStoreUrl: "https://apps.apple.com/app/id6747941491",
    websiteUrl: "https://finly.ardasnturk.com",
  },
  {
    id: "lunavia",
    status: "live",
    technologies: ["Swift", "SwiftUI", "HealthKit", "WidgetKit", "On-device AI"],
    icon: lunaviaIcon,
    banner: lunaviaBanner,
    appStoreUrl: "https://apps.apple.com/app/id6823805889",
    websiteUrl: "https://lunavia.ardasnturk.com",
  },
  {
    id: "howWell",
    status: "live",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
    icon: howWellIcon,
    banner: howWellBanner,
    appStoreUrl: "https://apps.apple.com/app/id6747012384",
  },
  {
    id: "kickoff",
    status: "comingSoon",
    technologies: ["Swift", "SwiftUI", "Supabase", "Live Activities", "AI"],
    icon: kickoffIcon,
    banner: kickoffBanner,
    websiteUrl: "https://kickoff.ardasnturk.com",
  },
  {
    id: "atleva",
    status: "comingSoon",
    technologies: ["Swift", "SwiftUI", "HealthKit", "CloudKit", "WidgetKit"],
    icon: atlevaIcon,
    banner: atlevaBanner,
    websiteUrl: "https://atleva.ardasnturk.com",
  },
  {
    id: "vitrin",
    status: "openSource",
    technologies: ["TypeScript", "Claude Code", "Playwright", "Remotion", "fastlane"],
    icon: vitrinIcon,
    banner: vitrinBanner,
    githubUrl: "https://github.com/ardasnturk/vitrin",
    websiteUrl: "https://vitrin.ardasnturk.com",
  },
  {
    id: "remoteCode",
    status: "openSource",
    technologies: ["Swift", "SwiftUI", "macOS", "iOS", "E2E Encryption"],
    icon: remoteCodeIcon,
    banner: remoteCodeBanner,
    githubUrl: "https://github.com/ardasnturk/remote-code",
    websiteUrl: "https://rcode.ardasnturk.com",
    testFlightUrl: "https://testflight.apple.com/join/6CE4VRRE",
  },
  {
    id: "a11y",
    status: "openSource",
    technologies: ["TypeScript", "Appium", "Next.js", "React Native", "WCAG"],
    banner: a11yBanner,
    githubUrl: "https://github.com/ardasnturk/react-native-accessibility-automation",
  },
  {
    id: "pinGenerator",
    status: "openSource",
    technologies: ["TypeScript", "Node.js", "SVG"],
    banner: pinGeneratorBanner,
    githubUrl: "https://github.com/ardasnturk/pin-generator",
  },
];

const groups: ProjectStatus[] = ["live", "comingSoon", "openSource"];

const statusBadgeClass: Record<ProjectStatus, string> = {
  live: "bg-green-100 text-green-700",
  comingSoon: "bg-amber-100 text-amber-700",
  openSource: "bg-gray-100 text-gray-700",
};

const GitHubIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.365 1.43c0 1.14-.47 2.23-1.21 3.02-.8.86-2.1 1.52-3.17 1.43-.13-1.1.42-2.25 1.15-3.01.8-.84 2.18-1.47 3.23-1.44zM20.5 17.27c-.56 1.3-.83 1.88-1.55 3.03-1 1.6-2.42 3.6-4.17 3.61-1.56.02-1.96-1.01-4.07-1-2.11.01-2.55 1.02-4.11 1-1.75-.02-3.09-1.82-4.09-3.42C-.27 16.03-.57 10.83 1.23 8.07 2.5 6.1 4.5 4.95 6.38 4.95c1.92 0 3.12 1.05 4.71 1.05 1.54 0 2.48-1.05 4.7-1.05 1.67 0 3.44.91 4.7 2.48-4.13 2.26-3.46 8.16.01 9.84z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const Projects = () => {
  const { t } = useTranslation();

  const linkClass =
    "flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium";

  return (
    <section id="projects" className="px-6 lg:px-24 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {groups.map((group) => (
          <div key={group} className="mb-16 last:mb-0">
            <div className="mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {t(`projects.groups.${group}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`projects.groups.${group}.subtitle`)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects
                .filter((project) => project.status === group)
                .map((project) => {
                  const title = t(`projects.items.${project.id}.title`);
                  const update = t(`projects.items.${project.id}.update`, {
                    defaultValue: "",
                  });

                  return (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
                    >
                      {/* Project Banner */}
                      {project.banner && (
                        <div className="aspect-[40/21] bg-gray-100">
                          <img
                            src={project.banner}
                            alt={`${title} banner`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        {/* App Icon, Title and Status */}
                        <div className="flex items-center mb-4">
                          {project.icon ? (
                            <img
                              src={project.icon}
                              alt={`${title} icon`}
                              className="w-12 h-12 rounded-xl mr-4 shadow-sm"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-xl mr-4 bg-primary-100 text-primary-600 flex items-center justify-center text-xl font-bold">
                              {title.charAt(0)}
                            </div>
                          )}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {title}
                            </h4>
                            <span
                              className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass[project.status]}`}
                            >
                              {t(`projects.status.${project.status}`)}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {t(`projects.items.${project.id}.description`)}
                        </p>

                        {/* Latest update */}
                        {update && (
                          <div className="mb-4 p-3 bg-primary-50 rounded-lg text-sm text-primary-800">
                            <span className="font-semibold">
                              {t("projects.latestUpdate")}:{" "}
                            </span>
                            {update}
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 mt-auto">
                          {project.appStoreUrl && (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${linkClass} bg-gray-900 text-white hover:bg-gray-800`}
                            >
                              <AppleIcon />
                              {t("projects.appStore")}
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${linkClass} bg-gray-900 text-white hover:bg-gray-800`}
                            >
                              <GitHubIcon />
                              {t("projects.github")}
                            </a>
                          )}
                          {project.testFlightUrl && (
                            <a
                              href={project.testFlightUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${linkClass} border border-gray-300 text-gray-800 hover:bg-gray-50`}
                            >
                              <AppleIcon />
                              {t("projects.testFlight")}
                            </a>
                          )}
                          {project.websiteUrl && (
                            <a
                              href={project.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${linkClass} bg-primary-600 text-white hover:bg-primary-700`}
                            >
                              <ExternalIcon />
                              {t("projects.website")}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <a
            href="https://github.com/ardasnturk?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <GitHubIcon />
            {t("projects.allRepos")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
