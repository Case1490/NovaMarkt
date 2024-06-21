import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo_NovaMarket.png";
import LogoDark from "../assets/LogoDark_NovaMarket.png";
import SearchBar from "./SearchBar";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

const Navbar = ({ darkMode, toggleDarkMode, onSearch }) => {
  return (
    <div className="w-full dark:bg-Negro bg-white text-black dark:text-white z-50 shadow-lg py-2 transition-all duration-500 ease-in-out">
      <div className="w-[80%] m-auto flex items-center justify-between">
        <div className="w-[140px]">
          <img src={darkMode ? LogoDark : Logo} alt="NovaMarket" />
        </div>

        <div className="w-[40%]">
          <SearchBar onSearch={onSearch} />
        </div>

        <nav className="w-[30%] flex items-center justify-center gap-6 navbar">
          <NavLink
            to="/"
            className="dark:text-white transition-colors duration-500 ease-in-out"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className="dark:text-white transition-colors duration-500 ease-in-out"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className="dark:text-white transition-colors duration-500 ease-in-out"
          >
            Contacto
          </NavLink>

          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? <Sun /> : <Moon />}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
