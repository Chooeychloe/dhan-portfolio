const Projects = () => {
  const projects = [
    {
      title: "Faculty Files System",
      description: "Manage faculty documents using Firebase & React.",
      image: "/images/project1.png",
    },
    {
      title: "Attendance App",
      description: "Real-time student tracking built with Flutter.",
      image: "/images/project2.png",
    },
    {
      title: "Hunter x Hunter Portfolio",
      description: "Anime-themed web portfolio with smooth animations.",
      image: "/images/project3.png",
    },
  ];

  return (
    <section id="projects" className="px-8 lg:px-32 py-24" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-10 tracking-wide">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
