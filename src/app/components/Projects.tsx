export function Projects() {
  const projects = [
    {
      title: "Student Result Management System",
      desc: "A full-stack system to manage student results, attendance, and reports using PHP & MySQL.",
    },
    {
      title: "Mini CRM Lead Manager",
      desc: "React + Node.js application for managing client leads with CRUD operations.",
    },
    {
      title: "AI Humanizer App",
      desc: "AI-powered tool for grammar correction, rewriting, and translation using OpenAI API.",
    },
    {
      title: "Quantum Weather Forecasting",
      desc: "A smart weather prediction system using AI algorithms and quantum-inspired models for accurate forecasting.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-4xl font-bold text-gray-800">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-6 rounded-xl shadow-md bg-white transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-600 text-sm">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}