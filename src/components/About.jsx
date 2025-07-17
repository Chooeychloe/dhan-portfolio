import {
  FaReact,
  FaLaravel,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiFlutter,
  SiTailwindcss,
  SiFirebase,
  SiDart,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      onClick={() => console.log("Navigating to About")}
      className="px-8 lg:px-32 py-24"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-6 tracking-wide">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl mb-6">
        Hello! I’m <span className="text-orange-400 font-bold">Dhan</span>, an
        instructor and developer based in the Philippines. I specialize in
        building user-centric web and mobile applications using technologies
        like Flutter and React. I love blending teaching with software
        development to inspire and educate the next generation of coders.
      </p>

      <a
        href="/edan-resume.pdf" // Make sure this file exists in your public folder
        download
        className="inline-block mb-10 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
      >
        📄 Download Resume
      </a>

      {/* Languages */}
      <div data-aos="fade-up" data-aos-delay="200" className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Languages I Use:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <TechCard icon={<FaJava size={30} />} label="Java" />
          <TechCard icon={<FaJsSquare size={30} />} label="JavaScript" />
          <TechCard icon={<SiDart size={30} />} label="Dart" />
          <TechCard icon={<FaPhp size={30} />} label="PHP" />
        </div>
      </div>

      {/* Tools and Frameworks */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-semibold mb-4">Frameworks & Tools:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <TechCard icon={<FaReact size={30} />} label="React.js" />
          <TechCard icon={<SiTailwindcss size={30} />} label="Tailwind CSS" />
          <TechCard icon={<SiFlutter size={30} />} label="Flutter" />
          <TechCard icon={<FaLaravel size={30} />} label="Laravel" />
          <TechCard icon={<SiFirebase size={30} />} label="Firebase" />
          <TechCard icon={<FaNodeJs size={30} />} label="Node.js" />
          <TechCard icon={<SiExpress size={30} />} label="Express.js" />
          <TechCard icon={<SiMongodb size={30} />} label="MongoDB" />
          <TechCard icon={<SiPostgresql size={30} />} label="PostgreSQL" />
          <TechCard icon={<SiMysql size={30} />} label="MySQL" />
          <TechCard icon={<FaFigma size={30} />} label="Figma" />
          <TechCard icon={<SiPostman size={30} />} label="Postman" />
          <TechCard icon={<FaGithub size={30} />} label="Git & GitHub" />
        </div>
      </div>
    </section>
  );
};

// Reusable TechCard component
const TechCard = ({ icon, label }) => (
  <div className="bg-[#1f1f1f] hover:bg-[#333] transition rounded-lg p-4 flex flex-col items-center justify-center text-center">
    <div className="mb-2 text-orange-400">{icon}</div>
    <span className="text-white text-sm">{label}</span>
  </div>
);

export default About;
