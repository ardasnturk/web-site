// No import needed for React 19 with new JSX transform
import { useTranslation } from "react-i18next";
import weightlyIcon from "../assets/projects/1/icon.png";
import weightlyScreenshot1 from "../assets/projects/1/store/1.png";
import howWellIcon from "../assets/projects/2/icon.png";
import howWellScreenshot1 from "../assets/projects/2/store/01.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
  icon?: string;
  screenshot?: string;
}

const Projects = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.weightly.title"),
      description: t("projects.weightly.description"),
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Firebase",
        "Chart.js",
      ],
      icon: weightlyIcon,
      screenshot: weightlyScreenshot1,
      websiteUrl: "https://weightly.ardasenturk.de",
    },
    {
      id: 2,
      title: t("projects.howWell.title"),
      description: t("projects.howWell.description"),
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Firebase",
        "AsyncStorage",
      ],
      icon: howWellIcon,
      screenshot: howWellScreenshot1,
      websiteUrl: "https://howwell.ardasenturk.de",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Project Screenshot */}
              <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="h-full w-auto max-w-full object-contain rounded-lg shadow-md"
                  />
                ) : (
                  <div className="text-primary-600 text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* App Icon and Title */}
                <div className="flex items-center mb-4">
                  {project.icon && (
                    <img
                      src={project.icon}
                      alt={`${project.title} icon`}
                      className="w-12 h-12 rounded-xl mr-4 shadow-sm"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      {t("projects.github")}
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {t("projects.website")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
