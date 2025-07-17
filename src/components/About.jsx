const About = () => {
  return (
    <section id="about" onClick={() => console.log('Navigating to About')} className="px-8 lg:px-32 py-24" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 tracking-wide">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl">
        Hello! I’m Dhan, an instructor and developer based in the Philippines. I specialize in building user-centric web and mobile applications using technologies like Flutter and React. I love blending teaching with software development to inspire and educate the next generation of coders. 
      </p>
    </section>
  );
};

export default About;
