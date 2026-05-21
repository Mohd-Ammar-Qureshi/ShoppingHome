import { useEffect, useState } from "react";
import { navLinks } from "../../data/Data";
import SearchOverlay from "../SearchOverlay";
import CartDrawer from "../CartDrawer";
import MobileMenu from "../MoblieMenu";
import { Search, ShoppingCart } from "lucide-react";
import { Link} from "react-router-dom";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SearchOverlay
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
      />

      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className=" flex items-center justify-between px-6 h-18 text-white">
          <div className=" flex gap-7">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:invisible text-2xl"
            >
              ☰
            </button>
            <Link to="/" className="text-2xl font-bold">
             SHOPPING<span className="text-yellow-400">.</span>HOME
            </Link>
          </div>

          <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`hover:text-yellow-400 transition ${
                  link.accent ? "text-yellow-400" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
         </ul>

          <div className="flex items-center gap-5 ">
        <button
          onClick={logoutHandler}
          className="hidden lg:flex font-bold hover:text-black/90 px-4 py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          Logout
        </button>
            <button onClick={() => setSearchOpen(true)}>
              <Search />
            </button>

            <button onClick={() => setCartOpen(true)}>
              <ShoppingCart />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
