import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      title: "Faculty Files System",
      description:
        "A web-based document management system for faculty using Firebase and React.",
      image: "/1proj.png",
    },
    {
      title: "Room Scheduling System",
      description:
        "A smart system to manage and visualize DCS room schedules built with React and Firebase.",
      image: "/3proj.png",
    },
    {
      title: "Automatic Bingo Caller",
      description:
        "An automated Bingo number caller with randomized logic and UI.",
      image: "/2proj.png",
      link: "https://bingo-pi-three.vercel.app/",
    },
    {
      title: "Expense Tracker App",
      description:
        "A mobile app built in Flutter to track daily expenses and savings.",
      image: "/4proj.jpg",
    },
    {
      title: "Mental Health App",
      description:
        "An AI-powered Flutter app offering mental wellness support and mindfulness tracking.",
      image: "/5proj.jpg",
    },
    {
      title: "EAV: Fintech Solutions",
      description:
        "A cashless payment solution for PDLs (Persons Deprived of Liberty), developed in Flutter.",
      image: "/6proj.jpg",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="px-8 lg:px-32 py-24 text-white">
      <h2 className="text-4xl font-bold mb-10 tracking-wide text-center">Projects</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination", // External container for pagination
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => openModal(project)}
              className="cursor-pointer bg-[#1a1a1a] border border-gray-700 rounded-lg shadow hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots container */}
      <div className="custom-swiper-pagination mt-6 flex justify-center gap-2"></div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] max-w-lg w-full rounded-lg overflow-hidden shadow-lg relative flex flex-col"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {selectedProject.description}
                </p>
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Visit Website
                  </a>
                ) : (
                  <p className="text-sm italic text-gray-400">
                    This project is not for public access or is a mobile-only app.
                  </p>
                )}
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={closeModal}
                  className="text-sm text-gray-300 hover:text-orange-500 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
