const Contact = () => {
  return (
    <section id="contact" className="px-8 lg:px-32 py-24" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 tracking-wide">Contact</h2>
      <p className="mb-8">Feel free to reach out via email or social media!</p>
      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="mailto:yourname@email.com"
          className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          📧 Email Me
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
