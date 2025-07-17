import "boxicons/css/boxicons.min.css";

const Contact = () => {
  return (
    <section id="contact" className="px-8 lg:px-32 py-24" data-aos="fade-up">
      <div className="flex flex-col lg:flex-row items-stretch gap-12">
        {/* Left: Text and Links */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            Contact <span className="text-orange-400">me</span>
          </h2>
          <p className="mb-8">
            Feel free to reach out via email or social media!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:edan.belgica@cvsu.edu.ph"
              className="bg-white  text-black py-3 px-6 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
            >
              <i className="bx bx-envelope text-xl"></i>
              Email Me
            </a>
            <a
              href="https://github.com/Chooeychloe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-orange-400 py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <i className="bx bxl-github text-xl"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dhan-belgica/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-orange-400 py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <i className="bx bxl-linkedin-square text-xl"></i>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/well_dhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-orange-400 py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <i className="bx bxl-instagram-alt text-xl"></i>
              Instagram
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/dhan.png"
            alt="Dhan Belgica"
            className="w-1/2 max-w-sm h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
