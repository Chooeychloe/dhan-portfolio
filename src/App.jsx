import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true
    });
  });

  return (
    <main>
      <img
        src="/gradient.png"
        alt=""
        className="absolute top-0 right-0 opacity-60 -z-10"
      />
      <div
        className="h-0 w-[40rem] 
      absolute top-[20%] right-[-5%] 
      shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"
      ></div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
