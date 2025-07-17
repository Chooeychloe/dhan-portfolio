import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main id="home"
      className="flex lg:mt-20 flex-col
    lg:flex-row items-center justify-between
    min-h-[calc(90vh-6rem)]"
    >
      <div
        className="max-w-xl ml-[5%] z-10 mt-[90%]
    md:mt-[60%] lg:mt-0"
      >
        {/* <div
          className="relative w-[95%] sm:w-48 h-10
    bg-gradient-to-r from-[#656565] to-[#e99b63] 
    shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div
            className="absolute inset-[3px]
          bg-black rounded-full flex items-center
          justify-center gap-1"
          >
            <i class="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div> */}
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-3xl sm:text-4xl md:text-5l lg:text-6xl font-semibold
        tracking-wider my-8"
        >
          AN INSTRUCTOR &
          <br />A DEVELOPER
        </h1>
        <p
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          I'm an instructor and developer passionate about crafting elegant
          software solutions and empowering future tech innovators through
          education. <span className="italic">A dog lover also.</span>
        </p>
      </div>
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%]
      bottom-0 lg:left-[25%] sm:left-[-2%] h-full
      "
        scene="https://prod.spline.design/FTCeslY-TBj7Aifp/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
