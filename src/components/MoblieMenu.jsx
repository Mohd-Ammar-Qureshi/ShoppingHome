import { navLinks } from "../data/data";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 p-10 transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="text-white text-2xl absolute top-5 left-5"
      >
        ✕
      </button>

      <ul className="space-y-8 mt-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white text-xl hover:text-yellow-400 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
