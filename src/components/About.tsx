// No import needed for React 19 with new JSX transform

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React-Native",
    "React",
    "Node.js",
    "Python",
    "Next.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ];

  return (
    <section id="about" className="px-6 lg:px-24 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                AS
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                I'm a passionate React-Native developer with over 3 years of
                experience creating digital solutions that combine beautiful
                design with robust functionality. I love turning complex
                problems into simple, elegant solutions. I'm currently focused
                on building scalable mobile applications using modern
                technologies like React-Native, TypeScript, and Node.js. I'm
                always excited to work on projects that make a positive impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good book. I
                believe in continuous learning and staying up-to-date with the
                latest industry trends.
              </p>
              <p>
                I'm currently focused on building scalable mobile applications
                using modern technologies like React-Native, TypeScript, and
                Node.js. I'm always excited to work on projects that make a
                positive impact.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            {/* <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
