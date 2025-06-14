// No import needed for React 19 with new JSX transform

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskmanager-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive charts using third-party APIs.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      githubUrl: "https://github.com/yourusername/social-dashboard",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description:
        "A mobile-first recipe finder application with search functionality, ingredient tracking, and meal planning features.",
      technologies: ["React Native", "Expo", "Redux", "Spoonacular API"],
      githubUrl: "https://github.com/yourusername/recipe-finder",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and deployed on GitHub Pages. Features smooth scrolling and modern design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourusername.github.io/portfolio",
    },
  ];
  return null;
  return (
    <section id="projects" className="px-6 lg:px-24 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
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
                <div className="flex gap-3">
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
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
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
                      Live Demo
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
