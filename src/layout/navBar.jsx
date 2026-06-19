import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-[#309689] ${
      isActive ? "bg-[#1f7a6d]" : ""
    }`;

  return (
    <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Job Portal</h2>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
        </div>

        {/* Desktop Login */}
        <NavLink
          to="/login"
          className="hidden md:block bg-[#309689] px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Login
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col p-4 gap-3">
            
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>

            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>

            <NavLink to="/jobs" className={linkClass} onClick={() => setIsOpen(false)}>
              Jobs
            </NavLink>

            <NavLink
              to="/login"
              className="bg-[#309689] px-4 py-2 rounded-lg text-center hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;