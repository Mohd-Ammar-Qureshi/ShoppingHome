import { navLinks } from "../data/data";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
      await authService.logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex flex-col justify-between fixed md:w-60 sm:w-60 inset-0 bg-black z-50 p-10 transition-transform duration-300 ${
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
      <div className="ml-auto">
        <button
          onClick={logoutHandler}
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Logout
        </button>
      </div>
        
    </div>
  );
};

export default MobileMenu;
