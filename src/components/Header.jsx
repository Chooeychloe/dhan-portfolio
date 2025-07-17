import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header
      className="flex justify-between
     items-center py-4 px-4 lg:px-20 bg-orange-500"
    >
      <img
        src="/logo.png"
        alt="Portfolio Logo"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="h-24 w-auto object-contain rounded-full"
      />

      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#home"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          ABOUT
        </a>{" "}
        <a
          href="#projects"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          PROJECTS
        </a>{" "}
        <a
          href="#contact"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          CONTACT
        </a>
      </nav>
      <a
        href="mailto:edan.belgica@cvsu.edu.ph"
        className="hidden md:block bg-[#a7a7a7] 
    text-black py-3 px-8 rounded-full 
    border-none font-medium transition-all
    duration-500 hover:bg-white cursor-pointer z-50"
      >
        LET'S TALK
      </a>
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
      >
        <i class="bx bx-menu"></i>
      </button>
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40
      bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            href="#home"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            HOME
          </a>
          <a
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            href="#about"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            ABOUT
          </a>
          <a
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
            href="#projects"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            PROJECTS
          </a>
          <a
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2500"
            href="#contact"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
