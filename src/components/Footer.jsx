const Footer = () => {
  return (
    <footer className="text-center text-sm py-6 border-t border-gray-700">
      <p className="text-gray-400">
        © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">Dhan Belgica</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
